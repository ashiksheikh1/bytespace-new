
import CourseCard from '@/Components/CourseCard';
import CourseHero from '@/Components/CourseHero';
// import CourseHero from '@/Components/CourseHero';
import CreatorCTA from '@/Components/CreatorCTA';
import LearningPaths from '@/Components/LearningPaths';
import OurCommunity from '@/Components/OurCommunity';
import ProfessionalSection from '@/Components/ProfessionalSection';

import YourSkills from '@/Components/YourSkills';
import { courses } from '@/courses';



export default function Home() {
  return (
    <div className='bg-none'>
     {/* <Banner></Banner> */}
     <CourseHero></CourseHero>
  <YourSkills></YourSkills>
  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {courses.slice(0, 6).map((course) => (
    <CourseCard
      key={course.id}
      course={course}
    />
  ))}
</div>
  <LearningPaths></LearningPaths>
  <ProfessionalSection></ProfessionalSection>
  <CreatorCTA></CreatorCTA>
  <OurCommunity></OurCommunity>
  
    </div>
  );
}
