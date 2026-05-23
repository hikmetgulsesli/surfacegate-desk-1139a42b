// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Settings and Preferences - SurfaceGate Desk
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ChevronRight, Circle, Menu, Save, Search, Settings } from "lucide-react";


export type SettingsAndPreferencesSurfacegateDeskActionId = "button-1-1" | "button-2-2" | "button-3-3" | "create-ticket-4" | "button-5-5" | "reset-settings-6" | "discard-7" | "save-changes-8" | "ticket-operations-1" | "queue-management-2" | "agent-workload-3" | "insights-4" | "settings-5" | "support-6";

export interface SettingsAndPreferencesSurfacegateDeskProps {
  actions?: Partial<Record<SettingsAndPreferencesSurfacegateDeskActionId, () => void>>;
}

export function SettingsAndPreferencesSurfacegateDesk({ actions }: SettingsAndPreferencesSurfacegateDeskProps) {
  return (
    <>
      {/* SideNavBar (Shared Component) */}
      <nav className="bg-surface-container-low dark:bg-surface-container-lowest text-primary dark:text-primary-fixed-dim docked h-screen left-0 w-[240px] border-r border-outline-variant dark:border-outline flat no shadows flex flex-col h-full py-md px-sm gap-xs z-40 hidden md:flex shrink-0 transition-colors duration-200 ease-in-out">
      {/* Header */}
      <div className="flex items-center gap-sm px-sm mb-lg mt-sm cursor-pointer hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-colors rounded-lg p-2">
      <div className="w-8 h-8 rounded bg-primary-container text-on-primary flex items-center justify-center shrink-0 shadow-sm">
      <Circle className="text-[18px]" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex flex-col">
      <span className="text-headline-md font-headline-md font-bold text-primary dark:text-primary-fixed-dim leading-tight">SurfaceGate</span>
      <span className="font-label-sm text-label-sm text-on-surface-variant">Operational Hub</span>
      </div>
      </div>
      {/* Main Navigation */}
      <div className="flex-1 flex flex-col gap-xs overflow-y-auto">
      <a className="flex items-center gap-sm px-sm py-2 rounded-lg text-on-surface-variant dark:text-surface-variant hover:text-on-surface hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-colors group" href="#" data-action-id="ticket-operations-1" onClick={actions?.["ticket-operations-1"]}>
      <Circle className="text-[20px] group-hover:text-primary transition-colors" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Ticket Operations</span>
      </a>
      <a className="flex items-center gap-sm px-sm py-2 rounded-lg text-on-surface-variant dark:text-surface-variant hover:text-on-surface hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-colors group" href="#" data-action-id="queue-management-2" onClick={actions?.["queue-management-2"]}>
      <Circle className="text-[20px] group-hover:text-primary transition-colors" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Queue Management</span>
      </a>
      <a className="flex items-center gap-sm px-sm py-2 rounded-lg text-on-surface-variant dark:text-surface-variant hover:text-on-surface hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-colors group" href="#" data-action-id="agent-workload-3" onClick={actions?.["agent-workload-3"]}>
      <Circle className="text-[20px] group-hover:text-primary transition-colors" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Agent Workload</span>
      </a>
      <a className="flex items-center gap-sm px-sm py-2 rounded-lg text-on-surface-variant dark:text-surface-variant hover:text-on-surface hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-colors group" href="#" data-action-id="insights-4" onClick={actions?.["insights-4"]}>
      <Circle className="text-[20px] group-hover:text-primary transition-colors" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Insights</span>
      </a>
      </div>
      {/* Footer Navigation */}
      <div className="mt-auto flex flex-col gap-xs border-t border-outline-variant/30 pt-sm">
      <a className="flex items-center gap-sm px-sm py-2 rounded-lg text-primary dark:text-primary-fixed-dim font-bold bg-secondary-container dark:bg-secondary-container/20 group" href="#" data-action-id="settings-5" onClick={actions?.["settings-5"]}>
      <Settings className="text-[20px]" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Settings</span>
      </a>
      <a className="flex items-center gap-sm px-sm py-2 rounded-lg text-on-surface-variant dark:text-surface-variant hover:text-on-surface hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-colors group" href="#" data-action-id="support-6" onClick={actions?.["support-6"]}>
      <Circle className="text-[20px] group-hover:text-primary transition-colors" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Support</span>
      </a>
      </div>
      </nav>
      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden bg-background">
      {/* TopNavBar (Shared Component) */}
      <header className="bg-surface dark:bg-surface-dim text-primary dark:text-primary-fixed-dim docked full-width top-0 border-b border-outline-variant dark:border-outline flat no shadows flex justify-between items-center w-full px-lg h-12 z-30 shrink-0">
      {/* Mobile Menu & Branding */}
      <div className="flex items-center gap-sm md:gap-md">
      <button className="md:hidden p-1 text-on-surface-variant hover:text-primary transition-colors cursor-pointer active:opacity-80 transition-opacity" type="button" data-action-id="button-1-1" onClick={actions?.["button-1-1"]}>
      <Menu aria-hidden={true} focusable="false" />
      </button>
      <div className="text-headline-md font-headline-md font-extrabold text-primary dark:text-primary-fixed-dim md:hidden">
                          SurfaceGate Desk
                      </div>
      {/* Breadcrumbs for Desktop Context */}
      <div className="hidden md:flex items-center gap-xs text-on-surface-variant font-label-md text-label-md">
      <span>Settings</span>
      <ChevronRight className="text-[16px]" aria-hidden={true} focusable="false" />
      <span className="text-on-surface font-medium">Preferences</span>
      </div>
      </div>
      {/* Trailing Actions */}
      <div className="flex items-center gap-md">
      <div className="hidden md:flex items-center border border-outline-variant rounded bg-surface-container-lowest px-2 py-1 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/20 transition-colors">
      <Search className="text-[16px] text-on-surface-variant mr-1" aria-hidden={true} focusable="false" />
      <input className="bg-transparent border-none p-0 focus:ring-0 text-sm w-48 font-body-sm text-body-sm placeholder:text-on-surface-variant" placeholder="Search settings..." type="text" />
      </div>
      <div className="flex items-center gap-sm text-on-surface-variant">
      <button aria-label="notifications" className="p-1 hover:bg-surface-container-low dark:hover:bg-surface-container-high transition-colors rounded cursor-pointer active:opacity-80 transition-opacity relative group" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Circle className="text-[20px] group-hover:text-primary transition-colors" aria-hidden={true} focusable="false" />
      <span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full border border-surface"></span>
      </button>
      <button aria-label="help_outline" className="p-1 hover:bg-surface-container-low dark:hover:bg-surface-container-high transition-colors rounded cursor-pointer active:opacity-80 transition-opacity group" type="button" data-action-id="button-3-3" onClick={actions?.["button-3-3"]}>
      <Circle className="text-[20px] group-hover:text-primary transition-colors" aria-hidden={true} focusable="false" />
      </button>
      </div>
      <div className="h-6 w-[1px] bg-outline-variant/50 hidden md:block"></div>
      <button className="hidden md:flex items-center justify-center bg-primary-container text-on-primary-container font-label-md text-label-md px-3 py-1.5 rounded hover:bg-primary-container/90 transition-colors cursor-pointer active:opacity-80" type="button" data-action-id="create-ticket-4" onClick={actions?.["create-ticket-4"]}>
                          Create Ticket
                      </button>
      <button className="w-7 h-7 rounded-full overflow-hidden border border-outline-variant hover:border-primary transition-colors cursor-pointer active:opacity-80 flex-shrink-0 bg-surface-container-highest" type="button" data-action-id="button-5-5" onClick={actions?.["button-5-5"]}>
      <img alt="Agent Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjWACim8DOmomVsBY2B0YIe9bCj1cJECPT9Aqel6dlF0W_SLzd5KeH8aXgtsgswsl6wwTyv2Kp3-CmJa8MS5OL0kHmadZKxBuqVfkpomu30SMO1MnlGPOdRMZC8U9V_qRlHgOJhr-XenWmCQz0GO1IodQQJYOLLs6xhCI96GmbGN3xkidmHYkEgG5YNt7I7NT1lehGut5UPZBdWnawF6Zv7cdukDFPfxuACPjxjCkASEIDewQcIOsJVkXs9Zd7dABQIFn9ofKPRHA" />
      </button>
      </div>
      </header>
      {/* Page Canvas */}
      <main className="flex-1 overflow-y-auto p-4 md:p-lg">
      <div className="max-w-4xl mx-auto flex flex-col gap-lg pb-xl">
      {/* Page Header */}
      <div>
      <h1 className="font-headline-lg text-headline-lg text-on-surface mb-1">Settings &amp; Preferences</h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Manage your workspace configuration, default views, and notification preferences.</p>
      </div>
      {/* Settings Form */}
      <form className="flex flex-col gap-lg" id="settings-form">
      {/* Section: Default Views */}
      <section className="bg-surface-container-lowest border border-outline-variant/60 rounded-lg p-4 md:p-6 shadow-sm flex flex-col gap-md">
      <div className="border-b border-outline-variant/40 pb-sm mb-xs">
      <h2 className="font-headline-md text-headline-md text-on-surface flex items-center gap-2">
      <Circle className="text-primary text-[20px]" aria-hidden={true} focusable="false" />
                                      Default Views
                                  </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
      <div className="flex flex-col gap-1">
      <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="landing-page">Landing Page</label>
      <select className="w-full border border-outline-variant rounded bg-surface p-2 font-body-sm text-body-sm focus:border-primary focus:ring-1 focus:ring-primary/30 outline-none transition-colors" id="landing-page">
      <option value="ticket_ops">Ticket Operations</option>
      <option value="queue_mgmt">Queue Management</option>
      <option value="agent_workload">Agent Workload</option>
      <option value="insights">Insights</option>
      </select>
      </div>
      <div className="flex flex-col gap-1">
      <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="ticket-sort">Default Ticket Sorting</label>
      <select className="w-full border border-outline-variant rounded bg-surface p-2 font-body-sm text-body-sm focus:border-primary focus:ring-1 focus:ring-primary/30 outline-none transition-colors" id="ticket-sort">
      <option value="sla_desc">SLA Breached (Descending)</option>
      <option value="created_desc">Created Date (Newest First)</option>
      <option value="priority_desc">Priority (High to Low)</option>
      <option value="updated_desc">Last Updated</option>
      </select>
      </div>
      </div>
      </section>
      {/* Section: Display Preferences */}
      <section className="bg-surface-container-lowest border border-outline-variant/60 rounded-lg p-4 md:p-6 shadow-sm flex flex-col gap-md">
      <div className="border-b border-outline-variant/40 pb-sm mb-xs">
      <h2 className="font-headline-md text-headline-md text-on-surface flex items-center gap-2">
      <Circle className="text-primary text-[20px]" aria-hidden={true} focusable="false" />
                                      Display Preferences
                                  </h2>
      </div>
      <div className="flex flex-col gap-lg">
      {/* Density Toggle */}
      <div>
      <label className="font-label-md text-label-md text-on-surface mb-2 block">Interface Density</label>
      <div className="flex gap-4">
      <label className="flex items-start gap-2 cursor-pointer group">
      <div className="relative flex items-center justify-center mt-0.5">
      <input checked={true} className="peer sr-only" name="density" type="radio" value="compact" />
      <div className="w-4 h-4 border border-outline-variant rounded-full peer-checked:border-primary peer-checked:border-[5px] transition-colors group-hover:border-primary"></div>
      </div>
      <div className="flex flex-col">
      <span className="font-body-sm text-body-sm text-on-surface font-medium">Compact</span>
      <span className="font-label-sm text-label-sm text-on-surface-variant">Optimized for maximum data visibility (32px rows)</span>
      </div>
      </label>
      <label className="flex items-start gap-2 cursor-pointer group">
      <div className="relative flex items-center justify-center mt-0.5">
      <input className="peer sr-only" name="density" type="radio" value="relaxed" />
      <div className="w-4 h-4 border border-outline-variant rounded-full peer-checked:border-primary peer-checked:border-[5px] transition-colors group-hover:border-primary"></div>
      </div>
      <div className="flex flex-col">
      <span className="font-body-sm text-body-sm text-on-surface font-medium">Relaxed</span>
      <span className="font-label-sm text-label-sm text-on-surface-variant">More breathing room between elements (40px rows)</span>
      </div>
      </label>
      </div>
      </div>
      {/* Toggles */}
      <div className="flex flex-col gap-3">
      <label className="flex items-center justify-between cursor-pointer p-2 hover:bg-surface-container-low rounded transition-colors -ml-2">
      <div className="flex flex-col">
      <span className="font-body-sm text-body-sm text-on-surface font-medium">In-App Notifications</span>
      <span className="font-label-sm text-label-sm text-on-surface-variant">Show toast alerts for ticket assignments and mentions</span>
      </div>
      <div className="relative inline-flex h-5 w-9 items-center rounded-full bg-primary transition-colors">
      <span className="translate-x-4 inline-block h-4 w-4 transform rounded-full bg-white transition-transform"></span>
      </div>
      </label>
      <label className="flex items-center justify-between cursor-pointer p-2 hover:bg-surface-container-low rounded transition-colors -ml-2">
      <div className="flex flex-col">
      <span className="font-body-sm text-body-sm text-on-surface font-medium">SLA Warning Highlights</span>
      <span className="font-label-sm text-label-sm text-on-surface-variant">Visually highlight rows nearing SLA breach</span>
      </div>
      <div className="relative inline-flex h-5 w-9 items-center rounded-full bg-primary transition-colors">
      <span className="translate-x-4 inline-block h-4 w-4 transform rounded-full bg-white transition-transform"></span>
      </div>
      </label>
      <label className="flex items-center justify-between cursor-pointer p-2 hover:bg-surface-container-low rounded transition-colors -ml-2">
      <div className="flex flex-col">
      <span className="font-body-sm text-body-sm text-on-surface font-medium">Auto-refresh Queues</span>
      <span className="font-label-sm text-label-sm text-on-surface-variant">Automatically refresh ticket lists every 60 seconds</span>
      </div>
      <div className="relative inline-flex h-5 w-9 items-center rounded-full bg-surface-variant border border-outline-variant transition-colors">
      <span className="translate-x-0.5 inline-block h-4 w-4 transform rounded-full bg-outline transition-transform"></span>
      </div>
      </label>
      </div>
      </div>
      </section>
      {/* Section: System Controls */}
      <section className="bg-surface-container-lowest border border-outline-variant/60 rounded-lg p-4 md:p-6 shadow-sm flex flex-col gap-md">
      <div className="border-b border-outline-variant/40 pb-sm mb-xs">
      <h2 className="font-headline-md text-headline-md text-on-surface flex items-center gap-2">
      <Circle className="text-primary text-[20px]" aria-hidden={true} focusable="false" />
                                      System Controls
                                  </h2>
      </div>
      <div className="flex items-center justify-between p-3 border border-error-container bg-error-container/10 rounded">
      <div className="flex flex-col">
      <span className="font-body-sm text-body-sm text-on-surface font-medium">Factory Reset</span>
      <span className="font-label-sm text-label-sm text-on-surface-variant">Restore all settings and preferences to default values.</span>
      </div>
      <button className="px-3 py-1.5 border border-error text-error rounded font-label-md text-label-md hover:bg-error-container/30 transition-colors" type="button" data-action-id="reset-settings-6" onClick={actions?.["reset-settings-6"]}>
                                      Reset Settings
                                  </button>
      </div>
      </section>
      {/* Action Bar */}
      <div className="flex items-center justify-end gap-3 pt-md mt-4 sticky bottom-0 bg-background/90 backdrop-blur pb-4 border-t border-outline-variant/40">
      {/* Success Message (Hidden by default) */}
      <div className="hidden items-center gap-2 text-primary bg-primary-container/10 px-3 py-1.5 rounded mr-auto transition-opacity duration-300 opacity-0" id="success-message">
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} className="text-[18px] text-primary" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Changes saved successfully</span>
      </div>
      <button className="px-4 py-2 border border-outline-variant text-on-surface-variant rounded font-label-md text-label-md hover:bg-surface-container-low transition-colors" type="button" data-action-id="discard-7" onClick={actions?.["discard-7"]}>
                                  Discard
                              </button>
      <button className="px-4 py-2 bg-primary-container text-on-primary-container rounded font-label-md text-label-md hover:bg-primary-container/90 transition-colors flex items-center gap-2" type="button" data-action-id="save-changes-8" onClick={actions?.["save-changes-8"]}>
      <Save className="text-[18px]" aria-hidden={true} focusable="false" />
                                  Save Changes
                              </button>
      </div>
      </form>
      </div>
      </main>
      </div>
      
    </>
  );
}
