import CourseCardAll from '@/Components/CourseCardAll';
import { courses } from '@/courses';
import React from 'react';

const creatorsPage = () => {
    return (
        <div>
            <div className="grid grid-cols-1 mt-16 gap-6 sm:grid-cols-2 lg:grid-cols-3">

                {courses.map((course) => (
                  <CourseCardAll
                    key={course.id}
                    course={course}
                  />
                ))}

              </div>
        </div>
    );
};

export default creatorsPage;