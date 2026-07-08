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

  return (
    <SiteLayout>
      <PageHero eyebrow="Contact" title="Let's plan your next pickup" subtitle="We respond within one business day." />
      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div className="space-y-4 lg:col-span-1">
            {[
              { icon: Phone, title: "Phone", val: "+254 701 819 559" },
              { icon: Mail, title: "Email", val: "info@weecenter.com" },
              { icon: MapPin, title: "Office", val: "Mihango', Embakasi, Off the Eastern By-pass" },
              { icon: Clock, title: "Hours", val: "Mon–Fri · 8:00–18:00" },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border border-border bg-card p-5">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary"><c.icon className="h-5 w-5"/></span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">{c.title}</p>
                    <p className="font-semibold">{c.val}</p>
                  </div>
                </div>
              </div>
            ))}
            <a href="https://wa.me/+254701819559" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-2xl bg-[oklch(0.65_0.18_150)] px-5 py-3 font-semibold text-white hover:opacity-90">
              <MessageCircle className="h-5 w-5"/> Chat on WhatsApp
            </a>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="lg:col-span-2 rounded-2xl border border-border bg-card p-8 shadow-soft">
            <div className="grid gap-5 sm:grid-cols-2">
              {[["Name","text"],["Email","email"],["Phone","tel"],["Organization","text"]].map(([l,t]) => (
                <div key={l}>
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{l}</label>
                  <input required type={t} className="mt-1.5 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none" />
                </div>
              ))}
            </div>
            <div className="mt-5">
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Subject</label>
              <input
                key={subject ?? "empty"}
                defaultValue={subject ?? ""}
                className="mt-1.5 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none"
              />
            </div>
            <div className="mt-5">
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Message</label>
              <textarea rows={5} className="mt-1.5 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none" />
            </div>
            <button className="mt-6 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90">Send message</button>
          </form>
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
