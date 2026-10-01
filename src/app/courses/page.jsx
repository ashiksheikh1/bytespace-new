import CourseCardAll from '@/Components/CourseCardAll';
import SearchType from '@/Components/SearchType';
import { courses } from '@/courses';


import React from 'react';

const CoursePage = () => {
// const products = courses
    return (
    <div>
  <SearchType products={courses}></SearchType>
   
    </div>
    );
};

export default CoursePage;