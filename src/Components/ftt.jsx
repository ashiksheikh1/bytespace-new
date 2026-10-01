
// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";

// import {
//   ArrowUp,
//   Mail,
//   MapPin,
//   Code2,
// } from "lucide-react";

// import {
//   FaGithub,
//   FaLinkedin,
//   FaFacebook,
// } from "react-icons/fa";
// const quickLinks = [
//   { name: "Home", href: "#home" },
//   { name: "About", href: "#about" },
//   { name: "Skills", href: "#skills" },
//   { name: "Projects", href: "#projects" },
//   { name: "Experience", href: "#experience" },
//   { name: "Contact", href: "#contact" },
// ];

// const socialLinks = [
//   {
//     name: "GitHub",
//     href: "https://github.com/ashiksheikh1",
//     icon: FaGithub,
//   },
//   {
//     name: "LinkedIn",
//     href: "https://linkedin.com/in/ashik-sheikh-4356bb259",
//     icon: FaLinkedin,
//   },
//   {
//     name: "Facebook",
//     href: "https://facebook.com/",
//     icon: FaFacebook,
//   },
// ];

// export default function Footer() {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="relative overflow-hidden border-t border-white/10 bg-[#08080f] text-gray-400">
//       {/* Background glow */}
//       <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-purple-600/10 blur-[100px]" />

//       <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-8">
//         {/* Main footer */}
//         <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
//           {/* About */}
//           <div className="lg:col-span-2">
//             <Link href="#home" className="inline-flex items-center gap-3">
//               <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-purple-400/20 bg-purple-500/10 text-purple-400">
//                 <Code2 size={24} />
//               </div>

//               <span className="text-xl font-bold text-white">
//                 Ashik<span className="text-purple-400">.</span>
//               </span>
//             </Link>

//             <p className="mt-5 max-w-md text-sm leading-7 text-gray-400">
//               Hi, I'm Ashik Sheikh, a Full Stack Web Developer
//               passionate about building modern, responsive and
//               user-friendly web applications using React, Next.js,
//               Node.js, Express.js and MongoDB.
//             </p>

//             <div className="mt-5 flex items-center gap-2 text-sm">
//               <span className="relative flex h-2.5 w-2.5">
//                 <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
//                 <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
//               </span>
//               <span className="text-gray-300">
//                 Available for opportunities
//               </span>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="mb-6 text-lg font-semibold text-white">
//               Quick Links
//             </h3>

//             <ul className="space-y-3">
//               {quickLinks.map((link) => (
//                 <li key={link.name}>
//                   <Link
//                     href={link.href}
//                     className="inline-block text-sm transition-all duration-300 hover:translate-x-1 hover:text-purple-400"
//                   >
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h3 className="mb-6 text-lg font-semibold text-white">
//               Get In Touch
//             </h3>

//             <div className="space-y-5">
//               <a
//                 href="mailto:ashiksheikh.web13@gmail.com"
//                 className="group flex items-start gap-3 text-sm transition-colors hover:text-purple-400"
//               >
//                 <Mail
//                   size={18}
//                   className="mt-0.5 shrink-0 text-purple-400"
//                 />
//                 <span className="break-all">
//                   ashiksheikh.web13@gmail.com
//                 </span>
//               </a>

//               <div className="flex items-start gap-3 text-sm">
//                 <MapPin
//                   size={18}
//                   className="mt-0.5 shrink-0 text-purple-400"
//                 />
//                 <span>Khulna, Bangladesh</span>
//               </div>
//             </div>

//             {/* Social links */}
//             <div className="mt-7 flex gap-3">
//               {socialLinks.map((social) => {
//                 const Icon = social.icon;

//                 return (
//                   <motion.a
//                     key={social.name}
//                     href={social.href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label={social.name}
//                     title={social.name}
//                     whileHover={{ y: -4, scale: 1.08 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 transition-colors hover:border-purple-500/40 hover:bg-purple-500/10 hover:text-purple-400"
//                   >
//                     <Icon size={18} />
//                   </motion.a>
//                 );
//               })}
//             </div>
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="my-10 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

//         {/* Bottom footer */}
//         <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
//           <p className="text-xs leading-6">
//             © {currentYear} Ashik Sheikh. All rights reserved.
//           </p>

//           <p className="text-xs">
//             Designed & Built with{" "}
//             <span className="text-purple-400">♥</span> using Next.js
//           </p>

//           <motion.a
//             href="#home"
//             aria-label="Back to top"
//             whileHover={{ y: -4 }}
//             whileTap={{ scale: 0.9 }}
//             className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-colors hover:border-purple-500/40 hover:bg-purple-500/10 hover:text-purple-400"
//           >
//             <ArrowUp size={18} />
//           </motion.a>
//         </div>
//       </div>
//     </footer>
//   );
// }

"use client";

import { useState } from "react";

const categories = [
  "All Courses",
  "Web Development",
  "Frontend Development",
  "Backend Development",
  "Programming",
  "Database",
  "DevOps",
  "UI/UX Design",
];

const CourseFilter = () => {
  const [category, setCategory] = useState("All Courses");

  return (
    <div className="flex items-center gap-3">

      {/* All Courses */}
      <button
        type="button"
        onClick={() => setCategory("All Courses")}
        className={`rounded-2xl px-6 py-3 text-[17px] font-semibold transition duration-300 ${
          category === "All Courses"
            ? "bg-[#D4FB20] text-black"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        }`}
      >
        All Courses
      </button>

      {/* Category Dropdown */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="rounded-2xl border border-gray-300 bg-white px-5 py-3 text-[17px] font-medium text-gray-700 outline-none transition focus:border-[#D4FB20] focus:ring-2 focus:ring-[#D4FB20]"
      >
        <option value="All Courses">All Categories</option>

        {categories.slice(1).map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>

    </div>
  );
};

export default CourseFilter;