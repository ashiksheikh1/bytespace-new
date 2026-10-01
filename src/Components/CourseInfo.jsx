import { Check } from "lucide-react";

export default function CourseInfo({ course }) {
  return (
    <div className="mt-5">
      <div className="bg-white border rounded-xl p-5">

        {/* Description */}
        <h2 className="font-semibold text-[#242528] text-[20px] font-[Poppins]">
          Description
        </h2>

        <p className="text-[#4B4C53] text-[16px] font-normal font-[Satoshi] leading-6 mt-3">
          {course?.description}
        </p>


        {/* Related Courses */}
        <h2 className="font-semibold text-[#242528] text-[20px] font-[Poppins] mt-7">
          Related Courses
        </h2>

        <div className="grid grid-cols-4 gap-4 mt-4">
          {course?.students?.map((item, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden w-40 h-40"
            >
              <img
                src={item}
                alt={`Student ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>


        {/* Key Points */}
       <h2 className="font-semibold text-[#242528] text-[20px] font-[Poppins] mt-7">
  Key Points
</h2>

<ul className="mt-4 space-y-3">
  {course?.keyPoints?.map((item, index) => (
    <li
      key={index}
      className="flex items-center gap-3 text-[#4B4C53] text-[16px] font-normal font-[Satoshi]"
    >
      {/* Blue Circle + White Tick */}
      <span className="w-5 h-5 min-w-5 rounded-full bg-blue-500 flex items-center justify-center">
        <Check
          size={13}
          strokeWidth={3}
          className="text-white"
        />
      </span>

      {/* Text */}
      <span className="whitespace-nowrap">
        {item}
      </span>
    </li>
  ))}
</ul>

      </div>
    </div>
  );
}