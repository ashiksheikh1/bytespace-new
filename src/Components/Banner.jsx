"use client";

import React from "react";
import Image from "next/image";
import { Input, Avatar, AvatarGroup } from "@heroui/react";
import { Person } from "@gravity-ui/icons";
import banner  from "../image/image.png";

const Banner = () => {
  const assignees = [
    {
      id: 1,
      image:
        "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/blue.jpg",
      name: "John Doe",
    },
    {
      id: 2,
      image:
        "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/green.jpg",
      name: "Kate Wilson",
    },
    {
      id: 3,
      image:
        "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/purple.jpg",
      name: "Emily Chen",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#003BE2] px-4 py-16 md:py-20">
      {/* Background decoration */}
      
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#D4FB20]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Main Content */}
        <div className="text-center">

          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#D4FB20]">
            Learn • Grow • Succeed
          </p>

          <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl lg:text-7xl">
            Get Access to Hundreds
            <br />
            Courses Available
          </h1>

          <p className="mx-auto max-w-2xl py-7 text-base leading-7 text-[#E5E6E8] md:text-lg">
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </p>

          {/* Search */}
          <div className="mx-auto flex max-w-xl flex-col items-center gap-3 sm:flex-row">

            <Input
              aria-label="Course Search"
              className="w-full"
              placeholder="Course, topic, creator"
            />

            <button
              className="
                w-full rounded-2xl
                bg-[#D4FB20]
                px-6 py-3
                text-base font-semibold
                text-[#242528]
                transition
                duration-300
                hover:scale-105
                hover:bg-[#c4eb16]
                sm:w-auto
              "
            >
              Search
            </button>

          </div>
        </div>


        {/* ================= IMAGE ================= */}
        <div className="relative mx-auto mt-8 flex justify-center md:mt-4">

          {/* Image glow */}
          <div className="z-10 absolute bottom-5 h-40 w-72 rounded-full bg-[#D4FB20]/20 blur-3xl md:w-[450px]" />

          <Image src={banner}
            alt="Student learning with laptop"
            width={700}
            height={500} />

        </div>
<Image src={banner} alt="image" width={200} height={200}   />

        {/* ================= STATISTICS ================= */}
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">

          {/* Courses */}
          <div className="rounded-3xl bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-1">

            <p className="text-lg font-semibold text-[#242528]">
              UI/UX Design
            </p>

            <p className="mt-2 text-sm text-[#82868E]">
              200 Courses · 1000+ Students
            </p>

          </div>


          {/* Progress */}
          <div className="rounded-3xl bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-1">

            <p className="text-sm font-medium text-[#82868E]">
              Learning Progress
            </p>

            <div className="mt-2 flex items-end justify-between">

              <h2 className="text-5xl font-semibold text-[#242528]">
                55%
              </h2>

              <span className="rounded-full bg-[#D4FB20] px-3 py-1 text-xs font-semibold text-[#242528]">
                In Progress
              </span>

            </div>

            <div className="mt-5 h-2 overflow-hidden rounded-full bg-[#E5E6E8]">

              <div
                className="h-full rounded-full bg-[#003BE2]"
                style={{ width: "55%" }}
              />

            </div>

          </div>


          {/* Students */}
          <div className="rounded-3xl bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-1">

            <p className="text-sm font-medium text-[#82868E]">
              Happy Students
            </p>

            <div className="mt-1 flex items-center gap-2">

              <h2 className="text-3xl font-semibold text-[#242528]">
                4.5
              </h2>

              <span className="text-sm text-[#82868E]">
                (240 Reviews)
              </span>

            </div>


            {/* Avatars */}
            <div className="mt-5 inline-flex items-center gap-2.5 rounded-full border border-gray-200 bg-white py-1 pl-1 pr-3 shadow-sm">

              <AvatarGroup
                aria-label="Students"
                className="[--avatar-group-overlap:0.7rem] [--avatar-group-seam:2px]"
                overlap="clip"
                role="group"
                size="sm"
              >

                {assignees.map((user) => (
                  <Avatar key={user.id}>

                    <Avatar.Image
                      alt={user.name}
                      src={user.image}
                    />

                    <Avatar.Fallback>
                      {user.name
                        .split(" ")
                        .map((part) => part[0])
                        .join("")}
                    </Avatar.Fallback>

                  </Avatar>
                ))}

                <Avatar>
                  <Avatar.Fallback>
                    <Person className="size-4 shrink-0" />
                  </Avatar.Fallback>
                </Avatar>

                <AvatarGroup.Count>
                  +3
                </AvatarGroup.Count>

              </AvatarGroup>

              <span className="text-sm font-medium text-[#242528]">
                Happy Students
              </span>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Banner;