'use client';
import React from 'react';
import CertificationCards from '../components/CertificationCards'; 
import Image from "next/image";


interface ExperienceItem {
  title: string;
  company: string;
  periode: string;
  deskripsi: string;
  tech: string[];
}

const experience: ExperienceItem[] = [
  {
    title: "InHack Copetition - Full Stack Developer",
    company: "Telkom Purwokerto",
    periode: "25-2023",
    deskripsi:
      "Membangun Website untuk menyediakan informasi pariwisata yang ramah disabilitas, dengan fitur navigasi suara dan navigasi otomatis yang disesuaikan dengan kebutuhan pengguna disabilitas. Fitur Utama: Navigasi suara dan System Navigasi disabilitas otomatis",
    tech: ["JavaScript", "Vite", "React", "PHP Native", "Bootstrap", "MySql"],
  },
  {
    title: "Magang - Staff Web Developmen",
    company: "House Ilmu Indonesia (HI)",
    periode: "Juli 2024 - Masih Aktif",
    deskripsi:
      "Memperbarui isi Conten website utama dan membangun Dashboard Internal untuk memanage artcile, dan isi content ke website utama dan di Dashboard Internalnya",
    tech: [
      "Laravel - LiveWire,",
      "JavaScripts",
      "Axios-Jquery",
      "Telwind CSS",
    ],
  },
  {
    title: "Magang - Full Stack Developer",
    company: "Winni Code Garuda Teknologi",
    periode: "Februari 2025 - Masih Aktif",
    deskripsi:
      "Membangun System rekrutmen kariawan baru mulai dari Admin melakukan post lowongan pekerjaan, Users melakukan pendaftaran dilowongan terkiat hingga HR melakukan screening CV hingga memberikan pengumuman akhir lewat Email Notification ",
    tech: [
      "Backend - Laravel",
      "JavaScripts",
      "FronEnd - React.js",
      "FrondEnd - Neaxt.js",
      "Telwind CSS",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className=" text-black dark:text-gray-300  px-4 md:px-12 mb-16"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-gray-700 dark:text-gray-300 bg-white/70 dark:bg-gray-900/70 px-4 py-2 rounded-lg shadow-md backdrop-blur-md inline-block">
          Experience
        </h2>

        {/* Top section: text + svg on the left, experience on the right */}
        <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start">
          {/* Left Side: Title + Subtitle + SVG */}
          <div className="relative space-y-15 rounded-md w-full p-4 bg-white/40 dark:bg-gray-900/70 backdrop-blur-md shadow-xl">
            <div>
              <p className="text-xl font-semibold text-gray-800 dark:text-white">
                Full Stack Developer
              </p>
              <p className="text-sm text-green-600 dark:text-gray-400 font-semibold">
                Code yang BAIK seperti Kopi dan Senja --
              </p>
              <p className="text-sm font-semibold text-green-600 dark:text-gray-400">
                Hangat, Berkesan, dan tak Lekang oleh WAKTU..!
              </p>
            </div>

            {/* Gambar utama */}
            <div className="relative w-full max-w-[480x] h-[480px]">
            <Image
              src="/img/assets/dev.png"
              alt="Developer Illustration"
              fill
              className="object-contain"
              priority
            />
      </div>


            {/* Gambar tambahan kanan bawah */}
            <div className="absolute right-[12px] bottom-[70px] w-[180px] h-[120px]">
          <Image
            src="/img/assets/a1.png"
            alt="Second Illustration"
            fill
            className="object-contain"
          />
        </div>
          </div>

          {/* Right Side: Experience List */}
          <div className="space-y-12 rounded-md w-full bg-white/40 p-4 dark:bg-gray-900/70 backdrop-blur-md shadow-xl">
            {experience.map((item, index) => (
              <div key={index} className="flex gap-4">
                {/* Kolom Tanggal */}
                <p className="text-sm text-gray-500 italic min-w-[100px] mt-1">
                  {item.periode}
                </p>

                {/* Kolom Konten (judul, deskripsi, tech) */}
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-black dark:text-white">
                    {item.title} · {item.company}
                  </h3>
                  <p className="text-gray-700 text-sm dark:text-gray-400">
                    {item.deskripsi}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {item.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-gray-800 text-white text-xs px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <div className="-mt-6 flex items-center">
               <a
    href="https://drive.google.com/drive/folders/1kX8_QhRLXFFXaT7DlNUCUzo1FgR4pWp1?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-1 dark:text-[#12ED74] text-black font-semibold px-2 py-3 group transition-all duration-300 hover:text-green-600 dark:hover:text-[#12ed75a6]"
  >
                View Full Resume
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 transform -rotate-15 group-hover:translate-x-2 group-hover:translate-y-[-2px] group-hover:rotate-0 transition-transform duration-300"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <CertificationCards />
      </div>
    </section>
  );
};

export default ExperienceSection;
