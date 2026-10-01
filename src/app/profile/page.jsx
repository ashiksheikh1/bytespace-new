import CourseCardAll from '@/Components/CourseCardAll';
import Profile from '@/Components/Profile';
import { courses } from '@/courses';

import { CiFilter } from 'react-icons/ci';
import { GiLevelEndFlag } from 'react-icons/gi';
import { LuArrowDownWideNarrow } from 'react-icons/lu';
import { MdOutlineCategory } from 'react-icons/md';

const ProfilePage = () => {
    return (
        <div>
            <Profile></Profile>
            <div className='container mx-auto'>
                       <div  className=" my-10 container xm-auto"> 
                        <div className="flex justify-between ">
                            <div className="flex container xm-auto gap-4">
                               <div className="flex gap-2 border border-gray-400 rounded-2xl px-3 py-2 "> 
                                 <CiFilter className="text-[#242528] text-[20px]"/>
                                <p className="text-[#4B4C53] text-[16px] font-medium">
                                   Filter</p>
                            </div>
                               <div className="flex gap-2  border border-gray-400 rounded-2xl justify-center items-center px-3 py-2"> 
                                 <GiLevelEndFlag className="text-[#242528] text-[20px]"/>
                                <p className="text-[#4B4C53] text-[16px] font-medium">
                                   Level</p>
                            </div>
                               <div className="flex gap-2 border border-gray-400 rounded-2xl justify-center items-center px-3 py-2"> 
                                 <MdOutlineCategory className="text-[#242528] text-[20px]"/>
                                <p className="text-[#4B4C53] text-[16px] font-medium">
                                   Category</p>
                            </div>
                             
                               
                            </div>
                            <div className="flex gap-2  border border-gray-400 rounded-2xl justify-center items-center px-3 py-2">
                                 <LuArrowDownWideNarrow className="text-[#242528] text-[20px]"/>
                                <p className="text-[#4B4C53] text-[16px] font-medium">
                                   relevant</p>
                                 
                            </div>
                        </div>
             
                </div>
            </div>
            <div>
                   <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                
                                {courses.map((course) => (
                                  <CourseCardAll
                                    key={course.id}
                                    course={course}
                                  />
                                ))}
                
                              </div>
            </div>
        </div>
    );
};

export default ProfilePage;