"use client";

import { useEffect, useState, type FormEvent } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

const SHOWROOM_ADDRESS =
  "YM Motors Ltd, Unit 56 Barns Court, Crawley Down, Copthorne, Crawley RH10 4HQ, UK";
const PHONE_NUMBER = "01737 307 007";
const PHONE_HREF = "tel:01737307007";
const WHATSAPP_NUMBER = "441737307007";
const CONTACT_EMAIL = "sales@ymmotors.co.uk"; // Replace if your live inbox differs.

const inputClass =
  "mt-2 block min-h-[52px] w-full rounded-[10px] border border-white/20 bg-[#0A111A] px-4 text-[14px] text-white outline-none transition placeholder:text-white/35 focus:border-[#00A8E8] focus:ring-2 focus:ring-[#00A8E8]/20";

const labelClass = "block text-[13px] font-medium text-white/82";

const primaryButtonClass =
  "group inline-flex min-h-[52px] items-center justify-center gap-3 rounded-[10px] bg-[#00A8E8] px-6 text-[12px] font-semibold uppercase tracking-[0.12em] text-white shadow-[0_10px_28px_rgba(0,168,232,0.20)] transition duration-300 hover:-translate-y-[1px] hover:bg-[#12B7F4] hover:shadow-[0_14px_34px_rgba(0,168,232,0.28)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00A8E8] disabled:cursor-wait disabled:opacity-60";

const softCardClass =
  "rounded-[18px] border border-white/12 bg-[linear-gradient(155deg,rgba(18,28,39,0.92),rgba(10,17,26,0.98))] shadow-[0_20px_55px_rgba(0,0,0,0.20)]";

type Status =
  | {
      type: "success" | "error";
      message: string;
    }
  | null;

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("Vehicle enquiry");
  const [message, setMessage] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [status, setStatus] = useState<Status>(null);

  useEffect(() => {
    const vehicle = new URLSearchParams(window.location.search).get("vehicle");

    if (vehicle && vehicle.trim()) {
      setSubject("Vehicle enquiry");
      setMessage(
        "I'm interested in the " +
          vehicle.trim().slice(0, 120) +
          ". Please tell me more about it."
      );
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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          email: email.trim(),
          subject,
          message: message.trim(),
        }),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          typeof result.error === "string"
            ? result.error
            : "Unable to send your enquiry. Please try again."
        );
      }

      setStatus({
        type: "success",
        message: "Thank you. Your enquiry has been sent to YM Motors.",
      });

      setName("");
      setPhone("");
      setEmail("");
      setSubject("Vehicle enquiry");
      setMessage("");
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Unable to send your enquiry. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const mapSrc =
    "https://maps.google.com/maps?q=" +
    encodeURIComponent(SHOWROOM_ADDRESS) +
    "&t=&z=15&ie=UTF8&iwloc=&output=embed";

  const directionsUrl =
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(SHOWROOM_ADDRESS);

  const whatsappText = encodeURIComponent(
    "Hi YM Motors, I would like to ask about a vehicle."
  );
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappText}`;

  return (
    <main
      className="min-h-screen overflow-hidden font-[var(--font-body)] text-white"
      style={{
        background:
          "radial-gradient(ellipse at 95% 0%, #00a8e80c, transparent 45%), #090d12",
        colorScheme: "dark",
      }}
    >
      <section
        aria-labelledby="contact-title"
        className="relative isolate flex min-h-[420px] flex-col justify-end overflow-hidden border-b border-white/10 sm:min-h-[480px] lg:min-h-[540px]"
        style={{ paddingTop: "var(--ym-stock-header-clearance, 96px)" }}
      >
        <Image
          src="/images/contact-banner.jpeg"
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="100vw"
          className="z-0 scale-[1.015] object-cover object-[center_59%]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(4,10,17,0.96)_0%,rgba(4,10,17,0.83)_34%,rgba(4,10,17,0.50)_60%,rgba(4,10,17,0.18)_100%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[46%] bg-[linear-gradient(180deg,transparent_0%,rgba(9,13,18,0.90)_100%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[8%] top-[34%] z-10 h-56 w-56 rounded-full bg-[#00A8E8]/10 blur-[95px]"
        />

        <div className="relative z-20 mx-auto w-full max-w-[1400px] px-5 pb-12 pt-16 sm:px-8 sm:pb-16 lg:px-12 lg:pb-20">
          <div className="max-w-[720px]">
         

            <h1
              id="contact-title"
              className="font-[var(--font-display)] text-[clamp(42px,5vw,72px)] font-semibold leading-[1.03] tracking-[-0.052em] drop-shadow-[0_4px_20px_rgba(0,0,0,0.36)]"
            >
              Contact <span className="bg-[linear-gradient(90deg,#27C1F3_0%,#AEE8FA_58%,#FFFFFF_100%)] bg-clip-text text-transparent">Us</span>
            </h1>

            <p className="mt-5 max-w-[560px] text-[15px] leading-[1.8] text-white/78 sm:text-[17px]">
              Have a question about a vehicle, finance, selling your car or arranging a visit?
              Get in touch and the YM Motors team will be happy to help.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-[12px] text-white/70 sm:text-[13px]">
              <span className="inline-flex items-center gap-2">
                <Phone size={15} className="text-[#7ADAFE]" />
                Call us
              </span>
              <span className="inline-flex items-center gap-2">
                <MessageCircle size={15} className="text-[#7ADAFE]" />
                WhatsApp support
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin size={15} className="text-[#7ADAFE]" />
                Showroom location
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-80px] top-0 h-80 w-80 rounded-full bg-[#00A8E8]/[0.045] blur-[120px]"
        />

        <div className="relative mx-auto max-w-[1400px]">
          {/* One single contact box */}
          <div className="overflow-hidden rounded-[22px] border border-white/12 bg-[linear-gradient(145deg,#111A24_0%,#0A1119_100%)] shadow-[0_30px_90px_rgba(0,0,0,0.30)]">

            {/* Top contact row */}
            <div className="grid border-b border-white/10 sm:grid-cols-2 xl:grid-cols-4">
              <a
                href={PHONE_HREF}
                className="group flex min-h-[118px] items-center gap-4 border-b border-white/10 p-5 transition hover:bg-white/[0.03] sm:p-6 xl:border-b-0 xl:border-r xl:border-white/10"
              >
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-[11px] border border-[#00A8E8]/22 bg-[#00A8E8]/10 text-[#76D8FC]">
                  <Phone size={19} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/42">
                    Phone
                  </p>
                  <p className="mt-1.5 text-[15px] font-semibold text-white">
                    {PHONE_NUMBER}
                  </p>
                  <p className="mt-1 text-[12px] text-white/42">Call our showroom</p>
                </div>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-[118px] items-center gap-4 border-b border-white/10 p-5 transition hover:bg-white/[0.03] sm:border-l sm:border-white/10 sm:p-6 xl:border-b-0 xl:border-l-0 xl:border-r"
              >
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-[11px] border border-[#00A8E8]/22 bg-[#00A8E8]/10 text-[#76D8FC]">
                  <MessageCircle size={19} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/42">
                    WhatsApp
                  </p>
                  <p className="mt-1.5 text-[15px] font-semibold text-white">
                    Message YM Motors
                  </p>
                  <p className="mt-1 text-[12px] text-white/42">Quick questions & updates</p>
                </div>
              </a>

              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="group flex min-h-[118px] items-center gap-4 border-b border-white/10 p-5 transition hover:bg-white/[0.03] sm:p-6 xl:border-b-0 xl:border-r xl:border-white/10"
              >
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-[11px] border border-[#00A8E8]/22 bg-[#00A8E8]/10 text-[#76D8FC]">
                  <Mail size={19} />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/42">
                    Email
                  </p>
                  <p className="mt-1.5 break-all text-[14px] font-semibold text-white">
                    {CONTACT_EMAIL}
                  </p>
                  <p className="mt-1 text-[12px] text-white/42">Send us an enquiry</p>
                </div>
              </a>

              <div className="flex min-h-[118px] items-center gap-4 p-5 sm:border-l sm:border-white/10 sm:p-6 xl:border-l-0">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-[11px] border border-[#00A8E8]/22 bg-[#00A8E8]/10 text-[#76D8FC]">
                  <Clock3 size={19} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/42">
                    Opening hours
                  </p>
                  <p className="mt-1.5 text-[15px] font-semibold text-white">Mon – Sat</p>
                  <p className="mt-1 text-[12px] text-white/45">9:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>

            {/* Map left / form right */}
            <div className="grid lg:grid-cols-[0.92fr_1.08fr]">

              {/* MAP */}
              <div className="relative min-h-[500px] overflow-hidden border-b border-white/10 bg-[#07131F] lg:min-h-[660px] lg:border-b-0 lg:border-r lg:border-white/10">
                <iframe
                  title="YM Motors Ltd location map"
                  src={mapSrc}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full"
                  style={{
                    border: 0,
                    display: "block",
                    filter:
                      "brightness(1) contrast(1) saturate(1)",
                  }}
                />


        
              </div>

              {/* CONTACT FORM */}
              <form
                onSubmit={sendEnquiry}
                aria-busy={isSubmitting}
                className="relative p-6 sm:p-8 lg:p-10 xl:p-12"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute right-[-50px] top-[-50px] h-56 w-56 rounded-full bg-[#00A8E8]/[0.045] blur-[90px]"
                />

                <div className="relative">
                  <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#72D5FB]">
                    Send an enquiry
                  </p>
                  <h2 className="mt-2 font-[var(--font-display)] text-[clamp(30px,3vw,42px)] font-semibold leading-[1.08] tracking-[-0.035em]">
                    Tell us how we can <span className="text-[#72D5FB]">help.</span>
                  </h2>
                  <p className="mt-3 max-w-[500px] text-[13px] leading-[1.75] text-white/50 sm:text-[14px]">
                    Complete the form and the YM Motors team will get back to you.
                  </p>

                  <div className="mt-8 grid gap-x-5 gap-y-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="contact-name" className={labelClass}>
                        Your name *
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        minLength={2}
                        maxLength={100}
                        value={name}
                        onChange={(event) => {
                          setName(event.target.value);
                          setStatus(null);
                        }}
                        placeholder="Your full name"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-phone" className={labelClass}>
                        Phone number *
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        required
                        minLength={7}
                        maxLength={24}
                        value={phone}
                        onChange={(event) => {
                          setPhone(event.target.value);
                          setPhoneError("");
                          setStatus(null);
                        }}
                        placeholder="Your contact number"
                        aria-invalid={!!phoneError}
                        aria-describedby={phoneError ? "contact-phone-error" : undefined}
                        className={inputClass}
                      />

                      {phoneError && (
                        <p
                          id="contact-phone-error"
                          role="alert"
                          className="mt-2 text-[12px] text-[#FFB1A9]"
                        >
                          {phoneError}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-email" className={labelClass}>
                        Email address <span className="text-white/45">(optional)</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        maxLength={254}
                        value={email}
                        onChange={(event) => {
                          setEmail(event.target.value);
                          setStatus(null);
                        }}
                        placeholder="you@example.com"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-subject" className={labelClass}>
                        Enquiry type *
                      </label>
                      <select
                        id="contact-subject"
                        name="subject"
                        value={subject}
                        onChange={(event) => {
                          setSubject(event.target.value);
                          setStatus(null);
                        }}
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
                      <label htmlFor="contact-message" className={labelClass}>
                        Message *
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        required
                        minLength={10}
                        maxLength={500}
                        rows={6}
                        value={message}
                        onChange={(event) => {
                          setMessage(event.target.value);
                          setStatus(null);
                        }}
                        placeholder="How can we help?"
                        className={inputClass + " min-h-[160px] resize-y py-3"}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={primaryButtonClass + " mt-7 w-full text-center"}
                  >
                    <span className="relative z-10 inline-flex items-center gap-3">
                      {isSubmitting ? "Sending..." : "Submit Enquiry"}
                      <ArrowUpRight size={16} />
                    </span>
                  </button>

                  {status && (
                    <p
                      role={status.type === "error" ? "alert" : "status"}
                      className={
                        "mt-4 rounded-[10px] border px-4 py-3 text-center text-[13px] " +
                        (status.type === "error"
                          ? "border-[#FFB1A9]/20 bg-[#FFB1A9]/8 text-[#FFB1A9]"
                          : "border-[#8CDCFB]/20 bg-[#00A8E8]/8 text-[#8CDCFB]")
                      }
                    >
                      {status.message}
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}