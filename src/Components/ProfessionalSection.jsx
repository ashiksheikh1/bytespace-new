import Image from "next/image";
import {
  CheckCircle2,
  ArrowUpRight,
  Users,
  BookOpen,
  FileText,
} from "lucide-react";

const ProfessionalSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#f8f9ff] px-6 py-20 md:px-10 lg:px-16">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-lime-200/70 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-blue-200/60 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-20 h-64 w-64 rounded-full bg-lime-200/50 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">

        {/* ================= FIRST ROW ================= */}
        <div className="grid items-center gap-10 lg:grid-cols-2">

          {/* Left Content */}
          <div className="max-w-lg">
            <p className="mb-3 text-sm font-semibold text-blue-600">
              Build Your Future
            </p>

            <h2 className="text-3xl font-bold leading-tight text-[#111827] md:text-4xl">
              Your Path to Professional
              <br />
              Growth Starts Here!
            </h2>

            <p className="mt-5 max-w-md text-sm leading-6 text-gray-500">
              Explore our curated collection of courses tailored to
              enhance your capabilities and advance your career journey.
              Whether you are looking to sharpen specific skills, gain
              industry expertise, or embark on a new career path, our
              platform is here to support your needs.
            </p>

            {/* Stats */}
            <div className="mt-7 flex gap-8">
              <div>
                <h3 className="text-lg font-bold text-blue-600">
                  12K
                </h3>
                <p className="text-[10px] text-gray-500">
                  Students
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-blue-600">
                  70+
                </h3>
                <p className="text-[10px] text-gray-500">
                  Courses
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-blue-600">
                  16
                </h3>
                <p className="text-[10px] text-gray-500">
                  Categories
                </p>
              </div>
            </div>
          </div>

          {/* Right Image Area */}
          <div className="relative flex min-h-[390px] items-center justify-center">

            {/* Main Woman */}
            <div className="relative z-10 mt-10">
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=700&q=85"
                alt="Professional woman"
                className="h-[330px] w-[270px] rounded-[40%] object-cover object-top"
              />
            </div>

            {/* Course Card */}
            <div className="absolute left-0 top-5 z-20 w-[185px] overflow-hidden rounded-xl bg-white shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=500&q=80"
                alt="Course"
                className="h-[100px] w-full object-cover"
              />

              <div className="p-2">
                <p className="text-[9px] font-semibold text-gray-900">
                  Learn Figma from Basic
                </p>

                <div className="mt-1 flex items-center justify-between">
                  <span className="text-[8px] text-gray-400">
                    17 Lessons
                  </span>

                  <span className="text-[8px] text-yellow-500">
                    ★ 4.5
                  </span>
                </div>

                <div className="mt-2 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-blue-600">
                    $25
                  </span>

                  <span className="text-[8px] text-gray-400">
                    Lifetime
                  </span>
                </div>
              </div>
            </div>

            {/* Green Squiggle */}
            <div className="absolute right-3 top-14 z-30 rotate-[8deg]">
              <svg
                width="45"
                height="100"
                viewBox="0 0 45 100"
                fill="none"
              >
                <path
                  d="M10 5C40 0 40 20 10 25C-5 28 5 42 30 42C50 42 40 58 15 60C0 61 5 78 32 75C48 73 45 95 20 97"
                  stroke="#B9F000"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Percentage Card */}
            <div className="absolute bottom-16 right-0 z-30 rounded-xl bg-white px-4 py-3 shadow-lg">
              <p className="text-[8px] text-gray-500">
                Learning Progress
              </p>

              <p className="text-xl font-bold text-gray-900">
                55%
              </p>
            </div>
          </div>
        </div>


        {/* ================= SECOND ROW ================= */}
        <div className="mt-20 grid items-center gap-12 lg:grid-cols-2">

          {/* Left Image Area */}
          <div className="relative flex min-h-[390px] items-center justify-center">

            {/* Main Woman */}
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=700&q=85"
                alt="Professional woman working"
                className="h-[340px] w-[280px] rounded-[45%] object-cover object-top"
              />
            </div>

            {/* Blue Price Card */}
            <div className="absolute left-0 top-12 z-20 w-[115px] rounded-xl bg-blue-600 p-3 text-white shadow-xl">
              <p className="text-[7px] opacity-80">
                Best Course
              </p>

              <p className="mt-1 text-xs font-bold">
                $120.29
              </p>

              <div className="mt-2 flex items-center gap-1">
                <span className="rounded-full bg-lime-300 px-2 py-1 text-[7px] font-bold text-blue-900">
                  50% OFF
                </span>
              </div>
            </div>

            {/* Second Blue Card */}
            <div className="absolute left-0 top-32 z-20 w-[115px] rounded-xl bg-blue-600 p-3 text-white shadow-xl">
              <p className="text-[7px] opacity-80">
                New Course
              </p>

              <p className="mt-1 text-xs font-bold">
                $120.38
              </p>

              <div className="mt-2">
                <span className="rounded-full bg-lime-300 px-2 py-1 text-[7px] font-bold text-blue-900">
                  60% OFF
                </span>
              </div>
            </div>

            {/* Green Squiggle */}
            <div className="absolute right-8 top-12 z-30 rotate-[5deg]">
              <svg
                width="48"
                height="105"
                viewBox="0 0 48 105"
                fill="none"
              >
                <path
                  d="M12 5C42 0 42 20 12 25C-2 28 7 43 32 42C52 42 42 59 16 61C0 62 7 80 34 77C50 75 47 98 21 100"
                  stroke="#B9F000"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Happy Students */}
            <div className="absolute bottom-12 right-0 z-30 rounded-xl bg-white px-3 py-2 shadow-xl">
              <p className="text-[7px] text-gray-500">
                Happy Students
              </p>

              <div className="mt-1 flex items-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((item) => (
                    <img
                      key={item}
                      src={`https://i.pravatar.cc/40?img=${item}`}
                      alt="Student"
                      className="h-5 w-5 rounded-full border-2 border-white"
                    />
                  ))}
                </div>

                <span className="ml-2 text-[8px] font-bold text-gray-700">
                  5K+
                </span>
              </div>
            </div>
          </div>


          {/* Right Content */}
          <div className="max-w-lg">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
              <BookOpen size={21} />
            </div>

            <h2 className="text-3xl font-bold leading-tight text-[#111827] md:text-4xl">
              Create & Manage
              <br />
              Courses Easily.
            </h2>

            <p className="mt-5 max-w-md text-sm leading-6 text-gray-500">
              ByteSpace supports individuals and organizations
              in the creation, publication, and management of
              high-quality educational courses.
            </p>

            {/* Features */}
            <div className="mt-6 space-y-3">

              <div className="flex items-center gap-3">
                <CheckCircle2
                  size={15}
                  className="shrink-0 text-blue-600"
                  fill="currentColor"
                  strokeWidth={2}
                />

                <span className="text-sm text-gray-600">
                  Easy Course Creation
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2
                  size={15}
                  className="shrink-0 text-blue-600"
                  fill="currentColor"
                  strokeWidth={2}
                />

                <span className="text-sm text-gray-600">
                  Manage Your Passion
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2
                  size={15}
                  className="shrink-0 text-blue-600"
                  fill="currentColor"
                  strokeWidth={2}
                />

                <span className="text-sm text-gray-600">
                  Flexibility and Autonomy
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2
                  size={15}
                  className="shrink-0 text-blue-600"
                  fill="currentColor"
                  strokeWidth={2}
                />

                <span className="text-sm text-gray-600">
                  Build a Community
                </span>
              </div>

            </div>

            {/* Button */}
            <button className="mt-7 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
              Explore Courses
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProfessionalSection;