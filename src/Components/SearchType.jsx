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

  // Reset
//   const handleReset = () => {
//     setSearch("");
//     setCategory("");
//     setFilteredProducts(products);
//   };

  return (

     <section className="relative overflow-hidden bg-gradient-to-r from-[#063CE6] to-[#063CE6] px-6 py-16 text-center font-[Poppins]">
      
      {/* Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-15"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Content */}
      {/* <div className="relative z-10 mx-auto max-w-7xl"> */}

        {/* Heading */}
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-white md:text-5xl">
            Find Your Next Course
          </h2>
        </div>


        {/* Search Area */}
        <div className="mx-auto mt-8 flex max-w-4xl flex-col gap-3 md:flex-row">

          {/* Search Input */}
          <input
            type="text"
            placeholder="Search courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
           
            className="
              w-full
              rounded-lg
              border
              border-white/30
              bg-white
              px-4
              py-3
              text-gray-900
              outline-none
              placeholder:text-gray-400
              focus:ring-2
              focus:ring-white
            "
          />


  {/* Search Button */}
          <button
            onClick={handleSearch}
            type="button"
            className="
              rounded-lg
              bg-white
              px-7
              py-3
              font-semibold
              text-[#063CE6]
              transition
              hover:bg-blue-50
            "
          >
            Search
          </button>
          
          {/* Category */}
          <select
            value={category}
            onChange={handleFilter}
            className="
              rounded-lg
              bg-white
              px-5
              py-3
              font-semibold
              text-[#063CE6]
              outline-none
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


        


          {/* Reset */}
          {/* <button
            onClick={handleReset}
            type="button"
            className="
              rounded-lg
              border
              border-white/50
              px-6
              py-3
              font-semibold
              text-white
              transition
              hover:bg-white/10
            "
          >
            Reset
          </button> */}

        </div>


        {/* Course Result */}
       <div  className=" my-10 container xm-auto"> 
        <div className="flex justify-between ">
            <div className="flex container xm-auto gap-4">
               <div className="flex gap-2"> 
                 <CiFilter className="text-[#242528] text-[20px]"/>
                <p className="text-[#4B4C53] text-[16px] font-medium">
                   Filter</p>
            </div>
               <div className="flex gap-2"> 
                 <GiLevelEndFlag className="text-[#242528] text-[20px]"/>
                <p className="text-[#4B4C53] text-[16px] font-medium">
                   Level</p>
            </div>
               <div className="flex gap-2"> 
                 <MdOutlineCategory className="text-[#242528] text-[20px]"/>
                <p className="text-[#4B4C53] text-[16px] font-medium">
                   Category</p>
            </div>
             
               
            </div>
            <div className="flex gap-2 item-center justify-center">
                 <LuArrowDownWideNarrow className="text-[#242528] text-[20px]"/>
                <p className="text-[#4B4C53] text-[16px] font-medium">
                   relevant</p>
                 
            </div>
        </div>
<div className="bg-white">
      <div className='flex justify-around items-center text-[#4B4C53] font-medium text-lg mt-9 mb'>
               <button className="bg-[#F5F5F6] hover:bg-[#D4FB20] rounded-2xl px-4 py-1 transition-colors duration-500">Featured</button>
                <button  className="bg-[#F5F5F6] hover:bg-[#D4FB20] rounded-2xl px-4 py-1 transition-colors duration-500">Music</button>
                <button  className="bg-[#F5F5F6] hover:bg-[#D4FB20] rounded-2xl px-4 py-1 transition-colors duration-500">Drawing & Painting</button>
                <button className="bg-[#F5F5F6] hover:bg-[#D4FB20] rounded-2xl px-4 py-1 transition-colors duration-500">Animation</button>
                <button className="bg-[#F5F5F6] hover:bg-[#D4FB20] rounded-2xl px-4 py-1 transition-colors duration-500">Social Media</button>
                <button className="bg-[#F5F5F6] hover:bg-[#D4FB20] rounded-2xl px-4 py-1 transition-colors duration-500">UI/UX Design</button>
                <button  className="bg-[#F5F5F6] hover:bg-[#D4FB20] rounded-2xl px-4 py-1 transition-colors duration-500">Creative Marketing</button>
            </div>
</div>
</div>


        <div className="mt-12 bg-white ">

          {loading ? (
            <div className="py-10 text-xl font-semibold text-white">
              Loading...
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="rounded-xl bg-white p-10">
              <h2 className="text-2xl font-bold text-gray-800">
                No courses found
              </h2>

              <p className="mt-2 text-gray-500">
                Try another search keyword or category.
              </p>
            </div>
          ) : (
            <>
            


              {/* Cards */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

                {filteredProducts.map((course) => (
                  <CourseCardAll
                    key={course.id}
                    course={course}
                  />
                ))}

              </div>
            </>
          )}

        </div>

      {/* </div> */}
    </section>
 
  );
};

export default SearchType;