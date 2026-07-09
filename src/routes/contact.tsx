import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { z } from "zod";

const contactSearchSchema = z.object({
  subject: z.string().optional(),
});

export const Route = createFileRoute("/contact")({
  validateSearch: contactSearchSchema,
  head: () => ({
    meta: [
      { title: "Contact Us" },
      { name: "description", content: "Talk to our team about pickups, programs, and quotes." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { subject } = Route.useSearch();
  const [submitted, setSubmitted] = useState(false);

  // REPLACE THESE WITH YOUR ACTUAL ENTRY IDs FROM STEP 1
  const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeoyLEjrMqylUUkkF3lUIe-Prc-rAevPOuB1vfgjg6_K1sYIw/formResponse";
  const ENTRY_IDS = {
    name: "entry.2005620554",
    email: "entry.1045781291",
    phone: "entry.1065046570",
    organization: "entry.1166974658",
    subject: "entry.839337160",
    message: "entry.1016647380",
  };

  return (
    <SiteLayout>
      <PageHero eyebrow="Contact" title="Let's plan your next pickup" subtitle="We respond within one business day." />
      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div className="space-y-4 lg:col-span-1">
            {[
              { icon: Phone, title: "Phone", val: "+254 701 819 559" },
              { icon: Mail, title: "Email", val: "info@weeecentre.com" },
              { icon: MapPin, title: "Office", val: "Mihango, Embakasi, Off the Eastern By-pass" },
              { icon: Clock, title: "Hours", val: "Mon–Fri · 8:00–18:00" },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border border-border bg-card p-5">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">{c.title}</p>
                    <p className="font-semibold">{c.val}</p>
                  </div>
                </div>
              </div>
            ))}
            <a
              href="https://wa.me/+254701819559"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-2xl bg-[oklch(0.65_0.18_150)] px-5 py-3 font-semibold text-white hover:opacity-90"
            >
              <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
            </a>
          </div>

          <div className="lg:col-span-2">
            {submitted ? (
              <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-soft h-full flex flex-col justify-center items-center py-20">
                <h3 className="text-xl font-bold text-primary mb-2">Thank You!</h3>
                <p className="text-muted-foreground">Your message has been received. We will get back to you shortly.</p>
              </div>
            ) : (
              /* We target the hidden iframe below so the page doesn't refresh or redirect */
              <form
                action={GOOGLE_FORM_ACTION_URL}
                method="POST"
                target="hidden_iframe"
                onSubmit={() => setSubmitted(true)}
                className="rounded-2xl border border-border bg-card p-8 shadow-soft"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  {[
                    { label: "Name", type: "text", entryId: ENTRY_IDS.name },
                    { label: "Email", type: "email", entryId: ENTRY_IDS.email },
                    { label: "Phone", type: "tel", entryId: ENTRY_IDS.phone },
                    { label: "Organization", type: "text", entryId: ENTRY_IDS.organization },
                  ].map((field) => (
                    <div key={field.label}>
                      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {field.label}
                      </label>
                      <input
                        required
                        type={field.type}
                        name={field.entryId}
                        className="mt-1.5 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none"
                      />
                    </div>
                  ))}
                </div>
                <div className="mt-5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Subject</label>
                  <input
                    key={subject ?? "empty"}
                    defaultValue={subject ?? ""}
                    name={ENTRY_IDS.subject}
                    className="mt-1.5 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none"
                  />
                </div>
                <div className="mt-5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Message</label>
                  <textarea
                    rows={5}
                    required
                    name={ENTRY_IDS.message}
                    className="mt-1.5 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-6 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90"
                >
                  Send message
                </button>
              </form>
            )}

            {/* Hidden iframe that intercepts the Google response layout redirection */}
            <iframe
              name="hidden_iframe"
              id="hidden_iframe"
              style={{ display: "none" }}
              title="hidden submission window"
            />
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-border">
            <iframe
              title="Office location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.470567108258!2d36.95345699729396!3d-1.2811911209357305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f135515ea9921%3A0xfdc9c6fd5e98e614!2sWEEE%20Centre!5e0!3m2!1sen!2ske!4v1782818378885!5m2!1sen!2ske"
              className="h-80 w-full"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}