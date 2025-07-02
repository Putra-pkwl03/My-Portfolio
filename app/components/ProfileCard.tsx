"use client";
import { useRef, useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaFileDownload,
  FaComments,
} from "react-icons/fa";

import Image from "next/image";

export default function ProfileCard() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`w-full max-w-sm bg-white/40 dark:bg-gray-900/70 backdrop-blur-md rounded-2xl shadow-xl text-center p-4 mb-6 mt-8 ${
        visible ? "animate-slide-in-left-bottom" : "opacity-0"
      }`}
    >
<div className="animated-border mx-auto mb-6">
  <Image
    src="/profile.webp"
    alt="Profile"
    width={200}
    height={200}
    className="rounded-full object-cover w-[200px] h-[200px]"
  />
</div>

      <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-300">
      <span className="typing inline-block">
  {"< Ma'ruf Hariam />"}
</span>

      </h1>

      <p className="dark:text-[#12ED74] text-gray-500 text-sm font-semibold mb-4">Full Stack Web Developer</p>

      {/* Icon Sosial Media */}
      <div className="flex justify-center gap-3 mb-8 text-lg">
        {[
          {
            icon: <FaGithub className="text-gray-700 dark:text-gray-300 " />,
            href: "https://github.com/Putra-pkwl03",
          },
          // { icon: <FaFacebookF className="text-gray-700 dark:text-gray-300 " />, href: "#" },
          {
            icon: (
              <FaLinkedinIn className="text-gray-700 dark:text-gray-300 " />
            ),
            href: "https://www.linkedin.com/in/ma-ruf-hariam-1b894b267/",
          },
          {
            icon: <FaInstagram className="text-gray-700 dark:text-gray-300 " />,
            href: "https://www.instagram.com/putra_pkwl03/",
          },
        ].map(({ icon, href }, idx) => (
          <a
            key={idx}
            href={href}
            className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-green-400 dark:border-[#12ED74]   text-green-600 hover:bg-green-100 transition"
          >
            {icon}
          </a>
        ))}
      </div>

      {/* Hire Me */}
      <a
        href="mailto:putrapongkowulu@gmail.com?subject=Hire%20Me&body=Hi%2C%20I%20am%20interested%20in%20hiring%20you..."
        className="w-fit flex items-center justify-center gap-2 bg-green-500 dark:bg-gray-700/70 backdrop-blur-md overflow-hidden transition-all duration-300 cursor-pointer text-white dark:text-gray-300 px-6 py-2 rounded-lg font-bold mb-8 mx-auto relative group"
      >
        <FaEnvelope className="w-5 h-5" />
        Hire me
        <span className="absolute inset-0 bg-gradient-to-r from-black/20 via-green/80 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-move blur-sm brightness-125" />
      </a>

      {/* Tombol CV dan Contact */}
      <div className="flex w-full gap-4">
        {/* Download CV */}
        <a
          href="/Maruf-Hariam-cv.pdf"
          download
          className="w-1/2 bg-green-500 dark:bg-gray-700/70 backdrop-blur-md text-white dark:text-gray-300 py-2 rounded-md font-medium text-center flex items-center justify-center gap-2 overflow-hidden transition-all duration-300 cursor-pointer relative group"
        >
          Download CV <FaFileDownload className="w-4 h-4" />
          <span className="absolute inset-0 bg-gradient-to-r from-black/20 via-green/80 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-move blur-sm brightness-125" />
        </a>

        {/* Contact Me via WhatsApp */}
        <a
          href="https://wa.me/6282314969109?text=Hi%2C%20saya%20tertarik%20dengan%20jasa%20Anda"
          target="_blank"
          rel="noopener noreferrer"
          className="w-1/2 bg-green-500 dark:bg-gray-700/70 backdrop-blur-md text-white dark:text-gray-300 py-2 rounded-md font-medium text-center flex items-center justify-center gap-2 overflow-hidden transition-all duration-300 cursor-pointer relative group"
        >
          Contact Me <FaComments className="w-4 h-4" />
          <span className="absolute inset-0 bg-gradient-to-r from-black/20 via-green/80 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-move blur-sm brightness-125" />
        </a>
      </div>
    </div>
  );
}
