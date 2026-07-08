import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { CheckCircle2, Upload, Plus, Trash2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Route = createFileRoute("/schedule-pickup")({
  head: () => ({
    meta: [
      { title: "Schedule Pickup" },
      { name: "description", content: "Book a free e-waste collection pickup for your organization or home." },
    ],
  }),
  component: SchedulePage,
});

const deviceCategories: { category: string; items: string[] }[] = [
  { category: "Computers", items: ["Laptops", "Desktops", "Servers", "Monitors"] },
  { category: "Mobile Devices", items: ["Smartphones", "Tablets", "Wearables", "Accessories"] },
  { category: "Office Equipment", items: ["Printers", "Scanners", "Copiers", "Fax machines"] },
  { category: "Networking", items: ["Routers", "Switches", "Firewalls", "Access points"] },
  { category: "Power Equipment", items: ["UPS systems", "Batteries", "Power supplies", "Inverters"] },
  { category: "Data Center", items: ["Rack servers", "Storage arrays", "Tape libraries", "Network gear"] },
  { category: "Displays", items: ["LCD/LED monitors", "TVs", "Projectors", "Touch panels"] },
  { category: "Tablets & Misc.", items: ["iPads", "Android tablets", "E-readers", "Cables"] },
];

type DeviceLine = { id: number; device: string; quantity: number };

function SchedulePage() {
  const [submitted, setSubmitted] = useState(false);
  const [devices, setDevices] = useState<DeviceLine[]>([
    { id: 1, device: "", quantity: 1 },
  ]);

  const addDevice = () =>
    setDevices((d) => [...d, { id: Date.now(), device: "", quantity: 1 }]);
  const removeDevice = (id: number) =>
    setDevices((d) => (d.length > 1 ? d.filter((x) => x.id !== id) : d));
  const updateDevice = (id: number, patch: Partial<DeviceLine>) =>
    setDevices((d) => d.map((x) => (x.id === id ? { ...x, ...patch } : x)));

  return (
    <SiteLayout>
      <PageHero eyebrow="Schedule Pickup" title="Book a free e-waste collection" subtitle="Tell us what you have and where. We'll handle the rest." />
      <section className="bg-background py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <div className="rounded-3xl border border-border bg-card p-10 text-center shadow-soft">
              <CheckCircle2 className="mx-auto h-16 w-16 text-primary" />
              <h2 className="mt-5 text-2xl font-bold">Pickup request received</h2>
              <p className="mt-3 text-muted-foreground">A confirmation email is on its way. Our logistics team will reach out within one business day to confirm timing.</p>
              <button onClick={() => { setSubmitted(false); setDevices([{ id: 1, device: "", quantity: 1 }]); }} className="mt-6 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">Book another</button>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="rounded-3xl border border-border bg-card p-8 shadow-soft lg:p-10">
              <div className="grid gap-5 sm:grid-cols-2">
                {[
                  ["Full Name", "text", "Jane Doe"],
                  ["Organization", "text", "Acme Inc."],
                  ["Email", "email", "jane@acme.com"],
                  ["Phone", "tel", "+1 555 010 2030"],
                  ["Pickup Location", "text", "Street, City, ZIP"],
                  ["Preferred Date", "date", ""],
                ].map(([label, type, placeholder]) => (
                  <div key={label}>
                    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</label>
                    <input required type={type} placeholder={placeholder} className="mt-1.5 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none" />
                  </div>
                ))}
              </div>

              <div className="mt-7">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Devices for Pickup</label>
                  <button type="button" onClick={addDevice} className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary hover:bg-primary/20">
                    <Plus className="h-3.5 w-3.5" /> Add device
                  </button>
                </div>
                <div className="mt-3 space-y-3">
                  {devices.map((line, idx) => (
                    <div key={line.id} className="grid gap-3 rounded-xl border border-border bg-background/50 p-3 sm:grid-cols-[1fr_120px_auto] sm:items-end">
                      <div>
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Device {idx + 1}</span>
                        <Select value={line.device} onValueChange={(v) => updateDevice(line.id, { device: v })}>
                          <SelectTrigger className="mt-1 bg-background">
                            <SelectValue placeholder="Select a device" />
                          </SelectTrigger>
                          <SelectContent>
                            {deviceCategories.map((cat) => (
                              <SelectGroup key={cat.category}>
                                <SelectLabel>{cat.category}</SelectLabel>
                                {cat.items.map((item) => (
                                  <SelectItem key={item} value={item}>{item}</SelectItem>
                                ))}
                              </SelectGroup>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Quantity</span>
                        <input
                          type="number"
                          min={1}
                          required
                          value={line.quantity}
                          onChange={(e) => updateDevice(line.id, { quantity: Math.max(1, parseInt(e.target.value || "1", 10)) })}
                          className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none"
                        />
                      </div>
                      <button
                        type="button"
                        onClick={() => removeDevice(line.id)}
                        disabled={devices.length === 1}
                        aria-label="Remove device"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground hover:border-destructive hover:text-destructive disabled:opacity-40 disabled:hover:border-border disabled:hover:text-muted-foreground"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Image Upload (optional)</label>
                <label className="mt-1.5 flex cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-dashed border-border bg-background px-3 py-6 text-sm text-muted-foreground hover:border-primary">
                  <Upload className="h-4 w-4" /> Upload photos of items
                  <input type="file" multiple accept="image/*" className="hidden" />
                </label>
              </div>
              <div className="mt-5">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Additional Notes</label>
                <textarea rows={4} placeholder="Access details, special handling…" className="mt-1.5 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none" />
              </div>
              <button className="mt-7 w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elevated hover:opacity-90">
                Request Pickup
              </button>
            </form>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}
