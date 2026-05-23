// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Agent Workload - SurfaceGate Desk
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, ListFilter, Search, Settings, TriangleAlert } from "lucide-react";


export type AgentWorkloadSurfacegateDeskActionId = "notifications-1" | "create-ticket-2" | "filter-3" | "sort-4" | "more-vert-5" | "more-vert-6" | "ticket-operations-1" | "queue-management-2" | "agent-workload-3" | "insights-4" | "settings-5" | "support-6" | "inc-4092-7" | "inc-4088-8";

export interface AgentWorkloadSurfacegateDeskProps {
  actions?: Partial<Record<AgentWorkloadSurfacegateDeskActionId, () => void>>;
}

export function AgentWorkloadSurfacegateDesk({ actions }: AgentWorkloadSurfacegateDeskProps) {
  return (
    <>
      {/* SideNavBar (Web Only) */}
      <nav className="hidden md:flex flex-col h-screen w-64 border-r border-outline-variant bg-surface sticky top-0 py-margin z-50">
      <div className="px-md mb-lg">
      <h1 className="text-headline-md font-headline-md font-bold text-primary flex items-center gap-sm">
      <Circle className="fill text-primary" aria-hidden={true} focusable="false" />
                      SurfaceGate
                  </h1>
      <p className="text-label-md font-label-md text-on-surface-variant mt-xs px-lg">Desk</p>
      </div>
      <ul className="flex flex-col gap-xs px-sm flex-1">
      <li>
      <a className="flex items-center gap-md px-md py-sm rounded text-on-surface-variant hover:bg-surface-container-low transition-colors text-label-md font-label-md" href="#" data-action-id="ticket-operations-1" onClick={actions?.["ticket-operations-1"]}>
      <Circle aria-hidden={true} focusable="false" />
                          Ticket Operations
                      </a>
      </li>
      <li>
      <a className="flex items-center gap-md px-md py-sm rounded text-on-surface-variant hover:bg-surface-container-low transition-colors text-label-md font-label-md" href="#" data-action-id="queue-management-2" onClick={actions?.["queue-management-2"]}>
      <Circle aria-hidden={true} focusable="false" />
                          Queue Management
                      </a>
      </li>
      <li>
      <a className="flex items-center gap-md px-md py-sm rounded text-primary font-bold border-r-4 border-primary bg-surface-container-low text-label-md font-label-md opacity-80 duration-150" href="#" data-action-id="agent-workload-3" onClick={actions?.["agent-workload-3"]}>
      <Circle aria-hidden={true} focusable="false" />
                          Agent Workload
                      </a>
      </li>
      <li>
      <a className="flex items-center gap-md px-md py-sm rounded text-on-surface-variant hover:bg-surface-container-low transition-colors text-label-md font-label-md" href="#" data-action-id="insights-4" onClick={actions?.["insights-4"]}>
      <Circle aria-hidden={true} focusable="false" />
                          Insights
                      </a>
      </li>
      </ul>
      <div className="mt-auto px-sm pt-md border-t border-outline-variant">
      <ul className="flex flex-col gap-xs">
      <li>
      <a className="flex items-center gap-md px-md py-sm rounded text-on-surface-variant hover:bg-surface-container-low transition-colors text-label-md font-label-md" href="#" data-action-id="settings-5" onClick={actions?.["settings-5"]}>
      <Settings aria-hidden={true} focusable="false" />
                              Settings
                          </a>
      </li>
      <li>
      <a className="flex items-center gap-md px-md py-sm rounded text-on-surface-variant hover:bg-surface-container-low transition-colors text-label-md font-label-md" href="#" data-action-id="support-6" onClick={actions?.["support-6"]}>
      <Circle aria-hidden={true} focusable="false" />
                              Support
                          </a>
      </li>
      </ul>
      </div>
      </nav>
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
      {/* TopNavBar */}
      <header className="flex justify-between items-center w-full px-lg py-sm sticky top-0 z-40 bg-surface-container-lowest border-b border-outline-variant">
      <div className="flex items-center gap-md">
      <span className="md:hidden text-headline-md font-headline-md font-bold text-primary">SurfaceGate Desk</span>
      </div>
      <div className="flex-1 max-w-md mx-lg hidden md:block">
      <div className="relative">
      <Search className="absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant" aria-hidden={true} focusable="false" />
      <input className="w-full pl-[36px] pr-sm py-xs border border-outline-variant rounded bg-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none text-body-sm font-body-sm" placeholder="Search agents or tickets..." type="text" />
      </div>
      </div>
      <div className="flex items-center gap-md">
      <button className="material-symbols-outlined text-on-surface-variant hover:bg-surface-container-high rounded p-xs scale-95 duration-100" type="button" data-action-id="notifications-1" onClick={actions?.["notifications-1"]}>notifications</button>
      <button className="bg-primary text-on-primary px-md py-sm rounded text-label-md font-label-md hover:bg-primary-container transition-colors" type="button" data-action-id="create-ticket-2" onClick={actions?.["create-ticket-2"]}>Create Ticket</button>
      <div className="w-8 h-8 rounded-full bg-surface-variant border border-outline-variant overflow-hidden">
      {/* Avatar placeholder */}
      </div>
      </div>
      </header>
      {/* Page Content */}
      <main className="flex-1 p-lg flex flex-col lg:flex-row gap-lg overflow-hidden">
      {/* Agent List Section */}
      <section className="flex-1 flex flex-col min-w-0 bg-surface-container-lowest border border-outline-variant rounded">
      <div className="p-md border-b border-outline-variant flex justify-between items-center bg-surface-container-low">
      <h2 className="text-headline-md font-headline-md text-on-surface">Agent Workload</h2>
      <div className="flex gap-sm">
      <button className="flex items-center gap-xs px-sm py-xs border border-outline-variant rounded text-label-md font-label-md text-on-surface-variant hover:bg-surface-container-high transition-colors" type="button" data-action-id="filter-3" onClick={actions?.["filter-3"]}>
      <ListFilter  style={{fontSize: "16px"}} aria-hidden={true} focusable="false" />
                                  Filter
                              </button>
      <button className="flex items-center gap-xs px-sm py-xs border border-outline-variant rounded text-label-md font-label-md text-on-surface-variant hover:bg-surface-container-high transition-colors" type="button" data-action-id="sort-4" onClick={actions?.["sort-4"]}>
      <Circle  style={{fontSize: "16px"}} aria-hidden={true} focusable="false" />
                                  Sort
                              </button>
      </div>
      </div>
      <div className="overflow-y-auto flex-1 p-sm">
      {/* Agent Card 1 */}
      <div className="border border-outline-variant rounded p-md mb-sm bg-surface-container-lowest hover:bg-surface transition-colors group relative">
      <div className="flex justify-between items-start mb-md">
      <div className="flex items-center gap-md">
      <div className="relative">
      <div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center text-label-md font-bold">AS</div>
      <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-surface-container-lowest"></div>
      </div>
      <div>
      <h3 className="text-body-lg font-body-lg font-medium text-on-surface">Alex Santos</h3>
      <p className="text-label-sm font-label-sm text-on-surface-variant">L2 Support Engineer</p>
      </div>
      </div>
      <div className="flex items-center gap-sm">
      <span className="bg-error-container text-on-error-container px-xs py-base rounded text-label-sm font-label-sm flex items-center gap-xs">
      <TriangleAlert  style={{fontSize: "14px"}} aria-hidden={true} focusable="false" /> 2 Overdue
                                      </span>
      <button className="material-symbols-outlined text-on-surface-variant hover:text-on-surface opacity-0 group-hover:opacity-100 transition-opacity" type="button" data-action-id="more-vert-5" onClick={actions?.["more-vert-5"]}>more_vert</button>
      </div>
      </div>
      <div className="grid grid-cols-3 gap-md mb-sm">
      <div>
      <p className="text-label-sm font-label-sm text-on-surface-variant mb-xs">Open Tickets</p>
      <p className="text-body-lg font-body-lg">12</p>
      </div>
      <div className="col-span-2">
      <div className="flex justify-between text-label-sm font-label-sm text-on-surface-variant mb-xs">
      <span>Capacity (12/15)</span>
      <span>80%</span>
      </div>
      <div className="h-2 w-full bg-surface-variant rounded overflow-hidden">
      <div className="h-full bg-primary" style={{width: "80%"}}></div>
      </div>
      </div>
      </div>
      </div>
      {/* Agent Card 2 */}
      <div className="border border-outline-variant rounded p-md mb-sm bg-surface-container-lowest hover:bg-surface transition-colors group">
      <div className="flex justify-between items-start mb-md">
      <div className="flex items-center gap-md">
      <div className="relative">
      <div className="w-10 h-10 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center text-label-md font-bold">JD</div>
      <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-yellow-500 border-2 border-surface-container-lowest"></div>
      </div>
      <div>
      <h3 className="text-body-lg font-body-lg font-medium text-on-surface">Jordan Davis</h3>
      <p className="text-label-sm font-label-sm text-on-surface-variant">Network Specialist</p>
      </div>
      </div>
      <div className="flex items-center gap-sm">
      <span className="bg-surface-variant text-on-surface-variant px-xs py-base rounded text-label-sm font-label-sm flex items-center gap-xs">
      <Circle  style={{fontSize: "14px"}} aria-hidden={true} focusable="false" /> 1 Stale
                                      </span>
      <button className="material-symbols-outlined text-on-surface-variant hover:text-on-surface opacity-0 group-hover:opacity-100 transition-opacity" type="button" data-action-id="more-vert-6" onClick={actions?.["more-vert-6"]}>more_vert</button>
      </div>
      </div>
      <div className="grid grid-cols-3 gap-md mb-sm">
      <div>
      <p className="text-label-sm font-label-sm text-on-surface-variant mb-xs">Open Tickets</p>
      <p className="text-body-lg font-body-lg">18</p>
      </div>
      <div className="col-span-2">
      <div className="flex justify-between text-label-sm font-label-sm text-on-surface-variant mb-xs">
      <span>Capacity (18/20)</span>
      <span className="text-error">90%</span>
      </div>
      <div className="h-2 w-full bg-surface-variant rounded overflow-hidden">
      <div className="h-full bg-error" style={{width: "90%"}}></div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* Activity Feed Sidebar */}
      <aside className="w-full lg:w-96 flex flex-col bg-surface-container-lowest border border-outline-variant rounded">
      <div className="p-md border-b border-outline-variant bg-surface-container-low">
      <h2 className="text-headline-md font-headline-md text-on-surface">Assignment Activity</h2>
      </div>
      <div className="flex-1 overflow-y-auto p-md space-y-md">
      {/* Activity Item */}
      <div className="flex gap-sm">
      <div className="mt-xs">
      <Circle  style={{fontSize: "18px"}} className="text-primary" aria-hidden={true} focusable="false" />
      </div>
      <div>
      <p className="text-body-sm font-body-sm text-on-surface">Ticket <a className="text-primary hover:underline font-medium" href="#" data-action-id="inc-4092-7" onClick={actions?.["inc-4092-7"]}>#INC-4092</a> reassigned from Alex S. to Jordan D.</p>
      <p className="text-label-sm font-label-sm text-on-surface-variant mt-base">10 mins ago • System Auto-balance</p>
      </div>
      </div>
      {/* Activity Item */}
      <div className="flex gap-sm">
      <div className="mt-xs">
      <TriangleAlert  style={{fontSize: "18px"}} className="text-error" aria-hidden={true} focusable="false" />
      </div>
      <div>
      <p className="text-body-sm font-body-sm text-on-surface">Ticket <a className="text-primary hover:underline font-medium" href="#" data-action-id="inc-4088-8" onClick={actions?.["inc-4088-8"]}>#INC-4088</a> escalated to L3.</p>
      <p className="text-label-sm font-label-sm text-on-surface-variant mt-base">45 mins ago • Manual Action</p>
      </div>
      </div>
      </div>
      </aside>
      </main>
      </div>
    </>
  );
}
