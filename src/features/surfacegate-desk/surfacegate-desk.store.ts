import { useEffect, useMemo, useRef, useState } from 'react';
import { surfacegateDeskFixture } from '../../__fixtures__/surfacegate-desk.fixture';
import {
  clearSurfacegateDeskState,
  loadSurfacegateDeskState,
  saveSurfacegateDeskState,
} from './surfacegate-desk.repo';

export type SurfacegateDeskRoute =
  | 'ticket-operations'
  | 'queue-management'
  | 'agent-workload'
  | 'insights'
  | 'settings'
  | 'editor'
  | 'recovery';

export type SurfacegateDeskStorageStatus =
  | 'ready'
  | 'saved'
  | 'corrupted'
  | 'unavailable'
  | 'error';

export interface SurfacegateTicket {
  id: string;
  title: string;
  status: string;
  assignee: string;
  queue: string;
  updatedAt: string;
}

export interface SurfacegateAgent {
  id: string;
  name: string;
  load: number;
  status: string;
}

export interface SurfacegateQueue {
  id: SurfacegateDeskRoute;
  label: string;
  count: number;
}

export interface SurfacegateDeskPersistedState {
  activeRoute: SurfacegateDeskRoute;
  activePanel: string;
  selectedRecordId: string | null;
}

export interface SurfacegateDeskStorageResult {
  persisted: SurfacegateDeskPersistedState;
  storageStatus: SurfacegateDeskStorageStatus;
  lastError: string | null;
}

export interface SurfacegateDeskFixture {
  tickets: SurfacegateTicket[];
  agents: SurfacegateAgent[];
  queues: SurfacegateQueue[];
  preferences: SurfacegateDeskPersistedState;
}

export interface SurfacegateDeskAppSnapshot {
  activeScreen: SurfacegateDeskRoute;
  route: SurfacegateDeskRoute;
  selectedRecord: SurfacegateTicket | SurfacegateAgent | null;
  counts: {
    tickets: number;
    queues: number;
    agents: number;
    critical: number;
  };
  storageStatus: SurfacegateDeskStorageStatus;
  lastError: string | null;
  activePanel: string;
}

interface SurfacegateDeskState extends SurfacegateDeskPersistedState {
  storageStatus: SurfacegateDeskStorageStatus;
  lastError: string | null;
}

const routePanels: Record<SurfacegateDeskRoute, string> = {
  'ticket-operations': 'operations',
  'queue-management': 'queues',
  'agent-workload': 'workload',
  insights: 'insights',
  settings: 'settings',
  editor: 'editor',
  recovery: 'recovery',
};

function findRecord(recordId: string | null) {
  if (!recordId) {
    return null;
  }

  return (
    surfacegateDeskFixture.tickets.find((ticket) => ticket.id === recordId) ??
    surfacegateDeskFixture.agents.find((agent) => agent.id === recordId) ??
    null
  );
}

function toSnapshot(state: SurfacegateDeskState): SurfacegateDeskAppSnapshot {
  return {
    activeScreen: state.activeRoute,
    route: state.activeRoute,
    selectedRecord: findRecord(state.selectedRecordId),
    counts: {
      tickets: surfacegateDeskFixture.tickets.length,
      queues: surfacegateDeskFixture.queues.length,
      agents: surfacegateDeskFixture.agents.length,
      critical: surfacegateDeskFixture.tickets.filter((ticket) => ticket.status === 'Critical').length,
    },
    storageStatus: state.storageStatus,
    lastError: state.lastError,
    activePanel: state.activePanel,
  };
}

declare global {
  interface Window {
    app?: SurfacegateDeskAppSnapshot;
  }
}

export function useSurfacegateDeskStore() {
  const [state, setState] = useState<SurfacegateDeskState>(() => {
    const loaded = loadSurfacegateDeskState();

    return {
      ...loaded.persisted,
      storageStatus: loaded.storageStatus,
      lastError: loaded.lastError,
    };
  });
  const hasHydrated = useRef(false);
  const skipNextPersist = useRef(false);

  const snapshot = useMemo(() => toSnapshot(state), [state]);

  useEffect(() => {
    window.app = snapshot;
  }, [snapshot]);

  useEffect(() => {
    if (!hasHydrated.current) {
      hasHydrated.current = true;
      return;
    }

    if (skipNextPersist.current) {
      skipNextPersist.current = false;
      return;
    }

    const result = saveSurfacegateDeskState({
      activeRoute: state.activeRoute,
      activePanel: state.activePanel,
      selectedRecordId: state.selectedRecordId,
    });

    setState((current) => ({
      ...current,
      storageStatus: result.storageStatus,
      lastError: result.lastError,
    }));
  }, [state.activePanel, state.activeRoute, state.selectedRecordId]);

  function navigate(activeRoute: SurfacegateDeskRoute) {
    setState((current) => ({
      ...current,
      activeRoute,
      activePanel: routePanels[activeRoute],
      lastError: null,
    }));
  }

  function selectRecord(selectedRecordId: string) {
    setState((current) => ({
      ...current,
      selectedRecordId,
      activePanel: 'detail',
      lastError: null,
    }));
  }

  function setPanel(activePanel: string) {
    setState((current) => ({
      ...current,
      activePanel,
      lastError: null,
    }));
  }

  function dismissPanel() {
    setState((current) => ({
      ...current,
      activePanel: routePanels[current.activeRoute],
      lastError: null,
    }));
  }

  function recoverStorage() {
    const result = saveSurfacegateDeskState(surfacegateDeskFixture.preferences);

    setState({
      ...surfacegateDeskFixture.preferences,
      storageStatus: result.storageStatus,
      lastError: result.lastError,
    });
  }

  function clearLocalData() {
    const result = clearSurfacegateDeskState();

    skipNextPersist.current = true;
    setState({
      ...surfacegateDeskFixture.preferences,
      storageStatus: result.storageStatus,
      lastError: result.lastError,
    });
  }

  return {
    fixture: surfacegateDeskFixture,
    snapshot,
    navigate,
    selectRecord,
    setPanel,
    dismissPanel,
    recoverStorage,
    clearLocalData,
  };
}
