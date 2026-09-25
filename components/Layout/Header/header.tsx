"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronRight, Menu, Phone, Search, X,} from "lucide-react";
import {FaFacebookF,FaInstagram,FaLinkedinIn,FaYoutube,} from "react-icons/fa";

import YMLogo from "./Logo";

/* =========================================================
   TYPES
========================================================= */

type NavItem = {
  label: string;
  href: string;
  dropdown?: boolean;
  submenu?: {
    label: string;
    href: string;
  }[];
};

/* =========================================================
   NAVIGATION
========================================================= */

const leftNavItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Current Stock",
    href: "/current-stock",
  },
  {
    label: "Sell Your Car",
    href: "/sell-your-car",
  },
];

const rightNavItems: NavItem[] = [
  {
    label: "Finance",
    href: "/finance",
  },
  {
    label: "About Us",
    href: "/about",
    dropdown: true,
    submenu: [
      {
        label: "Our Story",
        href: "/our-story",
      },
      {
        label: "Why YM Motors",
        href: "/why-us",
      },
    ],
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
];

const mobileItems: NavItem[] = [
  ...leftNavItems,
  ...rightNavItems,
];

/* =========================================================
   HEADER
========================================================= */

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  /* =======================================================
     SCROLL
  ======================================================== */

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 55);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  /* =======================================================
     LOCK BODY WHEN MOBILE MENU IS OPEN
  ======================================================== */

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* =====================================================
          DESKTOP HEADER
      ====================================================== */}

      <header
        className="
          fixed
          left-0
          top-0
          z-[100]
          hidden
          w-full
          lg:block
        "
      >
        <div
          className={`
            relative
            flex
            h-[88px] xl:h-[100px] 2xl:h-[108px]
            w-full
            items-center
            overflow-visible
            border-b
            transition-[border-color,box-shadow]
            duration-500

            ${scrolled
              ? `
                  border-white/[0.07]
                  shadow-[0_12px_38px_rgba(0,0,0,0.28)]
                `
              : `
                  border-transparent
                  shadow-none
                `
            }
          `}
        >
          {/* =================================================
              BOTTOM → TOP SCROLL BACKGROUND
          ================================================== */}

          <motion.div
            aria-hidden="true"
            initial={false}
            animate={{
              clipPath: scrolled
                ? "inset(0% 0% 0% 0%)"
                : "inset(100% 0% 0% 0%)",
            }}
            transition={{
              duration: 0.52,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              pointer-events-none
              absolute
              inset-0
              z-0
              bg-[#080B10]/[0.94]
              backdrop-blur-[18px]
            "
          />

          {/* subtle blue bottom glow */}

          <motion.div
            aria-hidden="true"
            initial={false}
            animate={{
              opacity: scrolled ? 1 : 0,
              scaleX: scrolled ? 1 : 0.25,
            }}
            transition={{
              duration: 0.45,
              delay: scrolled ? 0.12 : 0,
              ease: "easeOut",
            }}
            className="
              pointer-events-none
              absolute
              bottom-0
              left-1/2
              z-[1]
              h-px
              w-[72%]
              -translate-x-1/2
              bg-gradient-to-r
              from-transparent
              via-[#00A8E8]/35
              to-transparent
            "
          />

          {/* =================================================
              HEADER CONTENT
          ================================================== */}

          <div
            className="
              relative
              z-10
              mx-auto
              flex
              h-full
              w-full
              max-w-[1440px]
              items-center
              px-6 xl:px-10 2xl:max-w-[1600px] 2xl:px-[76px]
            "
          >
            {/* =============================================
                LEFT NAVIGATION
            ============================================== */}

            <nav
              className="
                flex
                h-full
                flex-1
                items-center
                justify-start
              "
            >
              {leftNavItems.map((item) => (
                <DesktopNavLink
                  key={item.label}
                  item={item}
                />
              ))}
            </nav>

            {/* =============================================
                CENTER LOGO
            ============================================== */}

            <YMLogo />

            {/* =============================================
                RIGHT NAVIGATION
            ============================================== */}

            <div
              className="
                flex
                h-full
                flex-1
                items-center
                justify-end
              "
            >
              <nav
                className="
                  flex
                  h-full
                  items-center
                "
              >
                {rightNavItems.map((item) => (
                  <DesktopNavLink
                    key={item.label}
                    item={item}
                    contactButton={
                      item.label === "Contact Us"
                    }
                  />
                ))}
              </nav>

              {/* PHONE */}

              <a
                href="tel:+440000000000"
                aria-label="Call YM Motors"
                className="
                  ml-3 xl:ml-[18px] 2xl:ml-[28px]
                  flex
                  h-[42px]
                  w-[42px]
                  xl:h-[44px]
                  xl:w-[44px]
                  shrink-0
                  items-center
                  justify-center
                  text-white
                  transition-all
                  duration-300
                  hover:text-[#00A8E8]
                  2xl:ml-[28px]
                "
              >
                <Phone
                  size={23}
                  strokeWidth={2}
                />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* =====================================================
          MOBILE HEADER
      ====================================================== */}

      <header
        className="
          fixed
          left-0
          top-0
          z-[110]
          w-full
          lg:hidden
        "
      >
        <div
          className={`
            relative
            flex
            h-[68px] sm:h-[72px]
            w-full
            items-center
            overflow-hidden
            border-b
            px-3 sm:px-4
            transition-[border-color,box-shadow]
            duration-500

            ${scrolled
              ? `
                  border-white/[0.07]
                  shadow-[0_10px_30px_rgba(0,0,0,0.28)]
                `
              : `
                  border-transparent
                  shadow-none
                `
            }
          `}
        >
          {/* MOBILE BOTTOM → TOP BG */}

          <motion.div
            aria-hidden="true"
            initial={false}
            animate={{
              clipPath: scrolled
                ? "inset(0% 0% 0% 0%)"
                : "inset(100% 0% 0% 0%)",
            }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              pointer-events-none
              absolute
              inset-0
              z-0
              bg-[#080B10]/[0.95]
              backdrop-blur-[18px]
            "
          />

          {/* SEARCH */}

          <button
            type="button"
            aria-label="Search"
            className="
              relative
              z-20
              flex
              h-[46px]
              w-[46px]
              items-center
              justify-center
              border-0
              bg-transparent
              p-0
              text-white
              transition-colors
              duration-300
              hover:text-[#00A8E8]
            "
          >
            <Search
              size={23}
              strokeWidth={1.8}
            />
          </button>

          {/* CENTER LOGO */}

          <a
            href="#home"
            aria-label="YM Motors home"
            className="
              absolute
              left-1/2
              top-1/2
              z-20
              -translate-x-1/2
              -translate-y-1/2
            "
          >
            <YMLogo />
          </a>

          {/* HAMBURGER */}

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
                (previous) => !previous,
              );
            }}
            className="
              relative
              z-30
              ml-auto
              flex
              h-[46px]
              w-[46px]
              items-center
              justify-center
              border-0
              bg-transparent
              p-0
              text-white
              transition-colors
              duration-300
              hover:text-[#00A8E8]
            "
          >
            <Menu
              size={28}
              strokeWidth={1.65}
            />
          </button>
        </div>
      </header>

      {/* =====================================================
          MOBILE DRAWER
      ====================================================== */}

      <AnimatePresence>
        {menuOpen && (
          <>
            {/* BACKDROP */}

            <motion.button
              type="button"
              aria-label="Close navigation"
              onClick={() =>
                setMenuOpen(false)
              }
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.25,
              }}
              className="
                fixed
                inset-0
                z-[115]
                bg-black/65
                backdrop-blur-[3px]
                lg:hidden
              "
            />

            {/* ===============================================
                DARK MOBILE MENU
            ================================================ */}

            <motion.div
              initial={{
                opacity: 0,
                y: -22,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                fixed
                left-0
                top-0
                z-[130]
                h-[100dvh]
                w-full
                overflow-y-auto
                border-b
                border-white/[0.08]
                bg-[#080B10]
                text-white
                shadow-[0_28px_80px_rgba(0,0,0,0.55)]
                lg:hidden
              "
            >
              {/* =============================================
                  DRAWER TOP
              ============================================== */}

              <div
                className="
                  relative
                  flex
                  h-[68px] sm:h-[72px]
                  items-center
                  border-b
                  border-white/[0.08]
                  bg-[#080B10]
                  px-3 sm:px-4
                "
              >
                <button
                  type="button"
                  aria-label="Search"
                  className="
                    flex
                    h-[46px]
                    w-[46px]
                    items-center
                    justify-center
                    text-white
                    transition-colors
                    duration-300
                    hover:text-[#00A8E8]
                  "
                >
                  <Search
                    size={23}
                    strokeWidth={1.8}
                  />
                </button>

                {/* DRAWER LOGO */}

                <div
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    -translate-x-1/2
                    -translate-y-1/2
                  "
                >
                  <Logo mobile />
                </div>

                {/* CLOSE */}

                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() =>
                    setMenuOpen(false)
                  }
                  className="
                    ml-auto
                    flex
                    h-[46px]
                    w-[46px]
                    items-center
                    justify-center
                    text-white
                    transition-colors
                    duration-300
                    hover:text-[#00A8E8]
                  "
                >
                  <X
                    size={25}
                    strokeWidth={1.65}
                  />
                </button>
              </div>

              {/* =============================================
                  MOBILE NAVIGATION
              ============================================== */}

              <nav
                className="
                  px-4 sm:px-5
                  pt-2
                "
              >
                {mobileItems.map((item) => (
                  <MobileNavLink
                    key={item.label}
                    item={item}
                    aboutOpen={aboutOpen}
                    setAboutOpen={setAboutOpen}
                    closeMenu={() =>
                      setMenuOpen(false)
                    }
                    contactButton={
                      item.label ===
                      "Contact Us"
                    }
                  />
                ))}
              </nav>

              {/* =============================================
                  LOWER AREA
              ============================================== */}

              <div
                className="
                  px-4 sm:px-5
                  pb-7
                  pt-7
                "
              >
                {/* CALL BUTTON */}

                <a
                  href="tel:+440000000000"
                  className="
                    group
                    flex
                    min-h-[50px]
                    w-full
                    items-center
                    justify-center
                    gap-[9px]
                    border
                    border-white/[0.10]
                    bg-[#151C26]
                    px-5
                    font-[var(--font-body)]
                    text-[12px]
                    font-semibold
                    uppercase
                    tracking-[0.15em]
                    text-white
                    transition-all
                    duration-300
                    hover:border-[#00A8E8]/40
                    hover:bg-[#1A222D]
                  "
                >
                  <Phone
                    size={16}
                    strokeWidth={2}
                    className="
                      transition-colors
                      group-hover:text-[#00A8E8]
                    "
                  />

                  Call YM Motors
                </a>

                {/* SOCIAL ICONS */}

                <div
                  className="
                    mt-7
                    flex
                    items-center
                    justify-center
                    gap-7
                    text-white/65
                  "
                >
                  <a
                    href="#youtube"
                    aria-label="YouTube"
                    className="
                      transition-all
                      duration-300
                      hover:-translate-y-[2px]
                      hover:text-[#00A8E8]
                    "
                  >
                    <FaYoutube size={19} />
                  </a>

                  <a
                    href="#facebook"
                    aria-label="Facebook"
                    className="
                      transition-all
                      duration-300
                      hover:-translate-y-[2px]
                      hover:text-[#00A8E8]
                    "
                  >
                    <FaFacebookF size={17} />
                  </a>

                  <a
                    href="#instagram"
                    aria-label="Instagram"
                    className="
                      transition-all
                      duration-300
                      hover:-translate-y-[2px]
                      hover:text-[#00A8E8]
                    "
                  >
                    <FaInstagram size={18} />
                  </a>

                  <a
                    href="#linkedin"
                    aria-label="LinkedIn"
                    className="
                      transition-all
                      duration-300
                      hover:-translate-y-[2px]
                      hover:text-[#00A8E8]
                    "
                  >
                    <FaLinkedinIn size={18} />
                  </a>
                </div>

                {/* SMALL BRAND LINE */}

                <div
                  className="
                    mt-7
                    flex
                    items-center
                    justify-center
                    gap-3
                  "
                >
                  <span
                    className="
                      h-px
                      w-7
                      bg-white/10
                    "
                  />

                  <span
                    className="
                      font-[var(--font-body)]
                      text-[8px]
                      font-medium
                      uppercase
                      tracking-[0.25em]
                      text-white/30
                    "
                  >
                    Premium Automotive
                  </span>

                  <span
                    className="
                      h-px
                      w-7
                      bg-white/10
                    "
                  />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

/* =========================================================
   DESKTOP NAVIGATION LINK
========================================================= */

function DesktopNavLink({
  item,
  contactButton = false,
}: {
  item: NavItem;
  contactButton?: boolean;
}) {
  const [open, setOpen] =
    useState(false);

  const hasDropdown = Boolean(
    item.dropdown &&
    item.submenu &&
    item.submenu.length > 0,
  );

  /* =======================================================
     CONTACT BUTTON
  ======================================================== */

  if (contactButton) {
    return (
      <a
        href={item.href}
        className="
          group
          relative
          ml-2 xl:ml-[14px]
          inline-flex
          h-[42px] xl:h-[46px]
          items-center
          justify-center
          overflow-hidden
          bg-[#00A8E8]
          px-4 xl:px-[22px]
          font-[var(--font-body)]
          text-[11px] xl:text-[12px]
          font-semibold
          uppercase
          tracking-[0.14em]
          text-white
          shadow-[0_8px_24px_rgba(0,168,232,0.20)]
          transition-all
          duration-300
          hover:-translate-y-[1px]
          hover:bg-[#12B7F4]
          hover:shadow-[0_12px_30px_rgba(0,168,232,0.30)]
          2xl:ml-[18px]
          2xl:px-[27px]
          2xl:text-[13px]
        "
      >
        {/* subtle shine */}

        <span
          className="
            pointer-events-none
            absolute
            inset-y-0
            left-[-70%]
            w-[45%]
            skew-x-[-20deg]
            bg-white/15
            transition-all
            duration-700
            group-hover:left-[125%]
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
      </a>
    );
  }

  /* =======================================================
     NORMAL NAV ITEM
  ======================================================== */

  return (
    <div
      className="
        relative
        flex
        h-full
        items-center
      "
      onMouseEnter={() => {
        if (hasDropdown) {
          setOpen(true);
        }
      }}
      onMouseLeave={() => {
        if (hasDropdown) {
          setOpen(false);
        }
      }}
    >
      <a
        href={item.href}
        className="
          group
          relative
          flex
          h-full
          items-center
          gap-[6px]
          whitespace-nowrap
          px-3 xl:px-[18px]
          font-[var(--font-body)]
          text-[11px] xl:text-[13px]
          font-semibold
          uppercase
          tracking-[0.14em]
          text-white/90
          transition-colors
          duration-300
          hover:text-white
          2xl:px-[22px]
          2xl:text-[14px]
        "
      >
        {item.label}

        {item.dropdown && (
          <ChevronDown
            size={14}
            strokeWidth={1.5}
            className={`
              text-white/55
              transition-transform
              duration-300

              ${open
                ? "rotate-180"
                : ""
              }
            `}
          />
        )}

        {/* LUXURY HOVER LINE */}

        <span
          className="
            pointer-events-none
            absolute
            bottom-[24px]
            left-1/2
            h-px
            w-0
            -translate-x-1/2
            bg-[#00A8E8]
            transition-all
            duration-300
            group-hover:w-[28px]
          "
        />
      </a>

      {/* ===================================================
          DROPDOWN
      ==================================================== */}

      <AnimatePresence>
        {hasDropdown && open && (
          <motion.div
            initial={{
              opacity: 0,
              y: -8,
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
              duration: 0.18,
            }}
            className="
              absolute
              left-1/2
              top-[78%] xl:top-[80%]
              z-[150]
              w-[210px]
              -translate-x-1/2
              overflow-hidden
              border
              border-white/[0.08]
              bg-[#080B10]/95
              p-[5px]
              shadow-[0_22px_55px_rgba(0,0,0,0.42)]
              backdrop-blur-[18px]
            "
          >
            {item.submenu?.map(
              (sub) => (
                <a
                  key={sub.label}
                  href={sub.href}
                  className="
                    relative
                    block
                    px-4
                    py-[13px]
                    font-[var(--font-body)]
                    text-[11px]
                    font-medium
                    uppercase
                    tracking-[0.14em]
                    text-white/65
                    transition-all
                    duration-200
                    hover:bg-[#151C26]
                    hover:pl-5
                    hover:text-[#00A8E8]
                  "
                >
                  {sub.label}
                </a>
              ),
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* =========================================================
   MOBILE NAVIGATION
========================================================= */

function MobileNavLink({
  item,
  aboutOpen,
  setAboutOpen,
  closeMenu,
  contactButton = false,
}: {
  item: NavItem;
  aboutOpen: boolean;
  setAboutOpen: (
    value: boolean,
  ) => void;
  closeMenu: () => void;
  contactButton?: boolean;
}) {
  const hasDropdown = Boolean(
    item.dropdown &&
    item.submenu &&
    item.submenu.length > 0,
  );

  const open =
    item.label === "About Us" &&
    aboutOpen;

  /* =======================================================
     MOBILE CONTACT BUTTON
  ======================================================== */

  if (contactButton) {
    return (
      <div
        className="
          border-b
          border-white/[0.08]
          py-[13px]
        "
      >
        <a
          href={item.href}
          onClick={closeMenu}
          className="
            group
            relative
            flex
            min-h-[49px]
            w-full
            items-center
            justify-center
            overflow-hidden
            bg-[#00A8E8]
            px-5
            font-[var(--font-body)]
            text-[12px]
            font-semibold
            uppercase
            tracking-[0.16em]
            text-white
            shadow-[0_8px_24px_rgba(0,168,232,0.18)]
            transition-all
            duration-300
            hover:bg-[#12B7F4]
          "
        >
          <span
            className="
              pointer-events-none
              absolute
              inset-y-0
              left-[-60%]
              w-[40%]
              skew-x-[-20deg]
              bg-white/15
              transition-all
              duration-700
              group-hover:left-[120%]
            "
          />

          <span
            className="
              relative
              z-10
            "
          >
            Contact Us
          </span>
        </a>
      </div>
    );
  }

  return (
    <div
      className="
        border-b
        border-white/[0.08]
      "
    >
      <div
        className="
          flex
          min-h-[56px]
          items-center
        "
      >
        <a
          href={item.href}
          onClick={(event) => {
            if (hasDropdown) {
              event.preventDefault();
              setAboutOpen(!aboutOpen);
              return;
            }

            closeMenu();
          }}
          className="
            flex
            min-h-[56px]
            flex-1
            items-center
            font-[var(--font-body)]
            text-[12px]
            font-medium
            uppercase
            tracking-[0.16em]
            text-white/85
            transition-all
            duration-300
            hover:pl-[4px]
            hover:text-[#00A8E8]
          "
        >
          {item.label}
        </a>

        {hasDropdown && (
          <button
            type="button"
            onClick={() =>
              setAboutOpen(!aboutOpen)
            }
            aria-label={`Open ${item.label}`}
            className="
              flex
              h-[46px]
              w-[46px]
              items-center
              justify-center
              text-white/40
              transition-colors
              hover:text-[#00A8E8]
            "
          >
            <ChevronRight
              size={17}
              strokeWidth={1.5}
              className={`
                transition-transform
                duration-300

                ${open
                  ? "rotate-90"
                  : ""
                }
              `}
            />
          </button>
        )}
      </div>

      {/* MOBILE SUBMENU */}

      <AnimatePresence>
        {hasDropdown && open && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              overflow-hidden
              bg-[#111720]
            "
          >
            <div className="px-4">
              {item.submenu?.map(
                (sub) => (
                  <a
                    key={sub.label}
                    href={sub.href}
                    onClick={closeMenu}
                    className="
                      flex
                      min-h-[46px]
                      items-center
                      border-b
                      border-white/[0.05]
                      font-[var(--font-body)]
                      text-[11px]
                      font-medium
                      uppercase
                      tracking-[0.14em]
                      text-white/50
                      transition-all
                      duration-300
                      hover:pl-[4px]
                      hover:text-[#00A8E8]
                    "
                  >
                    {sub.label}
                  </a>
                ),
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* =========================================================
   YM MOTORS LOGO
========================================================= */

function Logo({
  mobile = false,
}: {
  mobile?: boolean;
}) {
  return (
    <span
      className="
        flex
        flex-col
        items-center
        whitespace-nowrap
      "
    >
      <h2
        className={`
          m-0
          bg-[linear-gradient(100deg,#00A8E8_0%,#38C2F5_18%,#BCEBFC_38%,#FFFFFF_62%,#D9E0E7_82%,#AAB4BE_100%)]
          bg-clip-text
          font-[var(--font-display)]
          font-semibold
          uppercase
          leading-none
          tracking-[-0.035em]
          !text-transparent
          [-webkit-background-clip:text]
          [-webkit-text-fill-color:transparent]

          ${mobile
            ? "text-[19px] sm:text-[22px]"
            : "text-[28px] xl:text-[34px] 2xl:text-[42px]"
          }
        `}
      >
        YM MOTORS
      </h2>
    </span>
  );
}