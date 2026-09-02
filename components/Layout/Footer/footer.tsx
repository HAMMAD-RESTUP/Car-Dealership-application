"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import Logo from "../Header/Logo";

const ease = [0.22, 1, 0.36, 1] as const;

interface SalesHour {
  day: string;
  time: string;
}

interface UsefulLink {
  label: string;
  href: string;
}

const salesHours: SalesHour[] = [
  { day: "Monday", time: "09:30 - 17:30" },
  { day: "Tuesday", time: "09:30 - 17:30" },
  { day: "Wednesday", time: "09:30 - 17:30" },
  { day: "Thursday", time: "09:30 - 17:30" },
  { day: "Friday", time: "09:30 - 17:30" },
  { day: "Saturday", time: "08:30 - 17:30" },
  { day: "Sunday", time: "Closed" },
];

const usefulLinks: UsefulLink[] = [
  { label: "Cookie Policy", href: "#" },
  { label: "Disclaimer", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Sitemap", href: "#" },
];

const brands: string[] = [
  "Audi",
  "BMW",
  "Ford",
  "Honda",
  "Mercedes-Benz",
  "Peugeot",
  "Smart",
  "Toyota",
  "Vauxhall",
  "Volkswagen",
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-white/[0.06]
        bg-[#0B0D0F]
        pt-16
        sm:pt-20
        lg:pt-24
      "
    >
      {/* BACKGROUND */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[linear-gradient(180deg,#0B0D0F_0%,#11161D_46%,#0B0D0F_100%)]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-180px]
          left-[-170px]
          h-[470px]
          w-[470px]
          rounded-full
          bg-[#00A8E8]/[0.055]
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
          bg-[#00A8E8]/[0.03]
          blur-[145px]
        "
      />

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
          via-[#00A8E8]/45
          to-transparent
          shadow-[0_0_10px_rgba(0,168,232,0.18)]
        "
      />

      {/* WRAPPER */}
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
        {/* LOGO */}
        <motion.div
          initial={{ opacity: 0, y: 38 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="max-w-max"
        >
          <Logo />
        </motion.div>

        {/* MAIN GRID: Contact / Sales Hours / Useful Links */}
        <div
          className="
            grid
            grid-cols-1
            gap-14
            py-16

            border-b
            border-white/[0.08]

            sm:grid-cols-2
            sm:gap-x-12
            sm:gap-y-14

            lg:grid-cols-[1fr_1.3fr_0.8fr]
            lg:gap-20
            lg:py-20
          "
        >
          {/* CONTACT US */}
          <div>
            <h4
              className="
                font-sans
                text-[17px]
                font-semibold
                uppercase
                tracking-[0.12em]
                text-white/85
              "
            >
              Contact Us
            </h4>

            <a
              href="tel:01737307007"
              className="
                group
                mt-7
                inline-flex
                items-center
                gap-2.5

                border
                border-[#00A8E8]/40
                bg-[#00A8E8]/[0.08]

                px-5
                py-2.5

                font-sans
                text-[13px]
                font-semibold

                text-[#00A8E8]

                transition-all
                duration-300

                hover:bg-[#00A8E8]
                hover:text-white
              "
            >
              <Phone className="h-3.5 w-3.5" />
              Get In Touch
            </a>

            <div
              className="
                mt-8

                font-sans
                text-[14px]
                leading-[1.9]

                text-white/65
              "
            >
              <p className="font-semibold text-white/90">YM Motors Ltd</p>
              <p className="mt-2 max-w-[300px]">
                Heathview Eastbourne Road, Blindley Heath, Lingfield, Surrey,
                RH7 6LG
              </p>
            </div>
          </div>

          {/* SALES HOURS */}
          <div>
            <h4
              className="
                font-sans
                text-[17px]
                font-semibold
                uppercase
                tracking-[0.12em]
                text-white/85
              "
            >
              Sales
            </h4>

            <div className="mt-7 font-sans text-[14px]">
              {salesHours.map((item) => (
                <div
                  key={item.day}
                  className={
                    item.day === "Wednesday"
                      ? "flex items-center justify-between px-3 py-2.5 bg-[#00A8E8]/[0.14] text-white"
                      : "flex items-center justify-between px-3 py-2.5 text-white/65"
                  }
                >
                  <span
                    className={
                      item.day === "Wednesday" ? "font-semibold" : ""
                    }
                  >
                    {item.day}
                  </span>
                  <span>{item.time}</span>
                </div>
              ))}
            </div>

            <p
              className="
                mt-6

                font-sans
                text-[13px]
                leading-[1.8]

                text-white/50
              "
            >
              Viewings are by appointment only within opening hours. Please
              call prior to your visit.
            </p>
          </div>

          {/* USEFUL LINKS */}
          <div className="relative">
            <h4
              className="
                font-sans
                text-[17px]
                font-semibold
                uppercase
                tracking-[0.12em]
                text-white/85
              "
            >
              Useful Links
            </h4>

            <ul
              className="
                mt-7
                space-y-4

                font-sans
                text-[14px]
                text-white/65
              "
            >
              {usefulLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
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
                    {link.label}
                    <span
                      className="
                        absolute
                        -bottom-1
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
                </li>
              ))}
            </ul>

            {/* WhatsApp icon */}
            <a
              href="https://wa.me/441737307007"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="
                absolute
                right-0
                top-0

                flex
                h-9
                w-9

                items-center
                justify-center

                rounded-full

                bg-[#25D366]/10

                text-[#25D366]

                transition-all
                duration-300

                hover:bg-[#25D366]
                hover:text-white
              "
            >
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* BRAND TAGS STRIP */}
        <div
          className="
            border-b
            border-white/[0.08]

            py-8
          "
        >
          <p
            className="
              text-center

              font-sans
              text-[13px]
              font-semibold

              tracking-[0.03em]

              text-white/55
            "
          >
            {brands.join(", ")}
          </p>
        </div>

        {/* BOTTOM BAR */}
        <div
          className="
            flex
            flex-col

            items-center
            gap-3

            py-8

            text-center

            font-sans
            text-[12px]

            text-white/50
          "
        >
          <p>© {currentYear} YM Motors Ltd. All Rights Reserved.</p>
          <p>Company Registration Number: XXXXXXXX</p>

          <p
            className="
              mt-4

              max-w-[900px]

              text-[11.5px]
              leading-[1.85]

              text-white/40
            "
          >
            We are trading as a credit broker and not a lender, and are
            authorised and regulated by the Financial Conduct Authority, firm
            reference{" "}
            <span className="font-semibold text-white/55">XXXXXX</span>. We
            can introduce you to a limited number of lenders while providing
            details of finance products available. We will not charge you a
            fee for an introduction but may receive a commission from the
            lender. Lenders&apos; commissions may vary. The commission
            received does not influence the interest rate you will pay. For
            questions about commission, please speak to us. YM Motors Ltd,
            Heathview Eastbourne Road, Blindley Heath, Lingfield, Surrey, RH7
            6LG.
          </p>
        </div>
      </div>
    </footer>
  );
}