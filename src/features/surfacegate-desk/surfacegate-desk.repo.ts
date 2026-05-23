import { surfacegateDeskFixture } from '../../__fixtures__/surfacegate-desk.fixture';
import type {
  SurfacegateDeskPersistedState,
  SurfacegateDeskStorageResult,
} from './surfacegate-desk.store';

const STORAGE_KEY = 'surfacegate-desk:v1';

function getStorage(): Storage | undefined {
  if (typeof window === 'undefined') {
    return undefined;
  }

  return window.localStorage;
}

export function loadSurfacegateDeskState(): SurfacegateDeskStorageResult {
  const storage = getStorage();

  if (!storage) {
    return {
      persisted: surfacegateDeskFixture.preferences,
      storageStatus: 'unavailable',
      lastError: null,
    };
  }

  const raw = storage.getItem(STORAGE_KEY);
  if (!raw) {
    return {
      persisted: surfacegateDeskFixture.preferences,
      storageStatus: 'ready',
      lastError: null,
    };
  }

  try {
    const persisted = JSON.parse(raw) as Partial<SurfacegateDeskPersistedState>;

    return {
      persisted: {
        activeRoute: persisted.activeRoute ?? surfacegateDeskFixture.preferences.activeRoute,
        activePanel: persisted.activePanel ?? surfacegateDeskFixture.preferences.activePanel,
        selectedRecordId:
          persisted.selectedRecordId ?? surfacegateDeskFixture.preferences.selectedRecordId,
      },
      storageStatus: 'ready',
      lastError: null,
    };
  } catch {
    storage.removeItem(STORAGE_KEY);

    return {
      persisted: surfacegateDeskFixture.preferences,
      storageStatus: 'corrupted',
      lastError: 'Saved SurfaceGate Desk state was reset because it could not be read.',
    };
  }
}

export function saveSurfacegateDeskState(
  persisted: SurfacegateDeskPersistedState,
): Pick<SurfacegateDeskStorageResult, 'storageStatus' | 'lastError'> {
  const storage = getStorage();

  if (!storage) {
    return {
      storageStatus: 'unavailable',
      lastError: null,
    };
  }

  try {
    storage.setItem(STORAGE_KEY, JSON.stringify(persisted));

    return {
      storageStatus: 'saved',
      lastError: null,
    };
  } catch {
    return {
      storageStatus: 'error',
      lastError: 'SurfaceGate Desk preferences could not be saved locally.',
    };
  }
}
