"use client";

import { useEffect, useState, type FormEvent } from "react";
import Image from "next/image";

// Add the banner image at public/images/current-stock-banner.png.
// The matching app/api/contact/route.ts handles the form submission.

const inputClass =
  "mt-2 block min-h-[48px] w-full rounded-[4px] border border-white/20 bg-[#0A121B] px-4 text-[14px] text-white outline-none transition placeholder:text-white/35 focus:border-[#00A8E8] focus:ring-2 focus:ring-[#00A8E8]/20";
const labelClass = "block text-[13px] font-medium text-white/80";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("Vehicle enquiry");
  const [message, setMessage] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  useEffect(() => {
    const vehicle = new URLSearchParams(window.location.search).get("vehicle");
    if (vehicle?.trim()) {
      setSubject("Vehicle enquiry");
      setMessage(`I'm interested in the ${vehicle.trim().slice(0, 120)}. Please tell me more about it.`);
    }
  }, []);

  async function sendEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    if (isSubmitting) return;

    if (phone.replace(/\D/g, "").length < 7) {
      setPhoneError("Please enter a valid contact number.");
      return;
    }
    setPhoneError("");
    setStatus(null);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), phone: phone.trim(), email: email.trim(), subject, message: message.trim() }),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(typeof result.error === "string" ? result.error : "Unable to send your enquiry. Please try again.");

      setStatus({ type: "success", message: "Thank you. Your enquiry has been sent to YM Motors." });
      setName("");
      setPhone("");
      setEmail("");
      setSubject("Vehicle enquiry");
      setMessage("");
    } catch (error) {
      setStatus({ type: "error", message: error instanceof Error ? error.message : "Unable to send your enquiry. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main
      className="min-h-screen font-[var(--font-body)] text-white"
      style={{
        background: "radial-gradient(ellipse at 95% 0%, #00a8e80c, transparent 45%), #090d12",
        colorScheme: "dark",
      }}
    >
      <div
        className="relative isolate overflow-hidden border-b border-white/10"
        style={{ paddingTop: "var(--ym-stock-header-clearance, 96px)" }}
      >
        <div aria-hidden="true" className="absolute inset-0">
          <Image
            src="/images/current-stock-banner.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_59%]"
          />
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,rgba(5,11,18,0.55)_0%,rgba(5,11,18,0.25)_100%)]"
        />
        <div aria-hidden="true" className="relative h-[190px] sm:h-[230px] lg:h-[260px]" />
      </div>

      <section aria-labelledby="contact-title" className="mx-auto max-w-[860px] px-5 pb-16 pt-10 sm:px-8 sm:pt-12">
        <h1
          id="contact-title"
          className="mb-7 text-center font-[var(--font-display)] text-[clamp(38px,4.2vw,58px)] font-semibold leading-[1.1] tracking-[-0.045em] sm:mb-9"
        >
          Contact <span className="bg-[linear-gradient(90deg,#27C1F3_0%,#B7E9F9_60%,#FFFFFF_100%)] bg-clip-text text-transparent">Us</span>
        </h1>
        <form
          onSubmit={sendEnquiry}
          aria-busy={isSubmitting}
          className="border border-white/15 bg-[linear-gradient(180deg,#111922,#0D141D)] p-6 shadow-[0_16px_50px_rgba(0,0,0,0.2)] sm:p-10"
        >
          <div className="grid gap-x-6 gap-y-5 sm:grid-cols-2">
            <div>
              <label htmlFor="contact-name" className={labelClass}>Your name *</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                minLength={2}
                maxLength={100}
                value={name}
                onChange={(event) => { setName(event.target.value); setStatus(null); }}
                placeholder="Your full name"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="contact-phone" className={labelClass}>Phone number *</label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                minLength={7}
                maxLength={24}
                value={phone}
                onChange={(event) => { setPhone(event.target.value); setPhoneError(""); setStatus(null); }}
                placeholder="Your contact number"
                aria-invalid={!!phoneError}
                aria-describedby={phoneError ? "contact-phone-error" : undefined}
                className={inputClass}
              />
              {phoneError && <p id="contact-phone-error" role="alert" className="mt-2 text-[12px] text-[#FFB1A9]">{phoneError}</p>}
            </div>
            <div>
              <label htmlFor="contact-email" className={labelClass}>Email address <span className="text-white/45">(optional)</span></label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                maxLength={254}
                value={email}
                onChange={(event) => { setEmail(event.target.value); setStatus(null); }}
                placeholder="you@example.com"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="contact-subject" className={labelClass}>Enquiry type *</label>
              <select
                id="contact-subject"
                name="subject"
                value={subject}
                onChange={(event) => { setSubject(event.target.value); setStatus(null); }}
                className={inputClass}
              >
                <option value="Vehicle enquiry">Vehicle enquiry</option>
                <option value="Sell my car">Sell my car</option>
                <option value="Finance question">Finance question</option>
                <option value="Arrange a visit">Arrange a visit</option>
                <option value="Other enquiry">Other enquiry</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="contact-message" className={labelClass}>Message *</label>
              <textarea
                id="contact-message"
                name="message"
                required
                minLength={10}
                maxLength={500}
                rows={5}
                value={message}
                onChange={(event) => { setMessage(event.target.value); setStatus(null); }}
                placeholder="How can we help?"
                className={inputClass + " min-h-[135px] resize-y py-3"}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-6 inline-flex min-h-[51px] w-full items-center justify-center bg-[#00A8E8] px-6 text-[12px] font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#12B7F4] disabled:cursor-wait disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00A8E8]"
          >
            Submit Enquiry
          </button>
          {status && (
            <p role={status.type === "error" ? "alert" : "status"} className={`mt-4 text-center text-[13px] ${status.type === "error" ? "text-[#FFB1A9]" : "text-[#8CDCFB]"}`}>
              {status.message}
            </p>
          )}
        </form>
      </section>
    </main>
  );
}
