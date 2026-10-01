"use client";

import Image from "next/image";
import { Search, LockKeyhole } from "lucide-react";

const CourseHero = () => {
  return (
    <main className="min-h-screen bg-[#063CE6] font-[Poppins] text-white">
      {/* ================= NAVBAR ================= */}
     

      {/* ================= HERO ================= */}
      <section
        id="home"
        className="relative min-h-[720px] overflow-hidden "
      >
        {/* Grid */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.15]">
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

        {/* ================= LEFT LIME LINES ================= */}
        <div className="absolute left-[-20px] top-[100px] z-10">
          <svg
            width="105"
            height="135"
            viewBox="0 0 105 135"
            fill="none"
          >
            <path
              d="M-10 8C18 16 45 20 62 12"
              stroke="#D9FF00"
              strokeWidth="23"
              strokeLinecap="round"
            />

            <path
              d="M-13 45C18 54 43 57 63 48"
              stroke="#D9FF00"
              strokeWidth="23"
              strokeLinecap="round"
            />

            <path
              d="M-15 82C15 91 39 95 58 86"
              stroke="#D9FF00"
              strokeWidth="23"
              strokeLinecap="round"
            />

            <path
              d="M-17 117C10 125 29 128 46 122"
              stroke="#D9FF00"
              strokeWidth="20"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* ================= TOP LEFT WHITE SQUIGGLE ================= */}
        <div className="absolute left-[8%] top-[175px] z-10">
          <svg
            width="75"
            height="90"
            viewBox="0 0 75 90"
            fill="none"
          >
            <path
              d="M17 8C40 2 58 7 51 18C46 27 21 22 14 32C7 42 37 46 53 38C67 31 69 45 54 52C40 58 18 53 19 65C20 77 45 76 57 69"
              stroke="white"
              strokeWidth="10"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* ================= RIGHT LIME SHAPE ================= */}
        <div className="absolute right-[-25px] top-[80px] z-10">
          <svg
            width="125"
            height="150"
            viewBox="0 0 125 150"
            fill="none"
          >
            <path
              d="M84 4C112 11 132 36 121 59C111 80 91 95 75 113C59 131 32 126 24 105C17 87 30 72 47 61C63 51 77 37 67 24C59 12 70 1 84 4Z"
              fill="#D9FF00"
            />
          </svg>
        </div>

        {/* ================= MAIN CONTENT ================= */}
        <div className="relative z-20 mx-auto flex max-w-[950px] flex-col items-center px-5 pt-12 text-center">

          {/* Heading Border */}
          <div className="px-5 py-2 sm:px-8 md:px-12">
            <h1 className="text-[30px] font-semibold leading-[1.12] tracking-[-0.7px] sm:text-[38px] md:text-[48px]">
              Get Access to Hundreds
              <br />
              Courses Available
            </h1>
          </div>

          {/* Description */}
          <p className="mt-5 max-w-[600px] text-[9px] font-normal leading-[1.6] text-white/90 sm:text-[10px]">
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </p>

          {/* Search */}
          <div className="mt-7 flex w-full max-w-[560px] items-center justify-center gap-2">
            <div className="flex h-[38px] w-full max-w-[390px] items-center rounded-full bg-white px-4 shadow-lg">
              <Search
                size={13}
                className="mr-2 shrink-0 text-gray-500"
              />

              <input
                type="text"
                placeholder="Course, topic, creator"
                className="w-full bg-transparent text-[10px] text-gray-700 outline-none placeholder:text-gray-400"
              />
            </div>

            <button className="h-[38px] rounded-full bg-[#D9FF00] px-5 text-[10px] font-medium text-gray-900 transition hover:scale-105">
              Search
            </button>
          </div>
        </div>

        {/* ================= GREEN CIRCLE ================= */}
        <div className="absolute bottom-[-245px] left-1/2 z-10 h-[500px] w-[850px] -translate-x-1/2 rounded-[50%] bg-[#CFFF00] sm:h-[570px] sm:w-[950px]" />

        {/* ================= WHITE LEFT O ================= */}
        <div className="absolute bottom-[55px] left-[5%] z-20">
          <svg
            width="125"
            height="125"
            viewBox="0 0 125 125"
            fill="none"
          >
            <ellipse
              cx="62"
              cy="62"
              rx="43"
              ry="30"
              transform="rotate(-35 62 62)"
              stroke="white"
              strokeWidth="22"
            />
          </svg>
        </div>

        {/* ================= RIGHT WHITE TRIANGLE ================= */}
        <div className="absolute bottom-[175px] right-[10%] z-20">
          <svg
            width="75"
            height="75"
            viewBox="0 0 75 75"
            fill="none"
          >
            <path
              d="M48 2L72 61L8 49L48 2Z"
              fill="white"
            />
          </svg>
        </div>

        {/* ================= RIGHT WHITE SQUIGGLE ================= */}
        <div className="absolute bottom-[40px] right-[5%] z-20">
          <svg
            width="90"
            height="125"
            viewBox="0 0 90 125"
            fill="none"
          >
            <path
              d="M20 9C48 1 69 7 61 20C55 31 25 25 17 38C8 51 43 55 63 45C80 37 82 54 64 62C47 70 19 64 21 80C23 95 52 94 69 85"
              stroke="white"
              strokeWidth="12"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* ================= PERSON ================= */}
      {[1, 2, 3, 4, 5, 6].map((item) => (
  <img
    key={item}
    src={`https://i.pravatar.cc/40?img=${item}`}
    alt="Student"
    className="h-6 w-6 rounded-full border-2 border-white object-cover"
  />
))}

        {/* ================= UI CARD - COURSE ================= */}
        <div className="absolute bottom-[145px] left-[22%] z-40 hidden w-[160px] rounded-lg bg-white p-3 text-left shadow-xl sm:block">
          <p className="text-[8px] font-semibold text-gray-800">
            UI/UX Design
          </p>

          <p className="mt-1 text-[6px] text-gray-400">
            200+ Courses Available
          </p>

          <div className="mt-2 h-[3px] w-full rounded-full bg-gray-100">
            <div className="h-full w-[72%] rounded-full bg-[#D9FF00]" />
          </div>
        </div>

        {/* ================= LEARNING PROGRESS ================= */}
        <div className="absolute bottom-[125px] right-[25%] z-40 hidden w-[155px] rounded-lg bg-white p-3 text-left shadow-xl sm:block">
          <p className="text-[7px] text-gray-500">
            Learning Progress
          </p>

          <p className="mt-1 text-[22px] font-semibold leading-none text-gray-800">
            55%
          </p>

          <div className="mt-2 h-[4px] w-full rounded-full bg-gray-100">
            <div className="h-full w-[55%] rounded-full bg-[#D9FF00]" />
          </div>
        </div>

        {/* ================= HAPPY STUDENTS ================= */}
        <div className="absolute bottom-[55px] left-[22%] z-40 hidden w-[180px] rounded-lg bg-white p-3 text-left shadow-xl sm:block">
          <p className="text-[7px] text-gray-500">
            Happy Students
          </p>

          <div className="mt-2 flex items-center">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <Image
                  key={item}
                  src={`https://i.pravatar.cc/40?img=${item}`}
                  alt="Student"
                  width={25}
                  height={25}
                  className="h-6 w-6 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>

            <span className="ml-2 flex h-6 min-w-6 items-center justify-center rounded-full bg-[#D9FF00] px-1 text-[7px] font-semibold text-gray-900">
              +2K
            </span>
          </div>
        </div>

        {/* Bottom Pink Border */}
        <div className="absolute bottom-0 left-0 z-50 h-[4px] w-full" />
      </section>
    </main>
  );
};

export default CourseHero;