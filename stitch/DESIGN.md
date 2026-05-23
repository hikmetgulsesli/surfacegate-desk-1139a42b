---
name: SurfaceGate Desk
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#434750'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#737781'
  outline-variant: '#c3c6d1'
  surface-tint: '#395e9b'
  primary: '#002d62'
  on-primary: '#ffffff'
  primary-container: '#1a4480'
  on-primary-container: '#8fb3f6'
  inverse-primary: '#abc7ff'
  secondary: '#505f76'
  on-secondary: '#ffffff'
  secondary-container: '#d0e1fb'
  on-secondary-container: '#54647a'
  tertiary: '#262e42'
  on-tertiary: '#ffffff'
  tertiary-container: '#3d4459'
  on-tertiary-container: '#aab2cb'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d7e2ff'
  primary-fixed-dim: '#abc7ff'
  on-primary-fixed: '#001b3f'
  on-primary-fixed-variant: '#1d4682'
  secondary-fixed: '#d3e4fe'
  secondary-fixed-dim: '#b7c8e1'
  on-secondary-fixed: '#0b1c30'
  on-secondary-fixed-variant: '#38485d'
  tertiary-fixed: '#dae2fd'
  tertiary-fixed-dim: '#bec6e0'
  on-tertiary-fixed: '#131b2e'
  on-tertiary-fixed-variant: '#3f465c'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 22px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  gutter: 16px
  margin: 24px
---

## Brand & Style

The design system is engineered for high-stakes operational environments where information density and clarity are paramount. The visual language follows a **Corporate / Modern** aesthetic with a strong emphasis on **Utilitarian Minimalism**. It prioritizes "speed to insight" by removing unnecessary visual noise, focusing on a deterministic interface that feels reliable and calm under pressure.

The emotional response should be one of professional focus and competence. The UI stays out of the user's way, treating data as the primary interface element. Layouts are structured and predictable, favoring a "dense but calm" hierarchy that allows experienced users to scan vast amounts of information without cognitive fatigue.

## Colors

The palette is anchored in professional blues and structural grays to maintain a serious, desk-centric atmosphere. 

- **Primary**: A deep, authoritative Navy (#1A4480) used for key actions and branding elements.
- **Neutral**: A range of cool grays starting from a crisp white background to slate-toned borders.
- **SLA/Semantic**: Statuses utilize a "Low-Saturation, High-Contrast" approach. Backgrounds for badges should be highly desaturated (e.g., 10% opacity of the semantic color) with high-contrast text to ensure legibility without overwhelming the grid.
- **Surface Tiers**: Use `#F8FAFC` for the main background and white (#FFFFFF) for cards and data containers to create subtle but clear separation.

## Typography

This design system utilizes **Inter** for its exceptional legibility at small sizes and its neutral, systematic character. The type scale is intentionally tight to support high information density.

- **Scale**: The base body size is set to 14px for standard operations, with a 13px variant for secondary data in dense tables.
- **Hierarchy**: Use font weight (Medium/Semi-bold) rather than size to differentiate headings within data-heavy views.
- **Tabular Numerals**: Ensure the use of tabular (monospaced) figures for all data tables and SLA timers to prevent "jumping" text during updates.

## Layout & Spacing

The layout model follows a **Fluid Grid** system designed for 1440px+ desktop environments, while maintaining strict responsiveness for 1024px tablets. 

- **Rhythm**: A strict 4px/8px baseline grid is used to ensure vertical alignment across columns of data.
- **Density**: In list views and tables, vertical padding is minimized (8px or 4px) to maximize the number of visible records above the fold.
- **Structure**: A standard 12-column layout is employed for dashboards, but internal application modules (like ticket details) use a "Master-Detail" split-pane layout with a 400px fixed-width sidebar and a fluid content area.

## Elevation & Depth

Visual hierarchy is primarily achieved through **Low-contrast outlines** and **Tonal layering**. 

- **Layers**: Use thin 1px borders (#E2E8F0) to define sections. Background color shifts (e.g., white cards on a #F8FAFC background) provide the primary sense of depth.
- **Shadows**: Use only two levels of shadows. A "Resting" state with a very subtle 2px blur for cards, and an "Active/Overlay" state for dropdowns and modals with a 12px blur, 10% opacity black.
- **Interactions**: On-hover states for table rows should use a subtle tint (#F1F5F9) rather than a shadow to maintain the flat, utilitarian aesthetic.

## Shapes

The shape language is rigid and deterministic. The default roundedness is set to **Soft (4px)** to take the edge off the "industrial" feel while remaining sharp enough to look professional and space-efficient. 

- **Input Fields & Buttons**: Use a 4px corner radius.
- **Status Badges**: Use a 2px radius or remain square to distinguish them from interactive buttons.
- **Large Containers**: Modals and side panels should not exceed 6px roundedness to maintain the "Dense" design narrative.

## Components

### Data Tables
Tables are the core component. Use a 1px border-bottom for rows. Row height should be 32px (compact) or 40px (standard). Header cells should have a subtle gray background (#F1F5F9) and use `label-sm` typography for clarity.

### Buttons
Primary buttons are solid Navy (#1A4480). Secondary buttons use a ghost style with a 1px border. Hover states should be a simple darken or lighten effect of 10%. Action buttons in tables should be "Icon-only" or "Small" variants (28px height).

### Status Badges
Badges are non-interactive. They use a light tinted background and dark text. For example, a "Critical" SLA badge uses a 10% Red background with 100% Red text.

### Input Fields
Inputs use a white background with a 1px Slate-200 border. On focus, they use a 1px Primary Blue border and a subtle blue glow (2px). Validation states (Error/Success) change the border color and add a small trailing icon.

### Cards & Containers
Cards are flat with a 1px border. Use them sparingly to group related form fields or data visualizations. Avoid heavy padding; 16px padding is the standard for card internals.