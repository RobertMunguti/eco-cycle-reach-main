import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Calendar, MapPin, CheckCircle2, ArrowLeft } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { events } from "@/data/events";

const searchSchema = z.object({
  event: z.string().optional(),
});

export const Route = createFileRoute("/event-registration")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Event Registration" },
      { name: "description", content: "Register your attendance for upcoming EcoCycle Solutions events, conferences, and community drives." },
    ],
  }),
  component: EventRegistrationPage,
});

function EventRegistrationPage() {
  const { event: eventSlug } = Route.useSearch();
  const selectedEvent = events.find((e) => e.slug === eventSlug);
  const [submitted, setSubmitted] = useState(false);
  const [chosen, setChosen] = useState<string>(selectedEvent?.slug ?? "");

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Event Registration"
        title={selectedEvent ? `Register: ${selectedEvent.title}` : "Register for an event"}
        subtitle="Reserve your spot. Our events team will confirm your registration by email."
      />
      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <aside className="lg:col-span-1">
            <Link to="/events" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all">
              <ArrowLeft className="h-4 w-4" /> Back to events
            </Link>
            {selectedEvent ? (
              <div className="mt-5 overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
                <img src={selectedEvent.image} alt={selectedEvent.title} className="h-40 w-full object-cover" />
                <div className="p-5">
                  <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{selectedEvent.type}</span>
                  <h3 className="mt-3 font-display text-lg font-bold">{selectedEvent.title}</h3>
                  <div className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                    <p className="inline-flex items-center gap-1.5"><Calendar className="h-4 w-4 text-primary" />{selectedEvent.date}</p>
                    <p className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4 text-primary" />{selectedEvent.location}</p>
                  </div>
                </div>
              </div>
            ) : (
              <p className="mt-5 text-sm text-muted-foreground">Select an event below to register.</p>
            )}
          </aside>

          <div className="lg:col-span-2">
            {submitted ? (
              <div className="rounded-2xl border border-border bg-card p-10 text-center shadow-soft">
                <CheckCircle2 className="mx-auto h-14 w-14 text-primary" />
                <h2 className="mt-4 font-display text-2xl font-bold">You're registered!</h2>
                <p className="mt-2 text-muted-foreground">A confirmation email is on its way. We can't wait to see you.</p>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  <Link to="/events" className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold hover:bg-accent">Back to events</Link>
                  <button onClick={() => setSubmitted(false)} className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90">Register another attendee</button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="rounded-2xl border border-border bg-card p-8 shadow-soft"
              >
                <div className="mb-5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Event</label>
                  <select
                    required
                    value={chosen}
                    onChange={(e) => setChosen(e.target.value)}
                    className="mt-1.5 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none"
                  >
                    <option value="" disabled>Select an event…</option>
                    {events.map((e) => (
                      <option key={e.slug} value={e.slug}>{e.title} — {e.date}</option>
                    ))}
                  </select>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  {[
                    ["Full Name", "text", "name"],
                    ["Email", "email", "email"],
                    ["Phone", "tel", "phone"],
                    ["Organization", "text", "org"],
                    ["Job Title", "text", "title"],
                    ["Country", "text", "country"],
                  ].map(([l, t, n]) => (
                    <div key={n}>
                      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{l}</label>
                      <input required type={t} name={n} className="mt-1.5 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none" />
                    </div>
                  ))}
                </div>

                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Number of Attendees</label>
                    <input type="number" min={1} defaultValue={1} className="mt-1.5 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Attendee Type</label>
                    <select className="mt-1.5 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none">
                      <option>In-person</option>
                      <option>Virtual</option>
                    </select>
                  </div>
                </div>

                <div className="mt-5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Dietary / Accessibility Requirements</label>
                  <textarea rows={3} className="mt-1.5 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none" />
                </div>

                <div className="mt-5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Additional Notes</label>
                  <textarea rows={3} className="mt-1.5 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none" />
                </div>

                <label className="mt-5 flex items-start gap-2 text-sm text-muted-foreground">
                  <input type="checkbox" required className="mt-1" />
                  <span>I agree to receive event updates and confirmations from EcoCycle Solutions.</span>
                </label>

                <button className="mt-6 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90">
                  Complete registration
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
