import type { SurfacegateDeskFixture } from '../features/surfacegate-desk/surfacegate-desk.store';

export const surfacegateDeskFixture: SurfacegateDeskFixture = {
  tickets: [
    {
      id: 'TKT-8921',
      title: 'Gate A12 boarding reader intermittently offline',
      status: 'Critical',
      assignee: 'Mira Chen',
      queue: 'Ticket Operations',
      updatedAt: '6 min ago',
    },
    {
      id: 'TKT-8900',
      title: 'North checkpoint badge sync delayed',
      status: 'Escalated',
      assignee: 'Jon Bell',
      queue: 'Queue Management',
      updatedAt: '18 min ago',
    },
    {
      id: 'TKT-8854',
      title: 'Visitor kiosk policy confirmation needed',
      status: 'Monitoring',
      assignee: 'Avery Stone',
      queue: 'Insights',
      updatedAt: '42 min ago',
    },
  ],
  agents: [
    {
      id: 'INC-4092',
      name: 'Mira Chen',
      load: 7,
      status: 'Over target',
    },
    {
      id: 'INC-4088',
      name: 'Jon Bell',
      load: 4,
      status: 'Available',
    },
  ],
  queues: [
    {
      id: 'ticket-operations',
      label: 'Ticket Operations',
      count: 24,
    },
    {
      id: 'queue-management',
      label: 'Queue Management',
      count: 12,
    },
    {
      id: 'agent-workload',
      label: 'Agent Workload',
      count: 8,
    },
    {
      id: 'insights',
      label: 'Insights',
      count: 3,
    },
  ],
  preferences: {
    activeRoute: 'ticket-operations',
    activePanel: 'operations',
    selectedRecordId: 'TKT-8921',
  },
};
