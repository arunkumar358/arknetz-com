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
