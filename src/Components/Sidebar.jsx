import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-full max-w-sm">

      <div className="bg-white border border-gray-200 rounded-xl p-4">

        {/* Lessons */}
        <h2 className="text-sm font-bold text-gray-800">
          112 Lessons (24 hours)
        </h2>

        <div className="mt-3 space-y-2 text-[10px] text-gray-700">

          <div className="flex justify-between gap-3">
            <p>
              01&nbsp;&nbsp; Introduction to Digital
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Media
            </p>
            <span className="text-blue-500 whitespace-nowrap">
              12 mins
            </span>
          </div>

          <div className="flex justify-between gap-3">
            <p>
              02&nbsp;&nbsp; Design Principles for
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Impacts
            </p>
            <span className="text-blue-500 whitespace-nowrap">
              21 mins
            </span>
          </div>

          <div className="flex justify-between gap-3">
            <p>
              03&nbsp;&nbsp; Advanced Techniques in
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Digital Creation
            </p>
            <span className="text-blue-500 whitespace-nowrap">
              16 mins
            </span>
          </div>

        </div>


        {/* More lessons */}
        <p className="text-[10px] text-gray-500 mt-3">
          99 more videos
        </p>


        {/* Course price */}
        <div className="mt-4">

          <p className="text-[9px] text-gray-500 leading-3">
            Ready to Dive In? Enroll Now and Start
            <br />
            Building Your Digital Future!
          </p>

          <div className="mt-2 flex items-center gap-1">
            <span className="text-xl font-bold text-blue-600">
              $25
            </span>

            <span className="text-[8px] text-gray-400">
              lifetime
            </span>
          </div>


          {/* Enroll Button */}
          <button
            className="
              bg-lime-400
              hover:bg-lime-500
              text-gray-800
              w-full
              mt-2
              py-2
              rounded-full
              text-[10px]
              font-medium
              transition
            "
          >
            Enroll Now
          </button>

        </div>


        {/* Course include */}
        <div className="mt-4">

          <h3 className="text-sm font-bold text-gray-800">
            This course include
          </h3>

          <div className="mt-2 space-y-2 text-[9px] text-gray-500">

            <p className="flex items-center gap-2">
              <span className="text-blue-500">▣</span>
              Learning Resources
            </p>

            <p className="flex items-center gap-2">
              <span className="text-blue-500">▣</span>
              Quality Lesson Videos
            </p>

            <p className="flex items-center gap-2">
              <span className="text-blue-500">♧</span>
              Certificate of Completion
            </p>

            <p className="flex items-center gap-2">
              <span className="text-blue-500">♧</span>
              Private Consultation
            </p>

          </div>

        </div>


        {/* Instructor */}
        <div className="border-t border-gray-200 mt-4 pt-3">

          <div className="flex items-center gap-2">

            <img
              src="/profile.png"
              alt="Instructor"
              className="w-9 h-9 rounded-full object-cover"
            />

            <div>

              <p className="text-[9px] font-semibold text-gray-800">
                PurePearl Studio
              </p>

              <p className="text-[8px] text-gray-500">
                Professional Creator
              </p>

            </div>

          </div>


          <p className="text-[8px] text-gray-500 leading-3 mt-3">
            Ready to Dive In? Enroll Now and Start
            <br />
            Building Your Digital Future!
          </p>


         <Link href="/profile">
          <button
            className="
              border
              border-gray-200
              text-gray-600
              text-[8px]
              px-3
              py-1
              rounded-md
              mt-2
              hover:bg-gray-50
            "
          >
            See Full Profile
          </button>
         </Link>

        </div>

      </div>

    </aside>
  );
}