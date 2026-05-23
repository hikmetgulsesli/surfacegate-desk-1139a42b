// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Empty and Error Recovery - SurfaceGate Desk
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Search, Settings } from "lucide-react";


export type EmptyAndErrorRecoverySurfacegateDeskActionId = "create-ticket-1" | "button-2-2" | "button-3-3" | "button-4-4" | "clear-all-filters-5" | "retry-load-6" | "create-new-ticket-7" | "ticket-operations-1" | "queue-management-2" | "agent-workload-3" | "insights-4" | "settings-5" | "support-6";

export interface EmptyAndErrorRecoverySurfacegateDeskProps {
  actions?: Partial<Record<EmptyAndErrorRecoverySurfacegateDeskActionId, () => void>>;
}

export function EmptyAndErrorRecoverySurfacegateDesk({ actions }: EmptyAndErrorRecoverySurfacegateDeskProps) {
  return (
    <>
      {/* SideNavBar */}
      <aside className="bg-surface-container-low dark:bg-surface-container-lowest text-primary dark:text-primary-fixed-dim border-r border-outline-variant dark:border-outline docked h-screen left-0 w-[240px] flex flex-col h-full py-md px-sm gap-xs flex-shrink-0 z-40 hidden md:flex">
      {/* Header */}
      <div className="px-md py-sm mb-lg">
      <h1 className="text-headline-md font-headline-md font-bold text-primary dark:text-primary-fixed-dim">SurfaceGate</h1>
      <p className="font-label-md text-label-md text-on-surface-variant">Operational Hub</p>
      </div>
      {/* Navigation Tabs */}
      <nav className="flex-1 flex flex-col gap-xs">
      <a className="flex items-center gap-md px-md py-sm text-primary dark:text-primary-fixed-dim font-bold bg-secondary-container dark:bg-secondary-container/20 rounded-lg transition-colors duration-200 ease-in-out" href="#" data-action-id="ticket-operations-1" onClick={actions?.["ticket-operations-1"]}>
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Ticket Operations</span>
      </a>
      <a className="flex items-center gap-md px-md py-sm text-on-surface-variant dark:text-surface-variant hover:text-on-surface hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-colors duration-200 ease-in-out rounded-lg" href="#" data-action-id="queue-management-2" onClick={actions?.["queue-management-2"]}>
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Queue Management</span>
      </a>
      <a className="flex items-center gap-md px-md py-sm text-on-surface-variant dark:text-surface-variant hover:text-on-surface hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-colors duration-200 ease-in-out rounded-lg" href="#" data-action-id="agent-workload-3" onClick={actions?.["agent-workload-3"]}>
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Agent Workload</span>
      </a>
      <a className="flex items-center gap-md px-md py-sm text-on-surface-variant dark:text-surface-variant hover:text-on-surface hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-colors duration-200 ease-in-out rounded-lg" href="#" data-action-id="insights-4" onClick={actions?.["insights-4"]}>
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Insights</span>
      </a>
      </nav>
      {/* Footer Tabs */}
      <div className="mt-auto flex flex-col gap-xs border-t border-outline-variant pt-sm">
      <a className="flex items-center gap-md px-md py-sm text-on-surface-variant dark:text-surface-variant hover:text-on-surface hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-colors duration-200 ease-in-out rounded-lg" href="#" data-action-id="settings-5" onClick={actions?.["settings-5"]}>
      <Settings aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Settings</span>
      </a>
      <a className="flex items-center gap-md px-md py-sm text-on-surface-variant dark:text-surface-variant hover:text-on-surface hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-colors duration-200 ease-in-out rounded-lg" href="#" data-action-id="support-6" onClick={actions?.["support-6"]}>
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Support</span>
      </a>
      </div>
      </aside>
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden w-full">
      {/* TopNavBar */}
      <header className="bg-surface dark:bg-surface-dim text-primary dark:text-primary-fixed-dim border-b border-outline-variant dark:border-outline docked full-width top-0 flex justify-between items-center w-full px-lg h-12 z-50 flex-shrink-0">
      {/* Brand / Search Area */}
      <div className="flex items-center gap-lg w-1/3">
      <div className="md:hidden">
      <span className="text-headline-md font-headline-md font-extrabold text-primary dark:text-primary-fixed-dim">SurfaceGate Desk</span>
      </div>
      <div className="hidden md:flex relative w-64">
      <Search className="absolute left-2 top-1.5 text-on-surface-variant text-[18px]" aria-hidden={true} focusable="false" />
      <input className="w-full h-8 pl-8 pr-3 text-body-sm bg-surface-container-lowest border border-outline-variant rounded focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder-on-surface-variant" placeholder="Search tickets..." type="text" />
      </div>
      </div>
      {/* Actions */}
      <div className="flex items-center justify-end gap-md w-1/3">
      <button className="bg-primary-container text-on-primary-container font-label-md text-label-md px-4 py-1.5 rounded hover:bg-opacity-90 transition-colors hidden sm:block" type="button" data-action-id="create-ticket-1" onClick={actions?.["create-ticket-1"]}>
                          Create Ticket
                      </button>
      <div className="flex items-center gap-xs">
      <button className="p-1 rounded-full text-on-surface-variant hover:bg-surface-container-low dark:hover:bg-surface-container-high transition-colors cursor-pointer active:opacity-80" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Circle className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      <button className="p-1 rounded-full text-on-surface-variant hover:bg-surface-container-low dark:hover:bg-surface-container-high transition-colors cursor-pointer active:opacity-80" type="button" data-action-id="button-3-3" onClick={actions?.["button-3-3"]}>
      <Circle className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      <button className="ml-2 w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center border border-outline-variant hover:bg-surface-container-low transition-colors" type="button" data-action-id="button-4-4" onClick={actions?.["button-4-4"]}>
      <img alt="Agent Profile" className="w-full h-full rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKDWk13sQY4usJWda9G_KF5PPkYUq5T8ytqJ-ZzjQ3fMExD7-qrMsisj5Ns-l1YkhyT4mD324DH_ROaxsMrRorwh-dkg2-ETCpU-jcvcHKcYUR1hdAPQ_jlZlizTKfE-Ws6nSGjOHxMcxspu3puDFmOUObQgwP_Rqi5g0hwbsI5enwdleNJuDFgWht2wl9TAwLIOXjIdJsql6WZoy9YgNlDHYNxXCQ9U-C6aJR_7qr6cz3exOuhaqSYoHdyRHXeWLNYhDuqji_EBU" />
      </button>
      </div>
      </div>
      </header>
      {/* Main Workspace */}
      <main className="flex-1 overflow-y-auto p-lg bg-surface-container-lowest flex items-center justify-center">
      {/* Empty State / Recovery Container */}
      <div className="max-w-md w-full bg-surface border border-outline-variant rounded-lg shadow-sm p-xl flex flex-col items-center text-center">
      {/* Illustration Placeholder */}
      <div className="w-32 h-32 mb-lg bg-surface-container-low rounded-full flex items-center justify-center shadow-inner">
      <Circle  style={{fontVariationSettings: "'FILL' 0, 'wght' 200"}} className="text-[64px] text-outline" aria-hidden={true} focusable="false" />
      </div>
      {/* Messaging */}
      <h2 className="font-headline-lg text-headline-lg text-on-surface mb-sm">No tickets match your filters</h2>
      <p className="font-body-md text-body-md text-on-surface-variant mb-xl max-w-sm">
                          We couldn't find any records corresponding to the current filter criteria in the Ticket Operations view. Please adjust your parameters or try refreshing the data.
                      </p>
      {/* Actions */}
      <div className="flex gap-md w-full justify-center">
      <button className="px-md py-sm bg-surface-container-lowest border border-outline font-label-md text-label-md text-on-surface rounded hover:bg-surface-container-low transition-colors" type="button" data-action-id="clear-all-filters-5" onClick={actions?.["clear-all-filters-5"]}>
                              Clear All Filters
                          </button>
      <button className="px-md py-sm bg-primary text-on-primary font-label-md text-label-md rounded hover:bg-opacity-90 transition-colors shadow-sm" type="button" data-action-id="retry-load-6" onClick={actions?.["retry-load-6"]}>
                              Retry Load
                          </button>
      </div>
      <div className="mt-lg pt-sm border-t border-outline-variant w-full text-center">
      <button className="text-primary font-label-md text-label-md hover:underline bg-transparent" type="button" data-action-id="create-new-ticket-7" onClick={actions?.["create-new-ticket-7"]}>
                              + Create New Ticket
                          </button>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
