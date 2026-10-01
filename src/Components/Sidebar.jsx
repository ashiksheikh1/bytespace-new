export default function Sidebar(){

return(

<aside>


<div className="bg-white border rounded-xl p-5">


<h2 className="font-bold">
Course Details
</h2>


<div className="mt-4 space-y-3 text-sm text-gray-600">


<p>
⭐ Rating : 4.8
</p>


<p>
👨‍🎓 Students : 1200+
</p>


<p>
⏱ Duration : 10 Hours
</p>


<p>
📚 Lessons : 25
</p>


</div>


<div className="mt-5">

<h3 className="font-bold">
$25
</h3>


<button className="bg-green-500 text-white w-full mt-3 py-2 rounded-full">
Enroll Now
</button>


</div>


</div>



<div className="bg-white border rounded-xl p-5 mt-5">


<h2 className="font-bold">
Instructor
</h2>


<div className="flex gap-3 mt-4">


<img
src="/profile.png"
className="w-12 h-12 rounded-full"
/>


<div>

<p className="font-semibold">
John Smith
</p>

<p className="text-xs text-gray-500">
Web Developer
</p>


</div>


</div>


</div>


</aside>

)

}