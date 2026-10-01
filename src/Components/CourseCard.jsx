import { Clock3, MessageCircle, Star } from "lucide-react";
import { MdOutlineNotStarted } from "react-icons/md";

const CourseCard = ({ course }) => {
  return (
    <div className="container mx-auto w-full max-w-[320px] overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      
      {/* Course Image */}
      <div className="relative h-[180px] overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />

        {/* Lesson Badge */}
        <div className="absolute bottom-3 left-3 rounded-md bg-[#F6F6F699] px-2 py-1 text-xs text-white">
          {course.lessons} Lessons
        </div>

        {/* Duration */}
        <div className="absolute bottom-3 left-[110px] rounded-md bg-[#F6F6F699] px-2 py-1 text-xs text-white">
          {course.duration}
        </div>

        {/* Comments */}
        <div className="absolute bottom-3 right-3 flex items-center gap-1 rounded-md bg-[#F6F6F699] px-2 py-1 text-xs text-white">
          <MessageCircle size={12} />
          {course.comments}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">

        {/* Title + Rating */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="line-clamp-1 text-xl font-SemiBold text-[#000000]">
              {course.title}
            </h3>

            <p className="mt-1 text-xs text-gray-400 font-Regular" >
              by <span className="text-[#003BE2] ">{course.instructor}</span>
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-1 text-sm text-gray-600">
            <Star
              size={14}
              fill="currentColor"
              className="text-[#CED0D3]"
            />
            {course.rating}
          </div>
        </div>

        {/* Students */}
        <div className="mt-4 flex items-center gap-1">
         <div className="flex items-center justify-center gap-1 text-xs font-medium text-[#4B4C53]">
          <MdOutlineNotStarted /> {course.level}
          </div> 
          <div className="flex -space-x-2">
            {course.students.map((student, index) => (
             
              <img
                key={index}
                src={student}
                alt="Student"
                className="h-7 w-7 rounded-full border-2 border-white object-cover"
              />
            ))}
          </div>

          <div className="ml-2 flex h-7 min-w-7 items-center justify-center rounded-full bg-[#D4FB20] px-2 text-[10px] font-Medium text-[#242528]">
            +{course.moreStudents}
          </div>
        </div>

        {/* Price */}
        <div className="mt-4 flex items-center gap-2">
          
          <span className="text-lg font-bold text-blue-600">
            ${course.price}<span className="text-xs font-normal text-gray-400">
          /Lifetime
          </span>
          </span>

          
        </div>
      </div>
    </div>
  );
};

export default CourseCard;