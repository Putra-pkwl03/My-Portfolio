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
      className="text-black dark:text-gray-300 px-4 md:px-12"
    >
      {/* Mobile layout: horizontal */}
      <div className="flex sm:hidden items-start">
        {/* Gambar kiri */}

        <div className="relative w-full h-[350px] rounded overflow-hidden -mt-12 -ml-30">
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
          className="w-2/2 space-y-3 bg-white/40 dark:bg-gray-900/70 backdrop-blur-md text-gray-800 dark:text-white p-4 rounded-xl shadow-md mt-23 -ml-30"
        >
          <h2 className="text-lg font-bold">Contact Me</h2>

          <div>
            <label className="block text-sm font-medium mb-1">Your Name</label>
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
            <label className="block text-sm font-medium mb-1">Message</label>
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
            <span className="absolute inset-0 bg-gradient-to-r from-black/20 via-green/80 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-move blur-sm brightness-125" />
          </button>
        </form>
      </div>

      {/* Desktop/tablet layout */}
      <div className="hidden md:grid md:grid-cols-6 gap-12 items-center">
        {/* Gambar kiri */}
        <div className="md:col-span-2 flex justify-start">
        <div className="relative w-full h-[570px] rounded overflow-hidden">
          <Image
            src="/img/assets/c1.webp"
            alt="Contact Illustration"
            fill
            className="object-cover rounded"
            sizes="(min-width: 768px) 40vw"
            priority
          />
        </div>
        </div>

        {/* Form kanan */}
        <form
          onSubmit={handleSubmit}
          className="md:col-span-4 max-w-[690px] space-y-6 bg-white/40 dark:bg-gray-900/70 backdrop-blur-md text-gray-800 dark:text-white p-6 rounded-xl shadow-xl w-full"
        >
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            Contact Me
          </h2>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">
              Your Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 border-green-200 border rounded-md bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">
              Message
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={4}
              className="w-full px-4 py-2 border-green-200 border rounded-md bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white"
              placeholder="Type your message"
            />
          </div>

          <button
            type="submit"
            className="group relative flex items-center gap-2 px-5 py-2 rounded text-white transition-all bg-green-500 dark:bg-[#12ED74] hover:bg-green-600 hover:dark:bg-green-600 shadow-md"
          >
            <span className="relative z-10 flex items-center gap-2">
              Send Via WhatsApp
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-black/20 via-green/80 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-move blur-sm brightness-125" />
          </button>
        </form>
      </div>
    </section>
  );
}
