"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { ArrowRight, Check, ChevronDown, Menu, X } from "lucide-react";

import { GB, DE } from "country-flag-icons/react/3x2";

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

const mobileNavItems = [...leftNavItems, ...rightNavItems];

/* =========================================================
   MOTION VARIANTS
   Explicitly typed as `Variants` and eased with `as const`
   tuples -- this is what TypeScript's Framer Motion types
   require. An untyped ease array like [0.22, 1, 0.36, 1] is
   widened to number[], which does not satisfy the Easing
   type and is the source of the "type error" in this file.
========================================================= */

const EASE_OUT = [0.22, 1, 0.36, 1] as const;
const EASE_IN = [0.4, 0, 1, 1] as const;

const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const drawerVariants: Variants = {
  hidden: { x: "100%" },
  show: {
    x: 0,
    transition: { duration: 0.38, ease: EASE_OUT },
  },
  exit: {
    x: "100%",
    transition: { duration: 0.3, ease: EASE_IN },
  },
};

const navStagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.05, delayChildren: 0.15 },
  },
};

const navItemFade: Variants = {
  hidden: { opacity: 0, x: 16 },
  show: { opacity: 1, x: 0, transition: { duration: 0.35 } },
};

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [language, setLanguage] = useState<Language>("en");
  const [scrolled, setScrolled] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const selectLanguage = (value: Language) => {
    setLanguage(value);
    setLanguageOpen(false);
  };

  /* Lock body scroll while the drawer is open, close on Escape,
     and move focus to the drawer's close button for accessibility. */
  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  /* Turns the transparent hero-overlay header into a solid,
     blurred dark bar once the page is scrolled -- the header is
     `fixed` so it now stays pinned instead of scrolling away
     with the hero. */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`
        fixed
        left-0
        top-0
        z-50
        w-full

        transition-[background-color,border-color,box-shadow,backdrop-filter]
        duration-300
        ease-out

        ${
          scrolled
            ? "border-b border-white/[0.08] bg-[#0b0e13]/85 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-[14px]"
            : "border-b border-transparent bg-transparent"
        }
      `}
    >
      {/* =====================================================
          MAIN NAVIGATION
      ====================================================== */}
      <div
        className="
          relative

          flex
          h-[80px]
          w-full
          items-center

          overflow-visible

          px-5

          sm:px-6
          md:px-7

          xl:px-9

          2xl:px-12
        "
      >
        {/* DESKTOP AMBIENT TINT -- fades out once the solid
            scrolled background takes over, so the two effects
            never compete. */}
        <div
          className={`
            pointer-events-none

            absolute
            inset-0

            hidden
            overflow-hidden

            transition-opacity
            duration-300

            xl:block

            ${scrolled ? "opacity-0" : "opacity-100"}
          `}
        >
          <div
            className="
              absolute
              inset-0

              bg-[linear-gradient(180deg,rgba(11,13,15,0.30)_0%,rgba(17,22,29,0.18)_50%,rgba(11,13,15,0.24)_100%)]
            "
          />

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

        {/* subtle permanent blue hairline under the scrolled bar */}
        <div
          className={`
            pointer-events-none

            absolute
            inset-x-0
            bottom-0

            h-px

            bg-gradient-to-r
            from-transparent
            via-[#00A8E8]/40
            to-transparent

            transition-opacity
            duration-300

            ${scrolled ? "opacity-100" : "opacity-0"}
          `}
        />

        {/* CENTER LOGO TEXT -- DESKTOP */}
        <motion.a
          href="#home"
          initial={{ opacity: 0, y: -3 }}
          animate={{ opacity: 1, y: 0 }}
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

        {/* CENTER LOGO TEXT -- MOBILE */}
        <motion.a
          href="#home"
          initial={{ opacity: 0, y: -3 }}
          animate={{ opacity: 1, y: 0 }}
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

        {/* LEFT NAVIGATION */}
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
              <div key={item.label} className="relative flex items-center">
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

                  <span className="relative z-10">{item.label}</span>

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

        {/* CENTER SAFE SPACE */}
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

        {/* RIGHT SIDE */}
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
          <nav className="flex items-center">
            {rightNavItems.map((item, index) => (
              <div key={item.label} className="relative flex items-center">
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

                  <span className="relative z-10">{item.label}</span>

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
                    border-white/[0.08]

                    bg-[rgba(11,13,15,0.74)]

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

                        text-[11px]
                        font-semibold
                        uppercase
                        tracking-[0.18em]

                        text-white/40
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
              mx-[17px]

              h-[30px]
              w-px

              bg-gradient-to-b
              from-transparent
              via-white/10
              to-transparent
            "
          />

          {/* DESKTOP CTA
              Signal Blue fill, uppercase, +12% tracking, 14px min --
              per brand button spec and the white-on-Signal-Blue
              contrast rule (14pt+ semibold). Arrow slides in on
              hover for a bit of polish. */}
          <motion.a
            href="#contact"
            whileHover={{ y: -1, boxShadow: "0 10px 26px rgba(0,168,232,0.32)" }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.18 }}
            className="
              group

              inline-flex

              h-[44px]

              shrink-0
              items-center
              justify-center
              gap-[6px]

              whitespace-nowrap

              rounded-[3px]

              border
              border-[#00A8E8]/25

              bg-[#00A8E8]

              px-[20px]

              font-[var(--font-body)]

              text-[13px]
              font-semibold
              uppercase
              tracking-[0.12em]

              text-white

              shadow-[0_7px_20px_rgba(0,168,232,0.22)]

              transition-colors
              duration-200

              hover:bg-[#1fb4f2]

              2xl:px-[24px]
            "
          >
            Enquire Now
            <ArrowRight
              size={14}
              strokeWidth={2.2}
              className="
                -translate-x-1
                opacity-0

                transition-all
                duration-200

                group-hover:translate-x-0
                group-hover:opacity-100
              "
            />
          </motion.a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-drawer"
          onClick={() => {
            setMenuOpen(true);
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

            xl:hidden
          "
        >
          <Menu size={25} strokeWidth={1.7} />
        </button>
      </div>

      {/* =====================================================
          MOBILE DRAWER
          Slides in from the right over a dark backdrop, locks
          body scroll, and closes on backdrop click or Escape.
      ====================================================== */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* BACKDROP */}
            <motion.div
              key="backdrop"
              variants={backdropVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              onClick={() => setMenuOpen(false)}
              className="
                fixed
                inset-0
                z-[60]

                bg-black/60

                backdrop-blur-[2px]

                xl:hidden
              "
            />

            {/* DRAWER PANEL */}
            <motion.aside
              key="drawer"
              id="mobile-drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Site menu"
              variants={drawerVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="
                fixed
                right-0
                top-0
                z-[70]

                flex
                h-[100svh]
                w-[86%]
                max-w-[380px]
                flex-col

                overflow-y-auto

                border-l
                border-white/[0.06]

                bg-[#0b0e13]

                shadow-[-24px_0_60px_rgba(0,0,0,0.45)]

                xl:hidden
              "
            >
              {/* AMBIENT BACKGROUND DETAIL */}
              <div
                className="
                  pointer-events-none

                  absolute
                  inset-0

                  bg-[linear-gradient(180deg,rgba(11,14,19,1)_0%,rgba(17,22,29,0.94)_45%,rgba(11,14,19,1)_100%)]
                "
              />

              <div
                className="
                  pointer-events-none

                  absolute
                  left-1/2
                  top-0

                  h-[240px]
                  w-[320px]

                  -translate-x-1/2

                  rounded-full

                  bg-[#00A8E8]/[0.06]

                  blur-[100px]
                "
              />

              {/* DRAWER HEADER: logo + close */}
              <div
                className="
                  relative
                  z-10

                  flex
                  h-[80px]
                  shrink-0
                  items-center
                  justify-between

                  border-b
                  border-white/[0.06]

                  px-5
                "
              >
                <LogoText mobile />

                <button
                  ref={closeButtonRef}
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setMenuOpen(false)}
                  className="
                    flex
                    h-[40px]
                    w-[40px]
                    items-center
                    justify-center

                    rounded-full

                    border
                    border-white/[0.08]

                    bg-white/[0.03]

                    text-white

                    transition-colors
                    duration-200

                    hover:bg-white/[0.08]

                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-[#00A8E8]
                  "
                >
                  <X size={20} strokeWidth={1.7} />
                </button>
              </div>

              <div className="relative z-10 flex flex-1 flex-col px-5 pb-6 pt-5 sm:px-6">
                {/* MOBILE NAV -- staggered entrance */}
                <motion.nav
                  variants={navStagger}
                  initial="hidden"
                  animate="show"
                  className="flex flex-col"
                >
                  {mobileNavItems.map((item) => (
                    <motion.a
                      key={item.label}
                      variants={navItemFade}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
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

                        transition-colors
                        duration-200

                        hover:text-[#00A8E8]
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
                    </motion.a>
                  ))}
                </motion.nav>

                {/* MOBILE LANGUAGES */}
                <div className="mt-5 grid grid-cols-2 gap-2">
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

                {/* MOBILE CTA -- pushed to the bottom of the drawer */}
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="
                    mt-auto

                    flex
                    min-h-[52px]
                    w-full
                    items-center
                    justify-center

                    rounded-[3px]

                    bg-[#00A8E8]

                    font-[var(--font-body)]

                    text-[14px]
                    font-semibold
                    uppercase
                    tracking-[0.12em]

                    text-white

                    shadow-[0_8px_24px_rgba(0,168,232,0.25)]

                    transition-colors
                    duration-200

                    hover:bg-[#1fb4f2]

                    pt-6
                  "
                >
                  Book a Test Drive
                </a>
              </div>
            </motion.aside>
          </>
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

        <span className="mt-[2px] text-[11px] text-white/40">{subtitle}</span>
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
   CENTER LOGO TEXT
   Brand guideline (Division of Labour table): "The YM Motors
   name in any lockup" is set in Cormorant Garamond, not Inter.
========================================================= */

function LogoText({ mobile = false }: { mobile?: boolean }) {
  return (
    <span
      className={`
        block

        whitespace-nowrap

        font-[var(--font-display)]

        font-medium
        leading-none

        text-white

        tracking-[-0.01em]

        ${mobile ? "text-[20px] sm:text-[22px]" : "text-[24px] 2xl:text-[26px]"}
      `}
    >
      Your Logo
    </span>
  );
}