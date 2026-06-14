import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <Link
          className="brand footer-brand"
          href="/"
          aria-label="ArkNetz home"
        >
          <img
            src="/icon.png"
            alt="ArkNetz"
            style={{ height: "40px", width: "40px" }}
          />
          <span>ArkNetz</span>
        </Link>

        <p>
          Independent guidance for data, analytics, transformation, and AI
          decisions.
        </p>
      </div>

      <div className="footer-links">
        <a href="mailto:arunk@arknetz.com">Email me</a>

        <a
          href="https://www.linkedin.com/in/kumararun/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>

        <Link href="/privacy">Privacy Policy</Link>

        <Link href="/disclaimer">Disclaimer</Link>
      </div>
    </footer>
  );
}
