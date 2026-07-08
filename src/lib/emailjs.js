export const EMAILJS_CONFIG = {
  serviceId: "service_xujqysm",   // e.g. "service_xxxxxxx"
  templateId: "template_hrabwql",  // e.g. "template_xxxxxxx"
  publicKey: "vjd1qgcqtL0ih13FP",   // e.g. "user_xxxxxxxxxxxxxxxx"
};

export function isEmailJSConfigured() {
  return Boolean(
    EMAILJS_CONFIG.serviceId && EMAILJS_CONFIG.templateId && EMAILJS_CONFIG.publicKey
  );
}

export async function sendViaEmailJS({ name, email, message }) {
  const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      service_id: EMAILJS_CONFIG.serviceId,
      template_id: EMAILJS_CONFIG.templateId,
      user_id: EMAILJS_CONFIG.publicKey,
      template_params: { name, email, message, time: new Date().toLocaleString() },
    }),
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error("EmailJS request failed: " + res.status + " " + text);
  }
  return true;
}
