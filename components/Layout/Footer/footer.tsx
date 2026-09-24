"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Match the header logo without importing the Header component into the footer.
function Logo() {
  return (
    <span className="flex flex-col items-center whitespace-nowrap">
      <h2 className="m-0 bg-[linear-gradient(100deg,#00A8E8_0%,#38C2F5_18%,#BCEBFC_38%,#FFFFFF_62%,#D9E0E7_82%,#AAB4BE_100%)] bg-clip-text font-[var(--font-display)] text-[28px] font-semibold uppercase leading-none tracking-[-0.035em] !text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] xl:text-[34px] 2xl:text-[42px]">
        YM MOTORS
      </h2>
    </span>
  );
}

type IconName = "whatsapp" | "phone" | "mapPin" | "instagram" | "facebook" | "youtube" | "arrowUpRight";

function FooterIcon({ name, className }: { name: IconName; className?: string }) {
  const svgProps = {
    "aria-hidden": true as const,
    className,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
  };

  if (name === "whatsapp") {
    return (
      <svg {...svgProps} fill="currentColor">
        <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.47-.89-.79-1.48-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.91-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.87 1.21 3.07c.15.2 2.09 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35ZM12.03 21.42h-.01a9.4 9.4 0 0 1-4.79-1.32l-.34-.2-3.57.93.95-3.47-.22-.36a9.4 9.4 0 0 1-1.45-5.03c0-5.19 4.23-9.41 9.43-9.41a9.36 9.36 0 0 1 6.66 2.76 9.36 9.36 0 0 1 2.75 6.67c0 5.19-4.22 9.41-9.41 9.41Zm8.01-17.43A11.26 11.26 0 0 0 12.03.67C5.82.67.77 5.72.77 11.93a11.2 11.2 0 0 0 1.5 5.61L.67 23.33l5.93-1.56a11.3 11.3 0 0 0 5.42 1.38h.01c6.21 0 11.26-5.05 11.26-11.25a11.25 11.25 0 0 0-3.25-7.91Z" />
      </svg>
    );
  }

  if (name === "facebook") {
    return (
      <svg {...svgProps} fill="currentColor">
        <path d="M14.9 8.2H17V4.5a25 25 0 0 0-3.05-.2c-3.03 0-5.1 1.85-5.1 5.23v2.93H5.5v4.13h3.35V24h4.1v-7.41h3.36l.53-4.13h-3.89V9.94c0-1.2.33-1.74 1.95-1.74Z" />
      </svg>
    );
  }

  if (name === "youtube") {
    return (
      <svg {...svgProps} fill="currentColor">
        <path fillRule="evenodd" d="M23.5 6.19a3 3 0 0 0-2.11-2.12C19.54 3.56 12 3.56 12 3.56s-7.54 0-9.39.51A3 3 0 0 0 .5 6.19 31.2 31.2 0 0 0 0 12a31.2 31.2 0 0 0 .5 5.81 3 3 0 0 0 2.11 2.12c1.85.51 9.39.51 9.39.51s7.54 0 9.39-.51a3 3 0 0 0 2.11-2.12A31.2 31.2 0 0 0 24 12a31.2 31.2 0 0 0-.5-5.81Zm-13.96 9.38V8.43L15.82 12l-6.28 3.57Z" />
      </svg>
    );
  }

  return (
    <svg {...svgProps} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {name === "instagram" && (
        <>
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.8" cy="6.3" r="1" fill="currentColor" stroke="none" />
        </>
      )}
      {name === "phone" && (
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 11.19 18a19.5 19.5 0 0 1-6.05-6.05A19.8 19.8 0 0 1 2 3.18 2 2 0 0 1 4 1h3a2 2 0 0 1 2 1.72c.13.97.37 1.92.71 2.84a2 2 0 0 1-.45 2.11L8 8.94a16 16 0 0 0 6.06 6.06l1.27-1.26a2 2 0 0 1 2.11-.45c.92.34 1.87.58 2.84.71A2 2 0 0 1 22 16.92Z" />
      )}
      {name === "mapPin" && (
        <>
          <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
          <circle cx="12" cy="10" r="2.5" />
        </>
      )}
      {name === "arrowUpRight" && (
        <>
          <path d="M7 17 17 7" />
          <path d="M8 7h9v9" />
        </>
      )}
    </svg>
  );
}

type FooterProps = {
  // Optional image override; the header-style Logo is used by default.
  footerLogoSrc?: string;
  socialLinks?: {
    instagram?: string;
    facebook?: string;
    youtube?: string;
  };
};

// These hours and the contact number came from the supplied footer.
const salesHours = [
  { day: "Monday – Friday", time: "09:30 – 17:30" },
  { day: "Saturday", time: "08:30 – 17:30" },
  { day: "Sunday", time: "Closed" },
];

const usefulLinks = [
  { label: "Current stock", href: "/#stock" },
  { label: "About YM Motors", href: "/#welcome" },
  { label: "Contact us", href: "/contact" },
];

const trustMarks = [
  { src: "/images/blue-motor-finance.png", alt: "Blue Motor Finance" },
  { src: "/images/financial-conduct-authority.png", alt: "Financial Conduct Authority" },
  { src: "/images/hpi.png", alt: "HPI" },
  { src: "/images/octane-finance.png", alt: "Octane Finance" },
];

const phoneHref = "tel:01737307007";
const whatsappHref = "https://wa.me/441737307007";
const directionsHref = "https://www.google.com/maps/search/?api=1&query=Unit+56%2C+Barns+Court%2C+Turners+Hill+Road%2C+Crawley+Down+RH10+4HQ";

type IconLink = { label: string; href?: string; icon: IconName; external: boolean };

export default function Footer({ footerLogoSrc }: FooterProps = {}) {
  const currentYear = new Date().getFullYear();

  const iconLinks: IconLink[] = [
    { label: "WhatsApp", href: whatsappHref, icon: "whatsapp", external: true },
    { label: "Call YM Motors", href: phoneHref, icon: "phone", external: false },
    { label: "Directions", href: directionsHref, icon: "mapPin", external: true },
  
  ];

  return (
    <footer
      className="relative overflow-hidden border-t border-white/10 bg-[#090D12] text-white"
      style={{ background: "radial-gradient(ellipse at 95% 0%, #00a8e80c, transparent 45%), #090d12" }}
    >
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 h-px w-[72%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/[0.10] to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-[1450px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-x-12 gap-y-11 border-b border-white/10 py-12 sm:grid-cols-2 lg:grid-cols-[1.1fr_1.1fr_0.8fr] lg:gap-x-16 lg:py-14">
          <div id="contact" className="scroll-mt-24">
            <motion.a
              href="/#home"
              aria-label="YM Motors home"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="inline-flex w-fit items-center"
            >
              {footerLogoSrc ? (
                <Image src={footerLogoSrc} alt="YM Motors" width={220} height={80} className="max-h-[80px] w-auto max-w-[220px] object-contain" />
              ) : (
                <Logo />
              )}
            </motion.a>
            <p className="mt-4 max-w-[350px] font-[var(--font-body)] text-[13px] leading-[1.75] text-white/65 sm:text-[14px]">
              Used cars and imports for every kind of drive. Explore a changing
              selection at YM Motors in Crawley Down.
            </p>
            <a href={phoneHref} className="mt-6 inline-flex items-center gap-2.5 font-[var(--font-body)] text-[18px] font-semibold text-white transition-colors hover:text-[#78DAFF]">
              <FooterIcon name="phone" className="h-[18px] w-[18px] shrink-0 text-[#00A8E8]" />
              01737 307 007
            </a>
            <address className="mt-5 flex items-start gap-2.5 font-[var(--font-body)] text-[13px] leading-[1.75] not-italic text-white/65 sm:text-[14px]">
              <FooterIcon name="mapPin" className="mt-0.5 h-[18px] w-[18px] shrink-0 text-[#00A8E8]" />
              <span>Unit 56, Barns Court<br />Turners Hill Road<br />Crawley Down, RH10 4HQ</span>
            </address>
          </div>

          <div>
            <h2 className="font-[var(--font-body)] text-[14px] font-bold uppercase tracking-[0.12em]">Sales hours</h2>
            <span aria-hidden="true" className="mt-3 block h-[2px] w-9 bg-[#00A8E8]" />
            <div className="mt-6 max-w-[380px] font-[var(--font-body)] text-[13px] sm:text-[14px]">
              {salesHours.map(({ day, time }) => (
                <div key={day} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-white/10 py-2.5 first:pt-0 last:border-b-0">
                  <span className="text-white/65">{day}</span>
                  <span className="whitespace-nowrap font-medium tabular-nums text-white/90">{time}</span>
                </div>
              ))}
            </div>
            <p className="mt-5 max-w-[350px] font-[var(--font-body)] text-[12px] leading-[1.7] text-white/50">
              Viewings by appointment only. Please call before visiting.
            </p>
          </div>

          <nav aria-label="Footer navigation" className="sm:col-span-2 lg:col-span-1">
            <h2 className="font-[var(--font-body)] text-[14px] font-bold uppercase tracking-[0.12em]">Explore</h2>
            <span aria-hidden="true" className="mt-3 block h-[2px] w-9 bg-[#00A8E8]" />
            <ul className="mt-6 flex flex-col gap-3.5 font-[var(--font-body)] text-[13px] sm:flex-row sm:flex-wrap sm:gap-x-7 lg:flex-col">
              {usefulLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="group inline-flex items-center gap-2 text-white/65 transition-colors hover:text-[#78DAFF]">
                    {label}
                    <FooterIcon name="arrowUpRight" className="h-3.5 w-3.5 text-[#00A8E8] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <h3 className="font-[var(--font-body)] text-[11px] font-bold uppercase tracking-[0.12em] text-white/70">Connect with us</h3>
              <div className="mt-3 flex flex-wrap gap-2" aria-label="Contact and social links">
                {iconLinks.map(({ label, href, icon, external }) =>
                  href && (href.startsWith("https://") || href.startsWith("tel:")) ? (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      title={label}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#00A8E8]/70 hover:bg-[#00A8E8]/[0.16] hover:text-[#8CE1FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00A8E8]"
                    >
                      <FooterIcon name={icon} className="h-[18px] w-[18px]" />
                    </a>
                  ) : (
                    <span
                      key={label}
                      aria-hidden="true"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-white/25"
                    >
                      <FooterIcon name={icon} className="h-[18px] w-[18px]" />
                    </span>
                  ),
                )}
              </div>
            </div>
          </nav>
        </div>

        <div className="border-b border-white/10 py-4">
          <ul
            aria-label="Finance and vehicle information logos"
            className="mx-auto grid max-w-[450px] grid-cols-2 gap-2 lg:grid-cols-4"
          >
            {trustMarks.map(({ src, alt }) => (
              <li key={src} className="flex min-h-[40px] items-center justify-center rounded-[5px] border border-[#D8E2E9] bg-[#F6F8FA] px-2 py-1 sm:min-h-[44px]">
                <Image
                  src={src}
                  alt={alt}
                  width={58}
                  height={21}
                  className="h-[18px] w-[50px] object-contain sm:h-[21px] sm:w-[58px]"
                />
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-2.5 py-5 font-[var(--font-body)] text-[11px] leading-[1.6] text-white/45 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-x-6 sm:text-[12px]">
          <span>© {currentYear} YM Motors Ltd. All rights reserved.</span>
          <a href="https://find-and-update.company-information.service.gov.uk/company/13025502" target="_blank" rel="noopener noreferrer" className="w-fit transition-colors hover:text-[#78DAFF]">
            Registered in England &amp; Wales · Company no. 13025502
          </a>
        </div>
        {/* Add real policy links and approved finance disclosure when supplied. */}
      </div>
    </footer>
  );
}
