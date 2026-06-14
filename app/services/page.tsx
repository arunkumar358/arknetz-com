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
