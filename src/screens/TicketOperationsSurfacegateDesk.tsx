// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Ticket Operations - SurfaceGate Desk
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowDown, ArrowUp, ChevronLeft, ChevronRight, Circle, ListFilter, Menu, Search, Settings, TriangleAlert, User } from "lucide-react";


export type TicketOperationsSurfacegateDeskActionId = "button-1-1" | "button-2-2" | "create-ticket-3" | "filter-4" | "sort-5" | "button-6-6" | "button-7-7" | "button-8-8" | "button-9-9" | "assign-to-me-10" | "change-status-11" | "button-12-12" | "button-13-13" | "ticket-operations-1" | "queue-management-2" | "agent-workload-3" | "insights-4" | "settings-5" | "support-6";

export interface TicketOperationsSurfacegateDeskProps {
  actions?: Partial<Record<TicketOperationsSurfacegateDeskActionId, () => void>>;
}

export function TicketOperationsSurfacegateDesk({ actions }: TicketOperationsSurfacegateDeskProps) {
  return (
    <>
      {/* SideNav (Shared Component) */}
      <nav className="h-screen w-64 border-r border-outline-variant bg-surface hidden md:flex flex-col h-full sticky top-0 py-margin flex-shrink-0 z-50">
      {/* Brand/Logo */}
      <div className="px-gutter mb-lg flex items-center gap-sm">
      <div className="w-8 h-8 rounded-DEFAULT bg-primary flex items-center justify-center">
      <Circle className="text-on-primary filled" aria-hidden={true} focusable="false" />
      </div>
      <div>
      <h1 className="text-headline-md font-headline-md font-bold text-primary">SurfaceGate</h1>
      <span className="text-label-sm font-label-sm text-on-surface-variant block uppercase tracking-wider">Desk</span>
      </div>
      </div>
      {/* Main Navigation */}
      <div className="flex-1 overflow-y-auto custom-scrollbar px-sm space-y-xs">
      <a className="flex items-center gap-sm px-sm py-sm rounded-DEFAULT text-primary font-bold border-r-4 border-primary bg-surface-container-low transition-colors opacity-80 duration-150" href="#" data-action-id="ticket-operations-1" onClick={actions?.["ticket-operations-1"]}>
      <Circle className="text-[20px]" aria-hidden={true} focusable="false" />
      <span className="text-label-md font-label-md">Ticket Operations</span>
      </a>
      <a className="flex items-center gap-sm px-sm py-sm rounded-DEFAULT text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" href="#" data-action-id="queue-management-2" onClick={actions?.["queue-management-2"]}>
      <Circle className="text-[20px]" aria-hidden={true} focusable="false" />
      <span className="text-label-md font-label-md">Queue Management</span>
      </a>
      <a className="flex items-center gap-sm px-sm py-sm rounded-DEFAULT text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" href="#" data-action-id="agent-workload-3" onClick={actions?.["agent-workload-3"]}>
      <Circle className="text-[20px]" aria-hidden={true} focusable="false" />
      <span className="text-label-md font-label-md">Agent Workload</span>
      </a>
      <a className="flex items-center gap-sm px-sm py-sm rounded-DEFAULT text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" href="#" data-action-id="insights-4" onClick={actions?.["insights-4"]}>
      <Circle className="text-[20px]" aria-hidden={true} focusable="false" />
      <span className="text-label-md font-label-md">Insights</span>
      </a>
      </div>
      {/* Footer Navigation */}
      <div className="mt-auto px-sm pt-sm border-t border-outline-variant space-y-xs">
      <a className="flex items-center gap-sm px-sm py-sm rounded-DEFAULT text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" href="#" data-action-id="settings-5" onClick={actions?.["settings-5"]}>
      <Settings className="text-[20px]" aria-hidden={true} focusable="false" />
      <span className="text-label-md font-label-md">Settings</span>
      </a>
      <a className="flex items-center gap-sm px-sm py-sm rounded-DEFAULT text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" href="#" data-action-id="support-6" onClick={actions?.["support-6"]}>
      <Circle className="text-[20px]" aria-hidden={true} focusable="false" />
      <span className="text-label-md font-label-md">Support</span>
      </a>
      </div>
      </nav>
      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden min-w-0">
      {/* TopNavBar (Shared Component) */}
      <header className="flex justify-between items-center w-full px-lg py-sm sticky top-0 z-40 bg-surface-container-lowest border-b border-outline-variant flex-shrink-0">
      {/* Mobile Menu Trigger */}
      <button className="md:hidden p-xs text-on-surface-variant hover:bg-surface-container-high rounded-DEFAULT mr-sm" type="button" data-action-id="button-1-1" onClick={actions?.["button-1-1"]}>
      <Menu aria-hidden={true} focusable="false" />
      </button>
      <div className="font-headline-md text-headline-md text-primary font-bold md:hidden">SurfaceGate Desk</div>
      {/* Search (Left Aligned per JSON) */}
      <div className="hidden md:flex flex-1 max-w-md relative">
      <Search className="absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]" aria-hidden={true} focusable="false" />
      <input className="w-full h-8 pl-8 pr-sm py-xs text-body-sm font-body-sm bg-surface rounded-DEFAULT border border-outline-variant focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-fixed-dim transition-shadow placeholder-on-surface-variant text-on-surface" placeholder="Search tickets, agents, or knowledge base..." type="text" />
      </div>
      {/* Trailing Actions */}
      <div className="flex items-center gap-md ml-auto">
      <button className="w-8 h-8 flex items-center justify-center rounded-DEFAULT text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-colors" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Circle className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      <button className="bg-primary text-on-primary h-8 px-md rounded-DEFAULT text-label-md font-label-md hover:bg-primary-container transition-colors shadow-sm whitespace-nowrap" type="button" data-action-id="create-ticket-3" onClick={actions?.["create-ticket-3"]}>
                          Create Ticket
                      </button>
      <div className="w-8 h-8 rounded-DEFAULT bg-secondary-container flex items-center justify-center text-on-secondary-container font-label-md text-label-md cursor-pointer border border-outline-variant ml-xs">
                          JD
                      </div>
      </div>
      </header>
      {/* Operations Canvas */}
      <div className="flex-1 overflow-hidden flex flex-col p-gutter gap-md min-h-0 bg-background">
      {/* Summary Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-sm flex-shrink-0">
      <div className="bg-surface-container-lowest border border-outline-variant rounded-DEFAULT p-sm flex items-center gap-sm">
      <div className="w-8 h-8 rounded-DEFAULT bg-primary-fixed flex items-center justify-center text-primary">
      <Circle className="text-[18px] filled" aria-hidden={true} focusable="false" />
      </div>
      <div>
      <div className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider">Open Tickets</div>
      <div className="text-headline-md font-headline-md text-on-surface">1,248</div>
      </div>
      </div>
      <div className="bg-surface-container-lowest border border-outline-variant rounded-DEFAULT p-sm flex items-center gap-sm">
      <div className="w-8 h-8 rounded-DEFAULT bg-error-container flex items-center justify-center text-error">
      <TriangleAlert className="text-[18px] filled" aria-hidden={true} focusable="false" />
      </div>
      <div>
      <div className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider">Overdue</div>
      <div className="text-headline-md font-headline-md text-error">42</div>
      </div>
      </div>
      <div className="bg-surface-container-lowest border border-outline-variant rounded-DEFAULT p-sm flex items-center gap-sm">
      <div className="w-8 h-8 rounded-DEFAULT bg-secondary-container flex items-center justify-center text-secondary">
      <Circle className="text-[18px] filled" aria-hidden={true} focusable="false" />
      </div>
      <div>
      <div className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider">Unassigned</div>
      <div className="text-headline-md font-headline-md text-on-surface">156</div>
      </div>
      </div>
      <div className="bg-surface-container-lowest border border-outline-variant rounded-DEFAULT p-sm flex items-center gap-sm">
      <div className="w-8 h-8 rounded-DEFAULT bg-tertiary-fixed flex items-center justify-center text-tertiary">
      <Circle className="text-[18px] filled" aria-hidden={true} focusable="false" />
      </div>
      <div>
      <div className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider">Avg Response</div>
      <div className="text-headline-md font-headline-md text-on-surface">1.4h</div>
      </div>
      </div>
      </div>
      {/* Master-Detail Split Pane */}
      <div className="flex-1 flex gap-md min-h-0 overflow-hidden">
      {/* Ticket List (Master) */}
      <div className="flex-1 bg-surface-container-lowest border border-outline-variant rounded-DEFAULT flex flex-col min-w-0 shadow-sm">
      {/* Table Toolbar */}
      <div className="flex items-center justify-between p-sm border-b border-outline-variant bg-surface-container-low">
      <div className="flex items-center gap-sm">
      <h2 className="text-label-md font-label-md text-on-surface font-semibold pl-xs">All Open Tickets</h2>
      <span className="px-xs py-[2px] rounded-DEFAULT bg-surface-variant text-label-sm font-label-sm text-on-surface-variant">1,248</span>
      </div>
      <div className="flex gap-xs">
      <button className="h-7 px-sm text-label-sm font-label-sm border border-outline-variant rounded-DEFAULT text-on-surface hover:bg-surface-container-high transition-colors flex items-center gap-xs" type="button" data-action-id="filter-4" onClick={actions?.["filter-4"]}>
      <ListFilter className="text-[14px]" aria-hidden={true} focusable="false" /> Filter
                                  </button>
      <button className="h-7 px-sm text-label-sm font-label-sm border border-outline-variant rounded-DEFAULT text-on-surface hover:bg-surface-container-high transition-colors flex items-center gap-xs" type="button" data-action-id="sort-5" onClick={actions?.["sort-5"]}>
      <Circle className="text-[14px]" aria-hidden={true} focusable="false" /> Sort
                                  </button>
      </div>
      </div>
      {/* Table Header */}
      <div className="grid grid-cols-[80px_1fr_100px_100px_120px] gap-sm px-sm py-xs bg-surface-container-lowest border-b border-outline-variant text-label-sm font-label-sm text-on-surface-variant sticky top-0 uppercase tracking-wider">
      <div className="pl-xs">ID</div>
      <div>Subject</div>
      <div>Priority</div>
      <div>Status</div>
      <div>Updated</div>
      </div>
      {/* Table Body */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
      {/* Active Row */}
      <div className="grid grid-cols-[80px_1fr_100px_100px_120px] gap-sm px-sm py-[6px] border-b border-outline-variant items-center text-body-sm font-body-sm hover:bg-surface cursor-pointer bg-primary-fixed-dim/20 transition-colors">
      <div className="text-primary font-medium pl-xs">#T-8942</div>
      <div className="truncate text-on-surface font-medium pr-sm">Critical API latency in US-East region causing timeouts</div>
      <div>
      <span className="px-xs py-[2px] rounded-DEFAULT bg-error-container text-error text-label-sm font-label-sm uppercase tracking-wider border border-error/20 inline-flex items-center gap-[2px]">
      <ArrowUp className="text-[12px] filled" aria-hidden={true} focusable="false" /> Crit
                                      </span>
      </div>
      <div>
      <span className="text-on-surface-variant flex items-center gap-xs">
      <span className="w-2 h-2 rounded-full bg-primary inline-block"></span> Open
                                      </span>
      </div>
      <div className="text-on-surface-variant truncate">2m ago</div>
      </div>
      {/* Rows */}
      <div className="grid grid-cols-[80px_1fr_100px_100px_120px] gap-sm px-sm py-[6px] border-b border-outline-variant items-center text-body-sm font-body-sm hover:bg-surface cursor-pointer transition-colors">
      <div className="text-primary font-medium pl-xs">#T-8941</div>
      <div className="truncate text-on-surface pr-sm">Unable to access dashboard after recent password reset</div>
      <div>
      <span className="px-xs py-[2px] rounded-DEFAULT bg-surface-variant text-on-surface-variant text-label-sm font-label-sm uppercase tracking-wider border border-outline-variant inline-flex items-center gap-[2px]">
      <Circle className="text-[12px]" aria-hidden={true} focusable="false" /> Med
                                      </span>
      </div>
      <div>
      <span className="text-on-surface-variant flex items-center gap-xs">
      <span className="w-2 h-2 rounded-full bg-tertiary inline-block"></span> Pending
                                      </span>
      </div>
      <div className="text-on-surface-variant truncate">15m ago</div>
      </div>
      <div className="grid grid-cols-[80px_1fr_100px_100px_120px] gap-sm px-sm py-[6px] border-b border-outline-variant items-center text-body-sm font-body-sm hover:bg-surface cursor-pointer transition-colors">
      <div className="text-primary font-medium pl-xs">#T-8940</div>
      <div className="truncate text-on-surface pr-sm">Request for increased API rate limits on production account</div>
      <div>
      <span className="px-xs py-[2px] rounded-DEFAULT bg-secondary-container text-on-secondary-container text-label-sm font-label-sm uppercase tracking-wider border border-secondary/20 inline-flex items-center gap-[2px]">
      <Circle className="text-[12px]" aria-hidden={true} focusable="false" /> High
                                      </span>
      </div>
      <div>
      <span className="text-on-surface-variant flex items-center gap-xs">
      <span className="w-[10px] h-[10px] rounded-full border-2 border-primary inline-block relative"><span className="absolute inset-[1px] bg-primary rounded-full"></span></span> In Prog
                                      </span>
      </div>
      <div className="text-on-surface-variant truncate">1h ago</div>
      </div>
      <div className="grid grid-cols-[80px_1fr_100px_100px_120px] gap-sm px-sm py-[6px] border-b border-outline-variant items-center text-body-sm font-body-sm hover:bg-surface cursor-pointer transition-colors">
      <div className="text-primary font-medium pl-xs">#T-8939</div>
      <div className="truncate text-on-surface pr-sm">Typo in billing address on latest invoice</div>
      <div>
      <span className="px-xs py-[2px] rounded-DEFAULT bg-surface-container-highest text-on-surface-variant text-label-sm font-label-sm uppercase tracking-wider border border-outline-variant inline-flex items-center gap-[2px]">
      <ArrowDown className="text-[12px]" aria-hidden={true} focusable="false" /> Low
                                      </span>
      </div>
      <div>
      <span className="text-on-surface-variant flex items-center gap-xs">
      <span className="w-2 h-2 rounded-full bg-primary inline-block"></span> Open
                                      </span>
      </div>
      <div className="text-on-surface-variant truncate">2h ago</div>
      </div>
      </div>
      {/* Pagination (Compact) */}
      <div className="p-xs border-t border-outline-variant bg-surface-container-lowest flex justify-between items-center text-label-sm font-label-sm text-on-surface-variant">
      <span className="pl-sm">Showing 1-4 of 1,248</span>
      <div className="flex gap-xs">
      <button className="w-6 h-6 flex items-center justify-center rounded-DEFAULT border border-outline-variant hover:bg-surface-container-high disabled:opacity-50" type="button" data-action-id="button-6-6" onClick={actions?.["button-6-6"]}><ChevronLeft className="text-[14px]" aria-hidden={true} focusable="false" /></button>
      <button className="w-6 h-6 flex items-center justify-center rounded-DEFAULT border border-outline-variant hover:bg-surface-container-high" type="button" data-action-id="button-7-7" onClick={actions?.["button-7-7"]}><ChevronRight className="text-[14px]" aria-hidden={true} focusable="false" /></button>
      </div>
      </div>
      </div>
      {/* Ticket Preview (Detail) */}
      <div className="w-[400px] hidden lg:flex flex-col bg-surface-container-lowest border border-outline-variant rounded-DEFAULT shadow-sm flex-shrink-0 min-w-0">
      {/* Preview Header */}
      <div className="p-sm border-b border-outline-variant bg-surface flex flex-col gap-sm">
      <div className="flex justify-between items-start">
      <div className="flex items-center gap-sm">
      <span className="text-label-md font-label-md text-primary font-bold">#T-8942</span>
      <span className="px-xs py-[2px] rounded-DEFAULT bg-error-container text-error text-label-sm font-label-sm uppercase tracking-wider border border-error/20">Critical</span>
      </div>
      <div className="flex gap-xs">
      <button className="w-7 h-7 flex items-center justify-center rounded-DEFAULT text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface border border-transparent hover:border-outline-variant transition-colors" type="button" data-action-id="button-8-8" onClick={actions?.["button-8-8"]}><Circle className="text-[16px]" aria-hidden={true} focusable="false" /></button>
      <button className="w-7 h-7 flex items-center justify-center rounded-DEFAULT text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface border border-transparent hover:border-outline-variant transition-colors" type="button" data-action-id="button-9-9" onClick={actions?.["button-9-9"]}><Circle className="text-[16px]" aria-hidden={true} focusable="false" /></button>
      </div>
      </div>
      <h3 className="text-body-lg font-body-lg text-on-surface font-semibold leading-tight">Critical API latency in US-East region causing timeouts</h3>
      <div className="flex items-center gap-md text-label-sm font-label-sm text-on-surface-variant">
      <div className="flex items-center gap-xs"><User className="text-[14px]" aria-hidden={true} focusable="false" /> System Alert</div>
      <div className="flex items-center gap-xs"><Circle className="text-[14px]" aria-hidden={true} focusable="false" /> Opened 2m ago</div>
      </div>
      </div>
      {/* Quick Actions */}
      <div className="flex gap-xs p-xs border-b border-outline-variant bg-surface-container-lowest overflow-x-auto custom-scrollbar">
      <button className="h-7 px-sm text-label-sm font-label-sm border border-outline-variant rounded-DEFAULT text-on-surface hover:bg-surface-container-high transition-colors flex items-center gap-xs whitespace-nowrap" type="button" data-action-id="assign-to-me-10" onClick={actions?.["assign-to-me-10"]}>
      <Circle className="text-[14px]" aria-hidden={true} focusable="false" /> Assign to me
                              </button>
      <button className="h-7 px-sm text-label-sm font-label-sm border border-outline-variant rounded-DEFAULT text-on-surface hover:bg-surface-container-high transition-colors flex items-center gap-xs whitespace-nowrap" type="button" data-action-id="change-status-11" onClick={actions?.["change-status-11"]}>
      <Circle className="text-[14px]" aria-hidden={true} focusable="false" /> Change Status
                              </button>
      </div>
      {/* Preview Body (Scrollable) */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-sm space-y-md">
      {/* Description */}
      <div>
      <div className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider mb-xs">Description</div>
      <div className="text-body-sm font-body-sm text-on-surface bg-surface-container-low p-sm rounded-DEFAULT border border-outline-variant font-mono text-[12px] whitespace-pre-wrap">
      [ALERT] High latency detected in API Gateway (US-East-1).
      Severity: SEV-1
      Impact: 45% of requests timing out (&gt;5000ms).
      Trigger: automated_monitoring_p99
      Time: 2023-10-27T14:32:01Z
                                  </div>
      </div>
      {/* Properties */}
      <div>
      <div className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider mb-xs">Properties</div>
      <div className="grid grid-cols-2 gap-sm">
      <div>
      <div className="text-label-sm font-label-sm text-on-surface-variant">Assignee</div>
      <div className="text-body-sm font-body-sm text-on-surface mt-[2px] flex items-center gap-xs">
      <div className="w-4 h-4 rounded-full border border-outline-variant flex items-center justify-center text-[8px] bg-surface-dim">--</div> Unassigned
                                          </div>
      </div>
      <div>
      <div className="text-label-sm font-label-sm text-on-surface-variant">Department</div>
      <div className="text-body-sm font-body-sm text-on-surface mt-[2px]">DevOps</div>
      </div>
      <div>
      <div className="text-label-sm font-label-sm text-on-surface-variant">SLA Due</div>
      <div className="text-body-sm font-body-sm text-error font-medium mt-[2px]">In 13 mins</div>
      </div>
      </div>
      </div>
      <hr className="border-outline-variant border-t" />
      {/* Recent Activity Timeline */}
      <div>
      <div className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider mb-sm">Activity</div>
      <div className="relative pl-md space-y-md border-l border-outline-variant ml-[10px]">
      <div className="relative">
      <div className="absolute -left-[27px] w-4 h-4 rounded-full bg-surface-container-lowest border-2 border-primary flex items-center justify-center mt-[2px]">
      <div className="w-[6px] h-[6px] rounded-full bg-primary"></div>
      </div>
      <div className="text-label-sm font-label-sm text-on-surface-variant mb-[2px]">2 mins ago · System</div>
      <div className="text-body-sm font-body-sm text-on-surface">Ticket created via Datadog alert webhook.</div>
      </div>
      <div className="relative">
      <div className="absolute -left-[27px] w-4 h-4 rounded-full bg-surface-container-lowest border-2 border-outline-variant flex items-center justify-center mt-[2px]">
      <Circle className="text-[10px] text-on-surface-variant" aria-hidden={true} focusable="false" />
      </div>
      <div className="text-label-sm font-label-sm text-on-surface-variant mb-[2px]">1 min ago · Auto-Routing</div>
      <div className="text-body-sm font-body-sm text-on-surface">Priority escalated to Critical based on keyword match ("latency", "timeout").</div>
      </div>
      </div>
      </div>
      </div>
      {/* Reply Input */}
      <div className="p-sm border-t border-outline-variant bg-surface-container-lowest mt-auto">
      <div className="relative">
      <textarea className="w-full text-body-sm font-body-sm bg-surface rounded-DEFAULT border border-outline-variant p-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-fixed-dim resize-none custom-scrollbar pb-lg" placeholder="Add an internal note or reply..." rows={2}></textarea>
      <div className="absolute bottom-sm right-sm flex gap-xs">
      <button className="w-6 h-6 flex items-center justify-center rounded-DEFAULT text-on-surface-variant hover:bg-surface-container-high" type="button" data-action-id="button-12-12" onClick={actions?.["button-12-12"]}><Circle className="text-[14px]" aria-hidden={true} focusable="false" /></button>
      <button className="w-6 h-6 flex items-center justify-center rounded-DEFAULT bg-primary text-on-primary hover:bg-primary-container" type="button" data-action-id="button-13-13" onClick={actions?.["button-13-13"]}><Circle className="text-[14px]" aria-hidden={true} focusable="false" /></button>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
