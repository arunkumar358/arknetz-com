import { SectionHeading } from "@/components/section-heading";

export const metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">Legal</p>
        <h1>Privacy Policy</h1>
        <p>Last updated: June 2026</p>
      </section>

      <section className="split-section">
        <div>
          <SectionHeading
            eyebrow="Privacy"
            title="Information We Collect"
          />
        </div>
        <div className="prose">
          <p>
            ArkNetz respects your privacy. This website does not collect personal
            information unless you voluntarily provide it by contacting us via email
            or LinkedIn.
          </p>
          <p>
            If you contact ArkNetz directly, we may receive information such as your
            name, email address, company name, and any information you choose to
            provide in your message.
          </p>
        </div>
      </section>

      <section className="split-section">
        <div>
          <SectionHeading
            eyebrow="Usage"
            title="How Information Is Used"
          />
        </div>
        <div className="prose">
          <p>
            Information provided to ArkNetz may be used to respond to inquiries,
            evaluate potential engagements, and communicate regarding advisory or
            consulting services.
          </p>
        </div>
      </section>

      <section className="split-section">
        <div>
          <SectionHeading
            eyebrow="Analytics"
            title="Website Analytics"
          />
        </div>
        <div className="prose">
          <p>
            This website may use standard analytics tools that collect aggregated,
            non-personally identifiable information regarding site usage and
            performance.
          </p>
        </div>
      </section>

      <section className="split-section">
        <div>
          <SectionHeading
            eyebrow="Disclosure"
            title="Information Sharing"
          />
        </div>
        <div className="prose">
          <p>
            ArkNetz does not sell, rent, or trade personal information to third
            parties.
          </p>
        </div>
      </section>

      <section className="split-section">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Questions"
          />
        </div>
        <div className="prose">
          <p>
            Questions regarding this Privacy Policy may be directed to
            arunk@arknetz.com.
          </p>
        </div>
      </section>
    </main>
  );
}