"use client";

import { motion } from "framer-motion";
import Logo from "../Header/Logo";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Footer() {
  return (
    <footer
      className="
        relative
        overflow-hidden

        border-t
        border-white/[0.06]

        bg-[#090A0C]

        pt-16

        sm:pt-20
        lg:pt-24
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0

          bg-[linear-gradient(180deg,#090A0C_0%,#0D0E10_46%,#090A0C_100%)]
        "
      />

      {/* RED AMBIENCE */}

      <div
        className="
          pointer-events-none
          absolute

          bottom-[-180px]
          left-[-170px]

          h-[470px]
          w-[470px]

          rounded-full

          bg-[#E5484D]/[0.055]

          blur-[150px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute

          right-[-220px]
          top-[8%]

          h-[420px]
          w-[420px]

          rounded-full

          bg-[#E5484D]/[0.03]

          blur-[145px]
        "
      />

      {/* TOP RED DETAIL */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0

          h-px
          w-[64%]

          -translate-x-1/2

          bg-gradient-to-r
          from-transparent
          via-[#E5484D]/45
          to-transparent

          shadow-[0_0_10px_rgba(229,72,77,0.18)]
        "
      />

      {/* =====================================================
          WRAPPER
      ====================================================== */}

      <div
        className="
          relative
          z-10

          mx-auto

          w-full
          max-w-[1720px]

          px-5

          sm:px-7
          md:px-9
          lg:px-12
          xl:px-16
          2xl:px-20
        "
      >
        {/* =====================================================
            FOOTER HERO
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 38,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            ease,
          }}
          className="
            border-b
            border-white/[0.08]

            pb-12

            sm:pb-14
            lg:pb-16
          "
        >
          {/* EYEBROW */}

          <div
            className="
              mb-5

              flex
              items-center

              gap-3
            "
          >
            <span
              className="
                h-px
                w-8

                bg-[#E5484D]

                shadow-[0_0_8px_rgba(229,72,77,0.24)]
              "
            />

            <span
              className="
                font-sans

                text-[9px]
                font-semibold
                uppercase

                tracking-[0.16em]

                text-[#E5484D]/85
              "
            >
              YM Motors
            </span>
          </div>

          {/* TITLE */}

          <h2
            className="
              max-w-[900px]

              font-heading

              text-[38px]
              font-bold

              leading-[0.96]

              tracking-[-0.045em]

              text-[#F4F2EE]

              sm:text-[48px]

              md:text-[56px]

              lg:text-[64px]

              xl:text-[72px]
            "
          >
            Drive The Future.
            <br />

            <span className="text-[#E5484D]">
              Experience Luxury.
            </span>
          </h2>

          {/* COPY */}

          <p
            className="
              mt-6

              max-w-[620px]

              font-sans

              text-[13px]
              font-normal

              leading-[1.75]

              text-white/46

              sm:text-[14px]
            "
          >
            Discover premium vehicles with exceptional performance,
            advanced technology and timeless design — backed by trusted,
            personal service from first enquiry to final handover.
          </p>
        </motion.div>

        {/* =====================================================
            FOOTER GRID
        ====================================================== */}

        <div
          className="
            grid
            grid-cols-1

            gap-12

            py-12

            sm:grid-cols-2
            sm:gap-x-10
            sm:gap-y-12

            lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr]
            lg:gap-12
            lg:py-14
          "
        >
          {/* BRAND */}

          <div>
            <div className="max-w-max">
              <Logo />
            </div>

            <p
              className="
                mt-8

                max-w-[360px]

                font-sans

                text-[13px]
                font-normal

                leading-[1.75]

                text-white/42
              "
            >
              Premium automotive experience delivering carefully selected
              vehicles, trusted service and exceptional driving experiences.
            </p>

            {/* SMALL BRAND LINE */}

            <div
              className="
                mt-7

                flex
                items-center

                gap-3
              "
            >
              <span
                className="
                  h-[2px]
                  w-[2px]

                  bg-[#E5484D]
                "
              />

              <span
                className="
                  font-sans

                  text-[9px]
                  font-medium
                  uppercase

                  tracking-[0.13em]

                  text-white/30
                "
              >
                Surrey · United Kingdom
              </span>
            </div>
          </div>

          {/* VEHICLES */}

          <div>
            <h4
              className="
                font-sans

                text-[11px]
                font-semibold
                uppercase

                tracking-[0.12em]

                text-white/82
              "
            >
              Vehicles
            </h4>

            <ul
              className="
                mt-6
                space-y-3.5

                font-sans

                text-[13px]

                text-white/42
              "
            >
              {[
                "Used Cars",
                "Luxury SUVs",
                "Sports Cars",
                "Premium Collection",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#stock"
                    className="
                      group
                      relative

                      inline-flex

                      items-center

                      transition-colors
                      duration-300

                      hover:text-white
                    "
                  >
                    {item}

                    <span
                      className="
                        absolute
                        -bottom-1
                        left-0

                        h-px
                        w-0

                        bg-[#E5484D]

                        transition-all
                        duration-300

                        group-hover:w-full
                      "
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COMPANY */}

          <div>
            <h4
              className="
                font-sans

                text-[11px]
                font-semibold
                uppercase

                tracking-[0.12em]

                text-white/82
              "
            >
              Company
            </h4>

            <ul
              className="
                mt-6
                space-y-3.5

                font-sans

                text-[13px]

                text-white/42
              "
            >
              {[
                ["About Us", "#about"],
                ["Finance", "#finance"],
                ["Sell Your Car", "#sell"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="
                      group
                      relative

                      inline-flex

                      items-center

                      transition-colors
                      duration-300

                      hover:text-white
                    "
                  >
                    {label}

                    <span
                      className="
                        absolute
                        -bottom-1
                        left-0

                        h-px
                        w-0

                        bg-[#E5484D]

                        transition-all
                        duration-300

                        group-hover:w-full
                      "
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}

          <div>
            <h4
              className="
                font-sans

                text-[11px]
                font-semibold
                uppercase

                tracking-[0.12em]

                text-white/82
              "
            >
              Contact
            </h4>

            <div
              className="
                mt-6
                space-y-3.5

                font-sans

                text-[13px]

                text-white/42
              "
            >
              <a
                href="tel:01737307007"
                className="
                  block

                  transition-colors
                  duration-300

                  hover:text-white
                "
              >
                01737 307 007
              </a>

              <a
                href="mailto:info@ymmotors.co.uk"
                className="
                  block

                  transition-colors
                  duration-300

                  hover:text-white
                "
              >
                info@ymmotors.co.uk
              </a>

              <p>
                Surrey, United Kingdom
              </p>
            </div>

            {/* SOCIALS */}

            <div
              className="
                mt-7

                flex

                gap-3
              "
            >
              {["F", "I", "X"].map((item) => (
                <a
                  key={item}
                  href="#"
                  aria-label={item}
                  className="
                    group
                    relative

                    flex
                    h-10
                    w-10

                    items-center
                    justify-center

                    overflow-hidden

                    border
                    border-white/[0.12]

                    bg-white/[0.02]

                    font-sans

                    text-[11px]
                    font-semibold

                    text-white/70

                    transition-all
                    duration-300

                    hover:-translate-y-[2px]
                    hover:border-[#E5484D]/70
                    hover:bg-[#E5484D]
                    hover:text-white
                    hover:shadow-[0_10px_28px_rgba(229,72,77,0.16)]
                  "
                >
                  <span
                    className="
                      pointer-events-none
                      absolute
                      inset-x-0
                      top-0

                      h-[44%]

                      bg-gradient-to-b
                      from-white/[0.12]
                      to-transparent

                      opacity-0

                      transition-opacity
                      duration-300

                      group-hover:opacity-100
                    "
                  />

                  <span className="relative z-10">
                    {item}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM BAR
        ====================================================== */}

        <div
          className="
            flex
            flex-col

            gap-4

            border-t
            border-white/[0.08]

            py-6

            font-sans

            text-[11px]

            text-white/30

            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p>
            © 2026 YM Motors. All rights reserved.
          </p>

          <div
            className="
              flex

              gap-6
            "
          >
            <a
              href="#"
              className="
                transition-colors
                duration-300

                hover:text-white
              "
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="
                transition-colors
                duration-300

                hover:text-white
              "
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
