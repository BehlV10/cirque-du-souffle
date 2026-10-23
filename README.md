# Cirque du Soufflé 🎪🍫

A high-performance modern redesign for **Cirque du Soufflé** (Chef T Lawrence-Simon — Somerville, MA). Merging French haute pâtisserie with theatrical aerial circus arts.

Built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Stripe Checkout**.

---

## ✨ Features

- **Theatrical Culinary Aesthetic:** Deep midnight & gold design inspired by circus tent acrobatics and jewel-gloss chocolate bonbons.
- **Accolades & Press Showcase:** Highlighting Chef T's achievements on FOX/Hulu's *Crime Scene Kitchen*, Food Network Canada's *Great Chocolate Showdown*, and master training under Chef Amaury Guichon and Robuchon.
- **Interactive E-Commerce Catalog:**
  - Seasonal chocolate bonbon drops and French macarons.
  - Official merchandise (Aerial lyra tanks, tees, linen kitchen towels, totes) with live size & color variant selectors.
  - Interactive Quick View modal.
- **Persistent Slide-Over Shopping Bag:**
  - Add/remove items with quantity stepper.
  - Free shipping progress meter (Free shipping over $60).
  - Saved in browser `localStorage`.
- **Stripe Payments Integration:**
  - Next.js serverless route at `/api/checkout` with Stripe Checkout session generation.
  - Interactive demo simulator with test card authorization and order receipt when testing without live API keys.
- **Tasting Menu Reservation & Inquiry Flow:** 5-course theatrical dessert experience deposit booking and private event inquiries.

---

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure Stripe (Optional):**
   Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
   Add your test/live Stripe API keys from [Stripe Dashboard](https://dashboard.stripe.com/apikeys). *(Note: Without keys, the site runs in interactive Demo Checkout Mode).*

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Production build:**
   ```bash
   npm run build
   npm start
   ```

---

## 💳 How Cart & Payments Work

1. **Client State (`src/context/CartContext.tsx`):**
   Manages cart items, quantities, subtotal, and free shipping progress. Persists between page reloads using `localStorage`.

2. **Checkout Endpoint (`src/app/api/checkout/route.ts`):**
   When the user clicks **"Checkout with Stripe"**, the cart items are sent to `/api/checkout`. If `STRIPE_SECRET_KEY` is present, it creates a hosted Stripe Checkout session with line items and shipping options. If running locally without keys, it activates the built-in simulated checkout modal with receipt generation.

---

## 🌐 Deploying to GitHub & Hosting

### Option 1: Vercel (Recommended for Stripe API)
1. Push this repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Add `STRIPE_SECRET_KEY` and `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` in Vercel environment variables.
4. Instant free deployment with custom domain support.

### Option 2: GitHub Pages (Static Hosting)
Add `output: 'export'` to `next.config.ts` and deploy directly via GitHub Actions.
