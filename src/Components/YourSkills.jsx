import React from "react";

const YourSkills = () => {
  const categories = [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing",
    "Digital Illustration",
    "Film & Video",
    "Crafts",
    "Freelance & Entrepreneurship",
    "Graphic Design",
    "Photography",
  ];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl text-center py-10 sm:py-14 lg:py-16">

        {/* Heading */}
        <h2
          className="
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            xl:text-7xl
            font-semibold
            leading-tight
            text-[#040819]
          "
        >
          Discover Your Passion,
          <br className="hidden sm:block" />
          Build Your Skills
        </h2>

        {/* Description */}
        <p
          className="
            mx-auto
            mt-5
            max-w-3xl
            text-sm
            sm:text-base
            leading-6
            text-[#82868E]
          "
        >
          At Bytespace Courses, we bring you closer to life-changing
          knowledge. Explore a variety of courses across different fields,
          from technology to the arts, and make a difference in your career
          and life.
        </p>

        {/* Categories */}
        <div
          className="
            mt-8
            flex
            flex-wrap
            justify-center
            gap-3
            sm:gap-4
          "
        >
          {categories.map((category) => (
            <button
              key={category}
              className="
                rounded-2xl
                bg-[#F5F5F6]
                px-4
                py-2
                text-sm
                sm:text-base
                font-medium
                text-[#4B4C53]
                transition-colors
                duration-500
                hover:bg-[#D4FB20]
              "
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YourSkills;