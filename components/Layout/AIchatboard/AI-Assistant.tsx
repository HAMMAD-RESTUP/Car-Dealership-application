"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUp,
  MessageCircle,
  X,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const suggestions = [
  "Find my ideal car",
  "Browse Japanese imports",
  "Check import costs",
];

export default function AiAssistant() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const shouldShow = window.scrollY > 250;

      setVisible(shouldShow);

      if (!shouldShow) {
        setOpen(false);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSend = () => {
    const value = message.trim();

    if (!value) return;

    console.log("AI Assistant:", value);

    setMessage("");
  };

  return (
    <>
      {/* =====================================================
          OPEN ASSISTANT
      ====================================================== */}
      <AnimatePresence>
        {visible && open && (
          <motion.aside
            initial={{
              opacity: 0,
              y: 28,
              scale: 0.97,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 22,
              scale: 0.98,
            }}
            transition={{
              duration: 0.36,
              ease: EASE,
            }}
            className="
              fixed
              bottom-4
              right-4
              z-[100]

              w-[calc(100vw-32px)]
              max-w-[365px]

              max-h-[calc(100svh-32px)]
              overflow-y-auto

              rounded-[14px]

              border
              border-[#c9d2dc]/[0.13]

              bg-[rgba(11,14,19,0.97)]

              shadow-[0_24px_70px_rgba(0,0,0,0.42)]

              backdrop-blur-[18px]

              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden

              sm:bottom-6
              sm:right-6
              sm:w-[365px]
              sm:max-h-[calc(100svh-48px)]

              lg:bottom-8
              lg:right-8
            "
          >
            {/* SILVER TOP LINE */}
            <div
              className="
                pointer-events-none
                absolute
                inset-x-8
                top-0

                h-px

                bg-[linear-gradient(90deg,transparent,#7e878d,#e8ebed,#7e878d,transparent)]

                opacity-45
              "
            />

            {/* =================================================
                HEADER
            ================================================== */}
            <div
              className="
                relative
                z-10

                flex
                items-center
                justify-between

                border-b
                border-[#c9d2dc]/[0.10]

                px-5
                py-4
              "
            >
              <div className="flex items-center gap-3">
                {/* MESSAGE ICON */}
                <div
                  className="
                    relative

                    flex
                    h-[42px]
                    w-[42px]
                    shrink-0
                    items-center
                    justify-center

                    rounded-full

                    border
                    border-[#c9d2dc]/[0.16]

                    bg-[#151c26]

                    shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]
                  "
                >
                  <MessageCircle
                    size={18}
                    strokeWidth={1.45}
                    className="text-[#e8ecef]"
                  />

                  {/* ONLINE GREEN DOT */}
                  <span
                    className="
                      absolute
                      bottom-0
                      right-0

                      flex
                      h-[11px]
                      w-[11px]
                      items-center
                      justify-center
                    "
                  >
                    <motion.span
                      animate={{
                        scale: [1, 2, 1],
                        opacity: [0.65, 0, 0.65],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeOut",
                      }}
                      className="
                        absolute

                        h-[8px]
                        w-[8px]

                        rounded-full

                        bg-[#56d98b]
                      "
                    />

                    <span
                      className="
                        relative

                        h-[8px]
                        w-[8px]

                        rounded-full

                        border-2
                        border-[#0b0e13]

                        bg-[#56d98b]

                        shadow-[0_0_8px_rgba(86,217,139,0.55)]
                      "
                    />
                  </span>
                </div>

                {/* TITLE */}
                <div>
                  <h2
                    className="
                      font-[var(--font-display)]

                      text-[22px]
                      font-semibold
                      leading-none
                      tracking-[-0.015em]

                      text-[#f3f4f4]
                    "
                  >
                    YM Assistant
                  </h2>

                  <div
                    className="
                      mt-[7px]

                      flex
                      items-center
                      gap-2
                    "
                  >
                    <span className="relative flex h-[7px] w-[7px]">
                      <motion.span
                        animate={{
                          scale: [1, 1.9, 1],
                          opacity: [0.65, 0, 0.65],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                        className="
                          absolute
                          h-full
                          w-full

                          rounded-full

                          bg-[#56d98b]
                        "
                      />

                      <span
                        className="
                          relative

                          h-[7px]
                          w-[7px]

                          rounded-full

                          bg-[#56d98b]
                        "
                      />
                    </span>

                    <span
                      className="
                        font-[var(--font-body)]

                        text-[10px]
                        font-semibold

                        text-[#a9e7c0]
                      "
                    >
                      Online now
                    </span>

                    <span
                      className="
                        font-[var(--font-body)]

                        text-[9px]

                        text-[#c9d2dc]/35
                      "
                    >
                      Ready to help
                    </span>
                  </div>
                </div>
              </div>

              {/* CLOSE */}
              <button
                type="button"
                aria-label="Close AI Assistant"
                onClick={() => setOpen(false)}
                className="
                  flex
                  h-8
                  w-8
                  shrink-0
                  items-center
                  justify-center

                  rounded-full

                  border
                  border-[#c9d2dc]/[0.10]

                  bg-[#151c26]/50

                  text-[#c9d2dc]/45

                  transition-all
                  duration-200

                  hover:border-[#c9d2dc]/[0.22]
                  hover:bg-[#151c26]
                  hover:text-white
                "
              >
                <X size={15} strokeWidth={1.4} />
              </button>
            </div>

            {/* =================================================
                CONTENT
            ================================================== */}
            <div
              className="
                relative
                z-10

                px-5
                pb-5
                pt-5
              "
            >
              {/* LABEL */}
              <p
                className="
                  font-[var(--font-body)]

                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.17em]

                  text-[#c9d2dc]/45
                "
              >
                Vehicle Assistance
              </p>

              {/* HEADING */}
              <h3
                className="
                  mt-2.5

                  max-w-[315px]

                  font-[var(--font-display)]

                  text-[28px]
                  font-medium
                  leading-[1.02]
                  tracking-[-0.018em]

                  text-[#f3f4f4]
                "
              >
                What are you looking
                <br />

                <span
                  className="
                    bg-[linear-gradient(180deg,#ffffff_0%,#d5d9dc_32%,#979fa4_62%,#e4e7e8_100%)]

                    bg-clip-text
                    text-transparent
                  "
                >
                  to drive?
                </span>
              </h3>

              {/* DESCRIPTION */}
              <p
                className="
                  mt-3

                  max-w-[315px]

                  font-[var(--font-body)]

                  text-[12px]
                  font-normal
                  leading-[1.65]

                  text-[#c9d2dc]/55
                "
              >
                Tell me your budget, preferred model or requirements and
                I&apos;ll help you explore suitable Japanese vehicles.
              </p>

              {/* =================================================
                  QUICK ACTIONS
              ================================================== */}
              <div
                className="
                  mt-5

                  flex
                  flex-col
                  gap-2
                "
              >
                {suggestions.map((item, index) => (
                  <motion.button
                    key={item}
                    type="button"
                    onClick={() => setMessage(item)}
                    initial={{
                      opacity: 0,
                      x: 8,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: 0.08 + index * 0.06,
                      duration: 0.3,
                      ease: EASE,
                    }}
                    className="
                      group

                      flex
                      min-h-[45px]
                      w-full
                      items-center
                      justify-between

                      rounded-[5px]

                      border
                      border-[#c9d2dc]/[0.10]

                      bg-[#151c26]/35

                      px-3.5

                      text-left

                      transition-all
                      duration-300

                      hover:border-[#c9d2dc]/[0.20]
                      hover:bg-[#151c26]/60
                    "
                  >
                    <span
                      className="
                        font-[var(--font-body)]

                        text-[11px]
                        font-medium

                        text-[#c9d2dc]/68

                        transition-colors
                        duration-300

                        group-hover:text-white/90
                      "
                    >
                      {item}
                    </span>

                    <ArrowRight
                      size={14}
                      strokeWidth={1.3}
                      className="
                        text-[#c9d2dc]/24

                        transition-all
                        duration-300

                        group-hover:translate-x-1
                        group-hover:text-[#158ff3]
                      "
                    />
                  </motion.button>
                ))}
              </div>

              {/* =================================================
                  INPUT
              ================================================== */}
              <div
                className="
                  mt-5

                  flex
                  min-h-[55px]
                  items-center

                  rounded-[6px]

                  border
                  border-[#c9d2dc]/[0.12]

                  bg-[#151c26]/30

                  px-3.5

                  transition-all
                  duration-300

                  focus-within:border-[#158ff3]/50
                  focus-within:bg-[#151c26]/45
                "
              >
                <MessageCircle
                  size={16}
                  strokeWidth={1.35}
                  className="
                    mr-3
                    shrink-0

                    text-[#c9d2dc]/35
                  "
                />

                <input
                  type="text"
                  value={message}
                  onChange={(event) =>
                    setMessage(event.target.value)
                  }
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      handleSend();
                    }
                  }}
                  placeholder="Ask about a vehicle..."
                  className="
                    min-w-0
                    flex-1

                    bg-transparent

                    font-[var(--font-body)]

                    text-[12px]

                    text-white

                    outline-none

                    placeholder:text-[#c9d2dc]/30
                  "
                />

                {/* SEND */}
                <motion.button
                  type="button"
                  aria-label="Send message"
                  disabled={!message.trim()}
                  onClick={handleSend}
                  whileHover={
                    message.trim()
                      ? {
                          scale: 1.05,
                        }
                      : undefined
                  }
                  whileTap={
                    message.trim()
                      ? {
                          scale: 0.94,
                        }
                      : undefined
                  }
                  className="
                    ml-2

                    flex
                    h-[35px]
                    w-[35px]
                    shrink-0
                    items-center
                    justify-center

                    rounded-full

                    bg-[#158ff3]

                    text-white

                    shadow-[0_6px_16px_rgba(21,143,243,0.18)]

                    transition-colors
                    duration-300

                    hover:bg-[#2a9fff]

                    disabled:cursor-default
                    disabled:opacity-25
                  "
                >
                  <ArrowUp
                    size={15}
                    strokeWidth={1.7}
                  />
                </motion.button>
              </div>

              {/* =================================================
                  FOOTER
              ================================================== */}
              <div
                className="
                  mt-4

                  flex
                  items-center
                  justify-between

                  border-t
                  border-[#c9d2dc]/[0.08]

                  pt-3.5
                "
              >
                <div
                  className="
                    flex
                    items-center
                    gap-2
                  "
                >
                  <span className="relative flex h-[7px] w-[7px]">
                    <motion.span
                      animate={{
                        scale: [1, 1.8, 1],
                        opacity: [0.6, 0, 0.6],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                      className="
                        absolute
                        h-full
                        w-full

                        rounded-full

                        bg-[#56d98b]
                      "
                    />

                    <span
                      className="
                        relative

                        h-[7px]
                        w-[7px]

                        rounded-full

                        bg-[#56d98b]
                      "
                    />
                  </span>

                  <span
                    className="
                      font-[var(--font-body)]

                      text-[9px]
                      font-medium

                      text-[#c9d2dc]/40
                    "
                  >
                    Assistant online
                  </span>
                </div>

                <span
                  className="
                    font-[var(--font-body)]

                    text-[9px]

                    text-[#c9d2dc]/22
                  "
                >
                  YM Motors
                </span>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* =====================================================
          CLOSED ASSISTANT BUTTON
      ====================================================== */}
      <AnimatePresence>
        {visible && !open && (
          <motion.button
            type="button"
            aria-label="Open AI Assistant"
            onClick={() => setOpen(true)}
            initial={{
              opacity: 0,
              y: 28,
              scale: 0.94,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 18,
              scale: 0.96,
            }}
            whileHover={{
              y: -3,
            }}
            whileTap={{
              scale: 0.98,
            }}
            transition={{
              duration: 0.42,
              ease: EASE,
            }}
            className="
              group

              fixed
              bottom-4
              right-4
              z-[100]

              flex
              min-h-[58px]
              items-center
              gap-3

              rounded-full

              border
              border-[#c9d2dc]/[0.14]

              bg-[rgba(11,14,19,0.95)]

              pl-2
              pr-4

              shadow-[0_14px_38px_rgba(0,0,0,0.34)]

              backdrop-blur-[16px]

              transition-all
              duration-300

              hover:border-[#c9d2dc]/[0.24]
              hover:bg-[rgba(15,19,24,0.98)]

              sm:bottom-6
              sm:right-6

              lg:bottom-8
              lg:right-8
            "
          >
            {/* MESSAGE ICON */}
            <span
              className="
                relative

                flex
                h-[42px]
                w-[42px]
                shrink-0
                items-center
                justify-center

                rounded-full

                bg-[#158ff3]

                text-white

                shadow-[0_5px_17px_rgba(21,143,243,0.22)]
              "
            >
              <MessageCircle
                size={18}
                strokeWidth={1.55}
              />

              {/* GREEN ONLINE */}
              <span
                className="
                  absolute
                  bottom-0
                  right-0

                  flex
                  h-[11px]
                  w-[11px]
                  items-center
                  justify-center
                "
              >
                <motion.span
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [0.7, 0, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="
                    absolute

                    h-[8px]
                    w-[8px]

                    rounded-full

                    bg-[#56d98b]
                  "
                />

                <span
                  className="
                    relative

                    h-[8px]
                    w-[8px]

                    rounded-full

                    border-2
                    border-[#0b0e13]

                    bg-[#56d98b]
                  "
                />
              </span>
            </span>

            {/* TEXT */}
            <div className="text-left">
              <p
                className="
                  font-[var(--font-body)]

                  text-[12px]
                  font-semibold
                  leading-none

                  text-white/92
                "
              >
                AI Assistant
              </p>

              <div
                className="
                  mt-[6px]

                  flex
                  items-center
                  gap-1.5
                "
              >
                <span className="relative flex h-[6px] w-[6px]">
                  <motion.span
                    animate={{
                      scale: [1, 1.8, 1],
                      opacity: [0.65, 0, 0.65],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="
                      absolute

                      h-full
                      w-full

                      rounded-full

                      bg-[#56d98b]
                    "
                  />

                  <span
                    className="
                      relative

                      h-[6px]
                      w-[6px]

                      rounded-full

                      bg-[#56d98b]
                    "
                  />
                </span>

                <span
                  className="
                    font-[var(--font-body)]

                    text-[10px]
                    font-semibold
                    leading-none

                    text-[#a9e7c0]
                  "
                >
                  Online
                </span>
              </div>
            </div>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}