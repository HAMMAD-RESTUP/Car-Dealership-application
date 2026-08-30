"use client";

import { ReactNode, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Check,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

import {
  GB,
  DE,
} from "country-flag-icons/react/3x2";

type Language = "en" | "de";

const leftNavItems = [
  { label: "Home", href: "#home" },
  { label: "Used Cars", href: "#models" },
  { label: "Sell Your Car", href: "#sell" },
  { label: "Finance", href: "#finance" },
  { label: "Services", href: "#services" },
];

const rightNavItems = [
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const mobileNavItems = [
  ...leftNavItems,
  ...rightNavItems,
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [language, setLanguage] = useState<Language>("en");

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
          MAIN TRANSPARENT NAVIGATION
      ====================================================== */}
      <div
        className="
          relative

          flex
          h-[80px]
          w-full
          items-center

          overflow-visible

          border-y
          border-white/[0.05]

          bg-transparent

          px-5

          backdrop-blur-[6px]
          backdrop-saturate-[1.08]

          sm:px-6
          md:px-7
          xl:px-9
          2xl:px-12
        "
      >
        {/* =================================================
            TRANSPARENT BRAND MARQUEE TINT
        ================================================== */}
        <div
          className="
            pointer-events-none

            absolute
            inset-0

            overflow-hidden
          "
        >
          <div
            className="
              absolute
              inset-0

              bg-[linear-gradient(180deg,rgba(11,13,15,0.30)_0%,rgba(17,22,29,0.18)_50%,rgba(11,13,15,0.24)_100%)]
            "
          />

          {/* BLUE AMBIENCE */}
          <div
            className="
              absolute

              left-1/2
              top-1/2

              h-[240px]
              w-[720px]

              -translate-x-1/2
              -translate-y-1/2

              rounded-full

              bg-[#00A8E8]/[0.022]

              blur-[115px]
            "
          />

          {/* TOP DETAIL LINE */}
          <div
            className="
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

              shadow-[0_0_14px_rgba(0,168,232,0.14)]
            "
          />

          {/* BOTTOM DETAIL LINE */}
          <div
            className="
              absolute

              bottom-0
              left-1/2

              h-px
              w-[80%]

              -translate-x-1/2

              bg-gradient-to-r
              from-transparent
              via-white/[0.045]
              to-transparent
            "
          />
        </div>

        {/* =================================================
            CENTER LOGO TEXT — DESKTOP
            NO LOGO MARK
        ================================================== */}
        <motion.a
          href="#home"
          initial={{
            opacity: 0,
            y: -3,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.45,
          }}
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

        {/* =================================================
            CENTER LOGO TEXT — MOBILE
        ================================================== */}
        <motion.a
          href="#home"
          initial={{
            opacity: 0,
            y: -3,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.45,
          }}
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

        {/* =================================================
            LEFT NAVIGATION
        ================================================== */}
        <div
          className="
            relative
            z-20

            hidden
            min-w-0
            flex-1
            items-center

            xl:flex
          "
        >
          {/* Reduced spacer:
              poori navigation thori LEFT move hogi
          */}
          <div
            aria-hidden="true"
            className="
              w-[75px]
              shrink-0

              2xl:w-[95px]

              min-[1700px]:w-[115px]
            "
          />

          <nav
            className="
              flex
              -translate-x-[12px]
              items-center

              2xl:-translate-x-[16px]
            "
          >
            {leftNavItems.map((item, index) => (
              <div
                key={item.label}
                className="
                  relative
                  flex
                  items-center
                "
              >
                <a
                  href={item.href}
                  className="
                    group
                    relative

                    flex
                    h-[65px]
                    items-center
                    justify-center

                    whitespace-nowrap

                    px-[14px]

                    font-[var(--font-body)]

                    text-[13px]
                    font-medium

                    text-white

                    transition-all
                    duration-300

                    2xl:px-[17px]
                    2xl:text-[14px]

                    min-[1700px]:px-[20px]
                    min-[1700px]:text-[15px]
                  "
                >
                  {/* =================================================
                      SUBTLE HOVER GLOW
                  ================================================== */}
                  <span
                    className="
                      pointer-events-none

                      absolute
                      left-1/2
                      top-1/2

                      h-[45px]
                      w-[90px]

                      -translate-x-1/2
                      -translate-y-1/2

                      rounded-full

                      bg-[#00A8E8]/0

                      blur-[28px]

                      transition-all
                      duration-500

                      group-hover:bg-[#00A8E8]/[0.07]
                    "
                  />

                  <span
                    className="
                      relative
                      z-10
                    "
                  >
                    {item.label}
                  </span>

                  {/* =================================================
                      HOVER BOTTOM LINE ONLY
                  ================================================== */}
                  <span
                    className="
                      absolute
                      bottom-[5px]
                      left-1/2

                      h-[2px]
                      w-0

                      -translate-x-1/2

                      rounded-full

                      bg-[#00A8E8]

                      shadow-[0_0_10px_rgba(0,168,232,0.32)]

                      transition-all
                      duration-300

                      group-hover:w-[28px]
                    "
                  />
                </a>

                {/* =================================================
                    SEPARATOR
                ================================================== */}
                {index < leftNavItems.length - 1 && (
                  <span
                    className="
                      h-[30px]
                      w-px

                      bg-gradient-to-b
                      from-transparent
                      via-white/10
                      to-transparent
                    "
                  />
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* =================================================
            CENTER SAFE SPACE

            Bigger space around center logo so Services
            logo ke andar nahi jayega.
        ================================================== */}
        <div
          className="
            relative
            z-20

            hidden

            w-[245px]
            shrink-0

            xl:block

            2xl:w-[270px]

            min-[1700px]:w-[290px]
          "
        />

        {/* =================================================
            RIGHT SIDE
        ================================================== */}
        <div
          className="
            relative
            z-20

            hidden
            min-w-0
            flex-1
            items-center
            justify-end

            xl:flex
          "
        >
          {/* =================================================
              RIGHT NAV
          ================================================== */}
          <nav className="flex items-center">
            {rightNavItems.map((item, index) => (
              <div
                key={item.label}
                className="
                  relative
                  flex
                  items-center
                "
              >
                <a
                  href={item.href}
                  className="
                    group
                    relative

                    flex
                    h-[65px]
                    items-center
                    justify-center

                    whitespace-nowrap

                    px-[16px]

                    font-[var(--font-body)]

                    text-[13px]
                    font-medium

                    text-white

                    transition-all
                    duration-300

                    2xl:px-[19px]
                    2xl:text-[14px]

                    min-[1700px]:text-[15px]
                  "
                >
                  {/* HOVER GLOW */}
                  <span
                    className="
                      pointer-events-none

                      absolute
                      left-1/2
                      top-1/2

                      h-[45px]
                      w-[90px]

                      -translate-x-1/2
                      -translate-y-1/2

                      rounded-full

                      bg-[#00A8E8]/0

                      blur-[28px]

                      transition-all
                      duration-500

                      group-hover:bg-[#00A8E8]/[0.07]
                    "
                  />

                  <span
                    className="
                      relative
                      z-10
                    "
                  >
                    {item.label}
                  </span>

                  {/* HOVER LINE ONLY */}
                  <span
                    className="
                      absolute
                      bottom-[5px]
                      left-1/2

                      h-[2px]
                      w-0

                      -translate-x-1/2

                      rounded-full

                      bg-[#00A8E8]

                      shadow-[0_0_10px_rgba(0,168,232,0.32)]

                      transition-all
                      duration-300

                      group-hover:w-[28px]
                    "
                  />
                </a>

                {index < rightNavItems.length - 1 && (
                  <span
                    className="
                      h-[30px]
                      w-px

                      bg-gradient-to-b
                      from-transparent
                      via-white/10
                      to-transparent
                    "
                  />
                )}
              </div>
            ))}
          </nav>

          {/* =================================================
              SEPARATOR
          ================================================== */}
          <span
            className="
              mx-[17px]

              h-[30px]
              w-px

              bg-gradient-to-b
              from-transparent
              via-white/10
              to-transparent
            "
          />

          {/* =================================================
              LANGUAGE
          ================================================== */}
          <div className="relative">
            <button
              type="button"
              aria-label="Select language"
              aria-expanded={languageOpen}
              onClick={() =>
                setLanguageOpen(
                  (previous) => !previous
                )
              }
              className="
                group

                flex
                h-[44px]
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
              <span
                className="
                  h-[14px]
                  w-[21px]

                  overflow-hidden

                  rounded-[1px]
                "
              >
                {language === "en" ? (
                  <GB
                    title="United Kingdom"
                    className="
                      h-full
                      w-full
                      object-cover
                    "
                  />
                ) : (
                  <DE
                    title="Germany"
                    className="
                      h-full
                      w-full
                      object-cover
                    "
                  />
                )}
              </span>

              <span>
                {language === "en"
                  ? "EN"
                  : "DE"}
              </span>

              <ChevronDown
                size={11}
                strokeWidth={1.5}
                className={`
                  text-white/55

                  transition-transform
                  duration-200

                  ${
                    languageOpen
                      ? "rotate-180"
                      : ""
                  }
                `}
              />
            </button>

            {/* =================================================
                LANGUAGE DROPDOWN
            ================================================== */}
            <AnimatePresence>
              {languageOpen && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: -7,
                    scale: 0.98,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    y: -6,
                    scale: 0.98,
                  }}
                  transition={{
                    duration: 0.17,
                  }}
                  className="
                    absolute
                    right-0
                    top-[calc(100%+15px)]
                    z-[100]

                    w-[220px]

                    overflow-hidden

                    rounded-[6px]

                    border
                    border-white/[0.08]

                    bg-[rgba(11,13,15,0.74)]

                    p-[6px]

                    shadow-[0_24px_55px_rgba(0,0,0,0.40)]

                    backdrop-blur-[16px]
                  "
                >
                  {/* BACKGROUND */}
                  <div
                    className="
                      pointer-events-none

                      absolute
                      inset-0

                      bg-[linear-gradient(180deg,rgba(11,13,15,0.78)_0%,rgba(17,22,29,0.66)_50%,rgba(11,13,15,0.74)_100%)]
                    "
                  />

                  {/* BLUE AMBIENCE */}
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

                  {/* TOP LINE */}
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
                      active={
                        language === "en"
                      }
                      title="English"
                      subtitle="United Kingdom"
                      flag={
                        <GB
                          title="United Kingdom"
                          className="
                            h-[16px]
                            w-[24px]
                          "
                        />
                      }
                      onClick={() =>
                        selectLanguage("en")
                      }
                    />

                    <div className="mt-[3px]">
                      <LanguageItem
                        active={
                          language === "de"
                        }
                        title="Deutsch"
                        subtitle="Deutschland"
                        flag={
                          <DE
                            title="Germany"
                            className="
                              h-[16px]
                              w-[24px]
                            "
                          />
                        }
                        onClick={() =>
                          selectLanguage("de")
                        }
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* =================================================
              SEPARATOR
          ================================================== */}
          <span
            className="
              mx-[17px]

              h-[30px]
              w-px

              bg-gradient-to-b
              from-transparent
              via-white/10
              to-transparent
            "
          />

          {/* =================================================
              CTA
          ================================================== */}
          <motion.a
            href="#contact"
            whileHover={{
              y: -1,
            }}
            whileTap={{
              scale: 0.98,
            }}
            transition={{
              duration: 0.18,
            }}
            className="
              inline-flex

              h-[44px]

              shrink-0
              items-center
              justify-center

              whitespace-nowrap

              rounded-[3px]

              border
              border-[#2a9fff]/25

              bg-[#158ff3]

              px-[20px]

              font-[var(--font-body)]

              text-[12px]
              font-semibold

              text-white

              shadow-[0_7px_20px_rgba(21,143,243,0.17)]

              transition-all
              duration-200

              hover:bg-[#2a9fff]

              2xl:px-[24px]
              2xl:text-[13px]
            "
          >
            Enquire Now
          </motion.a>
        </div>

        {/* =================================================
            MOBILE MENU BUTTON
        ================================================== */}
        <button
          type="button"
          aria-label={
            menuOpen
              ? "Close menu"
              : "Open menu"
          }
          aria-expanded={menuOpen}
          onClick={() => {
            setMenuOpen(
              (previous) => !previous
            );

            setLanguageOpen(false);
          }}
          className="
            relative
            z-30

            ml-auto

            flex
            h-[40px]
            w-[40px]
            items-center
            justify-center

            rounded-[4px]

            border
            border-white/[0.08]

            bg-black/[0.10]

            text-white

            backdrop-blur-[5px]

            transition-all
            duration-200

            hover:bg-white/[0.06]

            xl:hidden
          "
        >
          {menuOpen ? (
            <X
              size={19}
              strokeWidth={1.5}
            />
          ) : (
            <Menu
              size={20}
              strokeWidth={1.5}
            />
          )}
        </button>
      </div>

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -6,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -6,
            }}
            transition={{
              duration: 0.2,
            }}
            className="
              relative

              w-full

              overflow-hidden

              border-b
              border-white/[0.06]

              bg-[rgba(11,13,15,0.74)]

              shadow-[0_22px_50px_rgba(0,0,0,0.30)]

              backdrop-blur-[16px]

              xl:hidden
            "
          >
            <div
              className="
                pointer-events-none

                absolute
                inset-0

                bg-[linear-gradient(180deg,rgba(11,13,15,0.80)_0%,rgba(17,22,29,0.68)_50%,rgba(11,13,15,0.76)_100%)]
              "
            />

            <div
              className="
                relative
                z-10

                px-5
                pb-6
                pt-2
              "
            >
              <nav className="flex flex-col">
                {mobileNavItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() =>
                      setMenuOpen(false)
                    }
                    className="
                      group
                      relative

                      flex
                      min-h-[56px]
                      items-center

                      border-b
                      border-white/[0.05]

                      font-[var(--font-body)]

                      text-[15px]
                      font-medium

                      text-white
                    "
                  >
                    {item.label}

                    <span
                      className="
                        absolute
                        bottom-0
                        left-0

                        h-[2px]
                        w-0

                        bg-[#00A8E8]

                        transition-all
                        duration-300

                        group-hover:w-[30px]
                      "
                    />
                  </a>
                ))}
              </nav>

              {/* MOBILE LANGUAGES */}
              <div
                className="
                  mt-5

                  grid
                  grid-cols-2
                  gap-2
                "
              >
                <button
                  type="button"
                  onClick={() =>
                    selectLanguage("en")
                  }
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

                    ${
                      language === "en"
                        ? "bg-white/[0.07] text-white"
                        : "bg-white/[0.02] text-white/65"
                    }
                  `}
                >
                  <GB
                    title="United Kingdom"
                    className="
                      h-[14px]
                      w-[21px]
                    "
                  />

                  English
                </button>

                <button
                  type="button"
                  onClick={() =>
                    selectLanguage("de")
                  }
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

                    ${
                      language === "de"
                        ? "bg-white/[0.07] text-white"
                        : "bg-white/[0.02] text-white/65"
                    }
                  `}
                >
                  <DE
                    title="Germany"
                    className="
                      h-[14px]
                      w-[21px]
                    "
                  />

                  Deutsch
                </button>
              </div>

              {/* MOBILE CTA */}
              <a
                href="#contact"
                onClick={() =>
                  setMenuOpen(false)
                }
                className="
                  mt-4

                  flex
                  min-h-[48px]
                  w-full
                  items-center
                  justify-center

                  rounded-[3px]

                  bg-[#158ff3]

                  font-[var(--font-body)]

                  text-[13px]
                  font-semibold

                  text-white
                "
              >
                Book a Test Drive
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

        ${
          active
            ? "bg-white/[0.06]"
            : "hover:bg-white/[0.035]"
        }
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
        <span
          className="
            text-[12px]
            font-medium

            text-white
          "
        >
          {title}
        </span>

        <span
          className="
            mt-[2px]

            text-[9px]

            text-white/35
          "
        >
          {subtitle}
        </span>
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
          <Check
            size={11}
            strokeWidth={2}
          />
        </span>
      )}
    </button>
  );
}

/* =========================================================
   CENTER LOGO TEXT ONLY
========================================================= */

function LogoText({
  mobile = false,
}: {
  mobile?: boolean;
}) {
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
            ? "text-[13px] tracking-[0.20em]"
            : "text-[17px] tracking-[0.22em] 2xl:text-[18px]"
        }
      `}
    >
      Your Logo
    </span>
  );
}