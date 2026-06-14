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
