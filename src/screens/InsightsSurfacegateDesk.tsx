// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Insights - SurfaceGate Desk
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowDown, ArrowUp, Circle, Download, EllipsisVertical, ListFilter, Settings, TriangleAlert } from "lucide-react";


export type InsightsSurfacegateDeskActionId = "button-1-1" | "create-ticket-2" | "last-24-hours-3" | "export-summary-4" | "button-5-5" | "ticket-operations-1" | "queue-management-2" | "agent-workload-3" | "insights-4" | "settings-5" | "support-6" | "view-all-7" | "tkt-8921-8" | "tkt-8900-9" | "tkt-8854-10";

export interface InsightsSurfacegateDeskProps {
  actions?: Partial<Record<InsightsSurfacegateDeskActionId, () => void>>;
}

export function InsightsSurfacegateDesk({ actions }: InsightsSurfacegateDeskProps) {
  return (
    <>
      {/* TopNavBar (Mobile Only) */}
      <nav className="md:hidden flex justify-between items-center w-full px-lg py-sm sticky top-0 z-40 bg-surface-container-lowest border-b border-outline-variant">
      <div className="flex items-center gap-sm">
      <img alt="User Avatar" className="w-8 h-8 rounded-full border border-outline-variant" data-alt="A small circular user avatar image representing a profile in a business software interface. Minimalist and clean." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDg9jkpUxR2P-YSJVm3vA8SnUu7CEHGkd3lD6HSVsck3ZaTnqdEU9y1-rSFZjeVhWBbsetrpScn8585Mmz4xgpX7lkjbYKTn_R3VPehs1NTxM8SgjjMEZD9awfC47LHkkjxNVSn0YfmkZ-5mMxBHXXgvsnGMfOEBsG91E4XmyxlFFnuZ-58Yqp95GwsR3dMLjELGrxRwTIJCOFYboshy-Zow_hiuRr8eBbxfisvq3GwBPpwXABRUs1-BHIPAgiB6OhZSbyEGrOTS_E" />
      </div>
      <div className="font-headline-md text-primary hidden">SurfaceGate Desk</div>
      <div className="flex items-center gap-md">
      <button className="text-on-surface-variant hover:bg-surface-container-high p-sm rounded-full transition-colors scale-95 duration-100" type="button" data-action-id="button-1-1" onClick={actions?.["button-1-1"]}>
      <Circle className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      <button className="bg-primary-container text-on-primary font-label-md px-md py-sm rounded hover:opacity-90 transition-opacity" type="button" data-action-id="create-ticket-2" onClick={actions?.["create-ticket-2"]}>
                      Create Ticket
                  </button>
      </div>
      </nav>
      {/* SideNavBar (Desktop Only) */}
      <aside className="hidden md:flex flex-col h-screen w-64 border-r border-outline-variant bg-surface sticky top-0 py-margin">
      <div className="px-margin mb-xl">
      <div className="flex items-center gap-sm mb-xs">
      <div className="w-8 h-8 bg-primary-container text-on-primary rounded flex items-center justify-center font-bold text-lg">S</div>
      <div className="text-headline-md font-headline-md font-bold text-primary">SurfaceGate</div>
      </div>
      <div className="text-label-sm font-label-sm text-on-surface-variant pl-[40px]">Desk</div>
      </div>
      <nav className="flex-1 flex flex-col gap-xs px-sm">
      <a className="flex items-center gap-md px-md py-sm rounded-r-lg text-on-surface-variant hover:bg-surface-container-low transition-colors" href="#" data-action-id="ticket-operations-1" onClick={actions?.["ticket-operations-1"]}>
      <Circle className="text-[20px]" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Ticket Operations</span>
      </a>
      <a className="flex items-center gap-md px-md py-sm rounded-r-lg text-on-surface-variant hover:bg-surface-container-low transition-colors" href="#" data-action-id="queue-management-2" onClick={actions?.["queue-management-2"]}>
      <Circle className="text-[20px]" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Queue Management</span>
      </a>
      <a className="flex items-center gap-md px-md py-sm rounded-r-lg text-on-surface-variant hover:bg-surface-container-low transition-colors" href="#" data-action-id="agent-workload-3" onClick={actions?.["agent-workload-3"]}>
      <Circle className="text-[20px]" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Agent Workload</span>
      </a>
      <a className="flex items-center gap-md px-md py-sm rounded-r-lg text-primary font-bold border-r-4 border-primary bg-surface-container-low opacity-80 duration-150" href="#" data-action-id="insights-4" onClick={actions?.["insights-4"]}>
      <Circle className="text-[20px] fill" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Insights</span>
      </a>
      </nav>
      <div className="mt-auto px-sm flex flex-col gap-xs">
      <a className="flex items-center gap-md px-md py-sm rounded-r-lg text-on-surface-variant hover:bg-surface-container-low transition-colors" href="#" data-action-id="settings-5" onClick={actions?.["settings-5"]}>
      <Settings className="text-[20px]" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Settings</span>
      </a>
      <a className="flex items-center gap-md px-md py-sm rounded-r-lg text-on-surface-variant hover:bg-surface-container-low transition-colors" href="#" data-action-id="support-6" onClick={actions?.["support-6"]}>
      <Circle className="text-[20px]" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Support</span>
      </a>
      </div>
      </aside>
      {/* Main Content Canvas */}
      <main className="flex-1 flex flex-col min-w-0 p-lg md:p-xl lg:px-[40px] xl:px-[60px] 2xl:px-[120px]">
      {/* Header Actions */}
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-md mb-xl">
      <div>
      <h1 className="font-headline-lg text-headline-lg text-on-surface mb-xs">Operational Insights</h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Real-time overview of desk performance and system activity.</p>
      </div>
      <div className="flex items-center gap-sm w-full sm:w-auto">
      <button className="flex-1 sm:flex-none flex items-center justify-center gap-xs px-md py-sm bg-surface-container-lowest border border-outline-variant rounded font-label-md text-label-md text-on-surface hover:bg-surface-container-low transition-colors" type="button" data-action-id="last-24-hours-3" onClick={actions?.["last-24-hours-3"]}>
      <ListFilter className="text-[16px]" aria-hidden={true} focusable="false" />
                          Last 24 Hours
                      </button>
      <button className="flex-1 sm:flex-none flex items-center justify-center gap-xs px-md py-sm bg-primary-container text-on-primary rounded font-label-md text-label-md hover:bg-primary-fixed-variant hover:text-on-primary-fixed-variant transition-colors" type="button" data-action-id="export-summary-4" onClick={actions?.["export-summary-4"]}>
      <Download className="text-[16px]" aria-hidden={true} focusable="false" />
                          Export Summary
                      </button>
      </div>
      </header>
      {/* KPI Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md mb-xl">
      {/* Card 1 */}
      <div className="bg-surface-container-lowest border border-outline-variant p-md rounded flex flex-col justify-between">
      <div className="flex justify-between items-start mb-lg">
      <span className="font-label-md text-label-md text-on-surface-variant">SLA Compliance</span>
      <Circle className="text-[20px] text-primary" aria-hidden={true} focusable="false" />
      </div>
      <div>
      <div className="font-headline-lg text-headline-lg text-on-surface">94.2%</div>
      <div className="font-body-sm text-body-sm text-error flex items-center gap-xs mt-xs">
      <ArrowDown className="text-[14px]" aria-hidden={true} focusable="false" />
                              1.2% vs yesterday
                          </div>
      </div>
      </div>
      {/* Card 2 */}
      <div className="bg-surface-container-lowest border border-outline-variant p-md rounded flex flex-col justify-between">
      <div className="flex justify-between items-start mb-lg">
      <span className="font-label-md text-label-md text-on-surface-variant">Active Volume</span>
      <Circle className="text-[20px] text-primary" aria-hidden={true} focusable="false" />
      </div>
      <div>
      <div className="font-headline-lg text-headline-lg text-on-surface">1,248</div>
      <div className="font-body-sm text-body-sm text-primary flex items-center gap-xs mt-xs">
      <ArrowUp className="text-[14px]" aria-hidden={true} focusable="false" />
                              5.4% vs yesterday
                          </div>
      </div>
      </div>
      {/* Card 3 */}
      <div className="bg-surface-container-lowest border border-outline-variant p-md rounded flex flex-col justify-between">
      <div className="flex justify-between items-start mb-lg">
      <span className="font-label-md text-label-md text-on-surface-variant">Avg Resolution</span>
      <Circle className="text-[20px] text-primary" aria-hidden={true} focusable="false" />
      </div>
      <div>
      <div className="font-headline-lg text-headline-lg text-on-surface">4h 12m</div>
      <div className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-xs mt-xs">
      <Circle className="text-[14px]" aria-hidden={true} focusable="false" />
                              No change
                          </div>
      </div>
      </div>
      {/* Card 4 */}
      <div className="bg-surface-container-lowest border border-outline-variant p-md rounded flex flex-col justify-between">
      <div className="flex justify-between items-start mb-lg">
      <span className="font-label-md text-label-md text-on-surface-variant">Agents Online</span>
      <Circle className="text-[20px] text-primary" aria-hidden={true} focusable="false" />
      </div>
      <div>
      <div className="font-headline-lg text-headline-lg text-on-surface">42 / 50</div>
      <div className="font-body-sm text-body-sm text-on-surface-variant mt-xs">
                              84% Capacity
                          </div>
      </div>
      </div>
      </section>
      {/* Main Content Area: Chart & Activity Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-lg">
      {/* Chart Section (2 columns wide on large screens) */}
      <section className="lg:col-span-2 bg-surface-container-lowest border border-outline-variant rounded p-lg flex flex-col">
      <div className="flex justify-between items-center mb-lg">
      <h2 className="font-headline-md text-headline-md text-on-surface">Volume by Priority</h2>
      <button className="text-on-surface-variant hover:text-on-surface" type="button" data-action-id="button-5-5" onClick={actions?.["button-5-5"]}>
      <EllipsisVertical className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      {/* Simulated Bar Chart */}
      <div className="flex-1 flex items-end gap-sm h-[240px] pt-lg pb-md border-b border-outline-variant relative">
      {/* Y-Axis labels (simulated) */}
      <div className="absolute left-0 top-0 bottom-md w-8 flex flex-col justify-between text-label-sm text-on-surface-variant items-end pr-sm">
      <span>400</span>
      <span>200</span>
      <span>0</span>
      </div>
      <div className="ml-8 flex-1 flex items-end justify-between gap-xs px-sm h-full">
      {/* P1 */}
      <div className="w-full flex flex-col items-center gap-sm group">
      <div className="w-full bg-error rounded-t h-[40%] group-hover:opacity-90 transition-opacity relative">
      <div className="hidden group-hover:block absolute -top-8 left-1/2 -translate-x-1/2 bg-surface-variant text-on-surface font-label-sm px-2 py-1 rounded">160</div>
      </div>
      <span className="font-label-sm text-label-sm text-on-surface-variant">P1</span>
      </div>
      {/* P2 */}
      <div className="w-full flex flex-col items-center gap-sm group">
      <div className="w-full bg-primary-container rounded-t h-[75%] group-hover:opacity-90 transition-opacity relative">
      <div className="hidden group-hover:block absolute -top-8 left-1/2 -translate-x-1/2 bg-surface-variant text-on-surface font-label-sm px-2 py-1 rounded">300</div>
      </div>
      <span className="font-label-sm text-label-sm text-on-surface-variant">P2</span>
      </div>
      {/* P3 */}
      <div className="w-full flex flex-col items-center gap-sm group">
      <div className="w-full bg-surface-tint rounded-t h-[90%] group-hover:opacity-90 transition-opacity relative">
      <div className="hidden group-hover:block absolute -top-8 left-1/2 -translate-x-1/2 bg-surface-variant text-on-surface font-label-sm px-2 py-1 rounded">360</div>
      </div>
      <span className="font-label-sm text-label-sm text-on-surface-variant">P3</span>
      </div>
      {/* P4 */}
      <div className="w-full flex flex-col items-center gap-sm group">
      <div className="w-full bg-secondary-fixed-dim rounded-t h-[50%] group-hover:opacity-90 transition-opacity relative">
      <div className="hidden group-hover:block absolute -top-8 left-1/2 -translate-x-1/2 bg-surface-variant text-on-surface font-label-sm px-2 py-1 rounded">200</div>
      </div>
      <span className="font-label-sm text-label-sm text-on-surface-variant">P4</span>
      </div>
      </div>
      </div>
      </section>
      {/* Activity Feed */}
      <section className="lg:col-span-1 bg-surface-container-lowest border border-outline-variant rounded flex flex-col h-full max-h-[400px]">
      <div className="p-md border-b border-outline-variant flex justify-between items-center">
      <h2 className="font-headline-md text-headline-md text-on-surface">System Activity</h2>
      <a className="font-label-sm text-label-sm text-primary hover:underline" href="#" data-action-id="view-all-7" onClick={actions?.["view-all-7"]}>View All</a>
      </div>
      <div className="flex-1 overflow-y-auto p-md flex flex-col gap-md">
      {/* Feed Item 1 */}
      <div className="flex gap-md">
      <div className="w-8 h-8 rounded-full bg-error-container text-on-error-container flex items-center justify-center shrink-0">
      <TriangleAlert className="text-[16px]" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex flex-col gap-xs">
      <div className="font-body-sm text-body-sm text-on-surface">
      <span className="font-semibold">SLA Breach Warning</span> on <a className="text-primary hover:underline" href="#" data-action-id="tkt-8921-8" onClick={actions?.["tkt-8921-8"]}>TKT-8921</a>
      </div>
      <span className="font-label-sm text-label-sm text-on-surface-variant">2 mins ago</span>
      </div>
      </div>
      {/* Feed Item 2 */}
      <div className="flex gap-md">
      <div className="w-8 h-8 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center shrink-0">
      <Circle className="text-[16px]" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex flex-col gap-xs">
      <div className="font-body-sm text-body-sm text-on-surface">
      <span className="font-semibold">Agent Sarah J.</span> resolved <a className="text-primary hover:underline" href="#" data-action-id="tkt-8900-9" onClick={actions?.["tkt-8900-9"]}>TKT-8900</a>
      </div>
      <span className="font-label-sm text-label-sm text-on-surface-variant">15 mins ago</span>
      </div>
      </div>
      {/* Feed Item 3 */}
      <div className="flex gap-md">
      <div className="w-8 h-8 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center shrink-0">
      <Circle className="text-[16px]" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex flex-col gap-xs">
      <div className="font-body-sm text-body-sm text-on-surface">
      <span className="font-semibold">System</span> triggered automated routing for 45 new tickets.
                                  </div>
      <span className="font-label-sm text-label-sm text-on-surface-variant">1 hour ago</span>
      </div>
      </div>
      {/* Feed Item 4 */}
      <div className="flex gap-md">
      <div className="w-8 h-8 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center shrink-0">
      <Circle className="text-[16px]" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex flex-col gap-xs">
      <div className="font-body-sm text-body-sm text-on-surface">
      <span className="font-semibold">Agent Mike R.</span> escalated <a className="text-primary hover:underline" href="#" data-action-id="tkt-8854-10" onClick={actions?.["tkt-8854-10"]}>TKT-8854</a> to L2 Support.
                                  </div>
      <span className="font-label-sm text-label-sm text-on-surface-variant">2 hours ago</span>
      </div>
      </div>
      </div>
      </section>
      </div>
      </main>
    </>
  );
}
