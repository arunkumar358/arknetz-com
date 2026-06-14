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
