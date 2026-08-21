# ⚡ Production-Ready Master Prompt: Om Ganesh Electricals & Appliances Website

> **Use this prompt with any modern AI coding model or framework (Next.js, React + Vite, Remix, Vue/Nuxt) to generate the complete website.**

---

```markdown
# Comprehensive Specification: Om Ganesh Electricals & Appliances Web Platform

## 1. Project Overview & Objective
Build a modern, high-performance, and conversion-focused web application for **"Om Ganesh Electricals & Appliances"**, a premier local electrical retail store and home electrical services provider. 

The website serves three core purposes:
1. **Showcase Inventory**: Display high-demand electrical appliances such as energy-saving BLDC ceiling fans, smart LED lighting, modular switchboards, inverters, geysers, wiring, and kitchen appliances.
2. **Electrical Services & Electrician Booking**: Allow homeowners and commercial clients to easily book verified electricians for installations, fan repair, full house rewiring, and appliance servicing.
3. **Instant Quote & WhatsApp Ordering**: Provide an interactive quotation cart with one-click WhatsApp inquiry generation and store appointment scheduling.

---

## 2. Target Audience & Business Identity
- **Business Name**: Om Ganesh Electricals & Appliances
- **Tagline**: *"Powering Homes with Trust, Safety & Efficiency Since 2012"*
- **USP**: 100% Genuine Brand Warranty (Havells, Crompton, Philips, Atomberg, Polycab, Luminous), Certified & Insured Technicians, Same-Day Doorstep Service & Delivery.
- **Audience**: Homeowners, interior designers, electrical contractors, landlords, and local residents seeking reliable appliances and electrical repairs.

---

## 3. Tech Stack Requirements
- **Framework**: React 18+ (Vite or Next.js 14+ App Router)
- **Language**: TypeScript (Strict typing for all data structures)
- **Styling**: Tailwind CSS (Sophisticated palette: Warm Amber/Gold, Deep Slate Blue `#0f172a`, Crisp Charcoal, and Warm Neutral off-white `#fafaf9`)
- **Icons**: Lucide React (`lucide-react`)
- **Animations**: Motion (`motion/react` or `framer-motion`) for smooth card reveals, tabs, and interactive modals
- **State Management**: Client-side React State (Zustand or Context API) with persistent LocalStorage for Quote Cart & Booking inquiries.

---

## 4. Key Pages & Structural Sections

### A. Top Contact Bar & Navigation Header
- **Top Utility Bar**: Store phone number, Direct WhatsApp chat link, Store physical address & landmark, Store operating hours (e.g., *Mon-Sun: 9:00 AM – 9:30 PM*), and "Same-day doorstep delivery available" ticker.
- **Main Navigation**:
  - Store Logo with electric/spark badge.
  - Links: Products Catalog, Electrical Services, BLDC Savings Calculator, Authorized Brands, Customer Reviews, Store Location & Contact.
  - Interactive Action Buttons:
    - **Quote Cart Indicator** (showing count of selected items).
    - **"Book Electrician" Primary CTA**.
    - **"Call Store" Quick Action**.

### B. High-Converting Hero Section
- Dynamic headline highlighting genuine appliances, best local prices, and professional installation.
- Quick search bar with instant product/service autocomplete.
- Key Trust Badges:
  - ⚡ 100% Authorized Genuine Brands with Manufacturer Warranty
  - 🛠️ Verified & Police-checked Local Electricians
  - 🚚 Free Doorstep Delivery on orders above ₹1,500 / $50
  - ⏱️ 60-Minute Emergency Electrical Assistance
- Quick Category Filter chips (Ceiling & BLDC Fans, LED & Chandeliers, Switchgear & Wires, Inverters, Geysers).

### C. Interactive Product Catalog
- **Categories**:
  1. *Ceiling & BLDC Energy-Saving Fans* (Atomberg Renesa, Crompton SilentPro, Havells Glaze, Orient Aerostorm)
  2. *LED Lighting & Decorative Fixtures* (Philips Smart WiFi Bulbs, Warm White Panel Lights, Chandeliers, Floodlights)
  3. *Modular Switches & Sockets* (Anchor by Panasonic, Schneider Opale, Legrand Arteor, Smart Touch Panels)
  4. *Wires, Cables & Switchgear* (Polycab Flame-Retardant 1.5/2.5 sq mm, MCB Distribution Boards, Isolators)
  5. *Inverters, Batteries & Solar* (Luminous Sine Wave, Microtek, Tubular Batteries)
  6. *Water Heaters & Kitchen Appliances* (Bajaj 15L/25L Storage Geysers, Immersion Rods, Induction Cooktops)
- **Filter & Search Controls**:
  - Live search by product name, brand, or model.
  - Category selector tabs with icons and item counts.
  - Price range slider and "In Stock" filter.
- **Product Card Details**:
  - High-res product visual representation.
  - Brand tag, Star Energy Efficiency badge, Warranty term (e.g., "2-Year Onsite Warranty").
  - Technical specs preview (Wattage, Air Delivery CFM, Lumens, RPM).
  - Price & M.R.P. with discount calculation.
  - "Add to Quote / Order" and "Quick Spec Sheet" modal trigger.

### D. Electrical Services & Technician Booking Hub
- Showcase bookable services:
  - Ceiling Fan & BLDC Fan Installation / Repair
  - LED False Ceiling Lighting Setup & Chandelier Fitting
  - New House Electrical Wiring & Distribution Board Upgrade
  - Inverter & Battery Home Installation
  - Geyser / Water Heater Repair & Fitting
  - Short Circuit & Emergency Fault Diagnostics
- **Interactive Service Booking Workflow**:
  1. Select Service & Quantity of fixtures.
  2. Choose preferred Date & Time slot (Morning, Afternoon, Evening).
  3. Enter customer name, phone number, and street address.
  4. Submit to instantly generate booking reference + pre-formatted WhatsApp message for instant dispatch.

### E. Interactive Energy & Bill Savings Calculator
- An educational & sales-converting tool allowing users to calculate annual electricity bill savings by upgrading from standard 75W ceiling fans to 28W BLDC fans, and from traditional 60W bulbs to 9W LED lighting.
- Inputs: Number of Fans, Daily Usage Hours, Electricity Tariff rate (per kWh unit).
- Real-time Output: Yearly units saved (kWh), Yearly Money Saved (Currency), and CO₂ footprint reduction.

### F. Authorized Brand Partners & Quality Assurance
- Grid of authorized dealer logos: Philips, Crompton, Havells, Atomberg, Polycab, Anchor by Panasonic, Luminous, Schneider Electric, Finolex.
- Clear statement on genuine billing, GST tax invoice, and brand warranty support.

### G. Customer Testimonials & Google Review Highlights
- Real customer stories praising quick service, fair pricing, genuine products, and tidy electrician work.
- Average 4.9★ customer rating badge.

### H. Store Location, Interactive Hours, FAQ & Contact Form
- **Store Location & Hours**: Full address with Google Maps directions button, parking availability note, payment modes accepted (UPI, Cards, Cash, EMI).
- **FAQ Accordion**: Common questions regarding warranty claims, electrician visiting charges, bulk order discounts for contractors, and return policies.
- **Direct Contact Form**: For custom commercial quotations, apartment complex tenders, and inquiries.

### I. Interactive Quote Summary & WhatsApp Checkout
- Side drawer / modal showing all selected appliances and requested services.
- Detailed price breakdown with estimated totals.
- "Send to WhatsApp for Best Store Discount" button that formats the order with item names, quantities, and customer details into a one-tap WhatsApp link (`https://wa.me/...`).
- "Download Estimate Summary" button for offline reference.

---

## 5. UI/UX & Design Guidelines
- **Color Theme**:
  - Primary: Energetic Warm Amber / Electrical Gold (`#f59e0b` / `#d97706`) paired with Deep Slate Blue (`#0f172a` and `#1e293b`).
  - Background: Crisp off-white `#fafaf9` with subtle warm borders (`#e2e8f0`).
  - Accents: Emerald Green for WhatsApp and verified warranty badges (`#10b981`).
- **Typography**: Clean sans-serif headings with high legibility and balanced optical hierarchy.
- **Responsiveness**: Fluid layout matching desktop, tablet, and mobile with thumb-friendly buttons and bottom action sheets on mobile.
- **No Placeholders**: Include complete, realistic product specifications, prices, warranties, and phone contacts.

---

## 6. Data Schema Structure (TypeScript)
```typescript
export interface Product {
  id: string;
  name: string;
  category: 'fans' | 'lighting' | 'switches' | 'wires' | 'inverters' | 'appliances';
  brand: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviewsCount: number;
  inStock: boolean;
  warranty: string;
  specs: Record<string, string>;
  image: string;
  featured?: boolean;
  bldc?: boolean;
}

export interface ElectricalService {
  id: string;
  title: string;
  category: string;
  startingPrice: number;
  duration: string;
  description: string;
  includedFeatures: string[];
  icon: string;
}

export interface BookingRequest {
  id: string;
  serviceId: string;
  serviceName: string;
  customerName: string;
  customerPhone: string;
  address: string;
  preferredDate: string;
  preferredTimeSlot: string;
  notes?: string;
  status: 'pending' | 'confirmed' | 'completed';
}
```
```
