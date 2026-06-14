export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <main className="contact-page">
      <section className="contact-main">
        <p className="eyebrow">Contact</p>

        <h1>Start with the decision you need to make.</h1>

        <p>
          Share the context, question, or initiative in front of you.
          We will help determine whether there is a fit for
          advisory support.
        </p>
      </section>

      <aside className="contact-sidebar">
        <h3>Contact</h3>

        <a href="mailto:arunk@arknetz.com">
          arunk@arknetz.com
        </a>

        <a
          href="https://www.linkedin.com/in/kumararun/"
          target="_blank"
          rel="noreferrer"
        >
          Connect on LinkedIn
        </a>
      </aside>
    </main>
  );
}