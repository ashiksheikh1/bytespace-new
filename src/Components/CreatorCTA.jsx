"use client";

import { motion } from "framer-motion";

const CreatorCTA = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#073BE5] px-6 py-20 font-[Poppins] ">
      
      {/* ================= GRID BACKGROUND ================= */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.16]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #ffffff 1px, transparent 1px),
              linear-gradient(to bottom, #ffffff 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* ================= TOP LEFT LIME SHAPE ================= */}
      <motion.div
        animate={{
          rotate: [0, 3, 0],
          x: [0, 4, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-7 -top-5 z-10"
      >
        <svg
          width="110"
          height="115"
          viewBox="0 0 110 115"
          fill="none"
        >
          <path
            d="M-15 5C15 15 38 18 65 12"
            stroke="#D6FF00"
            strokeWidth="22"
            strokeLinecap="round"
          />

          <path
            d="M-18 38C15 48 38 50 65 43"
            stroke="#D6FF00"
            strokeWidth="22"
            strokeLinecap="round"
          />

          <path
            d="M-18 72C12 82 35 84 58 78"
            stroke="#D6FF00"
            strokeWidth="22"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

      {/* ================= TOP WHITE SQUIGGLE ================= */}
      <motion.div
        animate={{
          y: [0, -5, 0],
          rotate: [0, 2, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[16%] top-3 z-20"
      >
        <svg
          width="75"
          height="80"
          viewBox="0 0 75 80"
          fill="none"
        >
          <path
            d="M15 8C35 2 55 4 48 15C43 23 22 19 15 28C8 37 34 40 50 34C65 28 67 42 51 47C38 51 17 50 18 60C20 70 42 70 55 64"
            stroke="white"
            strokeWidth="10"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

      {/* ================= TOP RIGHT YELLOW TRIANGLE ================= */}
      <motion.div
        animate={{
          rotate: [0, 5, 0],
          y: [0, -5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[13%] top-3 z-10"
      >
        <svg
          width="72"
          height="80"
          viewBox="0 0 72 80"
          fill="none"
        >
          <path
            d="M42 2L70 68L2 50L42 2Z"
            fill="#E9FF00"
          />
        </svg>
      </motion.div>

      {/* ================= TOP RIGHT WHITE SHAPE ================= */}
      <div className="absolute -right-6 top-8 z-10">
        <svg
          width="105"
          height="125"
          viewBox="0 0 105 125"
          fill="none"
        >
          <path
            d="M82 0C107 16 111 41 94 60C78 78 67 91 48 105C32 117 13 114 5 97C-2 81 10 66 29 55C48 44 60 33 58 19C55 6 69 -8 82 0Z"
            fill="#F8F8F8"
          />
        </svg>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="relative z-30 mx-auto flex max-w-[760px] flex-col items-center text-center">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[650px] text-[28px] font-semibold leading-[1.15] tracking-[-0.6px] text-white sm:text-[34px] md:text-[40px]"
        >
          Unlock Your Potential as a
          <br />
          Creator with ByteSpace
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 max-w-[690px] text-[9px] font-normal leading-[1.55] text-white/90 sm:text-[10px] md:text-[11px]"
        >
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your first
          course on the ByteSpace Course Library.
        </motion.p>

        {/* Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 8px 25px rgba(210,255,0,0.3)",
          }}
          whileTap={{ scale: 0.97 }}
          className="mt-7 rounded-full bg-[#D9FF00] px-7 py-2 text-[10px] font-medium text-[#111827] shadow-sm transition"
        >
          Join as Creator
        </motion.button>
      </div>

      {/* ================= BOTTOM LEFT WHITE SHAPE ================= */}
      <div className="absolute -bottom-10 -left-7 z-10">
        <svg
          width="95"
          height="105"
          viewBox="0 0 95 105"
          fill="none"
        >
          <path
            d="M15 0C27 15 37 30 52 44C68 59 88 72 83 90C79 103 62 108 47 98C31 88 17 69 7 53C-4 36 -8 12 15 0Z"
            fill="#F7F7F7"
          />
        </svg>
      </div>

      {/* ================= BOTTOM LEFT LIME CIRCLE ================= */}
      <motion.div
        animate={{
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-20 left-[3%] z-10"
      >
        <svg
          width="180"
          height="160"
          viewBox="0 0 180 160"
          fill="none"
        >
          <path
            d="M38 122C-1 96 0 42 36 19C70 -3 126 9 143 46C161 86 137 132 96 143C75 149 53 142 38 122Z"
            stroke="#D8FF00"
            strokeWidth="28"
          />
        </svg>
      </motion.div>

      {/* ================= BOTTOM RIGHT LIME SQUIGGLE ================= */}
      <motion.div
        animate={{
          y: [0, -5, 0],
          rotate: [0, 3, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-5 right-[5%] z-10"
      >
        <svg
          width="125"
          height="115"
          viewBox="0 0 125 115"
          fill="none"
        >
          <path
            d="M98 5C117 1 126 12 114 24C104 34 73 31 67 42C61 52 92 54 108 47C124 40 132 53 119 64C108 73 79 68 75 79C71 91 101 88 113 84"
            stroke="#D8FF00"
            strokeWidth="18"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 h-[4px] w-full bg-[#D8FF00]" />
    </section>
  );
};

export default CreatorCTA;