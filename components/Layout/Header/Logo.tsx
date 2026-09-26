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
        src="/images/Logo-YM-Motors.png"
        alt="Logo"
        width={260}
        height={104}
        priority
        className="h-[56px] w-auto sm:h-[68px] lg:h-[84px]"
      />
    </motion.div>
  );
}