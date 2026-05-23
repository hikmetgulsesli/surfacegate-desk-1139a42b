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
      {surfacegate.snapshot.storageStatus === 'corrupted' ? (
        <EmptyAndErrorRecoverySurfacegateDesk actions={recoveryActions} />
      ) : null}
      {surfacegate.snapshot.storageStatus !== 'corrupted' &&
      surfacegate.snapshot.activeScreen === 'queue-management' ? (
        <QueueAndStatusManagementSurfacegateDesk actions={queueActions} />
      ) : null}
      {surfacegate.snapshot.storageStatus !== 'corrupted' &&
      surfacegate.snapshot.activeScreen === 'agent-workload' ? (
        <AgentWorkloadSurfacegateDesk actions={agentActions} />
      ) : null}
      {surfacegate.snapshot.storageStatus !== 'corrupted' &&
      surfacegate.snapshot.activeScreen === 'insights' ? (
        <InsightsSurfacegateDesk actions={insightsActions} />
      ) : null}
      {surfacegate.snapshot.storageStatus !== 'corrupted' &&
      surfacegate.snapshot.activeScreen === 'settings' ? (
        <SettingsAndPreferencesSurfacegateDesk actions={settingsActions} />
      ) : null}
      {surfacegate.snapshot.storageStatus !== 'corrupted' &&
      surfacegate.snapshot.activeScreen === 'editor' ? (
        <TicketEditorSurfacegateDesk actions={editorActions} />
      ) : null}
      {surfacegate.snapshot.storageStatus !== 'corrupted' &&
      surfacegate.snapshot.activeScreen === 'ticket-operations' ? (
        <TicketOperationsSurfacegateDesk actions={ticketActions} />
      ) : null}
    </div>
  );
}
