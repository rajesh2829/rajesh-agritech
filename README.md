# Rajesh Samysundaram — Personal Portfolio

> **Agricultural Engineer & Agri-Tech Full Stack Developer**  
> *"From Field to Code — Engineering smarter farms with technology."*

A production-ready personal portfolio built with Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, and next-themes. Designed with custom domain aesthetics tailored for modern agri-tech and systems engineering.

---

## 🌾 Tech Stack

- **Framework:** Next.js (App Router) + TypeScript
- **Styling:** Tailwind CSS (with custom agronomic tokens & CSS variables)
- **Animations:** Framer Motion (count-ups, scroll progress, reveal states)
- **Icons:** Lucide React
- **Theming:** `next-themes` (light mode default, smooth dark mode toggle)
- **Forms & Validation:** `react-hook-form` + `zod`
- **Email Service:** Resend API with automatic `mailto` fallback
- **Typography:** Fraunces (editorial serif headings) + DM Sans (body)

---

## 🚀 Quick Setup & Local Development

1. **Clone or Navigate to the Project:**
   ```bash
   cd rajesh-portfolio
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   ```bash
   cp .env.example .env.local
   ```
   Add your Resend API key and recipient email if you want active form dispatch:
   ```env
   RESEND_API_KEY="re_your_api_key_here"
   CONTACT_TO_EMAIL="srajeshs021@gmail.com"
   ```
   *(Note: If `RESEND_API_KEY` is not provided, the contact form will automatically and gracefully open the visitor's email client with pre-filled details).*

4. **Run the Development Server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Lint and Production Build:**
   ```bash
   npm run lint
   npm run build
   ```

---

## 📁 Project Architecture

```
rajesh-portfolio/
├── app/
│   ├── api/contact/route.ts       # Contact form endpoint with Resend & fallback
│   ├── projects/[slug]/page.tsx   # Dynamic deep-dive case study pages
│   ├── globals.css                # Agronomic theme tokens, noise, animations
│   ├── layout.tsx                 # Root layout, Google Fonts, JSON-LD schema
│   ├── page.tsx                   # Main single-page portfolio layout
│   ├── robots.ts                  # Search engine crawler instructions
│   ├── sitemap.ts                 # Dynamic XML sitemap generator
│   └── icon.svg                   # Brand favicon leaf icon
├── components/
│   ├── layout/                    # Navbar, Footer
│   ├── providers/                 # ThemeProvider (next-themes)
│   ├── sections/                  # Hero, Marquee, Stats, About, FocusAreas, Projects, Journey, Skills, Gallery, Contact
│   └── ui/                        # ImageWithFallback, ScrollProgressBar, ThemeToggle, TopographicPattern, NoiseOverlay
├── data/                          # All content lives here! (No need to touch components)
│   ├── site.ts                    # Bio, social links, location, meta
│   ├── about.ts                   # About story, highlights, quote
│   ├── expertise.ts               # Focus areas (irrigation, soil, mechanization, etc.)
│   ├── projects.ts                # Project case studies and metadata
│   ├── skills.ts                  # Agronomy and technical tooling panels
│   ├── timeline.ts                # Experience, education, certifications
│   └── gallery.ts                 # Field and work photo descriptions
└── public/
    ├── images/
    │   ├── rajesh.jpeg            # Hero profile photograph
    │   ├── X3_NexSensBanner.jpg   # Nexsens project showcase
    │   ├── torchlite1.jpg         # Torchlite project showcase
    │   ├── nexreon.png            # Nexreon Portal showcase
    │   ├── agri_engineering.jpg  # Academic research showcase
    │   └── gallery/               # 1.jpg to 8.jpg field and work photos
    └── resume.pdf                 # Downloadable resume document
```

---

## ✏️ How to Edit Content

All content is strictly separated from component presentation in the `/data` directory:

| Content Area | Data File | Notes |
|---|---|---|
| **Social Links & Bio** | `data/site.ts` | Change GitHub (`githubUrl`), LinkedIn, email, WhatsApp, hero bio |
| **About Story** | `data/about.ts` | Edit narrative, college details, and highlight cards |
| **Focus Areas** | `data/expertise.ts` | Add or update agriculture engineering specializations |
| **Projects & Case Studies**| `data/projects.ts` | Update live links, tags, problem, approach, solution |
| **Career Timeline** | `data/timeline.ts` | Add new work experience, education, or certifications |
| **Skills & Tools** | `data/skills.ts` | Add new languages, libraries, or engineering methodologies |
| **Gallery** | `data/gallery.ts` | Update photo captions, tags, and locations |

---

## 🖼️ How to Replace Images

1. **Profile Photo:**
   - Replace `/public/images/rajesh.jpeg` with your desired portrait.
2. **Resume PDF:**
   - Replace `/public/resume.pdf` with your updated CV document.
3. **Project Screenshots:**
   - Replace `/public/images/X3_NexSensBanner.jpg`, `torchlite1.jpg`, `nexreon.png`, or `agri_engineering.jpg`.
4. **Gallery Photos:**
   - Drop new photos into `/public/images/gallery/` named `1.jpg` through `8.jpg`.
   - Update `data/gallery.ts` with matching captions.
   - *Resilience Guarantee:* An `ImageWithFallback` component is active across all image views. If an image file is missing, an elegant agronomic gradient card will render smoothly without broken layout shifts.

---

## 🌐 Deploying to Vercel

1. Push your repository to GitHub.
2. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. In **Environment Variables**, add:
   - `RESEND_API_KEY`: Your Resend API token
   - `CONTACT_TO_EMAIL`: `srajeshs021@gmail.com`
   - `NEXT_PUBLIC_SITE_URL`: `https://your-domain.vercel.app`
5. Click **Deploy**. Vercel will build and distribute your portfolio across their global edge network.

---

## 📄 License
MIT License © 2026 Rajesh Samysundaram.
