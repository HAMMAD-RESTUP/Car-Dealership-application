"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Logo from "./Logo";

const links = [
  { label: "Used Cars", href: "#stock" },
  { label: "Finance", href: "#finance" },
  { label: "Sell Your Car", href: "#sell" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [mobile, setMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* =====================================================
     SCROLL HEADER
  ====================================================== */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
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
     BODY LOCK + ESC
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
     AUTO CLOSE MENU ON DESKTOP RESIZE
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
          y: -18,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.75,
          ease: [0.22, 1, 0.36, 1],
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
            flex
            w-full
            items-center

            transition-all
            duration-500

            ${
              scrolled || mobile
                ? `
                    h-[66px]

                    border-b
                    border-white/[0.08]

                    bg-[#050505]/82

                    shadow-[0_12px_45px_rgba(0,0,0,0.28)]

                    backdrop-blur-2xl
                  `
                : `
                    h-[76px]
                    bg-black/45
                    backdrop-blur-[3px]
                  `
            }

            sm:h-[78px]

            md:h-[78px]

            lg:h-[80px]

            xl:h-[82px]
          `}
        >
          {/* subtle header gradient */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0

              bg-gradient-to-b
              from-black/25
              to-transparent
            "
          />

          {/* =================================================
              INNER
          ================================================== */}

          <div
            className="
              relative
              z-10

              mx-auto
              flex
              h-full
              w-full
              max-w-[1800px]

              items-center
              justify-between

              px-4

              sm:px-6

              md:px-8

              lg:px-10

              xl:px-12

              2xl:px-14
            "
          >
            {/* =================================================
                LOGO
            ================================================== */}

            <motion.a
              href="/"
              onClick={closeMenu}
              aria-label="YM Motors home"
              whileHover={{
                scale: 1.015,
              }}
              transition={{
                duration: 0.25,
              }}
              className="
                relative
                z-[230]

                origin-left

                scale-[0.84]

                sm:scale-[0.9]

                md:scale-[0.92]

                lg:scale-[0.96]

                xl:scale-100
              "
            >
              <Logo />
            </motion.a>

            {/* =================================================
                DESKTOP / TABLET NAV
                FROM 768PX+
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
                md:gap-1

                lg:gap-2

                xl:gap-3
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
                    h-[42px]
                    items-center
                    justify-center

                    whitespace-nowrap

                    rounded-full

                    px-3

                    lg:px-4

                    xl:px-5
                  "
                >
                  {/* HOVER PILL */}

                  <span
                    className="
                      absolute
                      inset-0

                      scale-[0.88]

                      rounded-full

                      border
                      border-white/0

                      bg-white/0

                      opacity-0

                      transition-all
                      duration-300

                      group-hover:scale-100
                      group-hover:border-white/[0.08]
                      group-hover:bg-white/[0.055]
                      group-hover:opacity-100
                    "
                  />

                  {/* TEXT */}

                  <span
                    className="
                      relative
                      z-10

                      font-sans

                      text-[10px]
                      font-semibold

                      tracking-[-0.02em]

                      text-white/72

                      transition-colors
                      duration-300

                      group-hover:text-white

                      lg:text-[11px]

                      xl:text-[12px]
                    "
                  >
                    {item.label}
                  </span>

                  {/* TINY DOT */}

                  <span
                    className="
                      absolute
                      bottom-[4px]
                      left-1/2

                      h-[3px]
                      w-[3px]

                      -translate-x-1/2
                      translate-y-[5px]

                      rounded-full

                      bg-[#8FB3D4]

                      opacity-0

                      transition-all
                      duration-300

                      group-hover:translate-y-0
                      group-hover:opacity-100
                    "
                  />
                </a>
              ))}
            </nav>

            {/* =================================================
                MOBILE TOGGLE ONLY
                HIDDEN FROM MD+
            ================================================== */}

            <button
              type="button"
              onClick={() => setMobile((prev) => !prev)}
              aria-label={mobile ? "Close menu" : "Open menu"}
              aria-expanded={mobile}
              className="
                group

                relative
                z-[230]

                flex
                h-11
                w-11

                items-center
                justify-center

                rounded-full

                border
                border-white/[0.12]

                bg-black/20

                backdrop-blur-xl

                transition-all
                duration-300

                active:scale-95

                md:hidden
              "
            >
              <span
                className="
                  relative
                  block
                  h-[16px]
                  w-[25px]
                "
              >
                {/* TOP LINE */}

                <motion.span
                  animate={
                    mobile
                      ? {
                          rotate: 45,
                          y: 6,
                          width: "25px",
                        }
                      : {
                          rotate: 0,
                          y: 0,
                          width: "25px",
                        }
                  }
                  transition={{
                    duration: 0.32,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    absolute
                    left-0
                    top-[2px]

                    block
                    h-[1.5px]

                    rounded-full

                    bg-white
                  "
                />

                {/* BOTTOM LINE */}

                <motion.span
                  animate={
                    mobile
                      ? {
                          rotate: -45,
                          y: -6,
                          width: "25px",
                        }
                      : {
                          rotate: 0,
                          y: 0,
                          width: "18px",
                        }
                  }
                  transition={{
                    duration: 0.32,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    absolute
                    bottom-[2px]
                    right-0

                    block
                    h-[1.5px]

                    rounded-full

                    bg-white
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
              transition: {
                duration: 0.3,
              },
            }}
            transition={{
              duration: 0.4,
            }}
            className="
              fixed
              inset-0
              z-[180]

              flex
              min-h-[100svh]

              overflow-hidden

              bg-[#050505]

              md:hidden
            "
          >
            {/* =============================================
                GRAPHITE BACKGROUND
            ============================================== */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0

                bg-[radial-gradient(circle_at_50%_35%,rgba(130,130,130,0.11),transparent_30%),radial-gradient(circle_at_100%_0%,rgba(87,136,181,0.055),transparent_27%),linear-gradient(180deg,#050505_0%,#101113_52%,#050505_100%)]
              "
            />

            {/* GLOW */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.7,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.9,
              }}
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2

                h-[420px]
                w-[420px]

                -translate-x-1/2
                -translate-y-1/2

                rounded-full

                bg-white/[0.025]

                blur-[100px]
              "
            />

            {/* subtle vertical light */}

            <motion.div
              initial={{
                scaleY: 0,
              }}
              animate={{
                scaleY: 1,
              }}
              exit={{
                scaleY: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                pointer-events-none
                absolute
                left-1/2
                top-[17%]

                h-[66%]
                w-px

                origin-top

                bg-gradient-to-b
                from-transparent
                via-white/[0.06]
                to-transparent
              "
            />

            {/* =============================================
                MAIN MOBILE MENU CONTENT
            ============================================== */}

            <div
              className="
                relative
                z-10

                flex
                min-h-[100svh]
                w-full

                flex-col

                px-5
                pb-6
                pt-[92px]

                sm:px-7
                sm:pt-[100px]
              "
            >
              {/* ===========================================
                  CENTER NAVIGATION
              ============================================ */}

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
                    max-w-[420px]

                    flex-col
                    items-center
                    justify-center
                  "
                >
                  {/* MICRO LABEL */}

                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 16,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.12,
                      duration: 0.55,
                    }}
                    className="
                      mb-7

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

                        bg-gradient-to-r
                        from-transparent
                        to-[#5788B5]
                      "
                    />

                    <span
                      className="
                        text-[8px]
                        font-bold
                        uppercase
                        tracking-[0.26em]

                        text-[#8FB3D4]
                      "
                    >
                      Navigation
                    </span>

                    <span
                      className="
                        h-px
                        w-7

                        bg-gradient-to-l
                        from-transparent
                        to-[#5788B5]
                      "
                    />
                  </motion.div>

                  {/* LINKS */}

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
                          y: 65,
                          filter: "blur(8px)",
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          filter: "blur(0px)",
                        }}
                        exit={{
                          opacity: 0,
                          y: 25,
                        }}
                        transition={{
                          delay: 0.1 + index * 0.075,
                          duration: 0.65,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="
                          group

                          relative

                          flex
                          w-full

                          items-center
                          justify-center

                          py-[12px]

                          text-center

                          sm:py-[14px]
                        "
                      >
                        {/* NUMBER */}

                        <span
                          className="
                            absolute
                            left-[8px]
                            top-1/2

                            -translate-y-1/2

                            text-[7px]
                            font-semibold
                            tracking-[0.12em]

                            text-white/18
                          "
                        >
                          0{index + 1}
                        </span>

                        {/* LINK */}

                        <span
                          className="
                            font-heading

                            text-[32px]
                            font-medium

                            leading-[0.95]

                            tracking-[-0.055em]

                            text-white/90

                            transition-all
                            duration-300

                            group-active:scale-[0.97]
                            group-active:text-[#8FB3D4]

                            sm:text-[38px]
                          "
                        >
                          {item.label}
                        </span>

                        {/* ARROW */}

                        <ArrowUpRight
                          strokeWidth={1.25}
                          className="
                            absolute
                            right-[8px]
                            top-1/2

                            h-4
                            w-4

                            -translate-y-1/2

                            text-white/18

                            transition-all
                            duration-300

                            group-active:-translate-y-[65%]
                            group-active:translate-x-[2px]
                            group-active:text-[#8FB3D4]
                          "
                        />
                      </motion.a>
                    </div>
                  ))}

                  {/* CTA */}

                  <motion.a
                    href="#stock"
                    onClick={closeMenu}
                    initial={{
                      opacity: 0,
                      y: 30,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.52,
                      duration: 0.65,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
                      group

                      mt-8

                      flex
                      h-[50px]

                      items-center
                      justify-center
                      gap-6

                      rounded-full

                      bg-white

                      px-7

                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.14em]

                      text-[#08090A]

                      transition-all
                      duration-300

                      active:scale-[0.97]
                    "
                  >
                    Explore Stock

                    <ArrowUpRight
                      className="
                        h-4
                        w-4

                        transition-transform
                        duration-300

                        group-active:-translate-y-[2px]
                        group-active:translate-x-[2px]
                      "
                    />
                  </motion.a>
                </nav>
              </div>

              {/* ===========================================
                  MOBILE FOOTER
              ============================================ */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.58,
                  duration: 0.55,
                }}
                className="
                  flex
                  items-end
                  justify-between

                  border-t
                  border-white/[0.07]

                  pt-5
                "
              >
                <div>
                  <p
                    className="
                      text-[7px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]

                      text-white/25
                    "
                  >
                    Call
                  </p>

                  <a
                    href="tel:01737307007"
                    className="
                      mt-1
                      block

                      text-[10px]
                      font-medium

                      text-white/60
                    "
                  >
                    01737 307 007
                  </a>
                </div>

                <div className="text-right">
                  <p
                    className="
                      text-[7px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]

                      text-white/25
                    "
                  >
                    Location
                  </p>

                  <p
                    className="
                      mt-1

                      text-[10px]
                      font-medium

                      text-white/60
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