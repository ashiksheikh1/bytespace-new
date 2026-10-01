"use client"

import Link from "next/link";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#063fe3] text-white overflow-hidden">

    


      {/* ================= 404 SECTION ================= */}
      <main
        className="
          relative
          flex
          min-h-[calc(100vh-56px)]
          items-center
          justify-center
          px-5
          text-center
        "
      >

        {/* Grid Background */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-25
          "
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(255,255,255,0.18) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(255,255,255,0.18) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "31px 31px",
          }}
        />

        {/* Content */}
        <div className="relative z-10 -mt-6">

          {/* 404 */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="
              text-[120px]
              font-black
              leading-[0.8]
              tracking-[-0.08em]
              text-[#cfff00]
              drop-shadow-[0_0_20px_rgba(207,255,0,0.15)]
              sm:text-[180px]
              md:text-[250px]
            "
          >
            404
          </motion.h1>


          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.6,
            }}
            className="
              mx-auto
              mt-2
              max-w-2xl
              text-3xl
              font-bold
              leading-[0.95]
              tracking-tight
              sm:text-4xl
              md:text-5xl
            "
          >
            The page you are looking
            <br />
            for doesn't exist
          </motion.h2>


          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.4,
              duration: 0.6,
            }}
            className="
              mx-auto
              mt-5
              max-w-md
              text-[8px]
              leading-relaxed
              text-white/70
              sm:text-[10px]
            "
          >
            The page you're looking for might have been moved,
            <br />
            deleted, or the URL may be incorrect.
          </motion.p>


          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.6,
              duration: 0.5,
            }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6"
          >
            <Link
              href="/"
              className="
                inline-flex
                items-center
                justify-center
                rounded-full
                bg-[#cfff00]
                px-5
                py-2
                text-[8px]
                font-bold
                text-black
                shadow-[0_0_15px_rgba(207,255,0,0.25)]
                transition
                hover:bg-[#dcff45]
              "
            >
              Back to Home
            </Link>
          </motion.div>

        </div>
      </main>
    </div>
  );
};

export default NotFound;