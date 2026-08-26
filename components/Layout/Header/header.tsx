"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";

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
  const [scrolled, setScrolled] = useState(false);

  /* =====================================================
     SCROLL HEADER
  ====================================================== */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
          HEADER
      ====================================================== */}

      <motion.header
        initial={{
          opacity: 0,
          y: -14,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
          ease,
        }}
        className="
          fixed
          inset-x-0
          top-0
          z-[200]
          w-full
        "
      >
        <div
          className={`
            relative
            w-full

            transition-all
            duration-500

            ${
              scrolled
                ? `
                    h-[68px]

                    border-b
                    border-white/[0.055]

                    bg-[#08111A]/[0.92]

                    shadow-[0_14px_45px_rgba(0,0,0,0.20)]

                    backdrop-blur-2xl
                    backdrop-saturate-150
                  `
                : `
                    h-[76px]

                    border-b
                    border-white/[0.035]

                    bg-[#08111A]/[0.34]

                    backdrop-blur-[8px]
                  `
            }

            sm:h-[78px]
            md:h-[80px]
            lg:h-[82px]
          `}
        >
          {/* =================================================
              SUBTLE BLUE ATMOSPHERE
          ================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0

              bg-[linear-gradient(90deg,rgba(87,136,181,0.045)_0%,rgba(8,17,26,0)_42%,rgba(87,136,181,0.025)_100%)]
            "
          />

          {/* top reflection */}

          <div
            className="
              pointer-events-none
              absolute
              inset-x-0
              top-0

              h-px

              bg-gradient-to-r
              from-transparent
              via-white/[0.09]
              to-transparent
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

              px-4

              sm:px-6
              md:px-8
              lg:px-12
              xl:px-16
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
                x: 2,
              }}
              transition={{
                duration: 0.3,
                ease,
              }}
              className="
                relative
                z-[230]

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
                md:gap-0

                lg:gap-1

                xl:gap-2
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
                    h-[44px]

                    items-center
                    justify-center

                    whitespace-nowrap

                    px-2.5

                    lg:px-3.5

                    xl:px-[18px]
                  "
                >
                  {/* NAV TEXT */}

                  <span
                    className={`
                      relative
                      z-10

                      font-sans

                      text-[10px]
                      font-semibold

                      tracking-[0.005em]

                      transition-all
                      duration-300

                      lg:text-[11px]

                      xl:text-[12px]

                      ${
                        item.active
                          ? `
                              text-[#A9C8E3]
                            `
                          : `
                              text-white/46
                              group-hover:text-white/78
                            `
                      }
                    `}
                  >
                    {item.label}
                  </span>

                  {/* ===========================================
                      ACTIVE / HOVER BOTTOM LINE
                  ============================================ */}

                  <span
                    className={`
                      absolute
                      bottom-[4px]
                      left-1/2

                      h-[2px]

                      -translate-x-1/2

                      rounded-full

                      bg-[#5788B5]

                      shadow-[0_0_9px_rgba(87,136,181,0.48)]

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

                  {/* MICRO GLOW ON ACTIVE */}

                  {item.active && (
                    <span
                      className="
                        pointer-events-none

                        absolute
                        bottom-[1px]
                        left-1/2

                        h-[10px]
                        w-[38px]

                        -translate-x-1/2

                        bg-[#5788B5]/10

                        blur-[7px]
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

                  hidden
                  h-[44px]

                  items-center
                  justify-center
                  gap-4

                  rounded-[5px]

                  bg-[#5788B5]

                  px-5

                  font-sans

                  text-[10px]
                  font-bold
                  uppercase

                  tracking-[0.05em]

                  text-white

                  shadow-[0_12px_35px_rgba(87,136,181,0.20)]

                  transition-all
                  duration-300

                  hover:-translate-y-[1px]
                  hover:bg-[#6A9BC6]
                  hover:shadow-[0_16px_45px_rgba(87,136,181,0.28)]

                  lg:flex

                  xl:px-6
                  xl:text-[11px]
                "
              >
                Enquire Now

                <ArrowUpRight
                  strokeWidth={1.7}
                  className="
                    h-[15px]
                    w-[15px]

                    transition-transform
                    duration-300

                    group-hover:-translate-y-[2px]
                    group-hover:translate-x-[2px]
                  "
                />
              </a>
            </div>

            {/* =================================================
                MOBILE TOGGLE
            ================================================== */}

            <button
              type="button"
              onClick={() => setMobile((prev) => !prev)}
              aria-label={mobile ? "Close menu" : "Open menu"}
              aria-expanded={mobile}
              className="
                relative
                z-[230]

                flex
                h-11
                w-11

                items-center
                justify-center

                bg-transparent

                text-[#D9E1E7]

                transition-all
                duration-300

                active:scale-90

                md:hidden
              "
            >
              <AnimatePresence
                mode="wait"
                initial={false}
              >
                {mobile ? (
                  <motion.span
                    key="close"
                    initial={{
                      opacity: 0,
                      rotate: -30,
                      scale: 0.8,
                    }}
                    animate={{
                      opacity: 1,
                      rotate: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      rotate: 30,
                      scale: 0.8,
                    }}
                    transition={{
                      duration: 0.2,
                      ease,
                    }}
                    className="
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <X
                      strokeWidth={1.6}
                      className="
                        h-[28px]
                        w-[28px]
                      "
                    />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{
                      opacity: 0,
                      scale: 0.85,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.85,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className="
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <Menu
                      strokeWidth={1.6}
                      className="
                        h-[27px]
                        w-[27px]
                      "
                    />
                  </motion.span>
                )}
              </AnimatePresence>
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
              z-[180]

              min-h-[100svh]

              overflow-hidden

              bg-[#08111A]

              md:hidden
            "
          >
            {/* =================================================
                SAME NAVBAR THEME BACKGROUND
            ================================================== */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0

                bg-[linear-gradient(180deg,#08111A_0%,#0A141D_52%,#08111A_100%)]
              "
            />

            {/* VERY SUBTLE BLUE AMBIENCE */}

            <div
              className="
                pointer-events-none
                absolute

                right-[-180px]
                top-[10%]

                h-[420px]
                w-[420px]

                rounded-full

                bg-[#5788B5]/[0.07]

                blur-[130px]
              "
            />

            <div
              className="
                pointer-events-none
                absolute

                bottom-[-180px]
                left-[-200px]

                h-[420px]
                w-[420px]

                rounded-full

                bg-[#5788B5]/[0.035]

                blur-[130px]
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
                pt-[90px]

                sm:px-8
                sm:pt-[98px]
              "
            >
              {/* =================================================
                  NAV LINKS
              ================================================== */}

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
                    max-w-[360px]

                    flex-col
                    items-center

                    gap-2

                    sm:max-w-[390px]
                    sm:gap-3
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
                          y: 38,
                          filter: "blur(5px)",
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          filter: "blur(0px)",
                        }}
                        exit={{
                          opacity: 0,
                          y: 12,
                        }}
                        transition={{
                          delay: 0.05 + index * 0.065,
                          duration: 0.55,
                          ease,
                        }}
                        whileTap={{
                          scale: 0.975,
                        }}
                        className="
                          group
                          relative

                          mx-auto

                          flex
                          min-h-[54px]
                          w-full

                          items-center
                          justify-center

                          px-4
                          py-3

                          text-center
                        "
                      >
                        {/* MOBILE NAV TEXT */}

                        <span
                          className={`
                            relative

                            font-heading

                            text-[28px]
                            font-medium

                            leading-none

                            tracking-[-0.04em]

                            transition-colors
                            duration-300

                            sm:text-[33px]

                            ${
                              item.active
                                ? `
                                    text-[#9FC1DE]
                                  `
                                : `
                                    text-white/72

                                    group-active:text-white
                                  `
                            }
                          `}
                        >
                          {item.label}
                        </span>

                        {/* ACTIVE MOBILE LINE */}

                        {item.active && (
                          <motion.span
                            initial={{
                              scaleX: 0,
                              opacity: 0,
                            }}
                            animate={{
                              scaleX: 1,
                              opacity: 1,
                            }}
                            transition={{
                              delay: 0.4,
                              duration: 0.55,
                              ease,
                            }}
                            className="
                              absolute
                              bottom-[3px]
                              left-1/2

                              h-[2px]
                              w-[22px]

                              -translate-x-1/2

                              rounded-full

                              bg-[#5788B5]

                              shadow-[0_0_8px_rgba(87,136,181,0.42)]
                            "
                          />
                        )}
                      </motion.a>
                    </div>
                  ))}

                  {/* =================================================
                      MOBILE CTA
                  ================================================== */}

                  <motion.a
                    href="#contact"
                    onClick={closeMenu}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.47,
                      duration: 0.6,
                      ease,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    className="
                      mt-7

                      flex
                      h-[52px]
                      w-full
                      max-w-[210px]

                      items-center
                      justify-center
                      gap-4

                      rounded-[5px]

                      bg-[#5788B5]

                      px-6

                      font-sans

                      text-[11px]
                      font-bold
                      uppercase

                      tracking-[0.05em]

                      text-white

                      shadow-[0_15px_45px_rgba(87,136,181,0.20)]
                    "
                  >
                    Enquire Now

                    <ArrowUpRight
                      strokeWidth={1.7}
                      className="
                        h-[15px]
                        w-[15px]
                      "
                    />
                  </motion.a>
                </nav>
              </div>

              {/* =================================================
                  MOBILE FOOTER
              ================================================== */}

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
                  delay: 0.52,
                  duration: 0.5,
                }}
                className="
                  flex
                  items-end
                  justify-between

                  border-t
                  border-white/[0.055]

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

                      text-[#8FB3D4]/40
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

                      text-white/55
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

                      text-[#8FB3D4]/40
                    "
                  >
                    Location
                  </p>

                  <p
                    className="
                      mt-1

                      text-[11px]
                      font-medium

                      text-white/55
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