"use client";

import { LockKeyhole, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="bg-[#063CE6] font-[Poppins] text-white">
      <nav className="relative z-50 min-h-[72px]">

        {/* Background Grid */}
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

        {/* Navbar Container */}
        <div className="relative mx-auto flex min-h-[72px] max-w-[1280px] items-center justify-between px-4 sm:px-6 lg:px-10">

          {/* Logo */}
          <Link href="/" onClick={closeMenu}>
            <div className="flex items-center">
              <div className="flex h-[29px] items-center gap-1 border-[#d7ff00] px-1.5">

                <div className="flex h-8 w-7 items-center justify-center bg-[#d7ff00] text-[28px] font-bold text-blue-700">
                  B
                </div>

                <span className="text-[21px] font-bold tracking-tight text-[#F5F5F6] sm:text-[24px]">
                  ByteSpace
                </span>

              </div>
            </div>
          </Link>


          {/* Desktop Menu */}
          <div className="hidden items-center gap-7 md:flex">

            <Link
              href="/"
              className="text-[16px] font-medium text-[#F5F5F6] transition hover:text-[#d9ff00]"
            >
              Home
            </Link>

            <Link
              href="/courses"
              className="text-[16px] font-medium text-[#F5F5F6] transition hover:text-[#d9ff00]"
            >
              Courses
            </Link>

            <Link
              href="/creators"
              className="text-[16px] font-medium text-[#F5F5F6] transition hover:text-[#d9ff00]"
            >
              Creators
            </Link>

          </div>


          {/* Desktop Right Menu */}
          <div className="hidden items-center gap-5 md:flex">

            <Link
              href="/auth/signin"
              className="text-[16px] font-medium text-[#F5F5F6] transition hover:text-[#d9ff00]"
            >
              Sign In
            </Link>

            <Link
              href="/auth/signup"
              className="text-[16px] font-medium text-[#F5F5F6] transition hover:text-[#d9ff00]"
            >
              Join Us
            </Link>

            <LockKeyhole
              size={20}
              strokeWidth={1.5}
            />

          </div>


          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-md p-2 transition hover:bg-white/10 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X size={25} />
            ) : (
              <Menu size={25} />
            )}
          </button>

        </div>


        {/* Mobile Menu */}
        {isOpen && (
          <div className="relative border-t border-white/20 bg-[#063CE6] px-5 pb-5 pt-4 md:hidden">

            <div className="flex flex-col gap-1">

              <Link
                href="/"
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 text-[16px] font-medium transition hover:bg-white/10 hover:text-[#d9ff00]"
              >
                Home
              </Link>

              <Link
                href="/courses"
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 text-[16px] font-medium transition hover:bg-white/10 hover:text-[#d9ff00]"
              >
                Courses
              </Link>

              <Link
                href="/creators"
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 text-[16px] font-medium transition hover:bg-white/10 hover:text-[#d9ff00]"
              >
                Creators
              </Link>


              {/* Mobile Auth */}
              <div className="mt-3 flex flex-col gap-3 border-t border-white/20 pt-4">

                <Link
                  href="/auth/signin"
                  onClick={closeMenu}
                  className="rounded-lg px-4 py-3 text-[16px] font-medium transition hover:bg-white/10 hover:text-[#d9ff00]"
                >
                  Sign In
                </Link>

                <Link
                  href="/auth/signup"
                  onClick={closeMenu}
                  className="rounded-lg bg-[#d9ff00] px-4 py-3 text-center text-[16px] font-semibold text-blue-700 transition hover:bg-[#c8ee00]"
                >
                  Join Us
                </Link>

              </div>

            </div>

          </div>
        )}

      </nav>
    </div>
  );
};

export default Navbar;