# Implementation Plan — Modern Product Detail Page UI

Redesign the product detail page UI for Orbit Technologies by synthesizing the clean e-commerce clarity of **Medigear** (split hero, 2x3 spec chips, tabbed technical sections, product badges) with the technical authority of **SciMed** (detailed reaction/operating principles, resource downloads, standards compliance) and an interactive **Slide-Out RFQ Drawer** based on your clarified requirements.

---

## User Review Required

> [!IMPORTANT]
> Based on your selections:
> 1. **Hero Layout**: Modern split layout with interactive media gallery on the left and quick specs + key chips on the right.
> 2. **Technical Details**: Fast, responsive **Tabbed Layout** (Description & Principles, Full Technical Specifications, Applications & Standards, Key Features, Documentation & Downloads, FAQs).
> 3. **Quote Interaction**: Quick action buttons opening an intuitive **Slide-out RFQ Drawer** pre-filled with the active product details.

---

## Proposed Changes

### 1. Slide-Out RFQ Drawer Component (`src/components/product-rfq-drawer.tsx`)
- Create an interactive sliding drawer (using `motion/react`) that opens upon clicking "Enquire Now" or "Request a Quote".
- Pre-filled with:
  - Product Name, Catalogue Code, and Manufacturer Brand.
- Form fields:
  - Full Name, Laboratory / Company / University, Email Address, Contact Phone, Sample Type / Application details, Delivery Timeline.
- Instant submission feedback with immediate dispatch message, direct phone link (`+91 40 2712 3456`), and WhatsApp consultation link.
- Accessible from both the hero CTA, tab CTA, and sticky floating action bar.

### 2. Interactive Product Gallery Component (`src/components/product-gallery.tsx`)
- Modern left-column gallery matching Medigear:
  - Main viewport showcasing high-resolution instrument imagery (with fallback to multi-angle SVG CAD schematics via `InstrumentArt`).
  - Interactive multi-thumbnail selector:
    - Primary Instrument Photograph / Front View
    - Control Panel & Digital Touchscreen Interface View
    - Reaction Vessel / Combustion Bomb / Chamber Cutaway View
    - Technical Dimensions & Ports Schematic
  - Top badges: `"Exclusive Parr Partner in India"`, `"ISO 9001 Certified"`, `"Genuine OEM Warranty"`.
  - Social share links & quick compliance metadata below the gallery.

### 3. Comprehensive Product Page (`src/app/products/[slug]/page.tsx` & `src/components/product-detail-view.tsx`)
- **Split Hero Section (Top)**:
  - **Left**: `ProductGallery` with thumbnails and certification tags.
  - **Right**:
    - Hierarchy breadcrumbs & category chip.
    - Prominent H1 Product Title & Model designation.
    - Catalogue SKU badge (`Catalogue No: ORB-7200-CAL`).
    - 1-sentence executive capability statement with amber border callout.
    - Concise intro paragraph (25–35 words) explaining the core measurement purpose.
    - **Medigear-Style 2x3 Spec Chips Matrix**:
      - 6 prominent cards (e.g., *Precision Class*, *Jacket Type*, *Tests Per Hour*, *Resolution*, *Origin & Brand*, *Warranty & Calibration*).
    - **Action Buttons**:
      - Primary: `Enquire Now` (triggers RFQ slide-out drawer).
      - Secondary: `Download Spec Sheet (PDF)` & `Call Laboratory Specialist`.
    - Trust badges footer (CE & ISO Certified, Pan-India Installation, Parr Global #1 Dealer).

- **Medigear-Style Tabbed Content Section**:
  - Clean horizontal tab bar with active indicator:
    1. **Description & Working Principle**: Deep technical walkthrough of the instrument, measurement physics (e.g. true isoperibol jacket equilibrium, automatic bomb washing, digital thermometry), and laboratory workflow.
    2. **Technical Specifications**: Structured, searchable, and clean key-value table categorised into Measurement, Automation, Physical/Electrical, and Compliance.
    3. **Applications & Standard Methods**: Comprehensive test standards matrix (ASTM D5865, ISO 1928, DIN 51900, IS 1350) and supported sample types (coal, coke, biomass, waste-derived fuels, propellants).
    4. **Key Advantages & Engineering Features**: Grid of engineering highlights with checkmark badges and technical explanations.
    5. **Brochures & Resources**: Downloadable PDF spec sheets, technical whitepapers, application notes, and CAD installation requirements.
    6. **Frequently Asked Questions**: Accordion-style FAQ addressing oxygen bomb hydrotesting, calibration frequency, water requirements, and preventative maintenance.

- **Related Instruments Carousel / Grid**:
  - Keep related instruments from the same category or analytical pillar.

- **Direct Call-to-Action Band**:
  - Bottom banner with immediate access to technical engineers and quote request.

---

## Completed Implementations (Latest User Directives)

### 1. Authentic Two-Panel Mega Menu (Matching Live Website Screenshots)
- **Interactive Two-Panel Split Layout**:
  - **Left Sidebar Tab Column** (`w-80`, `#efebe4` background):
    - Lists the 8 product divisions directly matching the screenshots:
      1. **Analytical Instruments**
      2. **High Temperature High Pressure Reactor Systems**
      3. **Sample Preparation Equipment**
      4. **Laboratory & Industrial Furnaces**
      5. **Gas Generators**
      6. **Precision Balances & Weighing Scales**
      7. **Labware**
      8. **CRM's, SRM's & Laboratory Accessories**
    - **Active Tab Styling**: Deep navy background (`#002f49`), white text, bold font, and red right border stripe (`border-r-[5px] border-[#b91c1c]`), exactly matching screenshots 1 & 2.
    - Hovering or clicking any tab instantly switches the right flyout panel.
  - **Right Flyout Content Panel** (`bg-white`, multi-column responsive layout):
    - Multi-column grid (up to 3 columns) displaying subcategory section headers in bold red/rust (`#b91c1c`), with clean link lists (`#002f49` on hover).
    - Includes `VIEW ALL >` links for customized and corrosion monitoring reactor systems.
    - Displays authentic preview thumbnail images for tabs with featured instruments (matching screenshots 3, 4, 5, 6, 7).
  - **Bottom Assurance & Quotation Bar**:
    - ISO 9001:2015 certification badge, 35+ years milestone, Browse All link, and primary Request a Quote CTA.
- **Mobile Drawer Navigation**:
  - Full-depth accordion layout exposing all 8 divisions, their section headings, and sub-items.

### 2. Category & Subcategory Page Hierarchy ("Whatever Applies")
- **Clean, Clutter-Free Presentation**:
  - **If subcategories exist**: Shows only the clean Subcategories Card Grid (e.g. on `/analytical-instruments/`, `/calorimeter/`, `/reactors/`, `/reactors/hp-ht-reactors/`). No product dumping, no filter pill clutter.
  - **If no subcategories exist (leaf level)**: Shows the Product Cards Grid (e.g. on `/calorimeter/bomb-calorimeters/`, `/ash-fusion-analyzers/`, `/reactors/hp-ht-reactors/stirred-reactors/`).
  - Removed all small eyebrow titles above headings and sections across all pages.
  - Retained the standardized 3-stage structure: Hero (H1 + 20-35 words intro, no CTA) -> Content (Subcategories or Products) -> SEO Technical Guide & Standards -> Quote banner.

---

## Verification Results
- **Lint Check**: 0 errors.
- **Compile Check**: Next.js App Router production build succeeded cleanly.
- **Route & Entity Verification**: All 8 divisions and category routes verified returning HTTP 200 with proper HTML rendering.

