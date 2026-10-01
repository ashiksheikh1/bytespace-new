import { LockKeyhole } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    //  className='flex justify-around items-center p-4 bg-blue-600 text-white'
    return (
        <div  className=" bg-[#063CE6] font-[Poppins] text-white">
          <nav className="relative z-50 h-[72px]">
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #ffffff 1px, transparent 1px),
              linear-gradient(to bottom, #ffffff 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        <div className="relative mx-auto flex h-full max-w-[1280px] items-center justify-between px-6 lg:px-10">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex h-[29px] items-center gap-1  border-[#d7ff00]  px-1.5">
              <div className="flex h-8 w-7 items-center justify-center bg-[#d7ff00] text-[28px] font-bold text-blue-700">
                B
              </div>

              <span className="text-[24px] font-bold text-[#F5F5F6] tracking-tight">
                ByteSpace
              </span>
            </div>
          </div>

          {/* Center Menu */}
          <div className="hidden items-center gap-7 md:flex">
            <Link
              href="/"
              className="text-[16px] font-[Satoshi] text-[#F5F5F6] font-medium transition hover:text-[#d9ff00]"
            >
              Home
            </Link>

            <Link
              href="/courses"
              className="text-[16px] font-[Satoshi] text-[#F5F5F6] font-medium  transition hover:text-[#d9ff00]"
            >
              Courses
            </Link>

            <Link
              href="/creators"
              className="text-[16px] font-[Satoshi] text-[#F5F5F6] font-medium  transition hover:text-[#d9ff00]"
            >
              Creators
            </Link>
          </div>

          {/* Right Menu */}
          <div className="flex items-center gap-5">
            <button className="text-[16px] font-[Satoshi] text-[#F5F5F6] font-medium ">
              Sign In
            </button>

            <button className="text-[16px] font-[Satoshi] text-[#F5F5F6] font-medium ">
              Join Us
            </button>

            <LockKeyhole size={20} strokeWidth={1.5} />
          </div>
        </div>
      </nav> 
            
        </div>
    );
};

export default Navbar;<h2></h2>