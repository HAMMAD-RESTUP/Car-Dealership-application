"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const leftLinks = [
  {
    label: "BUY CARS",
    href: "#stock",
  },
  {
    label: "SELL YOUR CAR",
    href: "#sell",
  },
  {
    label: "FINANCE",
    href: "#finance",
  },
];

const rightLinks = [
  {
    label: "ABOUT",
    href: "#about",
  },
  {
    label: "SERVICES",
    href: "#services",
  },
  {
    label: "CONTACT",
    href: "#contact",
  },
];

export default function Header() {
  const [open, setOpen] = useState(false);

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
      {/* ==========================================
          MAIN NAVIGATION
      ========================================== */}
      <div
        className="
          mx-auto
          w-full
          max-w-[1600px]
          px-6
          sm:px-8
          lg:px-12
          xl:px-16
        "
      >
        <div
          className="
            flex
            min-h-[82px]
            items-center
            border-b
            border-[#C9D2DC]/15
          "
        >
          {/* ======================================
              DESKTOP NAVIGATION
          ====================================== */}
          <div
            className="
              hidden
              w-full
              items-center
              justify-center
              lg:flex
            "
          >
            <div
              className="
                flex
                items-center
                gap-7
                xl:gap-8
              "
            >
              {/* LEFT LINKS */}
              {leftLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="
                    group
                    relative
                    whitespace-nowrap

                    font-[var(--font-inter)]
                    text-[11px]
                    font-medium
                    uppercase
                    tracking-[0.1em]

                    text-[#C9D2DC]

                    transition-colors
                    duration-300

                    hover:text-[#F6F8FA]
                  "
                >
                  {item.label}

                  <span
                    className="
                      absolute
                      -bottom-[10px]
                      left-0

                      h-px
                      w-0

                      bg-[#00A8E8]

                      transition-all
                      duration-300

                      group-hover:w-full
                    "
                  />
                </a>
              ))}

              {/* ==================================
                  CENTER LOGO
              ================================== */}
              <motion.a
                href="#home"
                initial={{
                  opacity: 0,
                  y: -10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                }}
                className="
                  mx-5
                  whitespace-nowrap

                  font-[var(--font-cormorant)]
                  text-[30px]
                  font-medium
                  leading-none
                  tracking-[-0.01em]

                  text-[#F6F8FA]

                  xl:mx-7
                  xl:text-[32px]
                "
              >
                YM Motors
              </motion.a>

              {/* RIGHT LINKS */}
              {rightLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="
                    group
                    relative
                    whitespace-nowrap

                    font-[var(--font-inter)]
                    text-[11px]
                    font-medium
                    uppercase
                    tracking-[0.1em]

                    text-[#C9D2DC]

                    transition-colors
                    duration-300

                    hover:text-[#F6F8FA]
                  "
                >
                  {item.label}

                  <span
                    className="
                      absolute
                      -bottom-[10px]
                      left-0

                      h-px
                      w-0

                      bg-[#00A8E8]

                      transition-all
                      duration-300

                      group-hover:w-full
                    "
                  />
                </a>
              ))}

              {/* ==================================
                  CTA
              ================================== */}
              <motion.a
                href="#contact"
                whileHover={{
                  y: -2,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="
                  ml-2

                  inline-flex
                  min-h-[42px]
                  items-center
                  justify-center

                  border
                  border-[#C9D2DC]/40

                  px-5

                  font-[var(--font-inter)]
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.12em]

                  text-[#F6F8FA]

                  transition-all
                  duration-300

                  hover:border-[#00A8E8]
                  hover:text-[#00A8E8]
                "
              >
                GET A QOUTE
              </motion.a>
            </div>
          </div>

          {/* ======================================
              MOBILE LOGO
          ====================================== */}
          <a
            href="#home"
            className="
              font-[var(--font-cormorant)]
              text-[28px]
              font-medium
              tracking-[-0.01em]
              text-[#F6F8FA]

              lg:hidden
            "
          >
            YM Motors
          </a>

          {/* ======================================
              MOBILE MENU BUTTON
          ====================================== */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((previous) => !previous)}
            className="
              ml-auto

              flex
              h-10
              w-10
              items-center
              justify-center

              text-[#F6F8FA]

              lg:hidden
            "
          >
            {open ? (
              <X size={25} strokeWidth={1.5} />
            ) : (
              <Menu size={26} strokeWidth={1.5} />
            )}
          </button>
        </div>
      </div>

      {/* ==========================================
          MOBILE MENU
      ========================================== */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: -12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -12,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              absolute
              left-0
              top-full
              w-full

              border-t
              border-[#C9D2DC]/15

              bg-[#0B0E13]/95
              backdrop-blur-xl

              lg:hidden
            "
          >
            <div
              className="
                flex
                flex-col
                px-6
                py-5
                sm:px-8
              "
            >
              {[...leftLinks, ...rightLinks].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="
                    border-b
                    border-[#C9D2DC]/12

                    py-4

                    font-[var(--font-inter)]
                    text-[12px]
                    font-medium
                    uppercase
                    tracking-[0.12em]

                    text-[#C9D2DC]

                    transition-colors
                    duration-300

                    hover:text-[#F6F8FA]
                  "
                >
                  {item.label}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="
                  mt-5

                  inline-flex
                  min-h-[48px]
                  items-center
                  justify-center

                  bg-[#00A8E8]

                  px-6

                  font-[var(--font-inter)]
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.12em]

                  text-white
                "
              >
                GET A QOUTE
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}