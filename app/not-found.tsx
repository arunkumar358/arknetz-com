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
