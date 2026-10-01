"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const SignupPage = () => {
  return (
    <main className="min-h-screen bg-[#0639df] overflow-hidden">
      <div className="mx-auto grid min-h-screen max-w-[1200px] grid-cols-1 lg:grid-cols-2">

        {/* ================= LEFT SIDE ================= */}
        <motion.section
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="hidden lg:flex items-center justify-center"
        >
          <img
            src="/login-left-panel.png"
            alt="ByteSpace signup illustration"
            className="h-full w-full object-cover object-left"
          />
        </motion.section>


        {/* ================= RIGHT SIDE ================= */}
        <section className="flex min-h-screen items-center justify-center px-5 py-10">

          <motion.div
            initial={{ opacity: 0, y: 35, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            className="w-full max-w-[390px] rounded-xl bg-white px-8 py-7 shadow-2xl"
          >

            {/* Heading */}
            <div className="mb-7">
              <p className="mb-1 text-[10px] font-medium text-[#2364e8]">
                Create an Account
              </p>

              <h1 className="text-[27px] font-bold leading-tight text-[#202124]">
                Welcome to
                <br />
                ByteSpace
              </h1>
            </div>


            {/* Form */}
            <form className="space-y-4">

              {/* Name */}
              <div>
                <label className="mb-1 block text-[9px] font-medium text-gray-600">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Jamie Davis"
                  className="h-9 w-full rounded-full border border-gray-200 px-4 text-[10px] outline-none transition focus:border-[#2364e8]"
                />
              </div>


              {/* Email */}
              <div>
                <label className="mb-1 block text-[9px] font-medium text-gray-600">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="designer@example.com"
                  className="h-9 w-full rounded-full border border-gray-200 px-4 text-[10px] outline-none transition focus:border-[#2364e8]"
                />
              </div>


              {/* Password */}
              <div>
                <label className="mb-1 block text-[9px] font-medium text-gray-600">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="••••••••"
                  className="h-9 w-full rounded-full border border-gray-200 px-4 text-[10px] outline-none transition focus:border-[#2364e8]"
                />
              </div>


              {/* Continue */}
              <div className="flex justify-end pt-1">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="rounded-full bg-[#b7f500] px-5 py-2 text-[9px] font-semibold text-black shadow-sm"
                >
                  Continue
                </motion.button>
              </div>

            </form>


            {/* Login */}
            <p className="mt-10 text-center text-[9px] text-gray-500">
              Already have an account?{" "}
              <Link
                href="/signin"
                className="font-medium text-[#2364e8] hover:underline"
              >
                Login
              </Link>
            </p>

          </motion.div>

        </section>

      </div>
    </main>
  );
};

export default SignupPage;