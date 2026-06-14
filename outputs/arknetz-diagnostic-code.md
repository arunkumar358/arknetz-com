# ArkNetz Diagnostic Code Bundle

Connection note: the preview URL http://127.0.0.1:3001 only works while the Next dev server is running. In this Codex session, the server process is no longer running, which is why the in-app browser cannot connect.

Run locally with:

```bash
npm install
npm run dev -- --hostname 127.0.0.1 --port 3001
```

## package.json

```json
{
  "name": "arknetz-com",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^15.3.4",
    "react": "^19.1.0",
    "react-dom": "^19.1.0"
  },
  "devDependencies": {
    "@types/node": "^22.15.32",
    "@types/react": "^19.1.8",
    "@types/react-dom": "^19.1.6",
    "typescript": "^5.8.3"
  }
}

```

## next.config.ts

```tsx
import type { NextConfig } from "next";

const nextConfig: NextConfig = {};

export default nextConfig;

```

## tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    },
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ]
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}

```

## app/layout.tsx

```tsx
import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: {
    default: "ArkNetz | Independent Advisory for Data, Analytics & AI",
    template: "%s | ArkNetz",
  },
  description:
    "ArkNetz helps organizations make better decisions about data, analytics, AI, vendors, and transformation investments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

```

## app/page.tsx

```tsx
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";

const pillars = [
  {
    title: "Trust",
    text: "Clarify whether data, metrics, measurement, and assumptions are reliable enough to guide important decisions.",
  },
  {
    title: "Organize",
    text: "Align capabilities, partners, operating models, governance, and investments around the work that matters most.",
  },
  {
    title: "Activate",
    text: "Turn analytics, transformation, and AI initiatives into measurable business value instead of abstract potential.",
  },
];

const serviceGroups = [
  "Measurement strategy",
  "Analytics assessment",
  "Vendor evaluation",
  "AI readiness",
  "Use case prioritization",
  "ROI measurement",
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Independent advisory for data, analytics & AI</p>
          <h1>Clarity Before Commitment</h1>
          <p>
            ArkNetz helps organizations navigate data, analytics, and AI decisions with
            confidence before they commit time, capital, and attention.
          </p>
          <div className="hero-actions">
            <Link className="button button-dark" href="/contact">
              Start a conversation <span aria-hidden="true">-&gt;</span>
            </Link>
            <Link className="button button-light" href="/services">
              View services
            </Link>
          </div>
        </div>
        <div className="hero-panel" aria-label="ArkNetz advisory framework">
          <img src="/arknetz-hero.png" alt="" aria-hidden="true" />
          <div className="framework-card">
            <p>ArkNetz Framework</p>
            <strong>Trust &gt; Organize &gt; Activate</strong>
          </div>
        </div>
      </section>

      <section className="band">
        <SectionHeading
          eyebrow="Philosophy"
          title="The work starts with the problem, not the platform."
          description="Most firms start with technology and look for problems. ArkNetz starts with the business problem and determines whether technology, data, analytics, AI, process change, or organizational change is the right answer."
        />
      </section>

      <section className="section">
        <SectionHeading eyebrow="Framework" title="Trust. Organize. Activate." />
        <div className="three-column">
          {pillars.map((pillar) => (
            <article className="card" key={pillar.title}>
              <span className="card-number">0{pillars.indexOf(pillar) + 1}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="split-section">
        <div>
          <p className="eyebrow">Advisory focus</p>
          <h2>Practical guidance across the decisions that shape data and AI value.</h2>
        </div>
        <div className="chip-list">
          {serviceGroups.map((service) => (
            <span key={service}>{service}</span>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <div>
          <p className="eyebrow">Ready to evaluate the path forward?</p>
          <h2>Bring ArkNetz in before the decision gets expensive.</h2>
        </div>
        <Link className="button button-light" href="/contact">
          Contact ArkNetz
        </Link>
      </section>
    </main>
  );
}

```

## app/about/page.tsx

```tsx
import { SectionHeading } from "@/components/section-heading";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">About ArkNetz</p>
        <h1>Independent guidance for decisions that deserve clear thinking.</h1>
        <p>
          ArkNetz is an advisory and consulting firm focused on helping organizations make
          better decisions about data, analytics, AI, and transformation.
        </p>
      </section>

      <section className="split-section">
        <div>
          <SectionHeading
            eyebrow="Positioning"
            title="Not a vendor. Not an agency. Not a systems integrator."
          />
        </div>
        <div className="prose">
          <p>
            ArkNetz is not primarily focused on selling technology. The focus is helping
            clients understand problems, evaluate options, select the right partners, and
            activate business value.
          </p>
          <p>
            The firm brings an independent perspective to moments where organizations need
            to separate signal from noise, reduce execution risk, and make decisions that
            leaders can defend.
          </p>
        </div>
      </section>

      <section className="section founder-section">
        <div className="founder-mark" aria-hidden="true">
          AK
        </div>
        <div>
          <p className="eyebrow">Founder & Principal</p>
          <h2>Arun Kumar</h2>
          <p>
            Arun has 25+ years of experience across analytics, marketing technology, data
            strategy, personalization, measurement, AI, and digital transformation.
          </p>
          <p>
            His experience includes leadership roles and client work across agencies,
            consultancies, technology platforms, healthcare, financial services, retail,
            government, and consumer brands.
          </p>
        </div>
      </section>
    </main>
  );
}

```

## app/services/page.tsx

```tsx
import { SectionHeading } from "@/components/section-heading";

export const metadata = {
  title: "Services",
};

const services = [
  {
    title: "Data Foundations",
    items: [
      "Measurement Strategy",
      "Analytics Assessment",
      "Dashboard Rationalization",
      "Data Quality Review",
      "Experimentation Frameworks",
    ],
  },
  {
    title: "Data & Analytics Transformation",
    items: [
      "Data Strategy",
      "Operating Model Design",
      "Vendor Evaluation",
      "Analytics Maturity Assessment",
      "Governance Frameworks",
    ],
  },
  {
    title: "AI Strategy & Activation",
    items: [
      "AI Readiness Assessment",
      "Workflow Mapping",
      "Use Case Prioritization",
      "AI Vendor Evaluation",
      "AI Adoption Strategy",
      "ROI Measurement",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">Services</p>
        <h1>Advisory support for data, analytics, transformation, and AI decisions.</h1>
        <p>
          ArkNetz helps organizations assess the current state, choose the right path,
          select the right partners, and focus initiatives on measurable outcomes.
        </p>
      </section>

      <section className="section">
        <SectionHeading
          eyebrow="Offerings"
          title="Focused where judgment matters."
          description="Engagements are tailored to the decision at hand, from short advisory sprints to broader transformation planning."
        />
        <div className="service-list">
          {services.map((service) => (
            <article className="service-row" key={service.title}>
              <h2>{service.title}</h2>
              <ul>
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

```

## app/experience/page.tsx

```tsx
import { SectionHeading } from "@/components/section-heading";

export const metadata = {
  title: "Experience",
};

const experienceAreas = [
  "Analytics leadership and operating model design",
  "Marketing technology and personalization strategy",
  "Measurement planning and dashboard rationalization",
  "Vendor selection and partner evaluation",
  "AI readiness, use case prioritization, and adoption planning",
  "Digital transformation across regulated and complex organizations",
];

const sectors = [
  "Healthcare",
  "Financial services",
  "Retail",
  "Government",
  "Consumer brands",
  "Technology platforms",
  "Agencies and consultancies",
];

export default function ExperiencePage() {
  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">Experience</p>
        <h1>Seasoned perspective across analytics, technology, and transformation.</h1>
        <p>
          ArkNetz brings practical experience from leadership roles and client work across
          complex organizations, platforms, and advisory environments.
        </p>
      </section>

      <section className="split-section">
        <div>
          <SectionHeading eyebrow="Selected work" title="Where ArkNetz can help." />
        </div>
        <ul className="check-list">
          {experienceAreas.map((area) => (
            <li key={area}>{area}</li>
          ))}
        </ul>
      </section>

      <section className="band">
        <SectionHeading
          eyebrow="Sector context"
          title="Built for decisions with real organizational complexity."
        />
        <div className="chip-list">
          {sectors.map((sector) => (
            <span key={sector}>{sector}</span>
          ))}
        </div>
      </section>
    </main>
  );
}

```

## app/contact/page.tsx

```tsx
import { ContactForm } from "@/components/contact-form";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <main>
      <section className="page-hero contact-hero">
        <p className="eyebrow">Contact</p>
        <h1>Start with the decision you need to make.</h1>
        <p>
          Share the context, question, or initiative in front of you. ArkNetz will help
          determine whether there is a fit for advisory support.
        </p>
      </section>

      <section className="contact-layout">
        <div className="contact-card">
          <h2>Direct contact</h2>
          <a href="mailto:arun@arknetz.com">arun@arknetz.com</a>
          <a href="tel:+12012083433">201.208.3433</a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            Arun Kumar on LinkedIn
          </a>
        </div>
        <ContactForm />
      </section>
    </main>
  );
}

```

## app/not-found.tsx

```tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">Not found</p>
        <h1>This page is not available.</h1>
        <p>The page may have moved, or the address may be incorrect.</p>
        <div className="hero-actions">
          <Link className="button button-dark" href="/">
            Return home
          </Link>
        </div>
      </section>
    </main>
  );
}

```

## app/globals.css

```css
:root {
  --ink: #111111;
  --charcoal: #252525;
  --muted: #626262;
  --line: #dedbd5;
  --paper: #fbfaf7;
  --white: #ffffff;
  --accent: #8a5b3d;
  --accent-soft: #eee5dc;
  --green: #536b5f;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: var(--paper);
  color: var(--ink);
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.5;
}

a {
  color: inherit;
  text-decoration: none;
}

p {
  color: var(--muted);
  margin: 0;
}

h1,
h2,
h3 {
  margin: 0;
  line-height: 1.08;
  font-weight: 520;
  letter-spacing: 0;
}

h1 {
  font-size: clamp(3.2rem, 7vw, 6rem);
  max-width: 11ch;
}

h2 {
  font-size: clamp(2rem, 4vw, 4rem);
}

h3 {
  font-size: 1.4rem;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  min-height: 76px;
  padding: 1rem clamp(1.25rem, 4vw, 4rem);
  background: rgba(251, 250, 247, 0.9);
  border-bottom: 1px solid rgba(17, 17, 17, 0.08);
  backdrop-filter: blur(18px);
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  font-size: 1rem;
  font-weight: 700;
}

.brand-mark {
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  border: 1px solid var(--ink);
  background: var(--ink);
  color: var(--white);
  font-size: 1.05rem;
  font-weight: 700;
}

.site-nav {
  display: flex;
  align-items: center;
  gap: clamp(0.8rem, 2vw, 1.8rem);
  color: var(--charcoal);
  font-size: 0.95rem;
}

.site-nav a {
  padding: 0.35rem 0;
  border-bottom: 1px solid transparent;
}

.site-nav a:hover {
  border-color: var(--ink);
}

.hero {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(320px, 0.95fr);
  gap: clamp(2rem, 5vw, 5rem);
  min-height: calc(100svh - 76px);
  padding: clamp(4rem, 8vw, 8rem) clamp(1.25rem, 4vw, 4rem) 3rem;
  border-bottom: 1px solid var(--line);
}

.hero-copy {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
}

.hero-copy > p:not(.eyebrow),
.page-hero > p:not(.eyebrow) {
  max-width: 720px;
  font-size: clamp(1.1rem, 2vw, 1.45rem);
}

.eyebrow {
  color: var(--accent);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  padding-top: 0.5rem;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  min-height: 46px;
  padding: 0.8rem 1rem;
  border: 1px solid var(--ink);
  font-weight: 700;
  transition: transform 160ms ease, background 160ms ease, color 160ms ease;
}

.button:hover {
  transform: translateY(-1px);
}

.button-dark {
  background: var(--ink);
  color: var(--white);
}

.button-light {
  background: transparent;
  color: var(--ink);
}

.hero-panel {
  position: relative;
  display: flex;
  align-items: flex-end;
  min-height: 520px;
  padding: clamp(1.2rem, 3vw, 2rem);
  overflow: hidden;
  background: var(--ink);
  color: var(--white);
}

.hero-panel img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.9;
}

.framework-card {
  position: relative;
  width: min(100%, 440px);
  padding: 1.4rem;
  border: 1px solid rgba(255, 255, 255, 0.22);
  background: rgba(255, 255, 255, 0.08);
}

.framework-card p {
  margin-bottom: 0.8rem;
  color: rgba(255, 255, 255, 0.72);
}

.framework-card strong {
  display: block;
  font-size: clamp(1.6rem, 4vw, 3.8rem);
  line-height: 1;
  font-weight: 520;
}

.section,
.band,
.split-section,
.cta-band,
.page-hero,
.contact-layout,
.site-footer {
  padding-right: clamp(1.25rem, 4vw, 4rem);
  padding-left: clamp(1.25rem, 4vw, 4rem);
}

.section {
  padding-top: clamp(4rem, 8vw, 7rem);
  padding-bottom: clamp(4rem, 8vw, 7rem);
}

.band {
  padding-top: clamp(4rem, 8vw, 7rem);
  padding-bottom: clamp(4rem, 8vw, 7rem);
  background: var(--white);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.section-heading {
  display: grid;
  gap: 1rem;
  max-width: 900px;
}

.section-heading p:not(.eyebrow) {
  max-width: 760px;
  font-size: 1.15rem;
}

.three-column {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 2rem;
}

.card {
  min-height: 280px;
  padding: 1.4rem;
  background: var(--white);
  border: 1px solid var(--line);
}

.card-number {
  display: block;
  margin-bottom: 4rem;
  color: var(--accent);
  font-size: 0.85rem;
  font-weight: 700;
}

.card h3 {
  margin-bottom: 0.8rem;
}

.split-section {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  gap: clamp(2rem, 6vw, 6rem);
  padding-top: clamp(4rem, 8vw, 7rem);
  padding-bottom: clamp(4rem, 8vw, 7rem);
  border-top: 1px solid var(--line);
}

.split-section h2 {
  max-width: 720px;
}

.chip-list {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 0.7rem;
}

.chip-list span {
  display: inline-flex;
  align-items: center;
  min-height: 40px;
  padding: 0.5rem 0.85rem;
  background: var(--accent-soft);
  color: var(--charcoal);
  border: 1px solid rgba(138, 91, 61, 0.18);
  font-size: 0.95rem;
  font-weight: 700;
}

.cta-band {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding-top: clamp(3rem, 6vw, 5rem);
  padding-bottom: clamp(3rem, 6vw, 5rem);
  background: var(--ink);
  color: var(--white);
}

.cta-band p {
  color: rgba(255, 255, 255, 0.7);
}

.cta-band .button {
  border-color: var(--white);
  color: var(--white);
}

.page-hero {
  display: grid;
  gap: 1.4rem;
  padding-top: clamp(5rem, 10vw, 9rem);
  padding-bottom: clamp(4rem, 8vw, 7rem);
  background: var(--white);
  border-bottom: 1px solid var(--line);
}

.page-hero h1 {
  max-width: 980px;
  font-size: clamp(2.7rem, 6vw, 5.8rem);
}

.prose {
  display: grid;
  gap: 1rem;
  max-width: 760px;
  font-size: 1.1rem;
}

.founder-section {
  display: grid;
  grid-template-columns: 220px minmax(0, 760px);
  gap: clamp(2rem, 5vw, 4rem);
  align-items: start;
}

.founder-section p {
  margin-top: 1rem;
  font-size: 1.1rem;
}

.founder-mark {
  display: grid;
  place-items: center;
  width: 220px;
  aspect-ratio: 1;
  background: var(--charcoal);
  color: var(--white);
  font-size: 3rem;
  font-weight: 700;
}

.service-list {
  display: grid;
  gap: 0;
  margin-top: 2.5rem;
  border-top: 1px solid var(--line);
}

.service-row {
  display: grid;
  grid-template-columns: minmax(220px, 0.8fr) minmax(0, 1.2fr);
  gap: 2rem;
  padding: 2rem 0;
  border-bottom: 1px solid var(--line);
}

.service-row h2 {
  font-size: clamp(1.6rem, 3vw, 2.6rem);
}

.service-row ul,
.check-list {
  display: grid;
  gap: 0.8rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.service-row li,
.check-list li {
  position: relative;
  padding-left: 1.35rem;
  color: var(--charcoal);
}

.service-row li::before,
.check-list li::before {
  position: absolute;
  top: 0.6em;
  left: 0;
  width: 0.45rem;
  height: 0.45rem;
  background: var(--green);
  content: "";
}

.contact-layout {
  display: grid;
  grid-template-columns: minmax(260px, 0.7fr) minmax(0, 1.3fr);
  gap: clamp(2rem, 6vw, 6rem);
  padding-top: clamp(4rem, 8vw, 7rem);
  padding-bottom: clamp(4rem, 8vw, 7rem);
}

.contact-card {
  display: grid;
  align-content: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background: var(--white);
  border: 1px solid var(--line);
}

.contact-card h2 {
  margin-bottom: 0.5rem;
  font-size: 1.6rem;
}

.contact-card a {
  color: var(--charcoal);
  text-decoration: underline;
  text-underline-offset: 4px;
}

.contact-form {
  display: grid;
  gap: 1rem;
}

.contact-form label {
  display: grid;
  gap: 0.45rem;
  color: var(--charcoal);
  font-size: 0.95rem;
  font-weight: 700;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  border: 1px solid var(--line);
  background: var(--white);
  color: var(--ink);
  font: inherit;
  padding: 0.9rem 1rem;
}

.contact-form input:focus,
.contact-form textarea:focus {
  outline: 2px solid rgba(138, 91, 61, 0.35);
  outline-offset: 2px;
}

.contact-form textarea {
  resize: vertical;
}

.site-footer {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  background: var(--charcoal);
  color: var(--white);
}

.site-footer p,
.site-footer a {
  color: rgba(255, 255, 255, 0.72);
}

.footer-brand {
  margin-bottom: 0.8rem;
}

.footer-brand .brand-mark {
  border-color: rgba(255, 255, 255, 0.35);
  background: var(--white);
  color: var(--ink);
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: flex-end;
  gap: 1rem;
}

@media (max-width: 900px) {
  .site-header {
    align-items: flex-start;
    flex-direction: column;
    gap: 0.85rem;
  }

  .site-nav {
    width: 100%;
    overflow-x: auto;
    padding-bottom: 0.15rem;
  }

  .hero,
  .split-section,
  .contact-layout,
  .service-row,
  .founder-section {
    grid-template-columns: 1fr;
  }

  .hero {
    min-height: auto;
    padding-top: 3rem;
  }

  .hero-panel {
    min-height: 360px;
  }

  .three-column {
    grid-template-columns: 1fr;
  }

  .card {
    min-height: auto;
  }

  .card-number {
    margin-bottom: 2rem;
  }

  .cta-band,
  .site-footer {
    align-items: flex-start;
    flex-direction: column;
  }

  .footer-links {
    justify-content: flex-start;
  }
}

@media (max-width: 560px) {
  h1 {
    font-size: 3.25rem;
  }

  .page-hero h1 {
    font-size: 2.75rem;
  }

  .brand-mark {
    width: 34px;
    height: 34px;
  }

  .site-nav {
    gap: 1rem;
    font-size: 0.9rem;
  }

  .button {
    width: 100%;
  }

  .founder-mark {
    width: 160px;
  }
}

```

## components/header.tsx

```tsx
import Link from "next/link";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="ArkNetz home">
        <span className="brand-mark" aria-hidden="true">
          A
        </span>
        <span>ArkNetz</span>
      </Link>
      <nav className="site-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

```

## components/footer.tsx

```tsx
import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <Link className="brand footer-brand" href="/" aria-label="ArkNetz home">
          <span className="brand-mark" aria-hidden="true">
            A
          </span>
          <span>ArkNetz</span>
        </Link>
        <p>Independent advisory for data, analytics, and AI decisions.</p>
      </div>
      <div className="footer-links">
        <a href="mailto:arun@arknetz.com">arun@arknetz.com</a>
        <a href="tel:+12012083433">201.208.3433</a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

```

## components/contact-form.tsx

```tsx
export function ContactForm() {
  return (
    <form className="contact-form" action="mailto:arun@arknetz.com" method="post" encType="text/plain">
      <label>
        Name
        <input name="name" type="text" autoComplete="name" required />
      </label>
      <label>
        Work email
        <input name="email" type="email" autoComplete="email" required />
      </label>
      <label>
        Organization
        <input name="organization" type="text" autoComplete="organization" />
      </label>
      <label>
        How can ArkNetz help?
        <textarea name="message" rows={6} required />
      </label>
      <button className="button button-dark" type="submit">
        Send inquiry <span aria-hidden="true">-&gt;</span>
      </button>
    </form>
  );
}

```

## components/section-heading.tsx

```tsx
type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

```

