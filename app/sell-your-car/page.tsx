"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";


const WHATSAPP_NUMBER = "441737307007";
const PHONE_NUMBER = "01737 307 007";

type Step = 1 | 2 | 3;
type FieldError = { field: string; message: string } | null;
type IconName = "arrow" | "check" | "car" | "clock" | "chat" | "phone";

function Icon({ name, className = "h-5 w-5" }: { name: IconName; className?: string }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {name === "arrow" && <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>}
      {name === "check" && <path d="m5 12 4 4L19 6" />}
      {name === "car" && <><path d="m5 11 1.6-5a2 2 0 0 1 1.9-1.4h7a2 2 0 0 1 1.9 1.4l1.6 5" /><path d="M4 11h16v7H4zM5 18v2m14-2v2M7.5 14.5h1m7 0h1" /></>}
      {name === "clock" && <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>}
      {name === "chat" && <path d="M20 11.4a7.9 7.9 0 0 1-8.2 8 8.1 8.1 0 0 1-3.3-.7L4 20l1.3-4.2a8 8 0 1 1 14.7-4.4Z" />}
      {name === "phone" && <><path d="M21 16.5v3a2 2 0 0 1-2.2 2A18.7 18.7 0 0 1 2.5 5.2 2 2 0 0 1 4.5 3h3a2 2 0 0 1 2 1.7l.5 2.5a2 2 0 0 1-.6 1.9L8 10.5a15 15 0 0 0 5.5 5.5l1.4-1.4a2 2 0 0 1 1.9-.6l2.5.5a2 2 0 0 1 1.7 2Z" /></>}
    </svg>
  );
}

const benefits = [
  {
    icon: "car" as const,
    title: "A fair valuation",
    description: "We consider your car's condition, history and the market. After seeing it, we'll confirm a competitive offer.",
  },
  {
    icon: "clock" as const,
    title: "A simpler process",
    description: "Share the basics, arrange a time for us to see the car and let our team help with the paperwork.",
  },
  {
    icon: "chat" as const,
    title: "People you can talk to",
    description: "Ask us about the car, the offer or your options. You'll deal directly with the YM Motors team.",
  },
];

const stepNames = ["Your vehicle", "Your details", "Confirm details"] as const;
const inputClass = "mt-2 block min-h-[52px] w-full rounded-[10px] border border-white/20 bg-[#0A111A] px-4 text-[15px] text-white outline-none transition placeholder:text-white/40 focus:border-[#00A8E8] focus:ring-2 focus:ring-[#00A8E8]/25";
const labelClass = "block text-[13px] font-medium text-white/85";
const primaryCtaClass = "group relative inline-flex min-h-[52px] items-center justify-center overflow-hidden bg-[#00A8E8] px-7 font-[var(--font-body)] text-[12px] font-semibold uppercase tracking-[0.14em] text-white shadow-[0_8px_24px_rgba(0,168,232,0.20)] transition-all duration-300 hover:-translate-y-[1px] hover:bg-[#12B7F4] hover:shadow-[0_12px_30px_rgba(0,168,232,0.30)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00A8E8]";

function ButtonShine() {
  return <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-[-70%] w-[45%] skew-x-[-20deg] bg-white/15 transition-all duration-700 group-hover:left-[125%]" />;
}

export default function SellYourCarPage() {
  const [step, setStep] = useState<Step>(1);
  const [registration, setRegistration] = useState("");
  const [mileage, setMileage] = useState("");
  const [makeModel, setMakeModel] = useState("");
  const [condition, setCondition] = useState("");
  const [notes, setNotes] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState<FieldError>(null);

  function update(value: string, setter: (value: string) => void) {
    setter(value);
    setError(null);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const vrm = registration.toUpperCase().replace(/\s/g, "");
    const miles = Number(mileage);

    if (step === 1) {
      if (!/^[A-Z0-9]{1,8}$/.test(vrm)) {
        setError({ field: "sell-registration", message: "Enter your registration (up to 8 letters and numbers)." });
        return;
      }
      if (mileage.trim() === "" || !Number.isFinite(miles) || miles < 0 || miles > 2_000_000) {
        setError({ field: "sell-mileage", message: "Enter your current mileage in miles." });
        return;
      }
      setError(null);
      setStep(2);
      return;
    }

    if (step === 2) {
      if (fullName.trim().length < 2) {
        setError({ field: "sell-name", message: "Enter your name so we know who to contact." });
        return;
      }
      if (!/^[+0-9() .-]{7,24}$/.test(phone.trim()) || phone.replace(/\D/g, "").length < 7) {
        setError({ field: "sell-phone", message: "Enter a valid contact number." });
        return;
      }
      if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
        setError({ field: "sell-email", message: "Enter a valid email address or leave it blank." });
        return;
      }
      setError(null);
      setStep(3);
      return;
    }

    // No vehicle-lookup or form endpoint is configured. Open a draft for the customer to review and send.
    const message = [
      "Hi YM Motors, I’d like to request a valuation for my car.",
      `Registration: ${vrm}`,
      `Mileage: ${miles.toLocaleString("en-GB")} miles`,
      makeModel.trim() && `Make / model: ${makeModel.trim()}`,
      condition && `Condition: ${condition}`,
      notes.trim() && `Other details: ${notes.trim()}`,
      `Name: ${fullName.trim()}`,
      `Phone: ${phone.trim()}`,
      email.trim() && `Email: ${email.trim()}`,
    ].filter(Boolean).join("\n");

    window.location.assign(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`);
  }

  const fieldError = (field: string) => error?.field === field;

  return (
    <main className="min-h-screen overflow-hidden font-[var(--font-body)] text-white" style={{ background: "radial-gradient(ellipse at 95% 0%, #00a8e80c, transparent 45%), #090d12", colorScheme: "dark" }}>
      {/* Banner */}

      <section
        aria-labelledby="finance-heading"
        className="relative isolate flex min-h-[440px] flex-col justify-end overflow-hidden border-b border-white/10 sm:min-h-[500px] lg:min-h-[560px]"
        style={{ paddingTop: "var(--ym-stock-header-clearance, 96px)" }}
      >
        <Image
          src="/images/Sell-banner.png"
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="100vw"
          className="z-0 object-cover object-[center_55%] scale-[1.015]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(4,10,17,0.96)_0%,rgba(4,10,17,0.82)_34%,rgba(4,10,17,0.52)_58%,rgba(4,10,17,0.20)_100%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[48%] bg-[linear-gradient(180deg,transparent_0%,rgba(9,13,18,0.86)_100%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[8%] top-[35%] z-10 h-56 w-56 rounded-full bg-[#00A8E8]/10 blur-[90px]"
        />

        <div className="relative z-20 mx-auto w-full max-w-[1400px] px-5 pb-12 pt-16 sm:px-8 sm:pb-16 lg:px-12 lg:pb-20">
          <div className="max-w-[690px]">
         

            <h1
              id="finance-heading"
              className="font-[var(--font-display)] text-[clamp(43px,5.2vw,72px)] font-semibold leading-[1.02] tracking-[-0.052em] drop-shadow-[0_4px_20px_rgba(0,0,0,0.36)]"
            >
              Sell <span className="bg-[linear-gradient(90deg,#27C1F3_0%,#AEE8FA_58%,#FFFFFF_100%)] bg-clip-text text-transparent">your car.</span>
            </h1>

            <p className="mt-5 max-w-[560px] text-[15px] leading-[1.8] text-white/78 sm:text-[17px]">
              A straightforward, personal way to sell your vehicle. Share a few details and our team will guide you through the next steps.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-[12px] text-white/70 sm:text-[13px]">
              <span className="inline-flex items-center gap-2">
                <span className="grid h-6 w-6 place-items-center rounded-full border border-[#00A8E8]/45 bg-[#00A8E8]/10 text-[#75D7FC]"><Icon name="check" className="h-3.5 w-3.5" /></span>
                No obligation
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="grid h-6 w-6 place-items-center rounded-full border border-[#00A8E8]/45 bg-[#00A8E8]/10 text-[#75D7FC]"><Icon name="check" className="h-3.5 w-3.5" /></span>
                Direct contact
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="grid h-6 w-6 place-items-center rounded-full border border-[#00A8E8]/45 bg-[#00A8E8]/10 text-[#75D7FC]"><Icon name="check" className="h-3.5 w-3.5" /></span>
                Simple process
              </span>
            </div>
          </div>
        </div>
      </section>
      

      <section id="why-ym-motors" aria-labelledby="why-heading" className="relative scroll-mt-20 overflow-hidden py-20 sm:py-24 lg:py-28">
        <div aria-hidden="true" className="pointer-events-none absolute -right-28 top-8 h-72 w-72 rounded-full bg-[#00A8E8]/[0.055] blur-[100px]" />
        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-9 lg:grid-cols-[0.88fr_1.12fr] lg:items-end lg:gap-20">
            <div>
              <h2 id="why-heading" className="max-w-[540px] font-[var(--font-display)] text-[clamp(36px,4vw,58px)] font-semibold leading-[1.08] tracking-[-0.04em]">Why sell to <span className="text-[#00A8E8]">YM Motors?</span></h2>
            </div>
            <div className="max-w-[650px] space-y-4 text-[14px] leading-[1.85] text-white/65 sm:text-[16px]">
              <p>Selling a car yourself can mean writing an advert, answering messages and making time for viewings. At YM Motors, you can start with a few details and talk directly to a team that buys used cars.</p>
              <p>We&apos;re interested in well-presented vehicles that suit our stock. Share the registration and mileage to begin; we&apos;ll discuss the car&apos;s condition, history and what happens next before you make any decision.</p>
            </div>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {benefits.map((benefit) => (
              <article key={benefit.title} className="group relative overflow-hidden rounded-[14px] border border-white/12 bg-[linear-gradient(145deg,rgba(20,30,41,0.86),rgba(12,19,28,0.92))] p-6 shadow-[0_18px_45px_rgba(0,0,0,0.14)] transition duration-300 hover:-translate-y-1 hover:border-[#00A8E8]/35 sm:p-7">
                  <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00A8E8]/70 to-transparent opacity-70" />
                <Icon name={benefit.icon} className="h-7 w-7 text-[#75D7FC]" />
                <h3 className="mt-5 font-[var(--font-display)] text-[22px] font-semibold leading-tight tracking-[-0.025em]">{benefit.title}</h3>
                <p className="mt-3 max-w-[370px] text-[13px] leading-[1.8] text-white/60 sm:text-[14px]">{benefit.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 flex max-w-[900px] flex-col gap-3 border-l-2 border-[#00A8E8] bg-white/[0.025] px-5 py-4 sm:px-6">
            <p className="text-[14px] leading-[1.8] text-white/68 sm:text-[16px]">Want to see what your car could be worth? Complete the form below and we&apos;ll take a look. You can also call <a href="tel:01737307007" className="font-semibold text-[#8CDBF9] underline decoration-[#00A8E8]/60 underline-offset-4 hover:text-white">{PHONE_NUMBER}</a> to talk through your options.</p>
          </div>
        </div>
      </section>

      {/* Three-step form: vehicle, contact details and review. */}
      <section id="valuation-form" aria-labelledby="form-heading" className="relative scroll-mt-16 border-t border-white/[0.07] px-5 py-20 sm:px-8 sm:py-24 lg:py-28">
        <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-10 h-64 w-[min(720px,80vw)] -translate-x-1/2 rounded-full bg-[#00A8E8]/[0.04] blur-[110px]" />
        <div className="relative mx-auto max-w-[650px]">
          <h2 id="form-heading" className="text-center font-[var(--font-display)] text-[clamp(34px,4vw,46px)] font-semibold tracking-[-0.04em]">Let&apos;s talk about <span className="text-[#00A8E8]">your car.</span></h2>
          <p className="mx-auto mt-3 max-w-[500px] text-center text-[13px] leading-[1.7] text-white/60 sm:text-[14px]">Start with your registration and mileage. We&apos;ll take it from there together.</p>

          <ol aria-label="Enquiry progress" className="relative mt-11 flex justify-between before:absolute before:left-[16.66%] before:right-[16.66%] before:top-[15px] before:h-px before:bg-white/20 before:content-['']">
            {stepNames.map((name, index) => {
              const number = (index + 1) as Step;
              return (
                <li key={name} className="relative z-10 flex w-1/3 justify-center">
                  <button type="button" disabled={number > step} onClick={() => { setStep(number); setError(null); }} aria-current={number === step ? "step" : undefined} className="group flex w-full flex-col items-center gap-2 text-center disabled:cursor-default">
                    <span className={`flex h-[29px] w-[29px] items-center justify-center rounded-full border text-[12px] font-semibold transition-colors ${number <= step ? "border-[#00A8E8] bg-[#00A8E8] text-[#03141C]" : "border-white/30 bg-[#E8ECEF] text-[#17232D]"}`}>{number < step ? <Icon name="check" className="h-4 w-4" /> : number}</span>
                    <span className={`text-[11px] leading-snug sm:text-[13px] ${number === step ? "font-semibold text-white" : "text-white/65"}`}>{name}</span>
                  </button>
                </li>
              );
            })}
          </ol>

          <form onSubmit={handleSubmit} noValidate className="relative mt-10 overflow-hidden rounded-[18px] border border-white/15 bg-[linear-gradient(155deg,#121C27_0%,#0B121B_100%)] p-5 shadow-[0_28px_80px_rgba(0,0,0,0.28)] sm:p-8 md:p-9">
            <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00A8E8] to-transparent" />
            {step === 1 && (
              <div className="space-y-5">
                <div>
                  <label htmlFor="sell-registration" className={labelClass}>Registration <span className="text-[#77DAFF]">*</span></label>
                  <input id="sell-registration" name="registration" value={registration} onChange={(event) => update(event.target.value.toUpperCase().replace(/[^A-Z0-9 ]/g, "").slice(0, 11), setRegistration)} autoComplete="off" autoCapitalize="characters" maxLength={11} placeholder="e.g. AB12 CDE" aria-invalid={fieldError("sell-registration")} aria-describedby={fieldError("sell-registration") ? "sell-form-error" : undefined} className={`${inputClass} uppercase tracking-[0.06em]`} />
                </div>
                <div>
                  <label htmlFor="sell-mileage" className={labelClass}>Mileage <span className="text-[#77DAFF]">*</span></label>
                  <div className="relative">
                    <input id="sell-mileage" name="mileage" value={mileage} onChange={(event) => update(event.target.value.replace(/\D/g, "").slice(0, 7), setMileage)} inputMode="numeric" placeholder="e.g. 45000" aria-invalid={fieldError("sell-mileage")} aria-describedby={fieldError("sell-mileage") ? "sell-form-error" : undefined} className={`${inputClass} pr-16`} />
                    <span aria-hidden="true" className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[12px] text-white/45">miles</span>
                  </div>
                </div>
                <p className="text-[12px] leading-[1.6] text-white/50">We&apos;ll confirm your vehicle details with you before discussing an offer.</p>
              </div>
            )}

            {step === 2 && (
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="sell-name" className={labelClass}>Your name <span className="text-[#77DAFF]">*</span></label>
                  <input id="sell-name" name="full-name" value={fullName} onChange={(event) => update(event.target.value.slice(0, 80), setFullName)} autoComplete="name" maxLength={80} placeholder="Full name" aria-invalid={fieldError("sell-name")} aria-describedby={fieldError("sell-name") ? "sell-form-error" : undefined} className={inputClass} />
                </div>
                <div>
                  <label htmlFor="sell-phone" className={labelClass}>Phone number <span className="text-[#77DAFF]">*</span></label>
                  <input id="sell-phone" name="phone" type="tel" value={phone} onChange={(event) => update(event.target.value.slice(0, 24), setPhone)} autoComplete="tel" maxLength={24} placeholder="Your contact number" aria-invalid={fieldError("sell-phone")} aria-describedby={fieldError("sell-phone") ? "sell-form-error" : undefined} className={inputClass} />
                </div>
                <div>
                  <label htmlFor="sell-email" className={labelClass}>Email address <span className="font-normal text-white/45">(optional)</span></label>
                  <input id="sell-email" name="email" type="email" value={email} onChange={(event) => update(event.target.value.slice(0, 120), setEmail)} autoComplete="email" maxLength={120} placeholder="you@example.com" aria-invalid={fieldError("sell-email")} aria-describedby={fieldError("sell-email") ? "sell-form-error" : undefined} className={inputClass} />
                </div>
                <div>
                  <label htmlFor="sell-model" className={labelClass}>Make &amp; model <span className="font-normal text-white/45">(optional)</span></label>
                  <input id="sell-model" name="make-model" value={makeModel} onChange={(event) => update(event.target.value.slice(0, 80), setMakeModel)} maxLength={80} placeholder="e.g. Toyota Yaris" className={inputClass} />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="sell-condition" className={labelClass}>Condition <span className="font-normal text-white/45">(optional)</span></label>
                  <select id="sell-condition" name="condition" value={condition} onChange={(event) => update(event.target.value, setCondition)} className={inputClass}>
                    <option value="">Select condition</option>
                    <option value="Excellent">Excellent</option>
                    <option value="Good">Good</option>
                    <option value="Fair">Fair</option>
                    <option value="Needs attention">Needs attention</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="sell-notes" className={labelClass}>Anything else we should know? <span className="font-normal text-white/45">(optional)</span></label>
                  <textarea id="sell-notes" name="notes" value={notes} onChange={(event) => update(event.target.value.slice(0, 400), setNotes)} maxLength={400} rows={3} placeholder="Service history, known issues, modifications..." className={`${inputClass} min-h-[100px] resize-y py-3`} />
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h3 className="font-[var(--font-display)] text-[23px] font-semibold">Check your details</h3>
                <p className="mt-2 text-[13px] leading-[1.7] text-white/60">Make sure everything looks right before opening WhatsApp.</p>
                <dl className="mt-6 divide-y divide-white/10 border-y border-white/10 text-[13px]">
                  {[
                    ["Registration", registration.toUpperCase().replace(/\s/g, "")],
                    ["Mileage", `${Number(mileage).toLocaleString("en-GB")} miles`],
                    ["Make & model", makeModel.trim()],
                    ["Condition", condition],
                    ["Name", fullName.trim()],
                    ["Phone", phone.trim()],
                    ["Email", email.trim()],
                    ["Other details", notes.trim()],
                  ].filter(([, value]) => value).map(([label, value]) => (
                    <div key={label} className="grid grid-cols-[115px_minmax(0,1fr)] gap-4 py-3 sm:grid-cols-[140px_minmax(0,1fr)]">
                      <dt className="text-white/55">{label}</dt>
                      <dd className="break-words font-medium text-white">{value}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-5 text-[12px] leading-[1.7] text-white/60">The next button opens a prefilled WhatsApp message. Review it and press <strong className="font-semibold text-white/80">Send</strong> there to submit your enquiry to YM Motors. An offer is subject to reviewing the car.</p>
              </div>
            )}

            {error && <p id="sell-form-error" role="alert" className="mt-5 rounded-[5px] border border-rose-300/30 bg-rose-300/10 px-4 py-3 text-[13px] text-rose-100">{error.message}</p>}

            <div className="mt-7 flex flex-col gap-3 border-t border-white/10 pt-6">
              <button type="submit" className={`${primaryCtaClass} w-full text-center`}>
                <ButtonShine />
                <span className="relative z-10 inline-flex items-center gap-3">{step === 1 ? "Continue to your details" : step === 2 ? "Review your details" : "Open WhatsApp to send enquiry"}<Icon name="arrow" className="h-4 w-4" /></span>
              </button>
              {step > 1 && <button type="button" onClick={() => { setStep(step === 3 ? 2 : 1); setError(null); }} className="min-h-[42px] text-[13px] font-medium text-white/70 transition-colors hover:text-white">Back to {step === 3 ? "your details" : "your vehicle"}</button>}
            </div>
          </form>
          <p className="mt-6 flex items-center justify-center gap-2 text-center text-[13px] text-white/60"><Icon name="phone" className="h-4 w-4 text-[#7ADAFE]" /> Prefer to talk? <a href="tel:01737307007" className="font-semibold text-white underline decoration-white/50 underline-offset-4 hover:text-[#8CDBF9]">{PHONE_NUMBER}</a></p>
        </div>
      </section>
    </main>
  );
}