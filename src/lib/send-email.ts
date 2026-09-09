import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const emailPayloadSchema = z.object({
  formType: z.enum(["contact", "event-registration", "schedule-pickup"]),
  subject: z.string().min(1),
  fields: z.record(z.string(), z.string()),
});

export type EmailPayload = z.infer<typeof emailPayloadSchema>;

const FORM_LABELS: Record<EmailPayload["formType"], string> = {
  contact: "New Contact Form Submission",
  "event-registration": "New Event Registration",
  "schedule-pickup": "New Pickup Request",
};

function renderRows(fields: Record<string, string>) {
  return Object.entries(fields)
    .filter(([, value]) => value && value.trim().length > 0)
    .map(
      ([key, value]) => `
        <tr>
          <td style="padding:8px 14px;font-weight:600;text-transform:capitalize;vertical-align:top;color:#1f2937;border-bottom:1px solid #e5e7eb;white-space:nowrap;">${escapeHtml(
            key.replace(/([A-Z])/g, " $1")
          )}</td>
          <td style="padding:8px 14px;color:#374151;border-bottom:1px solid #e5e7eb;">${escapeHtml(
            value
          ).replace(/\n/g, "<br/>")}</td>
        </tr>`
    )
    .join("");
}

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export const sendFormEmail = createServerFn({ method: "POST" })
  .validator(emailPayloadSchema)
  .handler(async ({ data }) => {
    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.FROM_EMAIL ?? "onboarding@resend.dev";
    const recipients = (process.env.CONTACT_EMAILS ?? "")
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);

    if (!apiKey) {
      console.error("RESEND_API_KEY is not set");
      throw new Error("Email service is not configured.");
    }
    if (recipients.length === 0) {
      console.error("CONTACT_EMAILS is not set");
      throw new Error("No recipient email addresses configured.");
    }

    const html = `
      <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;">
        <h2 style="color:#111827;">${FORM_LABELS[data.formType]}</h2>
        <table style="border-collapse:collapse;width:100%;">
          ${renderRows(data.fields)}
        </table>
        <p style="margin-top:20px;font-size:12px;color:#9ca3af;">
          Submitted via weeecentre.com — ${data.formType} form.
        </p>
      </div>
    `;

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `WEEE Centre Website <${fromEmail}>`,
        to: recipients,
        reply_to: data.fields.email || undefined,
        subject: data.subject,
        html,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Resend API error:", response.status, errorText);
      throw new Error("Failed to send email.");
    }

    return { success: true as const };
  });