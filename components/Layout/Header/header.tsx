"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Logo from "./Logo";

const links = [
  {
    label: "Home",
    href: "#home",
    active: true,
  },
  {
    label: "Used Cars",
    href: "#stock",
  },
  {
    label: "Finance",
    href: "#finance",
  },
  {
    label: "Sell Your Car",
    href: "#sell",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Header() {
  const [mobile, setMobile] = useState(false);

  /* =====================================================
     MOBILE BODY LOCK + ESC
  ====================================================== */

  useEffect(() => {
    document.body.style.overflow = mobile ? "hidden" : "";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobile(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [mobile]);

  /* =====================================================
     CLOSE MOBILE MENU ON DESKTOP
  ====================================================== */

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobile(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeMenu = () => {
    setMobile(false);
  };

  return (
    <>
      {/* =====================================================
          FIXED HEADER
          - always stays at top
          - no scroll resize / no scroll movement
      ====================================================== */}

      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.55,
          ease,
        }}
        className="
          fixed
          inset-x-0
          top-0
          z-[300]
          w-full
        "
      >
        <div
          className="
            relative

            mx-1.5
            mt-1.5

            h-[68px]

            overflow-hidden

            rounded-[30px]

            border
            border-white/[0.10]

            bg-[rgba(20,20,22,0.46)]

            shadow-[0_10px_36px_rgba(0,0,0,0.20),inset_0_1px_0_rgba(255,255,255,0.10)]

            backdrop-blur-[22px]
            backdrop-saturate-[150%]

            sm:mx-2.5
            sm:mt-2
            sm:h-[70px]

            md:mx-3
            md:h-[72px]

            lg:mx-4
            lg:h-[74px]
          "
        >
          {/* SOFT GLASS HIGHLIGHT */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0

              rounded-[inherit]

              bg-[linear-gradient(180deg,rgba(255,255,255,0.07)_0%,rgba(255,255,255,0.018)_34%,rgba(255,255,255,0)_70%)]
            "
          />

          {/* SUBTLE SMOKY GLASS DEPTH */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0

              rounded-[inherit]

              bg-[linear-gradient(90deg,rgba(255,255,255,0.025)_0%,rgba(0,0,0,0.05)_40%,rgba(255,255,255,0.018)_100%)]
            "
          />

          {/* =================================================
              HEADER INNER
          ================================================== */}

          <div
            className="
              relative
              z-10

              mx-auto

              flex
              h-full
              w-full
              max-w-[1720px]

              items-center
              justify-between

              px-5

              sm:px-7
              md:px-9
              lg:px-11
              xl:px-14
            "
          >
            {/* =================================================
                LOGO
            ================================================== */}

            <motion.a
              href="#home"
              onClick={closeMenu}
              aria-label="YM Motors Home"
              whileHover={{
                opacity: 0.86,
              }}
              transition={{
                duration: 0.25,
                ease,
              }}
              className="
                relative
                z-[330]

                origin-left

                scale-[0.86]

                sm:scale-[0.92]

                lg:scale-100
              "
            >
              <Logo />
            </motion.a>

            {/* =================================================
                DESKTOP NAVIGATION
            ================================================== */}

            <nav
              className="
                absolute
                left-1/2
                top-1/2

                hidden

                -translate-x-1/2
                -translate-y-1/2

                items-center

                md:flex
                md:gap-0.5

                lg:gap-1

                xl:gap-1.5
              "
            >
              {links.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="
                    group
                    relative

                    flex
                    h-[46px]

                    items-center
                    justify-center

                    overflow-hidden

                    whitespace-nowrap

                    px-2.5

                    lg:px-3.5

                    xl:px-[17px]
                  "
                >
                  {/* NAV TEXT */}

                  <span
                    className={`
                      relative
                      z-10

                      font-sans

                      text-[12px]
                      font-semibold

                      tracking-[0.005em]

                      transition-all
                      duration-300

                      lg:text-[13px]

                      xl:text-[14px]

                      ${
                        item.active
                          ? `
                              text-white
                            `
                          : `
                              text-white/58
                              group-hover:text-white
                            `
                      }
                    `}
                  >
                    {item.label}
                  </span>

                  {/* ACTIVE / HOVER BOTTOM BAR — ORIGINAL STYLE */}

                  <span
                    className={`
                      absolute
                      bottom-[4px]
                      left-1/2

                      h-[2px]

                      -translate-x-1/2

                      rounded-full

                      bg-[#E5484D]

                      shadow-[0_0_9px_rgba(229,72,77,0.48)]

                      transition-all
                      duration-300
                      ease-out

                      ${
                        item.active
                          ? `
                              w-[20px]
                              opacity-100
                            `
                          : `
                              w-0
                              opacity-0

                              group-hover:w-[16px]
                              group-hover:opacity-75
                            `
                      }
                    `}
                  />

                  {/* ACTIVE MICRO GLOW */}

                  {item.active && (
                    <span
                      className="
                        pointer-events-none

                        absolute
                        bottom-[1px]
                        left-1/2

                        h-[11px]
                        w-[42px]

                        -translate-x-1/2

                        bg-[#E5484D]/[0.10]

                        blur-[8px]
                      "
                    />
                  )}
                </a>
              ))}
            </nav>

            {/* =================================================
                DESKTOP CTA
            ================================================== */}

            <div
              className="
                ml-auto

                hidden

                items-center

                lg:flex
              "
            >
              <a
                href="#contact"
                className="
                  group
                  relative

                  hidden
                  h-[46px]

                  min-w-[138px]

                  items-center
                  justify-center

                  overflow-hidden

                  border
                  border-[#E5484D]

                  bg-[#E5484D]

                  px-6

                  font-sans

                  text-[11px]
                  font-semibold

                  tracking-[0.01em]

                  text-white

                  shadow-[0_12px_34px_rgba(0,0,0,0.22)]

                  transition-all
                  duration-500

                  hover:-translate-y-[2px]
                  hover:border-[#F05A5F]
                  hover:bg-[#F05A5F]
                  hover:shadow-[0_16px_42px_rgba(229,72,77,0.18)]

                  lg:flex

                  xl:min-w-[148px]
                  xl:text-[12px]
                "
              >
                {/* TOP GLOSS */}

                <span
                  className="
                    pointer-events-none
                    absolute
                    inset-x-0
                    top-0

                    h-[46%]

                    bg-gradient-to-b
                    from-white/[0.18]
                    to-transparent
                  "
                />

                {/* HOVER LIGHT SWEEP */}

                <span
                  className="
                    pointer-events-none
                    absolute
                    -left-[50%]
                    top-0

                    h-full
                    w-[34%]

                    -skew-x-[22deg]

                    bg-gradient-to-r
                    from-transparent
                    via-white/[0.42]
                    to-transparent

                    opacity-0
                    blur-[1px]

                    transition-all
                    duration-700

                    group-hover:left-[120%]
                    group-hover:opacity-100
                  "
                />

                <span className="relative z-10">
                  Enquire Now
                </span>
              </a>
            </div>

            {/* =================================================
                NEW MOBILE TOGGLE
                custom animated 3-line icon -> X
            ================================================== */}

            <button
              type="button"
              onClick={() => setMobile((prev) => !prev)}
              aria-label={mobile ? "Close menu" : "Open menu"}
              aria-expanded={mobile}
              className="
                group
                relative
                z-[330]

                flex
                h-11
                w-11

                items-center
                justify-center

                border
                border-white/[0.10]

                bg-black/[0.12]

                text-white/85

                transition-all
                duration-300

                hover:border-white/[0.22]
                hover:bg-white/[0.04]
                hover:text-white

                active:scale-[0.94]

                md:hidden
              "
            >
              <span
                className="
                  relative
                  block
                  h-[16px]
                  w-[22px]
                "
              >
                {/* TOP LINE */}

                <motion.span
                  animate={
                    mobile
                      ? {
                          y: 7,
                          rotate: 45,
                          width: 22,
                        }
                      : {
                          y: 0,
                          rotate: 0,
                          width: 22,
                        }
                  }
                  transition={{
                    duration: 0.28,
                    ease,
                  }}
                  className="
                    absolute
                    left-0
                    top-0

                    block
                    h-[1.5px]

                    origin-center

                    bg-current
                  "
                />

                {/* MIDDLE LINE */}

                <motion.span
                  animate={
                    mobile
                      ? {
                          opacity: 0,
                          x: 7,
                          width: 12,
                        }
                      : {
                          opacity: 1,
                          x: 0,
                          width: 15,
                        }
                  }
                  transition={{
                    duration: 0.2,
                    ease,
                  }}
                  className="
                    absolute
                    right-0
                    top-[7px]

                    block
                    h-[1.5px]

                    bg-current
                  "
                />

                {/* BOTTOM LINE */}

                <motion.span
                  animate={
                    mobile
                      ? {
                          y: -7,
                          rotate: -45,
                          width: 22,
                        }
                      : {
                          y: 0,
                          rotate: 0,
                          width: 18,
                        }
                  }
                  transition={{
                    duration: 0.28,
                    ease,
                  }}
                  className="
                    absolute
                    left-0
                    bottom-0

                    block
                    h-[1.5px]

                    origin-center

                    bg-current
                  "
                />
              </span>
            </button>
          </div>
        </div>
      </motion.header>

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}

      <AnimatePresence>
        {mobile && (
          <motion.div
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
              duration: 0.3,
            }}
            className="
              fixed
              inset-0
              z-[250]

              min-h-[100svh]

              overflow-hidden

              bg-[#0B0D0F]

              md:hidden
            "
          >
            {/* DARK MENU BACKGROUND */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0

                bg-[linear-gradient(180deg,#0B0D0F_0%,#0F1012_52%,#090A0C_100%)]
              "
            />

            {/* RED AMBIENCE — RIGHT */}

            <div
              className="
                pointer-events-none
                absolute

                right-[-190px]
                top-[8%]

                h-[430px]
                w-[430px]

                rounded-full

                bg-[#E5484D]/[0.085]

                blur-[135px]
              "
            />

            {/* RED AMBIENCE — LEFT */}

            <div
              className="
                pointer-events-none
                absolute

                bottom-[-210px]
                left-[-210px]

                h-[450px]
                w-[450px]

                rounded-full

                bg-[#E5484D]/[0.045]

                blur-[140px]
              "
            />

            {/* THIN VERTICAL DETAIL */}

            <div
              className="
                pointer-events-none
                absolute
                bottom-[10%]
                left-6
                top-[22%]

                w-px

                bg-[linear-gradient(180deg,transparent,rgba(229,72,77,0.28),transparent)]
              "
            />

            {/* =================================================
                MOBILE CONTENT
            ================================================== */}

            <div
              className="
                relative
                z-10

                flex
                min-h-[100svh]
                w-full

                flex-col

                px-6
                pb-7
                pt-[94px]

                sm:px-8
                sm:pt-[102px]
              "
            >
              {/* NAV LINKS */}

              <div
                className="
                  flex
                  flex-1

                  items-center
                  justify-center
                "
              >
                <nav
                  className="
                    flex
                    w-full
                    max-w-[370px]

                    flex-col

                    gap-1

                    sm:max-w-[400px]
                    sm:gap-2
                  "
                >
                  {links.map((item, index) => (
                    <div
                      key={item.label}
                      className="
                        w-full
                        overflow-hidden
                      "
                    >
                      <motion.a
                        href={item.href}
                        onClick={closeMenu}
                        initial={{
                          opacity: 0,
                          y: 34,
                          filter: "blur(4px)",
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          filter: "blur(0px)",
                        }}
                        exit={{
                          opacity: 0,
                          y: 10,
                        }}
                        transition={{
                          delay: 0.04 + index * 0.06,
                          duration: 0.5,
                          ease,
                        }}
                        whileTap={{
                          scale: 0.98,
                        }}
                        className="
                          group
                          relative

                          flex
                          min-h-[56px]
                          w-full

                          items-center
                          justify-between

                          border-b
                          border-white/[0.055]

                          px-1
                          py-3

                          text-left
                        "
                      >
                        <span
                          className={`
                            relative

                            font-heading

                            text-[28px]
                            font-semibold

                            leading-none

                            tracking-[-0.045em]

                            transition-colors
                            duration-300

                            sm:text-[34px]

                            ${
                              item.active
                                ? `
                                    text-white
                                  `
                                : `
                                    text-white/76

                                    group-active:text-white
                                  `
                            }
                          `}
                        >
                          {item.label}
                        </span>

                        <span
                          className={`
                            h-[6px]
                            w-[6px]

                            border
                            border-[#E5484D]

                            transition-all
                            duration-300

                            ${
                              item.active
                                ? `
                                    bg-[#E5484D]
                                    opacity-100
                                  `
                                : `
                                    bg-transparent
                                    opacity-25

                                    group-active:bg-[#E5484D]
                                    group-active:opacity-100
                                  `
                            }
                          `}
                        />
                      </motion.a>
                    </div>
                  ))}

                  {/* MOBILE CTA */}

                  <motion.a
                    href="#contact"
                    onClick={closeMenu}
                    initial={{
                      opacity: 0,
                      y: 18,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.44,
                      duration: 0.55,
                      ease,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    className="
                      group
                      relative

                      mt-7

                      flex
                      h-[54px]
                      w-full
                      max-w-[230px]

                      items-center
                      justify-center

                      overflow-hidden

                      border
                      border-[#E5484D]

                      bg-[#E5484D]

                      px-6

                      font-sans

                      text-[12px]
                      font-semibold

                      tracking-[0.01em]

                      text-white

                      shadow-[0_15px_45px_rgba(0,0,0,0.24)]
                    "
                  >
                    <span
                      className="
                        pointer-events-none
                        absolute
                        inset-x-0
                        top-0

                        h-[46%]

                        bg-gradient-to-b
                        from-white/[0.18]
                        to-transparent
                      "
                    />

                    <span className="relative z-10">
                      Enquire Now
                    </span>
                  </motion.a>
                </nav>
              </div>

              {/* MOBILE FOOTER */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 12,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.5,
                  duration: 0.5,
                }}
                className="
                  flex
                  items-end
                  justify-between

                  border-t
                  border-white/[0.06]

                  pt-5
                "
              >
                <div>
                  <p
                    className="
                      text-[8px]
                      font-semibold
                      uppercase

                      tracking-[0.14em]

                      text-[#E5484D]/65
                    "
                  >
                    Call
                  </p>

                  <a
                    href="tel:01737307007"
                    className="
                      mt-1
                      block

                      text-[11px]
                      font-medium

                      text-white/58

                      transition-colors
                      duration-300

                      hover:text-white
                    "
                  >
                    01737 307 007
                  </a>
                </div>

                <div className="text-right">
                  <p
                    className="
                      text-[8px]
                      font-semibold
                      uppercase

                      tracking-[0.14em]

                      text-[#E5484D]/65
                    "
                  >
                    Location
                  </p>

                  <p
                    className="
                      mt-1

                      text-[11px]
                      font-medium

                      text-white/58
                    "
                  >
                    Surrey · UK
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
