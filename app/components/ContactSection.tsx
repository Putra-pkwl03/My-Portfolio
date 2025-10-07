"use client";

import { useState } from "react";
import Image from "next/image";
export default function ContactSection() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phone = "6282314969109";
    const text = `Hi, saya ${name}. ${message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${phone}?text=${encodedText}`, "_blank");
  };

  return (
    <section
      id="contact"
      className="px-4 text-black dark:text-gray-300 md:px-12 -mt-4"
    >
      {/* Mobile layout: horizontal */}
      <div className="flex items-start sm:hidden">
        {/* Gambar kiri */}

        <div className="relative w-full h-[350px] rounded overflow-hidden -mt-12 -ml-18">
  <Image
    src="/img/assets/c1.webp"
    alt="Contact Illustration"
    fill
    className="object-cover rounded"
    sizes="(max-width: 640px) 100vw"
    priority
  />
</div>

        {/* Form kanan */}
        <form
          onSubmit={handleSubmit}
          className="p-4 space-y-3 text-gray-800 shadow-md w-2/2 bg-white/40 dark:bg-gray-900/70 backdrop-blur-md dark:text-white rounded-xl mt-23 -ml-18"
        >
          <h2 className="text-lg font-bold">Contact Me</h2>

          <div>
            <label className="block mb-1 text-sm font-medium">Your Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-3 py-1.5 border border-green-200 rounded bg-gray-100 dark:bg-gray-700 text-sm"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={3}
              className="w-full px-3 py-1.5 border border-green-200 rounded bg-gray-100 dark:bg-gray-700 text-sm"
              placeholder="Type your message"
            />
          </div>

          <button
            type="submit"
            className="group relative flex items-center gap-2 px-4 py-2 text-sm rounded text-white transition-all bg-green-500 dark:bg-[#12ED74] hover:bg-green-600 hover:dark:bg-green-600 shadow"
          >
            <span className="relative z-10 flex items-center gap-2">
              Send Via WhatsApp
            </span>
            <span className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-r from-black/20 via-green/80 to-white/20 group-hover:opacity-100 animate-gradient-move blur-sm brightness-125" />
          </button>
        </form>
      </div>

      {/* Desktop/tablet layout */}
      <div className="items-center hidden gap-12 md:grid md:grid-cols-6">
        {/* Gambar kiri */}
        <div className="flex justify-start md:col-span-2">
        <div className="relative w-full h-[570px] rounded overflow-hidden  ">
          <Image
            src="/img/assets/c1.webp"
            alt="Contact Illustration"
            fill
            className="object-cover rounded "
            sizes="(min-width: 650px) 40vw"
            priority
          />
        </div>
        </div>

        {/* Form kanan */}
        <form
          onSubmit={handleSubmit}
          className="md:col-span-4 max-w-[680px] space-y-6 bg-white/40 dark:bg-gray-900/70 backdrop-blur-md text-gray-800 dark:text-white p-6 rounded-xl shadow-xl w-full"
        >
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            Contact Me
          </h2>

          <div>
            <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
              Your Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 text-gray-800 bg-gray-100 border border-green-200 rounded-md dark:bg-gray-700 dark:text-white"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
              Message
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={4}
              className="w-full px-4 py-2 text-gray-800 bg-gray-100 border border-green-200 rounded-md dark:bg-gray-700 dark:text-white"
              placeholder="Type your message"
            />
          </div>

          <button
            type="submit"
            className="relative px-6 py-3 overflow-hidden font-bold text-white rounded-lg shadow-lg cursor-pointer group"
          >
            {/* Layered background effect */}
            <span className="absolute inset-0 w-full h-full transition-transform duration-300 transform -translate-x-1 -translate-y-1 bg-green-700 rounded-lg dark:bg-green-950 opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full transition-transform duration-300 transform translate-x-1 translate-y-1 bg-green-500 rounded-lg dark:bg-green-500 opacity-60 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>

            {/* Button text */}
            <span className="relative z-10 flex items-center gap-2">
              Send Via WhatsApp
            </span>
          </button>

        </form>
      </div>
    </section>
  );
}
