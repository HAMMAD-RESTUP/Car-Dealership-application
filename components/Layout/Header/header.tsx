"use client";

import { ReactNode, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Check,
  ChevronDown,
  Mail,
  Menu,
  Phone,
  Star,
  X,
} from "lucide-react";

import {
  GB,
  DE,
} from "country-flag-icons/react/3x2";

type Language = "en" | "de";

const navItems = [
  { label: "Home", href: "#home", active: true, dropdown: false },
  { label: "Stocklist", href: "#stocklist", active: false, dropdown: true, submenu: [{ label: "Used Cars", href: "/used-vehicles" }] },
  { label: "Part Exchange", href: "#part-exchange", active: false, dropdown: true },
  { label: "Finance", href: "#finance", active: false, dropdown: false },
  { label: "Bimta", href: "#bimta", active: false, dropdown: false },
  { label: "Warranty", href: "#warranty", active: false, dropdown: false },
  { label: "Reviews", href: "#reviews", active: false, dropdown: true },
  { label: "Contact Us", href: "#contact", active: false, dropdown: true },
];


function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="#25D366"
      aria-hidden="true"
    >
      <path d="M20.52 3.48A11.78 11.78 0 0 0 12.05 0C5.53 0 .22 5.31.22 11.83c0 2.09.55 4.13 1.6 5.93L.12 24l6.42-1.68a11.82 11.82 0 0 0 5.51 1.4h.01c6.52 0 11.82-5.31 11.82-11.83 0-3.16-1.23-6.13-3.36-8.41ZM12.06 21.7h-.01a9.83 9.83 0 0 1-5.01-1.37l-.36-.21-3.81 1 1.02-3.71-.23-.38a9.84 9.84 0 1 1 8.4 4.67Zm5.39-7.38c-.29-.15-1.72-.85-1.99-.95-.27-.1-.47-.15-.67.15-.2.29-.76.95-.93 1.14-.17.2-.34.22-.63.07-.29-.15-1.23-.45-2.35-1.44-.87-.77-1.46-1.72-1.63-2.01-.17-.29-.02-.45.13-.6.14-.14.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.29-1.04 1.02-1.04 2.48s1.06 2.87 1.2 3.07c.15.2 2.08 3.18 5.04 4.46.7.3 1.24.48 1.66.61.7.22 1.34.19 1.84.12.56-.08 1.72-.7 1.96-1.37.24-.68.24-1.25.17-1.37-.07-.12-.27-.2-.56-.34Z"/>
    </svg>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [language, setLanguage] = useState<Language>("en");
  const [stockHover, setStockHover] = useState(false);

  const selectLanguage = (value: Language) => {
    setLanguage(value);
    setLanguageOpen(false);
  };

  return (
    <header
      className="
        absolute
        left-0
        top-0
        z-50
        w-full
      "
    >
      {/* =====================================================
          ROW 1 — TOP UTILITY BAR
          Compare/WhatsApp left, logo centered, language +
          contact actions right. Mobile collapses to logo + menu.
      ====================================================== */}
      <div
        className="
          relative

          flex
          h-[64px]
          w-full
          items-center

          border-b
          border-white/[0.06]
    bg-[linear-gradient(180deg,#0B0D0F_0%,#11161D_100%)]

          px-5

          sm:px-6

          md:h-[72px]
          md:px-7

          xl:px-9

          2xl:px-12
        "
      >
        {/* LEFT — COMPARE + WHATSAPP */}
        <div
          className="
            relative
            z-20

            hidden
            min-w-0
            flex-1
            items-center
            gap-3

            xl:flex
          "
        >
          <a
            href="#compare"
            className="
              group

              inline-flex
              h-[38px]
              items-center
              gap-[7px]

              rounded-[4px]

              border
              border-white/[0.10]

              bg-white/[0.04]

              px-[14px]

              font-[var(--font-body)]

              text-[12px]
              font-medium

              text-white

              transition-all
              duration-200

              hover:border-[#00A8E8]/40
              hover:bg-[#00A8E8]/[0.08]

              2xl:text-[13px]
            "
          >
            <Star
              size={13}
              strokeWidth={1.8}
              className="text-[#00A8E8]"
            />
            Compare Vehicles
            <span className="text-white/45">(0)</span>
          </a>

          <a
            href="https://wa.me/440000000000"
            aria-label="Chat on WhatsApp"
            className="
              inline-flex
              h-[38px]
              w-[38px]
              items-center
              justify-center

              rounded-full

              border
              border-white/[0.10]

              bg-white/[0.04]

              text-white/85

              transition-all
              duration-200

              hover:border-[#00A8E8]/40
              hover:text-white
            "
          >
            <WhatsAppIcon size={18} />
          </a>
        </div>

        {/* CENTER LOGO — DESKTOP */}
        <motion.a
          href="#home"
          initial={{ opacity: 0, y: -3 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45 }}
          className="
            absolute
            left-1/2
            top-1/2
            z-30

            hidden

            -translate-x-1/2
            -translate-y-1/2

            xl:block
          "
        >
          <LogoText />
        </motion.a>

        {/* CENTER LOGO — MOBILE */}
        <motion.a
          href="#home"
          initial={{ opacity: 0, y: -3 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45 }}
          className="
            absolute
            left-1/2
            top-1/2
            z-30

            -translate-x-1/2
            -translate-y-1/2

            xl:hidden
          "
        >
          <LogoText mobile />
        </motion.a>

        {/* RIGHT — LANGUAGE + EMAIL + PHONE CTA */}
        <div
          className="
            relative
            z-20

            hidden
            min-w-0
            flex-1
            items-center
            justify-end
            gap-3

            xl:flex
          "
        >
          {/* LANGUAGE */}
          <div className="relative">
            <button
              type="button"
              aria-label="Select language"
              aria-expanded={languageOpen}
              onClick={() => setLanguageOpen((previous) => !previous)}
              className="
                group

                flex
                h-[38px]
                items-center
                gap-[7px]

                border-0
                bg-transparent

                p-0

                font-[var(--font-body)]

                text-[12px]
                font-medium

                text-white

                transition-opacity
                duration-200

                hover:opacity-80
              "
            >
              <span className="h-[14px] w-[21px] overflow-hidden rounded-[1px]">
                {language === "en" ? (
                  <GB title="United Kingdom" className="h-full w-full object-cover" />
                ) : (
                  <DE title="Germany" className="h-full w-full object-cover" />
                )}
              </span>
              <span>{language === "en" ? "EN" : "DE"}</span>
              <ChevronDown
                size={11}
                strokeWidth={1.5}
                className={`
                  text-white/55
                  transition-transform
                  duration-200
                  ${languageOpen ? "rotate-180" : ""}
                `}
              />
            </button>

            <AnimatePresence>
              {languageOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -7, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.98 }}
                  transition={{ duration: 0.17 }}
                  className="
                    absolute
                    right-0
                    top-[calc(100%+15px)]
                    z-[100]

                    w-[220px]

                    overflow-hidden

                    rounded-[6px]

                    border
                    border-white/[0.06]

                    bg-[rgba(11,13,15,0.9)]

                    p-[6px]

                    shadow-[0_24px_55px_rgba(0,0,0,0.40)]

                    backdrop-blur-[16px]
                  "
                >
                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-[linear-gradient(180deg,rgba(11,13,15,0.78)_0%,rgba(17,22,29,0.66)_50%,rgba(11,13,15,0.74)_100%)]
                    "
                  />

                  <div
                    className="
                      pointer-events-none
                      absolute
                      left-1/2
                      top-1/2
                      h-[160px]
                      w-[300px]
                      -translate-x-1/2
                      -translate-y-1/2
                      rounded-full
                      bg-[#00A8E8]/[0.04]
                      blur-[80px]
                    "
                  />

                  <div
                    className="
                      pointer-events-none
                      absolute
                      left-1/2
                      top-0
                      h-px
                      w-[65%]
                      -translate-x-1/2
                      bg-gradient-to-r
                      from-transparent
                      via-[#00A8E8]/45
                      to-transparent
                    "
                  />

                  <div className="relative z-10">
                    <p
                      className="
                        px-3
                        pb-2
                        pt-2
                        font-[var(--font-body)]
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.18em]
                        text-white/35
                      "
                    >
                      Language
                    </p>

                    <LanguageItem
                      active={language === "en"}
                      title="English"
                      subtitle="United Kingdom"
                      flag={<GB title="United Kingdom" className="h-[16px] w-[24px]" />}
                      onClick={() => selectLanguage("en")}
                    />

                    <div className="mt-[3px]">
                      <LanguageItem
                        active={language === "de"}
                        title="Deutsch"
                        subtitle="Deutschland"
                        flag={<DE title="Germany" className="h-[16px] w-[24px]" />}
                        onClick={() => selectLanguage("de")}
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <span
            className="
              h-[26px]
              w-px
              bg-gradient-to-b
              from-transparent
              via-white/10
              to-transparent
            "
          />

          {/* EMAIL ICON */}
          <a
            href="#contact"
            aria-label="Email us"
            className="
              inline-flex
              h-[38px]
              w-[38px]
              items-center
              justify-center

              rounded-[4px]

              bg-white/[0.05]

              border
              border-white/[0.10]

              text-white

              transition-all
              duration-200

              hover:border-[#00A8E8]/40
              hover:bg-[#00A8E8]/[0.08]
            "
          >
            <Mail size={15} strokeWidth={1.8} />
          </a>

          {/* PHONE CTA */}
          <motion.a
            href="tel:+440000000000"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.18 }}
            className="
              inline-flex
              h-[38px]
              shrink-0
              items-center
              justify-center
              gap-[7px]

              whitespace-nowrap

              rounded-[3px]

              border
              border-[#2a9fff]/25

              bg-[#158ff3]

              px-[16px]

              font-[var(--font-body)]

              text-[14px]
              font-semibold

              text-white

              shadow-[0_7px_20px_rgba(21,143,243,0.17)]

              transition-all
              duration-200

              hover:bg-[#2a9fff]

              2xl:px-[18px]
              2xl:text-[13px]
            "
          >
        
            Get In Touch
          </motion.a>
        </div>

        {/* MOBILE CONTACT ICONS */}
        <div
          className="
            absolute
            right-4
            top-1/2
            -translate-y-1/2
            flex
            items-center
            gap-2
            xl:hidden
          "
        >
          <a
            href="https://wa.me/440000000000"
            className="
              flex h-[38px] w-[38px]
              items-center justify-center
              rounded-full
              border border-white/10
              bg-white/[0.04]
            "
            aria-label="Whatsapp"
          >
            <WhatsAppIcon size={18} />
          </a>

          <a
            href="#contact"
            className="
              flex h-[38px] w-[38px]
              items-center justify-center
              rounded-full
              border border-white/10
              bg-white/[0.04]
              text-white
            "
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => {
            setMenuOpen((previous) => !previous);
            setLanguageOpen(false);
          }}
          className="
            relative
            z-30

            ml-auto

            flex
            h-[44px]
            w-[44px]
            items-center
            justify-center

            border-0

            bg-transparent

            p-0

            text-white

            transition-opacity
            duration-200

            hover:opacity-75

            focus:outline-none
            focus-visible:outline-none

            hidden
          "
        >
          {menuOpen ? <X size={24} strokeWidth={1.7} /> : <Menu size={25} strokeWidth={1.7} />}
        </button>
      </div>


      {/* =====================================================
          MOBILE SECOND HEADER
      ====================================================== */}
      <div
        className="
          flex
          h-[55px]
          w-full
          items-center
          justify-end
          bg-[#0B0D0F]
          px-5
          xl:hidden
        "
      >
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => {
            setMenuOpen((previous) => !previous);
            setLanguageOpen(false);
          }}
          className="
            flex
            h-[42px]
            w-[42px]
            items-center
            justify-center
            text-white
          "
        >
          {menuOpen ? (
            <X size={26} strokeWidth={1.7} />
          ) : (
            <Menu size={28} strokeWidth={1.7} />
          )}
        </button>
      </div>

      {/* =====================================================
          ROW 2 — NAV BAR
          Desktop only. Full-width, evenly spaced, Home shown
          as an active solid block the way the reference does it.
      ====================================================== */}
      <div
        className="
          relative

          hidden
          w-full

          border-b
          border-white/[0.06]

             bg-[linear-gradient(180deg,#0B0D0F_0%,#11161D_100%)]

          xl:block
        "
      >
        <nav
          className="
            mx-auto

            flex
            h-[52px]
            w-full
            max-w-[1920px]
            items-center
            justify-center

         
            2xl:h-[56px]
          
          "
        >
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative h-full"
              onMouseEnter={() => item.label === "Stocklist" && setStockHover(true)}
              onMouseLeave={() => item.label === "Stocklist" && setStockHover(false)}
            >
            <a
              href={item.href}
              className={`
                group

                relative

                flex
                h-full
                items-center
                justify-center
                gap-[20px]
                uppercase
                whitespace-nowrap
                px-5

                font-[var(--font-body)]

                text-[13px]
                font-medium

                transition-colors
                duration-200

                2xl:px-6
                2xl:text-[14px]

                ${
                  item.active
                    ? "bg-[#158ff3] text-white"
                    : "text-white/85 hover:text-white"
                }
              `}
            >
              {item.label}

              {item.dropdown && (
                <ChevronDown
                  size={13}
                  strokeWidth={1.8}
                  className={`
                    transition-colors
                    duration-200

                    ${item.active ? "text-white/80" : "text-white/45 group-hover:text-white/75"}
                  `}
                />
              )}

              {!item.active && (
                <span
                  className="
                    pointer-events-none

                    absolute
                    bottom-0
                    left-1/2

                    h-[2px]
                    w-0

                    -translate-x-1/2

                    rounded-full

                    bg-[#00A8E8]

                    shadow-[0_0_10px_rgba(0,168,232,0.32)]

                    transition-all
                    duration-300

                    group-hover:w-[24px]
                  "
                />
              )}
            </a>

            {item.submenu && stockHover && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18 }}
                className="absolute left-0 top-full z-50 w-[190px] overflow-hidden rounded-b-md border border-white/10 bg-[#11161D] shadow-xl"
              >
                {item.submenu.map((sub) => (
                  <a
                    key={sub.label}
                    href={sub.href}
                    className="block px-5 py-3 text-[13px] text-white/80 transition hover:bg-[#158ff3] hover:text-white"
                  >
                    {sub.label}
                  </a>
                ))}
              </motion.div>
            )}
            </div>
          ))}
        </nav>
      </div>

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="
              fixed
              left-0
              top-0
              z-[60]
              h-screen
              w-[82%]
              max-w-[340px]

              overflow-hidden

              border-r
              border-white/[0.08]

              bg-[#0B0E13]

              shadow-[0_22px_50px_rgba(0,0,0,0.28)]

              backdrop-blur-[18px]

              xl:hidden
            "
          >
            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-[linear-gradient(180deg,rgba(7,12,18,0.86)_0%,rgba(11,17,24,0.78)_100%)]
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-0
                h-[220px]
                w-[420px]
                -translate-x-1/2
                rounded-full
                bg-[#00A8E8]/[0.045]
                blur-[100px]
              "
            />

            <div className="relative z-10 px-5 pb-6 pt-2 sm:px-6">
              {/* NAV ITEMS */}
              <nav className="flex flex-col">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`
                      group
                      relative

                      flex
                      min-h-[52px]
                      items-center
                      justify-between

                      border-b
                      border-white/[0.05]

                      font-[var(--font-body)]

                      text-[15px]
                      font-medium

                      transition-colors
                      duration-200

                      ${item.active ? "text-[#2a9fff]" : "text-white hover:text-[#2a9fff]"}
                    `}
                  >
                    {item.label}
                    {item.dropdown && (
                      <ChevronDown size={16} strokeWidth={1.8} className="text-white/40" />
                    )}
                  </a>
                ))}
              </nav>

              {/* COMPARE + WHATSAPP + EMAIL */}
              <div className="mt-4 flex items-center gap-3">
                <a
                  href="#compare"
                  className="
                    inline-flex
                    h-[42px]
                    flex-1
                    items-center
                    justify-center
                    gap-[7px]

                    rounded-[4px]

                    border
                    border-white/[0.10]

                    bg-white/[0.04]

                    font-[var(--font-body)]

                    text-[12px]
                    font-medium

                    text-white
                  "
                >
                  <Star size={13} strokeWidth={1.8} className="text-[#00A8E8]" />
                  Compare (0)
                </a>

                <a
                  href="https://wa.me/440000000000"
                  aria-label="Chat on WhatsApp"
                  className="
                    inline-flex
                    h-[42px]
                    w-[42px]
                    items-center
                    justify-center

                    rounded-[4px]

                    border
                    border-white/[0.10]

                    bg-white/[0.04]

                    text-[#25D366]
                  "
                >
                  <WhatsAppIcon size={19} />
                </a>

                <a
                  href="#contact"
                  aria-label="Email us"
                  className="
                    inline-flex
                    h-[42px]
                    w-[42px]
                    items-center
                    justify-center

                    rounded-[4px]

                    border
                    border-white/[0.10]

                    bg-white/[0.04]

                    text-[#25D366]
                  "
                >
                  <Mail size={16} strokeWidth={1.8} />
                </a>
              </div>

              {/* MOBILE LANGUAGES */}
              <div className="mt-3 grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => selectLanguage("en")}
                  className={`
                    flex
                    min-h-[46px]
                    items-center
                    gap-2

                    rounded-[4px]

                    border
                    border-white/[0.06]

                    px-3

                    font-[var(--font-body)]

                    text-[12px]

                    transition-colors
                    duration-200

                    ${
                      language === "en"
                        ? "bg-white/[0.07] text-white"
                        : "bg-white/[0.02] text-white/65"
                    }
                  `}
                >
                  <GB title="United Kingdom" className="h-[14px] w-[21px]" />
                  English
                </button>

                <button
                  type="button"
                  onClick={() => selectLanguage("de")}
                  className={`
                    flex
                    min-h-[46px]
                    items-center
                    gap-2

                    rounded-[4px]

                    border
                    border-white/[0.06]

                    px-3

                    font-[var(--font-body)]

                    text-[12px]

                    transition-colors
                    duration-200

                    ${
                      language === "de"
                        ? "bg-white/[0.07] text-white"
                        : "bg-white/[0.02] text-white/65"
                    }
                  `}
                >
                  <DE title="Germany" className="h-[14px] w-[21px]" />
                  Deutsch
                </button>
              </div>

              {/* PHONE CTA */}
              <a
                href="tel:+440000000000"
                onClick={() => setMenuOpen(false)}
                className="
                  mt-4

                  flex
                  min-h-[50px]
                  w-full
                  items-center
                  justify-center
                  gap-[8px]

                  rounded-[3px]

                  bg-[#158ff3]

                  font-[var(--font-body)]

                  text-[13px]
                  font-semibold

                  text-white

                  shadow-[0_8px_24px_rgba(21,143,243,0.20)]

                  transition-colors
                  duration-200

                  hover:bg-[#2a9fff]
                "
              >
                Get In Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* =========================================================
   LANGUAGE ITEM
========================================================= */

function LanguageItem({
  active,
  title,
  subtitle,
  flag,
  onClick,
}: {
  active: boolean;
  title: string;
  subtitle: string;
  flag: ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        flex
        w-full
        items-center
        gap-3

        rounded-[4px]

        px-3
        py-[10px]

        text-left

        transition-colors
        duration-200

        ${active ? "bg-white/[0.06]" : "hover:bg-white/[0.035]"}
      `}
    >
      <span
        className="
          flex
          h-[32px]
          w-[40px]
          items-center
          justify-center

          rounded-[3px]

          border
          border-white/[0.05]

          bg-white/[0.03]
        "
      >
        {flag}
      </span>

      <span className="flex flex-col">
        <span className="text-[12px] font-medium text-white">{title}</span>
        <span className="mt-[2px] text-[9px] text-white/35">{subtitle}</span>
      </span>

      {active && (
        <span
          className="
            ml-auto

            flex
            h-[19px]
            w-[19px]
            items-center
            justify-center

            rounded-full

            bg-[#00A8E8]/10

            text-[#00A8E8]
          "
        >
          <Check size={11} strokeWidth={2} />
        </span>
      )}
    </button>
  );
}

/* =========================================================
   CENTER LOGO TEXT ONLY
========================================================= */

function LogoText({ mobile = false }: { mobile?: boolean }) {
  return (
    <span
      className={`
        block

        whitespace-nowrap

        font-[var(--font-body)]

        font-semibold
        uppercase
        leading-none

        text-white

        ${
          mobile
            ? "text-[14px] tracking-[0.18em] sm:text-[15px]"
            : "text-[17px] tracking-[0.22em] 2xl:text-[18px]"
        }
      `}
    >
      Your Logo
    </span>
  );
}