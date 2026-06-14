import { SectionHeading } from "@/components/section-heading";

export const metadata = {
  title: "Disclaimer",
};

export default function DisclaimerPage() {
  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">Legal</p>
        <h1>Disclaimer</h1>
        <p>Last updated: June 2026</p>
      </section>

      <section className="split-section">
        <div>
          <SectionHeading
            eyebrow="Purpose"
            title="General Information"
          />
        </div>
        <div className="prose">
          <p>
            The information provided on this website is for general informational
            purposes only and does not constitute professional, legal, financial,
            accounting, investment, or other regulated advice.
          </p>
          <p>
            Any engagement with ArkNetz is governed solely by the terms of a
            separate written agreement between ArkNetz and its clients.
          </p>
        </div>
      </section>

      <section className="split-section">
        <div>
          <SectionHeading
            eyebrow="Accuracy"
            title="No Warranties"
          />
        </div>
        <div className="prose">
          <p>
            While reasonable efforts are made to ensure the accuracy of information
            presented on this website, ArkNetz makes no representations or
            warranties regarding completeness, accuracy, or suitability for any
            particular purpose.
          </p>
        </div>
      </section>

      <section className="split-section">
        <div>
          <SectionHeading
            eyebrow="Responsibility"
            title="Decision Making"
          />
        </div>
        <div className="prose">
          <p>
            Decisions made based on information provided through this website are
            the sole responsibility of the individual or organization making those
            decisions.
          </p>
        </div>
      </section>

      <section className="split-section">
        <div>
          <SectionHeading
            eyebrow="Third Parties"
            title="External References"
          />
        </div>
        <div className="prose">
          <p>
            References to third-party products, companies, platforms, or services
            do not constitute endorsement unless explicitly stated.
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
            Questions regarding this Disclaimer may be directed to
            arunk@arknetz.com.
          </p>
        </div>
      </section>
    </main>
  );
}