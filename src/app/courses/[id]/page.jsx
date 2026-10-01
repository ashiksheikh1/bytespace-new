
import Link from "next/link";
import CourseInfo from "../../../Components/CourseInfo";
import Sidebar from "../../../Components/Sidebar";
import { courses } from '../../../courses';

import { FaRegStar } from "react-icons/fa";
import { GiLevelEndFlag } from "react-icons/gi";
import { MdOutlineManageAccounts } from "react-icons/md";


export default async function DetailsPage({ params }) {
  const { id } = await params;

  const course = courses.find(
    (item) => item.id === Number(id)
  );

  if (!course) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-semibold">
          Course Not Found
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">

      {/* Blue Header */}
      <div className="bg-[#003ee8] h-[260px]">
        <div className="max-w-[900px] mx-auto px-5 pt-6">

          {/* <p className="text-white/70 text-sm mb-2">
            {course.category}
          </p> */}

          <h1 className="text-white text-3xl font-bold">
            {course.title}
          </h1>

          <p className="text-white/80 text-sm mt-2 mb-5">
            Learn {course.title} with practical lessons
            and real-world projects.
          </p>
            <h2>by <span  className="text-yellow-300">{course.instructor}</span></h2>
          <div className="flex flex-wrap gap-2 mt-5">

            <span className="bg-white text-[16px] font-medium text-[#242528]  px-3 py-1 rounded-full flex gap-2 items-center justify-center">
              <GiLevelEndFlag className="text-[#003BE2]" />{course.level}
            </span>

            <span className="bg-white text-[16px] font-medium text-[#242528]  px-3 py-1 rounded-full flex gap-2 items-center justify-center">
             <FaRegStar className="text-[#003BE2]" /> {course.rating} Review
            </span>

            <span className="bg-white text-[16px] font-medium text-[#242528]  px-3 py-1 rounded-full flex gap-2 items-center justify-center">
              <MdOutlineManageAccounts className="text-[#003BE2]"/>{course.moreStudents} moreStudents
            </span>

          </div>

        </div>
      </div>


      {/* Main Content */}
      <section className="max-w-[900px] mx-auto px-5 -mt-[150px]">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          {/* Left */}
          <div className="md:col-span-2">

            {/* Course Image */}
            <div className="bg-gray-200 rounded-lg h-[300px] flex items-center justify-center overflow-hidden mt-33">

              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover "
              />

            </div>


            {/* Tabs */}
            <div className="flex gap-2 mt-5">

             <Link href="/about">
              <button className="border hover:bg-[#D4FB20] transition-colors duration-500 bg-[#F5F5F6] text-[#4B4C53] text-[16px] font-medium px-4 py-2 rounded-full">
                About
              </button>
             </Link>

             <Link href="/lessons">
              <button className="border hover:bg-[#D4FB20] transition-colors duration-500 bg-[#F5F5F6] text-[#4B4C53] text-[16px] font-medium  px-4 py-2 rounded-full">
                Lessons
              </button>
             </Link>

              <Link href="/reviews">
              <button className="border hover:bg-[#D4FB20] transition-colors duration-500 bg-[#F5F5F6] text-[#4B4C53] text-[16px] font-medium  px-4 py-2 rounded-full">
                Reviews
              </button>
              </Link>

            </div>


            {/* Course Info */}
            <CourseInfo course={course} />

          </div>


          {/* Right Sidebar */}
          <Sidebar course={course} />

        </div>

      </section>

    </main>
  );
}