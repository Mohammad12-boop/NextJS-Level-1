import PageHeader from "@/components/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Explore the Learning Portal contact interface and share questions during your learning sessions.",
};

export default function ContactPage() {
  return (
    <main className="page-shell">
      <PageHeader title="Contact" description="Questions about a course or the portal? Start a conversation in your next learning session." />
      <section className="content-card max-w-2xl">
        <h2>A place for your questions</h2>
        <p id="contact-note">This is a demo contact interface. Submission is unavailable; nothing you enter is sent or saved.</p>
        <fieldset className="portal-contact-fields" aria-describedby="contact-note">
          <legend className="sr-only">Demo contact details</legend>
          <label htmlFor="contact-name">Name</label>
          <input id="contact-name" name="name" type="text" autoComplete="name" placeholder="Your name" />
          <label htmlFor="contact-email">Email</label>
          <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" />
          <label htmlFor="contact-message">Message</label>
          <textarea id="contact-message" name="message" rows={5} placeholder="What would you like to learn?" />
          <button type="button" disabled>Submission unavailable in this demo</button>
        </fieldset>
      </section>
    </main>
  );
}
