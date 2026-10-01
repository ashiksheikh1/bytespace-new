import { Avatar, Card } from '@heroui/react';

import React from 'react';

const OurCommunity = () => {
    return (
        <div className='container mx-auto'>
             <div className='flex justify-around items-center container mx-auto py-8 bg-[#f8f9ff] '>
                <h3 className='font-SemiBold text-[#000000] text-[44px] w-1/2'>Discover What Our <br /> Community Is Saying</h3>
                <p className=' w-1/2 text-[#4F4F4F] font-normal text-[18px]'>At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.</p>
             </div>

             <div className='grid gap-7 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
               
    <div className="flex-wrap gap-4">
      <Card className=" gap-2">
        <img
          alt="Indie Hackers community"
          className="pointer-events-none aspect-square w-14 rounded-full object-cover select-none"
          loading="lazy"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRbJ4wTxRewjYeoJCF3AUw_apf3kXv7TZbB0opW--ljcT21DFlROapHdM&s"
        />
        <Card.Header>
          <Card.Title className='text-[#000000] text-[20px] font-semibold'>Sarah M.</Card.Title>
            <Card.Description className='text-[#003BE2] font-sans text-[18px]'>Enthusiastic Learner</Card.Description>
        </Card.Header>
        <Card.Footer className="flex gap-2">
        
          <span  className='text-[#4F4F4F] font-sans text-[18px]'>ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.</span>
        </Card.Footer>
      </Card>

    
    </div>
    <div className="flex flex-wrap gap-4">
      <Card className=" gap-2">
        <img
          alt="Indie Hackers community"
          className="pointer-events-none aspect-square w-14 rounded-full object-cover select-none"
          loading="lazy"
          src="https://image.shutterstock.com/image-photo/headshot-close-face-portrait-young-260nw-2510015507.jpg"
        />
        <Card.Header>
          <Card.Title className='text-[#000000] text-[20px] font-semibold'>Sarah M.</Card.Title>
            <Card.Description className='text-[#003BE2] font-sans text-[18px]'>Enthusiastic Learner</Card.Description>
        </Card.Header>
        <Card.Footer className="flex gap-2">
        
          <span  className='text-[#4F4F4F] font-sans text-[18px]'>ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.</span>
        </Card.Footer>
      </Card>

    
    </div>
    <div className="flex flex-wrap gap-4">
      <Card className=" gap-2">
        <img
          alt="Indie Hackers community"
          className="pointer-events-none aspect-square w-14 rounded-full object-cover select-none"
          loading="lazy"
          src="https://img.magnific.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
        />
        <Card.Header>
          <Card.Title className='text-[#000000] text-[20px] font-semibold'>Sarah M.</Card.Title>
            <Card.Description className='text-[#003BE2] font-sans text-[18px]'>Enthusiastic Learner</Card.Description>
        </Card.Header>
        <Card.Footer className="flex gap-2">
        
          <span  className='text-[#4F4F4F] font-sans text-[18px]'>ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.</span>
        </Card.Footer>
      </Card>

    
    </div>
  
             </div>
        </div>
    );
};

export default OurCommunity;