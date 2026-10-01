"use client";

import { LockKeyhole, Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {

  const [open, setOpen] = useState(false);

  return (
    <div className="bg-[#063CE6] font-[Poppins] text-white">

      <nav className="relative z-50 h-[72px]">

        {/* Grid Background */}
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


        <div className="
          relative mx-auto 
          flex h-full 
          max-w-[1280px] 
          items-center 
          justify-between 
          px-6 
          lg:px-10
        ">


          {/* Logo */}

          <Link href="/" className="flex items-center">

            <div className="flex items-center gap-2">

              <div className="
                flex 
                h-8 
                w-8 
                items-center 
                justify-center 
                bg-[#d7ff00] 
                text-[28px] 
                font-bold 
                text-blue-700
              ">
                B
              </div>


              <span className="
                text-[24px]
                font-bold
                tracking-tight
              ">
                ByteSpace
              </span>

            </div>

          </Link>



          {/* Desktop Menu */}

          <div className="
            hidden 
            items-center 
            gap-7 
            md:flex
          ">

            <Link 
              href="/"
              className="hover:text-[#d9ff00] transition"
            >
              Home
            </Link>


            <Link 
              href="/courses"
              className="hover:text-[#d9ff00] transition"
            >
              Courses
            </Link>


            <Link 
              href="/creators"
              className="hover:text-[#d9ff00] transition"
            >
              Creators
            </Link>

          </div>



          {/* Desktop Right */}

          <div className="
            hidden
            md:flex
            items-center
            gap-5
          ">

            <button className="hover:text-[#d9ff00]">
              Sign In
            </button>


            <button className="
              hover:text-[#d9ff00]
            ">
              Join Us
            </button>


            <LockKeyhole 
              size={20}
              strokeWidth={1.5}
            />

          </div>



          {/* Mobile Button */}

          <button
            onClick={()=>setOpen(!open)}
            className="md:hidden"
          >

            {
              open ?
              <X size={28}/>
              :
              <Menu size={28}/>
            }

          </button>


        </div>



        {/* Mobile Menu */}

        {
          open && (

            <div className="
              absolute
              top-[72px]
              left-0
              w-full
              bg-[#063CE6]
              border-t
              border-white/20
              md:hidden
            ">


              <div className="
                flex
                flex-col
                gap-5
                px-6
                py-6
              ">


                <Link 
                  href="/"
                  onClick={()=>setOpen(false)}
                  className="hover:text-[#d9ff00]"
                >
                  Home
                </Link>


                <Link 
                  href="/courses"
                  onClick={()=>setOpen(false)}
                  className="hover:text-[#d9ff00]"
                >
                  Courses
                </Link>


                <Link 
                  href="/creators"
                  onClick={()=>setOpen(false)}
                  className="hover:text-[#d9ff00]"
                >
                  Creators
                </Link>



                <button className="text-left">
                  Sign In
                </button>


                <button className="text-left">
                  Join Us
                </button>


              </div>


            </div>

          )
        }


      </nav>

    </div>
  );
};

export default Navbar;