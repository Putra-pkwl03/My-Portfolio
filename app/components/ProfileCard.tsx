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
<div className="mx-auto mb-6 animated-border">
  <Image
    src="/profile.webp"
    alt="Profile"
    width={200}
    height={200}
    className="rounded-full object-cover w-[200px] h-[200px]"
  />
</div>

      <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-300">
      <span className="inline-block typing">
  {"< Ma'ruf Hariam />"}
</span>

      </h1>

      <p className="mb-4 text-sm font-semibold text-gray-500 dark:text-green-700">Full Stack Web Developer</p>

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
  className="relative flex items-center justify-center gap-2 px-6 py-3 mx-auto mb-8 overflow-hidden font-bold text-white rounded-lg shadow-lg cursor-pointer group w-fit"
>
  {/* Layered background effect */}
  <span className="absolute inset-0 w-full h-full transition-transform duration-300 transform -translate-x-1 -translate-y-1 bg-green-700 rounded-lg dark:bg-green-950 opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
  <span className="absolute inset-0 w-full h-full transition-transform duration-300 transform translate-x-1 translate-y-1 bg-green-500 rounded-lg dark:bg-green-600 opacity-60 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>

  {/* Text + Icon */}
  <span className="relative z-10 flex items-center gap-2">
    <FaEnvelope className="w-5 h-5" /> Hire Me
  </span>
</a>


    {/* Tombol CV dan Contact */}
<div className="flex w-full gap-3">
  {/* Download CV */}
  <a
    href="/MA'RUF HARIAM-CV-20-09-25.pdf"
    download
    className="relative flex items-center justify-center w-1/2 gap-2 py-3 overflow-hidden text-white rounded-lg shadow-lg cursor-pointer group"
  >
    {/* Layered background effect */}
    <span className="absolute inset-0 w-full h-full transition-transform duration-300 transform -translate-x-1 -translate-y-1 bg-green-700 rounded-lg dark:bg-green-950 opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
    <span className="absolute inset-0 w-full h-full transition-transform duration-300 transform translate-x-1 translate-y-1 bg-green-500 rounded-lg dark:bg-green-600 opacity-60 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>

    {/* Text + Icon */}
    <span className="relative z-10 flex items-center gap-2">
      Download CV <FaFileDownload className="w-4 h-4" />
    </span>
  </a>

  {/* Contact Me via WhatsApp */}
  <a
    href="https://wa.me/6282314969109?text=Hi%2C%20saya%20tertarik%20dengan%20jasa%20Anda"
    target="_blank"
    rel="noopener noreferrer"
    className="relative flex items-center justify-center w-1/2 gap-2 py-3 overflow-hidden text-white rounded-lg shadow-lg cursor-pointer group"
  >
    {/* Layered background effect */}
    <span className="absolute inset-0 w-full h-full transition-transform duration-300 transform -translate-x-1 -translate-y-1 bg-green-700 rounded-lg dark:bg-green-950 opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
    <span className="absolute inset-0 w-full h-full transition-transform duration-300 transform translate-x-1 translate-y-1 bg-green-500 rounded-lg dark:bg-green-600 opacity-60 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>

    {/* Text + Icon */}
    <span className="relative z-10 flex items-center gap-2">
      Contact Me <FaComments className="w-4 h-4" />
    </span>
  </a>
</div>

    </div>
  );
}
