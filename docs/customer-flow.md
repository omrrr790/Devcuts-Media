# Devcuts Media — Customer Flow & Site Hierarchy

This document describes how a visitor moves through the site, what each button
does, and the single conversion hierarchy that every page follows.

---

## 1. The one primary action

Every page funnels toward **ONE primary conversion**: the **Project Brief**.

```
Start a Project  →  #contact  →  #brief-form  →  brief delivered on WhatsApp
```

Two supporting channels exist for people who are not ready to fill a form:

- **WhatsApp** — instant chat (`https://wa.me/923405609087`)
- **Email** — `mailto:hello@devcuts.com`

Nothing else competes for the primary click. Research/navigation links
(`Work`, `Process`, `Reviews`, `Services`) are intentionally *secondary*.

---

## 2. Conversion hierarchy (tiered)

| Tier | Intent | Action | Goes to |
|------|--------|--------|---------|
| **1 — Primary** | High intent, ready to talk | **Start a Project / Start your brief** | `/#contact` → `#brief-form` |
| **2 — Instant** | Wants to talk now | **WhatsApp** / **Email** | `wa.me/923405609087` · `mailto:hello@devcuts.com` |
| **3 — Research** | Still evaluating | See Our Work, How we work, Reviews | `#work`, `#process`, `#testimonials` |
| **4 — Product** | Different product | **Devcuts Learn** | `https://learn.devcuts.com/login` (new tab) |

---

## 3. The journey

### Stage 1 — Land (Awareness)
Visitor arrives at `/` (organic, ads, referral, or social).

- **Hero headline** + trust pills (`ShieldCheck`, `Clock`, etc.)
- **Two buttons:**
  - `Start Your Project` → scrolls to `#contact` (**primary**)
  - `See Our Work` → scrolls to `#work` (research)

### Stage 2 — Build trust (Interest)
Auto-scrolling sections, no CTAs — they exist to reassure:

- **TrustedBy** — "Trusted across Pakistan & beyond", client logos, stats
- **Stats** — projects delivered, clients, countries, rating
- **Process** — how we work, ends with a text link → `#contact`
- **Services** (`#work`) — 6 services with real product screenshots; each card
  → `/services/[slug]`; "view all" → `/services`

### Stage 3 — Prove it (Evaluation)
- **Testimonials** (`#testimonials`) — client reviews
- **FAQ** (`#faq`) — objection handling; ends with a link → `#contact`

### Stage 4 — Convert (Decision)
The **Get In Touch** section (`id="contact"`) is the conversion hub.
It presents the hierarchy explicitly:

1. **Primary card — "Start a Project Brief"** → `#brief-form`
   (the fastest route to a fixed quote)
2. **Secondary cards:**
   - **WhatsApp Us** → `wa.me/923405609087`
   - **Email Us** → `mailto:hello@devcuts.com`
3. **The brief form** (`#brief-form`) — Name, Email, Phone, Project type,
   Budget, Timeline, Details
4. **Bottom band — "Book a 20-minute screen-share"**
   - `Request a walkthrough` → `#brief-form`
   - `Chat on WhatsApp` → `wa.me`

### Stage 5 — Action (What the customer faces)
Filling the brief and pressing **Send Project Brief**:

- Required: **Name, Email, Project Details** (inline error if missing)
- On submit, the browser **opens WhatsApp** with a pre-written message
  containing every field of the brief, and a success state shows on the button.
- We reply with a proposal — typically within a few hours.

> **Delivery channel:** the form currently hands the brief to WhatsApp because
> there is no backend/email service wired up yet. Replace the `window.open(...)`
> call in `CTA.tsx → handleSubmit` with a real API/Formspree endpoint when one
> is available.

---

## 4. Global navigation (header)

| Element | Destination |
|---------|-------------|
| Logo | `/` |
| Home | `/` |
| Services (mega menu) | 6 service pages + "view all" |
| Work | `/#work` |
| Process | `/#process` |
| Reviews | `/#testimonials` |
| Blog | `/blog` |
| About | `/about` |
| **Contact** | `/#contact` |
| **Devcuts Learn** | `https://learn.devcuts.com/login` (new tab) |
| Mobile: Start a project | `/#contact` |
| Mobile: Chat on WhatsApp | `wa.me/923405609087` |

> The header shows **no phone number** — contact happens via Contact, Learn,
> and WhatsApp only.

---

## 5. Page-by-page CTA map

### Homepage `/`
- Hero: `Start Your Project` → `#contact` · `See Our Work` → `#work`
- Process: text link → `#contact`
- Services: cards → `/services/[slug]`
- FAQ: link → `#contact`
- CTA hub: see Stage 4 above
- Floating: WhatsApp → `wa.me`

### About `/about`
- Team + story, ends with CTA → `/#contact`

### Services index `/services`
- Service cards → `/services/[slug]`
- CTA → `/#contact`

### Service detail `/services/[slug]`
- Breadcrumb → `/services`
- Hero: primary → `/#contact` · secondary → `/#work`
- Related services → `/services/[slug]`
- Bottom CTA → `/#contact`

### Blog `/blog`
- Index: featured post + grid; each card → `/blog/[slug]`
- Category chips, reading time, dates
- Purpose: SEO content surface + trust building

### Blog article `/blog/[slug]`
- Breadcrumb → Home / Blog / Category
- Body + author box + project CTA (`/#contact`)
- Tags, "more from the blog"
- SEO: per-post metadata + BlogPosting JSON-LD

### Legal pages `/privacy` · `/terms` · `/cookies`
- Shared `LegalPage` component (hero + document card + CTA)
- Linked from the footer; each has its own metadata + canonical

### Footer (all pages)
- Brand → `/`
- `Book a Call` → `/#contact` · `See our work` → `/#work`
- Service + company links (incl. Blog)
- Contact block: email, phone (+92 340 5609087), Islamabad, hours
- Legal: Privacy Policy `/privacy` · Terms `/terms` · Cookie Policy `/cookies`
- Back to top → `#top`

---

## 6. Anchor reference

| Anchor | Section |
|--------|---------|
| `#top` | `<main>` (layout) |
| `#work` | Services |
| `#process` | Process |
| `#testimonials` | Testimonials |
| `#faq` | FAQ |
| `#contact` | Get In Touch hub |
| `#brief-form` | The project brief form |

---

## 7. Known gaps / follow-ups

- **Brief delivery** is WhatsApp-only (no backend). Wire a real endpoint to
  also capture leads server-side.
- **Book-a-call** has no calendar integration; it routes through the form /
  WhatsApp. Add a Calendly-style link when available.
- **Blog content** lives in `app/blog/data.ts` (static). Move to a CMS when
  posts need a non-developer editing workflow.
- **Domain** is set to `https://www.devcuts.com` in `metadataBase`, `app/data/site.ts`,
  `sitemap.ts`, and `robots.ts` — single source of truth is `app/data/site.ts`.

## 8. SEO setup

- **Files:** `app/sitemap.ts` → `/sitemap.xml`, `app/robots.ts` → `/robots.txt`,
  `app/manifest.ts` → `/manifest.webmanifest`, `app/opengraph-image.tsx` → social card.
- **Meta:** unique title + description + canonical per page; root template in `layout.tsx`.
- **Schema (JSON-LD):** `ProfessionalService` + `WebSite` (site-wide), `FAQPage` (home),
  `Service` + `BreadcrumbList` (service pages), `Blog` (blog index),
  `BlogPosting` + `BreadcrumbList` (blog posts).
- **On-page:** single `<h1>` per page, descriptive `alt` on images, responsive viewport,
  theme color, favicons/apple-touch/Android icons.
- **GSC:** submit `/sitemap.xml`; watch Core Web Vitals + Coverage → indexing.
