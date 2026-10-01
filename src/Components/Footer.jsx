"use client";

import { Input } from "@heroui/react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-[#242528]">

      {/* Main Footer */}
      <div className="footer sm:footer-horizontal p-10">

        {/* Brand + Newsletter */}
        <form>
          <h6 className="footer-title flex items-center">
            <div className="mr-2 flex h-7 w-7 items-center justify-center bg-[#d7ff00] text-[16px] font-bold text-blue-700">
              B
            </div>

            <span className="text-[24px] font-bold text-[#242528]">
              ByteSpace
            </span>
          </h6>

          <fieldset className="w-80">
            <label className="text-[14px] font-normal text-[#242528]">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </label>

            <div className="my-3 lg:flex items-center justify-center gap-3">
              <Input
                aria-label="Name"
                className="w-64"
                placeholder="Enter your email"
              />

              <button
                type="button"
                className="rounded-2xl mt-3 bg-[#D4FB20] px-4 py-2 text-[18px] font-medium text-black transition hover:bg-[#c4eb15]"
              >
                Search
              </button>
            </div>

            <label className="text-[14px] font-normal text-[#242528]">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </label>
          </fieldset>
        </form>

        {/* Featured Courses */}
        <nav>
          <h6 className="footer-title">Featured Courses</h6>

          <a className="link link-hover">Featured Categories</a>
          <a className="link link-hover">Business</a>
          <a className="link link-hover">IT</a>
          <a className="link link-hover">Design</a>
        </nav>

        {/* Development */}
        <nav>
          <h6 className="footer-title">Development</h6>

          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Photography</a>
          <a className="link link-hover">Finance</a>
          <a className="link link-hover">Sport</a>
        </nav>

        {/* Become Creator */}
        <nav>
          <h6 className="footer-title">Become a Creator</h6>

          <a className="link link-hover">Affiliate Program</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Help</a>
          <a className="link link-hover">About</a>
        </nav>

      </div>

      {/* Bottom Border */}
      <div className="mx-10 border-t border-gray-300"></div>

      {/* Copyright Section */}
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-10 py-6 text-sm text-gray-600 md:flex-row">

        {/* Copyright */}
        <p>
          © 2023 ByteSpace. All rights reserved.
        </p>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-6">

          <a
            href="#"
            className="transition hover:text-black hover:underline"
          >
            Privacy Policy
          </a>

          <a
            href="#"
            className="transition hover:text-black hover:underline"
          >
            Terms of Service
          </a>

          <a
            href="#"
            className="transition hover:text-black hover:underline"
          >
            Cookies Settings
          </a>

        </div>
      </div>

    </footer>
  );
};

export default Footer;