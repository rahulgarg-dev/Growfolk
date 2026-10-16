# Growfolk — Websites, Software & Digital Solutions

<div align="center">
  <img src="public/logo.png" alt="Growfolk Logo" width="220" />
  <p><strong>Modern, high-performance web applications and digital engineering for growing businesses, startups, and product teams.</strong></p>

  <p>
    <a href="https://growfolk.in"><strong>growfolk.in »</strong></a>
  </p>

  <p>
    <img src="https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React" />
    <img src="https://img.shields.io/badge/Vite-5.4.11-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite" />
    <img src="https://img.shields.io/badge/TailwindCSS-3.4.17-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/React_Router-6.28.0-CA4245?style=flat-square&logo=react-router&logoColor=white" alt="React Router" />
    <img src="https://img.shields.io/badge/Lucide_Icons-0.460.0-F97316?style=flat-square" alt="Lucide Icons" />
    <img src="https://img.shields.io/badge/License-Proprietary-gray?style=flat-square" alt="License" />
  </p>
</div>

---

## 📌 Overview

**Growfolk** is the official web platform for Growfolk (`growfolk.in`), a boutique digital engineering and web development studio. The website is crafted to showcase core services, transparent pricing models, company values, and streamlined client enquiry channels.

Engineered with **React 18**, **Vite**, and **Tailwind CSS**, the application delivers near-instant page transitions, responsive layouts, accessible UI components, and headless form handling.

---

## ✨ Features & Architecture

- **🚀 Lightning-Fast SPA Experience:** Instant route transitions powered by React Router v6 and optimized asset bundling via Vite.
- **📱 Fully Responsive Design:** Mobile-first layout with smooth fluid typography, subtle micro-interactions, and custom scroll-reveal animations.
- **📩 Headless Enquiry Processing:** Integrated with **PostDrop** (`postdrop.online`) for asynchronous AJAX contact form submission without page redirects, featuring client-side schema validation and fallback contact methods.
- **💬 Direct WhatsApp Engagement:** Floating interactive WhatsApp action button connected directly to business representatives.
- **🔍 SEO & Meta Management:** Built-in dynamic document titles and meta tag updates across all routes via custom `usePageMeta` hook.
- **🌐 Cloud-Ready Routing:** Pre-configured route rewrite fallbacks for **Vercel** (`vercel.json`) and **Netlify** (`public/_redirects`).
- **⚙️ Centralized Configuration:** Easily manage business contact details, team members, services, and FAQ content via single-source configuration files.

---

## 🗺️ Page Structure

| Route | Page | Description |
| :--- | :--- | :--- |
| `/` | **Home** | Hero introduction, core value propositions, service highlights, execution roadmap, audience personas, FAQs, and lead call-to-actions. |
| `/services` | **Services** | Detailed breakdown of the 6 core offerings: Web Development, Web Apps, Bug Fixing, QA Testing, SEO, and Maintenance. |
| `/about` | **About** | Studio mission, working principles, full-stack technology capabilities, and leadership team overview. |
| `/pricing` | **Pricing & Scope** | Transparent custom quotation workflow, scope protection guidelines, budget parameters, and FAQ. |
| `/contact` | **Contact** | Interactive enquiry form with budget picker, project category selection, validation errors, and direct contact details. |
| `*` | **404 Not Found** | User-friendly fallback screen with quick navigation links back to safe routes. |

---

## 🛠️ Tech Stack

- **Framework:** [React 18](https://react.dev/)
- **Build Tooling:** [Vite 5](https://vitejs.dev/)
- **Styling:** [Tailwind CSS 3](https://tailwindcss.com/) with PostCSS & Autoprefixer
- **Routing:** [React Router 6](https://reactrouter.com/)
- **Iconography:** [Lucide React](https://lucide.dev/)
- **Form Service:** Headless form submission with [PostDrop](https://postdrop.online)
- **Deployment Targets:** Vercel, Netlify, or static cloud hosting

---

## 📂 Project Directory

```text
growfolk/
├── public/                 # Static assets and deployment rewrites
│   ├── _redirects          # Netlify SPA routing rules
│   ├── favicon.png         # Site favicon
│   ├── apple-touch-icon.png
│   ├── logo.png            # Growfolk brand logo
│   ├── logo-mark.png       # Brand icon mark
│   └── hero-showcase.jpg   # Hero showcase graphic
├── src/
│   ├── components/         # Reusable presentation & layout components
│   │   ├── Navbar.jsx      # Top navigation with mobile toggle
│   │   ├── Footer.jsx      # Global footer with quick links & legal info
│   │   ├── ContactForm.jsx # AJAX multi-field enquiry form
│   │   ├── CTA.jsx         # Call-to-action banner section
│   │   ├── Logo.jsx        # Responsive brand logo component
│   │   ├── PageHeader.jsx  # Consistent page title & lead header
│   │   ├── Reveal.jsx      # Scroll-triggered viewport animation
│   │   └── WhatsAppFab.jsx # Floating quick-contact button
│   ├── pages/              # Primary route views
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── About.jsx
│   │   ├── Pricing.jsx
│   │   ├── Contact.jsx
│   │   └── NotFound.jsx
│   ├── App.jsx             # Top-level routing and layout wrapper
│   ├── main.jsx            # React root mount
│   ├── config.js           # Single source of truth for business & contact info
│   ├── data.js             # Content catalogue (services, steps, FAQs, etc.)
│   ├── validation.js       # Client-side form validation logic
│   ├── usePageMeta.js      # Dynamic page title & SEO meta helper
│   └── index.css           # Global typography, animations & Tailwind imports
├── .gitignore
├── index.html              # HTML shell & font definitions
├── package.json            # Dependencies and scripts
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.js      # Custom theme colors, fonts & extensions
├── vercel.json             # Vercel SPA routing rules
└── vite.config.js          # Vite build configuration
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (version `18.0.0` or higher) installed on your system.

### 1. Clone the Repository

```bash
git clone https://github.com/rahulgarg-dev/Growfolk.git
cd Growfolk
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables (Optional)

Create a `.env` file in the project root if you are configuring a custom PostDrop form integration:

```env
# PostDrop Public Form ID (e.g., pd_xxxxxxxx)
VITE_POSTDROP_ID=your_postdrop_id_here

# Alternatively, set a direct form submission endpoint URL
VITE_FORM_ENDPOINT=https://postdrop.online/api/submit/your_id
```

> **Note:** If no endpoint or ID is provided, the contact form gracefully falls back to an organized direct email workflow (`mailto:`).

### 4. Start Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

### 5. Production Build

```bash
# Compile and bundle optimized static files to /dist
npm run build

# Preview the production build locally
npm run preview
```

---

## ⚙️ Configuration & Customization

The project is structured so business owners and developers can customize content without touching core layout code:

| File | Purpose | What to edit |
| :--- | :--- | :--- |
| `src/config.js` | Business Details | Studio phone number, WhatsApp contact number, team emails, and domain name. |
| `src/data.js` | Content & Offerings | Service descriptions, pricing guidelines, client types, roadmap steps, and FAQs. |
| `src/validation.js` | Form Rules | Field lengths, required fields, phone/email validation patterns. |
| `tailwind.config.js` | Brand Theming | Color palettes (`forest`, `amber`, `stone`), typography, and container sizes. |
| `public/` | Brand Assets | Replace `logo.png`, `logo-mark.png`, `favicon.png`, and showcase images. |

---

## 🚢 Deployment

The project is pre-configured for static single-page application hosting with zero-config rewrites:

### Vercel
Directly import the GitHub repository in [Vercel](https://vercel.com/). The included `vercel.json` ensures direct route URLs (e.g., `/services`, `/contact`) resolve properly.

### Netlify
Connect the repository to [Netlify](https://www.netlify.com/). Build command: `npm run build`, Publish directory: `dist`. The `public/_redirects` file handles client-side route fallback.

---

## 👥 Studio Leadership

- **Rahul Garg** — Owner & Tech Lead (`rahul@growfolk.in`)
- **Vanita Panda** — Business Development (`vanita@growfolk.in`)

---

## 📄 License

Copyright © Growfolk. All rights reserved.
