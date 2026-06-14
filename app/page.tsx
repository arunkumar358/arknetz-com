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
          <h1>Trust. Organize. Activate.</h1>
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
