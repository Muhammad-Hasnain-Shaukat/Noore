# Noore Boutique — Pre-Launch Checklist & Setup Guide

This document outlines the steps and configuration placeholders to replace before opening the Noore storefront to live customers.

---

## 1. Central Store Configuration (`src/config/store.ts`)

Open [`src/config/store.ts`](file:///c:/Users/Doctor%20Computers/Desktop/Noore/src/config/store.ts) to update:

- [ ] **WhatsApp Number (`whatsapp.number`)**:
  - Replace `'923001234567'` with your verified store WhatsApp number in E.164 format (without `+` or spaces).
  - Update `whatsapp.displayNumber` with the formatted string (e.g., `+92 300 123 4567`).
- [ ] **Concierge Email (`contact.email`)**:
  - Set your customer care inbox (e.g., `concierge@noore.com` or `orders@noore.com`).
- [ ] **Operating Hours (`contact.hours`)**:
  - Update business schedule and customer support response window.
- [ ] **Store Location (`contact.locationCity`)**:
  - Set primary city and country.
- [ ] **Instagram Handle (`contact.instagramHandle` & `instagramUrl`)**:
  - Link to your official Instagram page.
- [ ] **Currency Settings (`currency.code` & `currency.symbol`)**:
  - Currently configured to `PKR` (`Rs.`). Adjust if selling in USD, GBP, AED, or SAR.

---

## 2. Product Catalog Data (`src/data/products.ts`)

Open [`src/data/products.ts`](file:///c:/Users/Doctor%20Computers/Desktop/Noore/src/data/products.ts) to adjust:

- [ ] **Pricing & Stock**:
  - Review unit prices in PKR.
  - Set `inStock: true/false` for individual products or colors as inventory fluctuates.
- [ ] **Abaya Sizing**:
  - Verify garment length sizing options (`['50', '52', '54', '56', '58']`).
- [ ] **Product Photography**:
  - Replace sample 3:4 imagery with your official brand campaign photographs.
  - Ensure all uploaded images maintain a **3:4 aspect ratio** for visual consistency.

---

## 3. Fabric & Sizing Guides

- [ ] **Abaya Measurements (`src/components/common/SizeGuideModal.tsx` & `src/pages/SizeGuidePage.tsx`)**:
  - Confirm the recommended height, bust, and sleeve measurements match your tailor's garment specifications.
- [ ] **Care Instructions (`src/pages/CareGuidePage.tsx`)**:
  - Update any special fabric handling instructions specific to your textile suppliers.

---

## 4. Production Deployment & Routing

- [ ] **Production Build**:
  - Run `npm run build` to verify clean compilation.
- [ ] **Server Fallback / Rewrites**:
  - Since Noore uses client-side routing (React Router), configure your host (Vercel, Netlify, Cloudflare Pages, or Nginx) to redirect all 404 paths back to `index.html` (e.g., via `_redirects` or `vercel.json`).
