export default function CoursesHero(){

return(

<div>

<div className="bg-gray-200 rounded-lg h-[300px] flex items-center justify-center overflow-hidden">

<img
src="/course.png"
className="w-full h-full object-cover"
/>

</div>


<div className="flex gap-2 mt-5">

<button className="bg-blue-600 text-white text-xs px-4 py-2 rounded-full">
Overview
</button>

<button className="border text-xs px-4 py-2 rounded-full">
Curriculum
</button>

<button className="border text-xs px-4 py-2 rounded-full">
Reviews
</button>

</div>


</div>

)

}