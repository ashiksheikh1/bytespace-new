import React from 'react';
import { FaTv } from 'react-icons/fa';
import { IoMdBusiness } from 'react-icons/io';
import { IoCameraOutline } from 'react-icons/io5';
import { MdDesignServices, MdDeveloperMode } from 'react-icons/md';
import { SiCoinmarketcap } from 'react-icons/si';

const LearningPaths = () => {
    return (
        <div className='mx-auto container text-center my-14'>
            <div>
                <h2 className='font-SemiBold text-4xl text-[#040819]'>Explore Diverse Learning Paths at Bytespace</h2>
            <p className='font-normal text-sm text-[#82868E] mt-5'>At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various <br /> fields, ensuring there s something for everyone. Unleash your potential and explore our carefully curated categories.</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 my-9 rounded-2xl  font-medium text-xl text-[#242528] '>
               
   
 <div className="border p-5 rounded-xl">
  <div className="flex justify-center">
    <h2 className="w-12 h-12 rounded-full bg-[#D4FB20] flex items-center justify-center">
      <MdDesignServices className="text-xl" />
    </h2>
  </div>

  <p className="text-center">Design</p>
</div>
   <div className="border p-5 rounded-xl">
  <div className="flex justify-center">
    <h2 className="w-12 h-12 rounded-full bg-[#D4FB20] flex items-center justify-center">
      <MdDeveloperMode className="text-xl" />
    </h2>
  </div>

  <p className="text-center">Development</p>
</div>
  
  <div className="border p-5 rounded-xl">
  <div className="flex justify-center">
    <h2 className="w-12 h-12 rounded-full bg-[#D4FB20] flex items-center justify-center">
      <FaTv  className="text-xl" />
    </h2>
  </div>

  <p className="text-center">IT & Software</p>
</div>

   <div className="border p-5 rounded-xl">
  <div className="flex justify-center">
    <h2 className="w-12 h-12 rounded-full bg-[#D4FB20] flex items-center justify-center">
      < IoMdBusiness className="text-xl" />
    </h2>
  </div>

  <p className="text-center">Business</p>
</div>
   <div className="border p-5 rounded-xl">
  <div className="flex justify-center">
    <h2 className="w-12 h-12 rounded-full bg-[#D4FB20] flex items-center justify-center">
      <SiCoinmarketcap  className="text-xl" />
    </h2>
  </div>

  <p className="text-center">Marketing</p>
</div>
   <div className="border p-5 rounded-xl">
  <div className="flex justify-center">
    <h2 className="w-12 h-12 rounded-full bg-[#D4FB20] flex items-center justify-center">
      <IoCameraOutline className="text-xl" />
    </h2>
  </div>

  <p className="text-center">Photography</p>
</div>
               
            </div>
        </div>
    );
};

export default LearningPaths;