import type { ComponentProps } from 'react';
import {
  AgentWorkloadSurfacegateDesk,
  EmptyAndErrorRecoverySurfacegateDesk,
  InsightsSurfacegateDesk,
  QueueAndStatusManagementSurfacegateDesk,
  SettingsAndPreferencesSurfacegateDesk,
  TicketEditorSurfacegateDesk,
  TicketOperationsSurfacegateDesk,
} from './screens';
import { useSurfacegateDeskStore } from './features/surfacegate-desk/surfacegate-desk.store';

type TicketOperationsActions = NonNullable<
  ComponentProps<typeof TicketOperationsSurfacegateDesk>['actions']
>;
type QueueActions = NonNullable<
  ComponentProps<typeof QueueAndStatusManagementSurfacegateDesk>['actions']
>;
type AgentActions = NonNullable<ComponentProps<typeof AgentWorkloadSurfacegateDesk>['actions']>;
type InsightsActions = NonNullable<ComponentProps<typeof InsightsSurfacegateDesk>['actions']>;
type SettingsActions = NonNullable<
  ComponentProps<typeof SettingsAndPreferencesSurfacegateDesk>['actions']
>;
type EditorActions = NonNullable<ComponentProps<typeof TicketEditorSurfacegateDesk>['actions']>;
type RecoveryActions = NonNullable<
  ComponentProps<typeof EmptyAndErrorRecoverySurfacegateDesk>['actions']
>;

export default function App() {
  const surfacegate = useSurfacegateDeskStore();
  const { snapshot } = surfacegate;
  const selectedLabel =
    snapshot.selectedRecord && 'title' in snapshot.selectedRecord
      ? `${snapshot.selectedRecord.id}: ${snapshot.selectedRecord.title}`
      : snapshot.selectedRecord
        ? `${snapshot.selectedRecord.id}: ${snapshot.selectedRecord.name}`
        : 'None selected';
  const statusMessage =
    snapshot.lastError ??
    (snapshot.storageStatus === 'saved'
      ? 'SurfaceGate Desk changes saved locally.'
      : 'SurfaceGate Desk local state ready.');

  const navigationActions = {
    'ticket-operations-1': () => surfacegate.navigate('ticket-operations'),
    'queue-management-2': () => surfacegate.navigate('queue-management'),
    'agent-workload-3': () => surfacegate.navigate('agent-workload'),
    'insights-4': () => surfacegate.navigate('insights'),
    'settings-5': () => surfacegate.navigate('settings'),
    'support-6': () => surfacegate.setPanel('support'),
  };

  const ticketActions: TicketOperationsActions = {
    ...navigationActions,
    'create-ticket-3': () => surfacegate.navigate('editor'),
    'filter-4': () => surfacegate.setPanel('filters'),
    'sort-5': () => surfacegate.setPanel('sort'),
    'assign-to-me-10': () => surfacegate.selectRecord('TKT-8921'),
    'change-status-11': () => surfacegate.setPanel('status'),
  };

  const queueActions: QueueActions = {
    ...navigationActions,
    'create-ticket-3': () => surfacegate.navigate('editor'),
    'filter-4': () => surfacegate.setPanel('filters'),
    'sort-5': () => surfacegate.setPanel('sort'),
    'add-lane-9': () => surfacegate.setPanel('lane-editor'),
  };

  const agentActions: AgentActions = {
    ...navigationActions,
    'create-ticket-2': () => surfacegate.navigate('editor'),
    'filter-3': () => surfacegate.setPanel('filters'),
    'sort-4': () => surfacegate.setPanel('sort'),
    'inc-4092-7': () => surfacegate.selectRecord('INC-4092'),
    'inc-4088-8': () => surfacegate.selectRecord('INC-4088'),
  };

  const insightsActions: InsightsActions = {
    ...navigationActions,
    'create-ticket-2': () => surfacegate.navigate('editor'),
    'last-24-hours-3': () => surfacegate.setPanel('last-24-hours'),
    'export-summary-4': () => surfacegate.setPanel('export'),
    'view-all-7': () => surfacegate.setPanel('insight-list'),
    'tkt-8921-8': () => surfacegate.selectRecord('TKT-8921'),
    'tkt-8900-9': () => surfacegate.selectRecord('TKT-8900'),
    'tkt-8854-10': () => surfacegate.selectRecord('TKT-8854'),
  };

  const settingsActions: SettingsActions = {
    ...navigationActions,
    'create-ticket-4': () => surfacegate.navigate('editor'),
    'reset-settings-6': surfacegate.recoverStorage,
    'discard-7': () => surfacegate.navigate('ticket-operations'),
    'save-changes-8': () => surfacegate.setPanel('preferences-saved'),
  };

  const editorActions: EditorActions = {
    ...navigationActions,
    'discard-3': () => surfacegate.navigate('ticket-operations'),
    'save-ticket-4': () => surfacegate.navigate('ticket-operations'),
    'browse-files-5': () => surfacegate.setPanel('attachments'),
    'cancel-6': () => surfacegate.navigate('ticket-operations'),
    'save-ticket-7': () => surfacegate.navigate('ticket-operations'),
  };

  const recoveryActions: RecoveryActions = {
    ...navigationActions,
    'create-ticket-1': () => surfacegate.navigate('editor'),
    'clear-all-filters-5': () => surfacegate.setPanel('filters-cleared'),
    'retry-load-6': surfacegate.recoverStorage,
    'create-new-ticket-7': () => surfacegate.navigate('editor'),
  };

  return (
    <div data-setfarm-root="surfacegate-desk" className="min-h-screen bg-slate-50 text-slate-950">
      <section
        aria-label="SurfaceGate Desk app state"
        className="border-b border-slate-200 bg-white px-gutter py-3 text-sm text-slate-700"
      >
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-6 gap-y-2">
          <span data-testid="active-screen">Screen: {snapshot.activeScreen}</span>
          <span data-testid="selected-record">Selected: {selectedLabel}</span>
          <span data-testid="item-count">
            Items: {snapshot.counts.tickets} tickets, {snapshot.counts.queues} queues,{' '}
            {snapshot.counts.agents} agents
          </span>
          <span data-testid="active-panel">Panel: {snapshot.activePanel}</span>
          <span data-testid="storage-status">Storage: {snapshot.storageStatus}</span>
          <span role="status" aria-live="polite" data-testid="storage-feedback">
            {statusMessage}
          </span>
          <button
            type="button"
            className="rounded border border-slate-300 px-3 py-1 font-medium text-slate-800 hover:bg-slate-100"
            onClick={surfacegate.dismissPanel}
          >
            Close panel
          </button>
          <button
            type="button"
            className="rounded border border-slate-300 px-3 py-1 font-medium text-slate-800 hover:bg-slate-100"
            onClick={surfacegate.clearLocalData}
          >
            Clear local data
          </button>
        </div>
      </section>
      {snapshot.storageStatus === 'corrupted' ? (
        <EmptyAndErrorRecoverySurfacegateDesk actions={recoveryActions} />
      ) : null}
      {snapshot.storageStatus !== 'corrupted' && snapshot.activeScreen === 'queue-management' ? (
        <QueueAndStatusManagementSurfacegateDesk actions={queueActions} />
      ) : null}
      {snapshot.storageStatus !== 'corrupted' && snapshot.activeScreen === 'agent-workload' ? (
        <AgentWorkloadSurfacegateDesk actions={agentActions} />
      ) : null}
      {snapshot.storageStatus !== 'corrupted' && snapshot.activeScreen === 'insights' ? (
        <InsightsSurfacegateDesk actions={insightsActions} />
      ) : null}
      {snapshot.storageStatus !== 'corrupted' && snapshot.activeScreen === 'settings' ? (
        <SettingsAndPreferencesSurfacegateDesk actions={settingsActions} />
      ) : null}
      {snapshot.storageStatus !== 'corrupted' && snapshot.activeScreen === 'editor' ? (
        <TicketEditorSurfacegateDesk actions={editorActions} />
      ) : null}
      {snapshot.storageStatus !== 'corrupted' && snapshot.activeScreen === 'ticket-operations' ? (
        <TicketOperationsSurfacegateDesk actions={ticketActions} />
      ) : null}
    </div>
  );
}
