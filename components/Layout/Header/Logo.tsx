"use client";

import { motion } from "framer-motion";

export default function Logo() {
  return (
    <motion.div
      whileHover={{ x: 2 }}
      transition={{
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        cursor-pointer

        font-heading

        text-[20px]
        font-semibold

        uppercase
        tracking-[0.12em]

        text-white

        sm:text-[22px]
        lg:text-[24px]
      "
    >
      Your Logo
    </motion.div>
  );
}