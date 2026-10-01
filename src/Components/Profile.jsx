"use client";

import Image from "next/image";

const Profile = () => {
  return (
    <section className="relative min-h-[430px] w-full overflow-hidden bg-[#063CE6] font-[Poppins] text-white">
      
      {/* ================= GRID BACKGROUND ================= */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.15]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #ffffff 1px, transparent 1px),
              linear-gradient(to bottom, #ffffff 1px, transparent 1px)
            `,
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 mx-auto max-w-[1440px] px-7 py-10 sm:px-10 md:px-14 lg:px-[60px]">

        {/* ================= PROFILE ================= */}
        <div className="flex items-center gap-4">

          {/* Profile Image */}
          <div className="h-[72px] w-[72px] shrink-0 overflow-hidden rounded-[8px] bg-white">
            <Image
              src="https://img.magnific.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
              alt="PurePearl Studio"
              width={72}
              height={72}
              priority
              className="h-full w-full object-cover"
            />
          </div>

          {/* Name */}
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-[36px] font-semibold leading-none text-[#FFFFFF]">
                PurePearl Studio
              </h1>

              {/* Creator Badge */}
              <span className="rounded-full bg-[#D9FF00] px-3 py-[4px] text-[16px] font-medium leading-none text-[#242528]">
                Creator
              </span>
            </div>

            <p className="mt-2 text-[18px] font-normal text-[#F5F5F6]">
              Passionate UI/UX, Web designer
            </p>
          </div>
        </div>

        {/* ================= DESCRIPTION ================= */}
        <div className="mt-7 max-w-[1180px]">
          <p className="ext-[18px] font-normal leading-[1.65] text-[#F5F5F6]">
            Welcome to the creative world of Creator&apos;s Name! Here,
            you&apos;ll discover the passion, expertise, and inspiration that
            drive my creative journey. Let&apos;s explore and learn together!
          </p>

          <p className="mt-1 text-[18px] font-normal leading-[1.65] text-[#F5F5F6]">
            We&apos;re into any creative projects, showcasing a glimpse of my
            artistic endeavors. From digital designs to multimedia projects,
            each piece tells a unique story.
          </p>

          <p className="mt-1 text-[18px] font-normal leading-[1.65] text-[#F5F5F6]">
            Explore the world of creativity with me.
          </p>
        </div>

        {/* ================= BOTTOM ROW ================= */}
        <div className="mt-7 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

          {/* Stats */}
          <div className="flex items-center gap-3">

            {/* Products */}
            <div className="flex h-[28px] items-center rounded-full bg-white px-3 text-[18px] font-medium text-[#242528] shadow-sm">
              <span className="text-[#003BE2]">3</span>
              <span className="ml-1">Products</span>
            </div>

            {/* Followers */}
            <div className="flex items-center rounded-full bg-white px-3 text-[18px] font-medium text-[#242528] shadow-sm">
              <span className="text-[#003BE2]">12</span>
              <span className="ml-1">Followers</span>
            </div>
          </div>

          {/* Follow Button */}
          <button className="flex h-[30px] items-center justify-center rounded-full bg-[#D9FF00] px-5 text-[8px] font-medium text-gray-900 transition duration-200 hover:scale-105">
            Follow
          </button>
        </div>
      </div>

      {/* ================= BOTTOM BORDER ================= */}
      <div className="absolute bottom-0 left-0 h-[3px] w-full bg-[#D9FF00]" />
    </section>
  );
};

export default Profile;