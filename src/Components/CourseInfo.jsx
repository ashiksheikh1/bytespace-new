export default function CourseInfo({course}){

return(

<div className="mt-5">


<div className="bg-white border rounded-xl p-5">

<h2 className="font-semibold text-[#242528] text-[20px] font-[Poppins]">
Description
</h2>


<p className="text-[#4B4C53] text-[16px] font-normal font-[Satoshi] leading-6 mt-3">
{course.description}
</p>



<h2 className="font-semibold text-[#242528] text-[20px] font-[Poppins]">
Related Courses
</h2>


<div className="grid grid-cols-4 gap-3 mt-3">

      <div className="grid grid-cols-4 gap-3">

        {course.students.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden"
          >
            <img
              src={item}
              alt="student"
              className="h-20 w-full object-cover"
            />
          </div>
        ))}



    </div>


</div>

<h2 className="font-semibold text-[#242528] text-[20px] font-[Poppins]">
Key Points
</h2>

  <div className="grid grid-cols-4 gap-3">

        {course.keyPoints.map((item, index) => (
          <div
            key={index}
            // className="border rounded-lg overflow-hidden"
          >

<ul>
  <p className="text-[#4B4C53] text-[16px] font-normal font-[Satoshi] grid gri">
   {item}
    </p>
</ul>

          </div>
        ))}



    </div>







</div>


</div>

)

}