// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Ticket Editor - SurfaceGate Desk
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Menu, Save, Settings } from "lucide-react";


export type TicketEditorSurfacegateDeskActionId = "button-1-1" | "button-2-2" | "discard-3" | "save-ticket-4" | "browse-files-5" | "cancel-6" | "save-ticket-7" | "ticket-operations-1" | "queue-management-2" | "agent-workload-3" | "insights-4" | "settings-5" | "support-6";

export interface TicketEditorSurfacegateDeskProps {
  actions?: Partial<Record<TicketEditorSurfacegateDeskActionId, () => void>>;
}

export function TicketEditorSurfacegateDesk({ actions }: TicketEditorSurfacegateDeskProps) {
  return (
    <>
      {/* SideNavBar (Hidden on Mobile, Visible on md+) */}
      <nav className="hidden md:flex flex-col h-screen w-64 border-r border-outline-variant bg-surface dark:bg-on-surface sticky top-0 py-margin">
      <div className="px-gutter mb-lg">
      <h1 className="text-headline-md font-headline-md font-bold text-primary dark:text-primary-fixed">SurfaceGate</h1>
      <span className="text-body-sm text-on-surface-variant dark:text-on-tertiary-container">Desk</span>
      </div>
      <ul className="flex-1 flex flex-col gap-sm px-sm">
      <li>
      <a className="flex items-center gap-sm px-md py-sm rounded-lg text-primary dark:text-primary-fixed font-bold border-r-4 border-primary dark:border-primary-fixed hover:bg-surface-container-low dark:hover:bg-on-tertiary-fixed-variant transition-colors opacity-80 duration-150" href="#" data-action-id="ticket-operations-1" onClick={actions?.["ticket-operations-1"]}>
      <Circle className="text-[20px]" aria-hidden={true} focusable="false" />
      <span className="text-label-md font-label-md">Ticket Operations</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-sm px-md py-sm rounded-lg text-on-surface-variant dark:text-on-tertiary-container hover:text-on-surface dark:hover:text-surface-container-lowest hover:bg-surface-container-low dark:hover:bg-on-tertiary-fixed-variant transition-colors" href="#" data-action-id="queue-management-2" onClick={actions?.["queue-management-2"]}>
      <Circle className="text-[20px]" aria-hidden={true} focusable="false" />
      <span className="text-label-md font-label-md">Queue Management</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-sm px-md py-sm rounded-lg text-on-surface-variant dark:text-on-tertiary-container hover:text-on-surface dark:hover:text-surface-container-lowest hover:bg-surface-container-low dark:hover:bg-on-tertiary-fixed-variant transition-colors" href="#" data-action-id="agent-workload-3" onClick={actions?.["agent-workload-3"]}>
      <Circle className="text-[20px]" aria-hidden={true} focusable="false" />
      <span className="text-label-md font-label-md">Agent Workload</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-sm px-md py-sm rounded-lg text-on-surface-variant dark:text-on-tertiary-container hover:text-on-surface dark:hover:text-surface-container-lowest hover:bg-surface-container-low dark:hover:bg-on-tertiary-fixed-variant transition-colors" href="#" data-action-id="insights-4" onClick={actions?.["insights-4"]}>
      <Circle className="text-[20px]" aria-hidden={true} focusable="false" />
      <span className="text-label-md font-label-md">Insights</span>
      </a>
      </li>
      </ul>
      <div className="mt-auto px-sm flex flex-col gap-sm">
      <a className="flex items-center gap-sm px-md py-sm rounded-lg text-on-surface-variant dark:text-on-tertiary-container hover:text-on-surface dark:hover:text-surface-container-lowest hover:bg-surface-container-low dark:hover:bg-on-tertiary-fixed-variant transition-colors" href="#" data-action-id="settings-5" onClick={actions?.["settings-5"]}>
      <Settings className="text-[20px]" aria-hidden={true} focusable="false" />
      <span className="text-label-md font-label-md">Settings</span>
      </a>
      <a className="flex items-center gap-sm px-md py-sm rounded-lg text-on-surface-variant dark:text-on-tertiary-container hover:text-on-surface dark:hover:text-surface-container-lowest hover:bg-surface-container-low dark:hover:bg-on-tertiary-fixed-variant transition-colors" href="#" data-action-id="support-6" onClick={actions?.["support-6"]}>
      <Circle className="text-[20px]" aria-hidden={true} focusable="false" />
      <span className="text-label-md font-label-md">Support</span>
      </a>
      </div>
      </nav>
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
      {/* TopNavBar (Visible on Mobile, Hidden on md+) */}
      <header className="flex md:hidden justify-between items-center w-full px-lg py-sm sticky top-0 z-40 bg-surface-container-lowest dark:bg-on-surface border-b border-outline-variant dark:border-on-surface-variant">
      <div className="flex items-center gap-sm">
      <button className="text-on-surface-variant p-sm hover:bg-surface-container-high rounded-full" type="button" data-action-id="button-1-1" onClick={actions?.["button-1-1"]}>
      <Menu aria-hidden={true} focusable="false" />
      </button>
      <h2 className="text-headline-md font-headline-md font-bold text-primary">SurfaceGate Desk</h2>
      </div>
      <div className="flex items-center gap-md">
      <button className="text-on-surface-variant p-sm hover:bg-surface-container-high rounded-full" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Circle aria-hidden={true} focusable="false" />
      </button>
      <img alt="User Avatar" className="w-8 h-8 rounded-full border border-outline-variant" data-alt="A professional headshot of a person, used as a placeholder user avatar in a minimalist dark-mode application. The lighting is soft and studio-like, ensuring a clean and modern aesthetic. The background is neutral, directing focus entirely to the subject's face. The overall mood is approachable yet corporate." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOY6KbFG_jXVTcTUk8_Q0PVxtvsv9UnBl3z3lGj0RoxwLATLc-B-yXn3yCK28xQiBwIheDV4FPBTkO4sKebTeezGkIPX_uYy8a3glaicegVOe3Kf90L-gml5coZ9wrN8s6m1kX-G_uwZN36c6Sl-T4g8whkAn2Zlr3Rqql69TrRkUOtqpyv3kfh5Nw2IX6iMy4wR7TCF3B2UVKaZGP6y9um-WVMWDJTZBoqcAn5ErlKHS95nOdyRd4J1RAv0zaQxP6MQ3FSQ9TppA" />
      </div>
      </header>
      {/* Unsaved State Banner */}
      <div className="bg-surface-container-low border-b border-outline-variant px-margin py-sm flex items-center gap-sm text-body-sm text-on-surface-variant">
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} className="text-outline" aria-hidden={true} focusable="false" />
      <span>You have unsaved changes.</span>
      <div className="ml-auto flex gap-sm">
      <button className="px-md py-sm text-label-md font-label-md text-primary hover:bg-primary-fixed transition-colors rounded-DEFAULT" type="button" data-action-id="discard-3" onClick={actions?.["discard-3"]}>Discard</button>
      <button className="px-md py-sm text-label-md font-label-md bg-primary text-on-primary hover:bg-primary-container transition-colors rounded-DEFAULT shadow-sm" type="button" data-action-id="save-ticket-4" onClick={actions?.["save-ticket-4"]}>Save Ticket</button>
      </div>
      </div>
      {/* Editor Content Canvas */}
      <main className="flex-1 p-margin overflow-y-auto">
      <div className="max-w-4xl mx-auto flex flex-col gap-lg">
      {/* Header */}
      <div>
      <h1 className="text-headline-lg font-headline-lg text-on-background mb-xs">Create Ticket</h1>
      <p className="text-body-md font-body-md text-on-surface-variant">Fill in the details to log a new issue or request.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-lg">
      {/* Left Column: Primary Details */}
      <div className="lg:col-span-2 flex flex-col gap-md">
      {/* Subject & Description Card */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-md shadow-sm">
      <div className="mb-md">
      <label className="block text-label-sm font-label-sm text-on-surface-variant mb-xs" htmlFor="subject">Subject <span className="text-error">*</span></label>
      <input className="w-full bg-surface-container-lowest border border-outline-variant rounded-DEFAULT px-md py-sm text-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" id="subject" placeholder="Brief summary of the issue" type="text" />
      {/* Validation Error Example (Hidden by default) */}
      <p className="text-error text-label-sm mt-xs hidden items-center gap-xs">
      <Circle className="text-[14px]" aria-hidden={true} focusable="false" /> Subject is required.
                                      </p>
      </div>
      <div>
      <label className="block text-label-sm font-label-sm text-on-surface-variant mb-xs" htmlFor="description">Description <span className="text-error">*</span></label>
      <textarea className="w-full bg-surface-container-lowest border border-outline-variant rounded-DEFAULT px-md py-sm text-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-y" id="description" placeholder="Detailed explanation of the issue, steps to reproduce, or relevant context." rows={8}></textarea>
      </div>
      </div>
      {/* Attachments Card (Optional) */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-md shadow-sm border-dashed">
      <div className="flex flex-col items-center justify-center py-lg text-center">
      <Circle className="text-outline-variant text-[32px] mb-sm" aria-hidden={true} focusable="false" />
      <p className="text-body-md font-body-md text-on-surface">Drag and drop files here</p>
      <p className="text-body-sm font-body-sm text-on-surface-variant mt-xs">or click to browse from your computer</p>
      <button className="mt-md px-md py-sm text-label-md font-label-md border border-outline-variant rounded-DEFAULT hover:bg-surface-container-low transition-colors" type="button" data-action-id="browse-files-5" onClick={actions?.["browse-files-5"]}>Browse Files</button>
      </div>
      </div>
      </div>
      {/* Right Column: Classification & Metadata */}
      <div className="flex flex-col gap-md">
      {/* Classification Card */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-md shadow-sm">
      <h3 className="text-headline-md font-headline-md text-on-background border-b border-outline-variant pb-xs mb-md">Classification</h3>
      <div className="flex flex-col gap-md">
      <div>
      <label className="block text-label-sm font-label-sm text-on-surface-variant mb-xs" htmlFor="requester">Requester <span className="text-error">*</span></label>
      <div className="relative">
      <Circle className="absolute left-sm top-1/2 -translate-y-1/2 text-outline text-[18px]" aria-hidden={true} focusable="false" />
      <input className="w-full bg-surface-container-lowest border border-outline-variant rounded-DEFAULT pl-lg pr-md py-sm text-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" id="requester" placeholder="Search users..." type="text" />
      </div>
      </div>
      <div>
      <label className="block text-label-sm font-label-sm text-on-surface-variant mb-xs" htmlFor="status">Status</label>
      <select className="w-full bg-surface-container-lowest border border-outline-variant rounded-DEFAULT px-md py-sm text-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors appearance-none" id="status">
      <option value="new">New</option>
      <option value="open">Open</option>
      <option value="pending">Pending</option>
      </select>
      </div>
      <div>
      <label className="block text-label-sm font-label-sm text-on-surface-variant mb-xs" htmlFor="priority">Priority</label>
      <select className="w-full bg-surface-container-lowest border border-outline-variant rounded-DEFAULT px-md py-sm text-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors appearance-none" id="priority">
      <option value="low">Low</option>
      <option selected={true} value="medium">Medium</option>
      <option value="high">High</option>
      <option value="urgent">Urgent</option>
      </select>
      </div>
      <div>
      <label className="block text-label-sm font-label-sm text-on-surface-variant mb-xs" htmlFor="assignee_group">Assignee Group</label>
      <select className="w-full bg-surface-container-lowest border border-outline-variant rounded-DEFAULT px-md py-sm text-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors appearance-none" id="assignee_group">
      <option value="">Unassigned</option>
      <option value="tier1">Tier 1 Support</option>
      <option value="tier2">Tier 2 Escalation</option>
      <option value="network">Network Ops</option>
      </select>
      </div>
      </div>
      </div>
      </div>
      </div>
      {/* Footer Actions */}
      <div className="flex justify-end gap-md pt-lg border-t border-outline-variant mt-md">
      <button className="px-lg py-sm text-label-md font-label-md border border-outline-variant text-on-surface hover:bg-surface-container-low transition-colors rounded-DEFAULT" type="button" data-action-id="cancel-6" onClick={actions?.["cancel-6"]}>Cancel</button>
      <button className="px-lg py-sm text-label-md font-label-md bg-primary text-on-primary hover:bg-primary-container transition-colors rounded-DEFAULT shadow-sm flex items-center gap-xs" type="button" data-action-id="save-ticket-7" onClick={actions?.["save-ticket-7"]}>
      <Save className="text-[18px]" aria-hidden={true} focusable="false" />
                              Save Ticket
                          </button>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
