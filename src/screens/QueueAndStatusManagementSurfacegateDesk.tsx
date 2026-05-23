// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Queue and Status Management - SurfaceGate Desk
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Ellipsis, ListFilter, Menu, Plus, Search, Settings, TriangleAlert } from "lucide-react";


export type QueueAndStatusManagementSurfacegateDeskActionId = "button-1-1" | "button-2-2" | "create-ticket-3" | "filter-4" | "sort-5" | "button-6-6" | "button-7-7" | "button-8-8" | "add-lane-9" | "ticket-operations-1" | "queue-management-2" | "agent-workload-3" | "insights-4" | "settings-5" | "support-6";

export interface QueueAndStatusManagementSurfacegateDeskProps {
  actions?: Partial<Record<QueueAndStatusManagementSurfacegateDeskActionId, () => void>>;
}

export function QueueAndStatusManagementSurfacegateDesk({ actions }: QueueAndStatusManagementSurfacegateDeskProps) {
  return (
    <>
      {/* SideNavBar Component */}
      <aside className="bg-surface h-screen w-64 border-r border-outline-variant flex flex-col sticky top-0 py-margin z-50 flex-shrink-0 hidden md:flex">
      <div className="px-gutter mb-lg">
      <h1 className="text-headline-md font-headline-md font-bold text-primary flex items-center gap-sm">
      <Circle className="icon-fill text-primary" aria-hidden={true} focusable="false" />
                      SurfaceGate
                  </h1>
      <p className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider mt-xs">Desk</p>
      </div>
      <nav className="flex-1 flex flex-col gap-xs px-sm">
      <a className="flex items-center gap-sm px-sm py-sm rounded-DEFAULT text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors group" href="#" data-action-id="ticket-operations-1" onClick={actions?.["ticket-operations-1"]}>
      <Circle className="group-hover:text-primary transition-colors" aria-hidden={true} focusable="false" />
      <span className="text-label-md font-label-md">Ticket Operations</span>
      </a>
      <a className="flex items-center gap-sm px-sm py-sm rounded-DEFAULT text-primary font-bold border-r-4 border-primary bg-surface-container-low opacity-80 duration-150" href="#" data-action-id="queue-management-2" onClick={actions?.["queue-management-2"]}>
      <Circle className="icon-fill" aria-hidden={true} focusable="false" />
      <span className="text-label-md font-label-md">Queue Management</span>
      </a>
      <a className="flex items-center gap-sm px-sm py-sm rounded-DEFAULT text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors group" href="#" data-action-id="agent-workload-3" onClick={actions?.["agent-workload-3"]}>
      <Circle className="group-hover:text-primary transition-colors" aria-hidden={true} focusable="false" />
      <span className="text-label-md font-label-md">Agent Workload</span>
      </a>
      <a className="flex items-center gap-sm px-sm py-sm rounded-DEFAULT text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors group" href="#" data-action-id="insights-4" onClick={actions?.["insights-4"]}>
      <Circle className="group-hover:text-primary transition-colors" aria-hidden={true} focusable="false" />
      <span className="text-label-md font-label-md">Insights</span>
      </a>
      </nav>
      <div className="mt-auto px-sm flex flex-col gap-xs">
      <a className="flex items-center gap-sm px-sm py-sm rounded-DEFAULT text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors group" href="#" data-action-id="settings-5" onClick={actions?.["settings-5"]}>
      <Settings className="group-hover:text-primary transition-colors" aria-hidden={true} focusable="false" />
      <span className="text-label-md font-label-md">Settings</span>
      </a>
      <a className="flex items-center gap-sm px-sm py-sm rounded-DEFAULT text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors group" href="#" data-action-id="support-6" onClick={actions?.["support-6"]}>
      <Circle className="group-hover:text-primary transition-colors" aria-hidden={true} focusable="false" />
      <span className="text-label-md font-label-md">Support</span>
      </a>
      </div>
      </aside>
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden relative">
      {/* TopNavBar Component */}
      <header className="flex justify-between items-center w-full px-lg py-sm sticky top-0 z-40 bg-surface-container-lowest border-b border-outline-variant flex-shrink-0 h-[60px]">
      <div className="flex items-center gap-md flex-1">
      {/* Mobile Menu Button (Hidden on Desktop) */}
      <button className="md:hidden text-on-surface-variant hover:text-on-surface" type="button" data-action-id="button-1-1" onClick={actions?.["button-1-1"]}>
      <Menu aria-hidden={true} focusable="false" />
      </button>
      {/* Persistent Search */}
      <div className="relative w-full max-w-md hidden sm:block">
      <Search className="absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]" aria-hidden={true} focusable="false" />
      <input className="w-full bg-surface pl-[36px] pr-sm py-[6px] text-body-md font-body-md border border-outline-variant rounded-DEFAULT focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-on-surface-variant transition-shadow" placeholder="Search tickets, IDs, or assignees..." type="text" />
      </div>
      </div>
      <div className="flex items-center gap-md">
      <button className="text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high rounded-full p-xs transition-colors relative" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Circle aria-hidden={true} focusable="false" />
      <span className="absolute top-[4px] right-[4px] w-[8px] h-[8px] bg-error rounded-full border-2 border-surface-container-lowest"></span>
      </button>
      <button className="bg-primary text-on-primary text-label-md font-label-md px-md py-[8px] rounded-DEFAULT hover:bg-primary-container hover:text-on-primary-container transition-colors shadow-sm active:scale-95 duration-100 flex items-center gap-xs" type="button" data-action-id="create-ticket-3" onClick={actions?.["create-ticket-3"]}>
      <Plus className="text-[18px]" aria-hidden={true} focusable="false" />
                          Create Ticket
                      </button>
      <div className="w-[32px] h-[32px] rounded-full bg-surface-variant border border-outline-variant overflow-hidden cursor-pointer flex-shrink-0 ml-sm">
      <img alt="User Avatar" className="w-full h-full object-cover" data-alt="A close-up portrait of a professional male with short dark hair in a brightly lit, modern corporate environment. The lighting is soft and even, typical of a high-end office light-mode aesthetic, highlighting the subject's approachable and focused demeanor. The background is slightly blurred with subtle hints of white and pale gray office architecture. The image conveys a sense of competence and reliability suitable for an enterprise software interface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9zej-t66jPc9wPLLivcsl5PptotR9gD4pwAg2-WS6SJVGtoppqsRnQL-qioul0_t4WEOPJZewmRtrEIjDbs2CLkkod3-D_coi_6UPyON-qYiK55CwgeOKa4VnA2-ny1rIa3eBO8RpRLN_3ZgR5lY3U9cYgUF0GB3GqOG_6vtXIEZfbCmoabWSVvQtV85XQVhgMhnv6ezR7yfvGfl5_syFamIh2a7-AgDdFk23IxYGxzwgGklZCPBMGLvbmmnCjJ3tySDHZvCBDmg" />
      </div>
      </div>
      </header>
      {/* Board Canvas */}
      <main className="flex-1 overflow-x-auto overflow-y-hidden p-margin flex flex-col gap-md bg-background relative">
      {/* Board Controls */}
      <div className="flex justify-between items-center flex-shrink-0">
      <div className="flex items-center gap-sm">
      <h2 className="text-headline-md font-headline-md text-on-surface">Main Support Queue</h2>
      <span className="bg-surface-container-high text-on-surface-variant text-label-sm font-label-sm px-sm py-[2px] rounded-full border border-outline-variant">14 Active</span>
      </div>
      <div className="flex items-center gap-sm">
      <button className="flex items-center gap-xs text-label-md font-label-md text-on-surface-variant hover:text-on-surface bg-surface border border-outline-variant px-sm py-[6px] rounded-DEFAULT" type="button" data-action-id="filter-4" onClick={actions?.["filter-4"]}>
      <ListFilter className="text-[18px]" aria-hidden={true} focusable="false" />
                              Filter
                          </button>
      <button className="flex items-center gap-xs text-label-md font-label-md text-on-surface-variant hover:text-on-surface bg-surface border border-outline-variant px-sm py-[6px] rounded-DEFAULT" type="button" data-action-id="sort-5" onClick={actions?.["sort-5"]}>
      <Circle className="text-[18px]" aria-hidden={true} focusable="false" />
                              Sort
                          </button>
      </div>
      </div>
      {/* Kanban Columns Container */}
      <div className="flex-1 flex gap-gutter h-full pb-sm items-start">
      {/* Column 1: New */}
      <div className="flex flex-col bg-surface border border-outline-variant rounded-DEFAULT w-[340px] flex-shrink-0 max-h-full">
      <div className="p-sm border-b border-outline-variant flex justify-between items-center bg-surface-container-low rounded-t-DEFAULT">
      <div className="flex items-center gap-sm">
      <div className="w-[8px] h-[8px] rounded-full bg-primary"></div>
      <h3 className="text-label-md font-label-md text-on-surface font-bold uppercase tracking-wider">New</h3>
      <span className="text-label-sm font-label-sm text-on-surface-variant ml-xs">4</span>
      </div>
      <button className="text-on-surface-variant hover:text-on-surface" type="button" data-action-id="button-6-6" onClick={actions?.["button-6-6"]}><Ellipsis className="text-[18px]" aria-hidden={true} focusable="false" /></button>
      </div>
      <div className="flex-1 overflow-y-auto p-sm flex flex-col gap-sm">
      {/* Card 1 */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-DEFAULT p-md cursor-grab hover:bg-surface-container-low hover:border-outline transition-colors shadow-[0_1px_2px_rgba(0,0,0,0.03)] flex flex-col gap-sm">
      <div className="flex justify-between items-start">
      <span className="text-label-sm font-label-sm text-on-surface-variant font-mono">INC-8492</span>
      <span className="bg-error-container text-on-error-container text-[10px] font-label-sm px-[6px] py-[2px] rounded-sm flex items-center gap-[2px]">
      <TriangleAlert className="text-[12px]" aria-hidden={true} focusable="false" />
                                          SLA: 15m left
                                      </span>
      </div>
      <p className="text-body-md font-body-md text-on-surface font-medium leading-snug">Database connection timeout on production cluster alpha</p>
      <div className="flex justify-between items-end mt-xs">
      <div className="flex -space-x-2">
      <div className="w-[24px] h-[24px] rounded-full bg-surface-variant border border-outline-variant flex items-center justify-center text-label-sm text-on-surface-variant border-surface-container-lowest">UN</div>
      </div>
      <span className="text-body-sm font-body-sm text-on-surface-variant flex items-center gap-xs">
      <Circle className="text-[14px]" aria-hidden={true} focusable="false" />
                                          10m ago
                                      </span>
      </div>
      </div>
      {/* Card 2 */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-DEFAULT p-md cursor-grab hover:bg-surface-container-low hover:border-outline transition-colors shadow-[0_1px_2px_rgba(0,0,0,0.03)] flex flex-col gap-sm">
      <div className="flex justify-between items-start">
      <span className="text-label-sm font-label-sm text-on-surface-variant font-mono">REQ-8493</span>
      <span className="bg-secondary-container text-on-secondary-container text-[10px] font-label-sm px-[6px] py-[2px] rounded-sm">P3 - Normal</span>
      </div>
      <p className="text-body-md font-body-md text-on-surface font-medium leading-snug">Request for new VPN access profile for external contractor</p>
      <div className="flex justify-between items-end mt-xs">
      <div className="flex -space-x-2">
      <div className="w-[24px] h-[24px] rounded-full bg-surface-variant border border-outline-variant flex items-center justify-center text-label-sm text-on-surface-variant border-surface-container-lowest">UN</div>
      </div>
      <span className="text-body-sm font-body-sm text-on-surface-variant flex items-center gap-xs">
      <Circle className="text-[14px]" aria-hidden={true} focusable="false" />
                                          1h ago
                                      </span>
      </div>
      </div>
      </div>
      </div>
      {/* Column 2: In Progress */}
      <div className="flex flex-col bg-surface border border-outline-variant rounded-DEFAULT w-[340px] flex-shrink-0 max-h-full">
      <div className="p-sm border-b border-outline-variant flex justify-between items-center bg-surface-container-low rounded-t-DEFAULT">
      <div className="flex items-center gap-sm">
      <div className="w-[8px] h-[8px] rounded-full bg-surface-tint"></div>
      <h3 className="text-label-md font-label-md text-on-surface font-bold uppercase tracking-wider">In Progress</h3>
      <span className="text-label-sm font-label-sm text-on-surface-variant ml-xs">2</span>
      </div>
      <button className="text-on-surface-variant hover:text-on-surface" type="button" data-action-id="button-7-7" onClick={actions?.["button-7-7"]}><Ellipsis className="text-[18px]" aria-hidden={true} focusable="false" /></button>
      </div>
      <div className="flex-1 overflow-y-auto p-sm flex flex-col gap-sm">
      {/* Card 3 */}
      <div className="bg-surface-container-lowest border-l-2 border-l-primary border-y border-r border-outline-variant rounded-DEFAULT p-md cursor-grab hover:bg-surface-container-low hover:border-outline transition-colors shadow-[0_1px_2px_rgba(0,0,0,0.03)] flex flex-col gap-sm">
      <div className="flex justify-between items-start">
      <span className="text-label-sm font-label-sm text-on-surface-variant font-mono">INC-8488</span>
      <span className="bg-surface-variant text-on-surface text-[10px] font-label-sm px-[6px] py-[2px] rounded-sm flex items-center gap-[2px]">
      <Circle className="text-[12px] text-primary" aria-hidden={true} focusable="false" />
                                          Active
                                      </span>
      </div>
      <p className="text-body-md font-body-md text-on-surface font-medium leading-snug">API Gateway returning 502 errors intermittently</p>
      <div className="flex justify-between items-end mt-xs">
      <div className="flex -space-x-2">
      <img alt="Assignee Avatar" className="w-[24px] h-[24px] rounded-full border-2 border-surface-container-lowest object-cover" data-alt="A small circular portrait of a professional woman with glasses in a well-lit corporate setting. The aesthetic is clean, bright, and modern, aligning with a light-mode enterprise UI. Soft, neutral background highlighting her competent and approachable expression." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBACQR3B8VrSYL3kWccQ9FiCi-gH05CMOWC-ACfSClm3rLBSIDLLqboETZexraDjyKXxCH4NMjrzVhGyG3ze3FXyDJqk4e_BhsflLULpv_nF_N6YbrfX-0EKbdd-5nzFgR92BTKxsl1i0I_BtP2Z0wvK-iyfK8Dz_rMqBjHu3zId_YSUgFfqZ1VllRjZKNdmRE6DuUaNEHztjG2Q1C6y_xyMM2MlKftik6oCkJqQdSieR-k3Y7fjcNmKknIYvdJ-y9cncOzTai3c9s" />
      </div>
      <span className="text-body-sm font-body-sm text-on-surface-variant">Updated 5m ago</span>
      </div>
      </div>
      </div>
      </div>
      {/* Column 3: Blocked */}
      <div className="flex flex-col bg-surface border border-outline-variant rounded-DEFAULT w-[340px] flex-shrink-0 max-h-full opacity-90">
      <div className="p-sm border-b border-outline-variant flex justify-between items-center bg-surface-container-low rounded-t-DEFAULT">
      <div className="flex items-center gap-sm">
      <div className="w-[8px] h-[8px] rounded-full bg-error"></div>
      <h3 className="text-label-md font-label-md text-on-surface font-bold uppercase tracking-wider">Blocked</h3>
      <span className="text-label-sm font-label-sm text-on-surface-variant ml-xs">1</span>
      </div>
      <button className="text-on-surface-variant hover:text-on-surface" type="button" data-action-id="button-8-8" onClick={actions?.["button-8-8"]}><Ellipsis className="text-[18px]" aria-hidden={true} focusable="false" /></button>
      </div>
      <div className="flex-1 overflow-y-auto p-sm flex flex-col gap-sm">
      {/* Card 4 */}
      <div className="bg-surface-container-highest border border-outline-variant rounded-DEFAULT p-md cursor-grab hover:bg-surface-dim transition-colors flex flex-col gap-sm">
      <div className="flex justify-between items-start">
      <span className="text-label-sm font-label-sm text-on-surface-variant font-mono">REQ-8470</span>
      <span className="bg-surface text-on-surface-variant border border-outline-variant text-[10px] font-label-sm px-[6px] py-[2px] rounded-sm flex items-center gap-[2px]">
      <Circle className="text-[12px]" aria-hidden={true} focusable="false" />
                                          Vendor
                                      </span>
      </div>
      <p className="text-body-md font-body-md text-on-surface font-medium leading-snug">Hardware replacement for workstation WS-104</p>
      <p className="text-body-sm font-body-sm text-on-surface-variant italic line-clamp-1">Waiting on shipping confirmation from Dell...</p>
      <div className="flex justify-between items-end mt-xs">
      <div className="flex -space-x-2">
      <img alt="Assignee Avatar" className="w-[24px] h-[24px] rounded-full border-2 border-surface-container-highest object-cover" data-alt="A small circular portrait of a professional man with a slight beard in a bright, modern corporate environment. The image uses a light-mode enterprise aesthetic with soft, even lighting and a minimal background, conveying professionalism and reliability." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAwefno58tr536T-vw13Mh0VbSwjZjCfwg9ZIRn4bIvSiKzoR55-Gz_Lr3ocBLH7S4vat7rl-DKV3AlKUMXRsSwOd8v-MqZ8Bn-Pn6kyXga8kqP3Q-ag1vrdtMfLNsiAVg2k4mqd3WB6nfOgcB5GWqVLNx1ZyC1jSQ1ESlpKRWWIGeGhbrLhYtQ46E7jqOhr6kU0WEMXWyhDcVDu8PnVJwwc-fiFspyGSJ3iJq5XnmVotMASLQc_YF8c3BA4iic--WLxr2ZCRFSEk" />
      </div>
      <span className="text-body-sm font-body-sm text-on-surface-variant">Blocked 2d ago</span>
      </div>
      </div>
      </div>
      </div>
      {/* Add Column Placeholder */}
      <div className="flex flex-col w-[340px] flex-shrink-0">
      <button className="h-[40px] border border-dashed border-outline-variant rounded-DEFAULT flex items-center justify-center text-label-md font-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low hover:border-outline transition-colors gap-xs" type="button" data-action-id="add-lane-9" onClick={actions?.["add-lane-9"]}>
      <Plus className="text-[18px]" aria-hidden={true} focusable="false" />
                              Add Lane
                          </button>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
