"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function YMLogo() {
  return (
    <motion.div
      whileHover={{ x: 2 }}
      transition={{
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="cursor-pointer"
    >
      <Image
        src="/images/YM-Motors-logo.png"
        alt="Logo"
        width={200}
        height={80}
        priority
        className="h-[42px] w-auto sm:h-[52px] lg:h-[64px]"
      />
    </motion.div>
  );
}