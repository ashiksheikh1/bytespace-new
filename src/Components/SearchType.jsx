"use client";

import { useState } from "react";
import CourseCardAll from "./CourseCardAll";

import { CiFilter } from "react-icons/ci";
import { MdOutlineCategory } from "react-icons/md";
import { GiLevelEndFlag } from "react-icons/gi";
import { LuArrowDownWideNarrow } from "react-icons/lu";

const SearchType = ({ products = [] }) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = () => {
    setLoading(true);

    const searchValue = search.trim().toLowerCase();

    const result = products.filter((item) => {
      const matchesSearch =
        !searchValue ||
        item.title?.toLowerCase().includes(searchValue) ||
        item.description?.toLowerCase().includes(searchValue);

      const matchesCategory =
        !category ||
        item.category?.toLowerCase() === category.toLowerCase();

      return matchesSearch && matchesCategory;
    });

    setFilteredProducts(result);

    setTimeout(() => {
      setLoading(false);
    }, 300);
  };

  const handleFilter = (e) => {
    const value = e.target.value;

    setCategory(value);

    const searchValue = search.trim().toLowerCase();

    const result = products.filter((item) => {
      const matchesSearch =
        !searchValue ||
        item.title?.toLowerCase().includes(searchValue) ||
        item.description?.toLowerCase().includes(searchValue);

      const matchesCategory =
        !value ||
        item.category?.toLowerCase() === value.toLowerCase();

      return matchesSearch && matchesCategory;
    });

    setFilteredProducts(result);
  };

  const handleReset = () => {
    setSearch("");
    setCategory("");
    setFilteredProducts(products);
  };

  return (
    <section className="w-full">

      {/* ================= BANNER ================= */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#063CE6] to-[#315BEF] px-4 py-12 text-center font-[Poppins] sm:px-6 sm:py-16">

        {/* Background Grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-15"
          style={{
            backgroundImage: `
              linear-gradient(to right, #ffffff 1px, transparent 1px),
              linear-gradient(to bottom, #ffffff 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl">

          {/* Heading */}
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              Find Your Next Course
            </h2>

            <p className="mt-3 text-sm text-white/80 sm:text-base">
              Discover courses that help you learn new skills and grow your
              career.
            </p>
          </div>

          {/* Search Area */}
          <div className="mx-auto mt-8 flex w-full max-w-5xl flex-col gap-3 md:flex-row">

            {/* Search Input */}
            <input
              type="text"
              placeholder="Search courses..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
              className="
                min-w-0
                flex-1
                rounded-lg
                border
                border-white/30
                bg-white
                px-4
                py-3
                text-sm
                text-gray-900
                outline-none
                placeholder:text-gray-400
                focus:ring-2
                focus:ring-white
                sm:text-base
              "
            />

            {/* Search Button */}
            <button
              onClick={handleSearch}
              type="button"
              className="
                w-full
                rounded-lg
                bg-white
                px-7
                py-3
                font-semibold
                text-[#063CE6]
                transition
                hover:bg-blue-50
                md:w-auto
              "
            >
              Search
            </button>

            {/* Category */}
            <select
              value={category}
              onChange={handleFilter}
              className="
                w-full
                rounded-lg
                bg-white
                px-5
                py-3
                text-sm
                font-semibold
                text-[#063CE6]
                outline-none
                sm:text-base
                md:w-auto
              "
            >
              <option value="">All Categories</option>
              <option value="Design">Design</option>
              <option value="Marketing">Marketing</option>
              <option value="Web Development">
                Web Development
              </option>
              <option value="Programming">
                Programming
              </option>
            </select>

          </div>

          {/* Reset */}
          {(search || category) && (
            <button
              onClick={handleReset}
              type="button"
              className="
                mt-4
                rounded-lg
                border
                border-white/50
                px-6
                py-2
                text-sm
                font-semibold
                text-white
                transition
                hover:bg-white/10
              "
            >
              Reset
            </button>
          )}

        </div>
      </section>


      {/* ================= RESULT SECTION ================= */}
      <div className="mx-auto my-8 w-full max-w-7xl px-4 sm:my-10 sm:px-6 lg:px-8">

        {/* Filter Header */}
        <div className="flex flex-col gap-4 border-b pb-5 sm:flex-row sm:items-center sm:justify-between">

          {/* Left Filters */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">

            <div className="flex items-center gap-2">
              <CiFilter className="text-xl text-[#242528]" />
              <p className="text-sm font-medium text-[#4B4C53]">
                Filter
              </p>
            </div>

            <div className="flex items-center gap-2">
              <GiLevelEndFlag className="text-xl text-[#242528]" />
              <p className="text-sm font-medium text-[#4B4C53]">
                Level
              </p>
            </div>

            <div className="flex items-center gap-2">
              <MdOutlineCategory className="text-xl text-[#242528]" />
              <p className="text-sm font-medium text-[#4B4C53]">
                Category
              </p>
            </div>

          </div>


          {/* Sort */}
          <div className="flex items-center gap-2">
            <LuArrowDownWideNarrow className="text-xl text-[#242528]" />

            <select
              className="
                cursor-pointer
                border-none
                bg-transparent
                text-sm
                font-medium
                text-[#4B4C53]
                outline-none
              "
            >
              <option value="relevant">Relevant</option>
              <option value="newest">Newest</option>
              <option value="popular">Popular</option>
            </select>
          </div>

        </div>


        {/* ================= CATEGORY BUTTONS ================= */}
        <div className="mt-6 overflow-x-auto pb-2">

          <div className="
            flex
            min-w-max
            items-center
            gap-2
            sm:gap-3
            lg:justify-center
          ">

            {[
              "Featured",
              "Music",
              "Drawing & Painting",
              "Animation",
              "Social Media",
              "UI/UX Design",
              "Creative Marketing",
            ].map((item) => (
              <button
                key={item}
                className="
                  whitespace-nowrap
                  rounded-2xl
                  bg-[#F5F5F6]
                  px-4
                  py-1.5
                  text-sm
                  font-medium
                  text-[#4B4C53]
                  transition-colors
                  duration-500
                  hover:bg-[#D4FB20]
                  sm:text-base
                "
              >
                {item}
              </button>
            ))}

          </div>

        </div>


        {/* ================= COURSE RESULT ================= */}
        <div className="mt-8">

          {loading ? (

            <div className="flex min-h-[250px] items-center justify-center">
              <div className="text-xl font-semibold text-gray-700">
                Loading...
              </div>
            </div>

          ) : filteredProducts.length === 0 ? (

            <div className="rounded-xl bg-white p-8 text-center shadow-sm sm:p-10">

              <h2 className="text-xl font-bold text-gray-800 sm:text-2xl">
                No courses found
              </h2>

              <p className="mt-2 text-sm text-gray-500 sm:text-base">
                Try another search keyword or category.
              </p>

              <button
                onClick={handleReset}
                className="
                  mt-5
                  rounded-lg
                  bg-[#063CE6]
                  px-5
                  py-2.5
                  text-sm
                  font-medium
                  text-white
                  transition
                  hover:bg-blue-700
                "
              >
                Show All Courses
              </button>

            </div>

          ) : (

            <div className="
              grid
              grid-cols-1
              gap-5
              sm:grid-cols-2
              sm:gap-6
              lg:grid-cols-3
              xl:grid-cols-4
            ">

              {filteredProducts.map((course) => (
                <CourseCardAll
                  key={course.id}
                  course={course}
                />
              ))}

            </div>

          )}

        </div>

      </div>

    </section>
  );
};

export default SearchType;