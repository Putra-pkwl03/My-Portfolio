"use client";
import { useState } from "react";
import Image from "next/image";

const projects = [
  {
    title: "E-Learning Pembelajaran Siswa Disabilitas",
    deskripsi:
      "Dengan responsivitas tinggi dan fitur interaktif seperti text-to-speech, speech-to-text, serta integrasi API Userawai untuk aksesibilitas pengguna disabilitas.",
    role: "Full Stack Developer",
    frontend: "Laravel, Bootstrap, jQuery, JavaScript",
    backend: "Python-Flask, MongoDB, API Userawai, API TTS-STT",
    images: ["/img/projects/4.png"],
    url: "https://github.com/Putra-pkwl03/E-Learning_siswa_disabilias.git",
  },
  {
    title: "Website Pariwisata Ramah Disabilitas",
    deskripsi:
      "Fitur navigasi suara dan aksesibilitas otomatis terintegrasi sesuai kebutuhan. (Kompetisi Inhack GDSC Telkom Purwokerto)",
    role: "Full Stack Developer",
    frontend: "Vite.js, JavaScript, Bootstrap",
    backend: "Laravel, MySQL, API Endpoint, TTS API, STT API",
    images: ["/img/projects/6.png"],
    url: "https://github.com/Putra-pkwl03/Tectitans.git",
  },
  {
    title: "Prediksi Kesehatan Mental",
    deskripsi:
      "Website machine learning untuk memprediksi tingkat stres dengan fitur aksesibilitas dan model Logistic Regression.",
    role: "Backend Developer",
    frontend: "-",
    backend: "Python-Flask, MySQL, API Endpoint, TTS API, ML Model",
    images: ["/img/projects/8.png"],
    url: "https://github.com/Putra-pkwl03/Prediction-Mental-Health-Menggunakan-Model-Logistic-Regresi.git"
  },
  {
    title: "Admin Panel With Midtrans",
    deskripsi:
      "Admin panel dengan integrasi Midtrans untuk sistem pembayaran otomatis.",
    role: "Full Stack Developer",
    frontend: "Laravel Blade, Bootstrap",
    backend: "Laravel, MySQL, API Endpoint",
    images: ["/img/projects/14.png"],
    url: "https://github.com/Putra-pkwl03/Midtrans-with-PHP-Laravel.git",
  },
  {
    title: "Company Profile Cendana Solutions",
    deskripsi:
      "Website company profile terintegrasi WhatsApp, optimasi kecepatan, dan hosting di Niagahoster.",
    role: "Backend Developer",
    frontend: "-",
    backend: "Laravel, API Endpoint",
    images: ["/img/projects/16.png"],
    url: "https://cendanasolution.com",
  },
  {
    title: "Tlogo Putri Project Documentasi",
    deskripsi:
      "Documentasi RestFull API system Tlogo Putri dengan Postman dan hosting di server VPS.",
    role: "Backend Developer",
    frontend: "-",
    backend: "Laravel, API Endpoint, postman, MySQL, JWT",
    images: ["/img/projects/p1.jpg"],
    url: "https://documenter.getpostman.com/view/34659815/2sB2izFESR#2b47e77f-985e-40cc-9e4c-9a6c26f3f2cb",
  },
  {
    title: "Search ENGINE MINI",
    deskripsi:
      "membangun mini search engine kesehatan. Menggunakan package Wosh untuk indexing dan similarity search. Integrasi AI Chatbot dari Chatbase.co.",
    role: "Full Stack Developer",
    frontend: "React, Next.js, Tailwind CSS, TypeScript",
    backend: "Laravel, API Endpoint, postman, Wosh, Chatbase.co, MySQL",
    images: ["/img/projects/p2.jpg"],
    url: "https://github.com/Putra-pkwl03/Search-Engine-Mini-Be.git",
  },
  {
    title: "EWS Risk Management(PKM)",
    deskripsi:
      "Merancang dan membangun sistem Risk Dinas Kesehatan Kabupaten Sleman dengan integrasi JWT autentikasi, notifikasi real-time via Pusher, dan Gmail.",
    role: "Full Stack Developer",
    frontend: "React, Next.js, Tailwind CSS, Pusher",
    backend: "Laravel, API Endpoint, postman, JWT, Pusher, Gmail API, MySQL",
    images: ["/img/projects/p3.jpg"],
    url: "https://github.com/Putra-pkwl03/ews-risk-register-be.git",
  },
  {
    title: "Sistem Rekrutmen Karyawan untuk Efisiensi Perekrutan dan Seleksi",
    deskripsi:
      "Merancang dan membangun sistem rekrutmen karyawan dengan integrasi JWT autentikasidan Gmail.",
    role: "Full Stack Developer",
    frontend: "React, Next.js, Tailwind CSS, TypeScript",
    backend: "Laravel, API Endpoint, postman, JWT, Gmail API, MySQL",
    images: ["/img/projects/p4.jpg"],
    url: "https://github.com/Putra-pkwl03/Recruitment-System-Be.git",
  },
];
export default function ProjectGrid() {
  const [visibleCount, setVisibleCount] = useState(3); 

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3); 
  };

  const isAllVisible = visibleCount >= projects.length;

  return (
    <section
      id="projects"
      className="px-4 py-10 -mt-4 text-black dark:text-gray-300"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="inline-block px-4 py-2 mb-4 text-2xl font-bold text-gray-700 rounded-lg shadow-md bg-white/70 dark:bg-gray-900/70 backdrop-blur-md dark:text-gray-300">
          PROJECT SELECTED
        </h2>

        {/* Grid Card */}
        <div className="grid justify-center grid-cols-1 gap-8 p-4 text-gray-700 shadow-xl bg-white/40 rounded-xl dark:text-gray-100 dark:bg-gray-800/70 backdrop-blur-sm sm:grid-cols-2 lg:grid-cols-3">
          {/* Deskripsi */}
        <div className="mb-2 text-left sm:col-span-2 lg:col-span-3">
          <p className="text-gray-800 dark:text-gray-200">
            Beberapa proyek{" "}
            <span className="font-semibold text-green-400">pilihan</span>{" "}
            yang pernah saya{" "}
            <span className="font-semibold text-green-400">kerjakan</span>.
          </p>
        </div>
          {projects.slice(0, visibleCount).map((project, index) => (
            <a
              key={index}
              href={project.url || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden transition-all duration-300 bg-white shadow-lg rounded-2xl dark:bg-gray-800 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Gambar */}
              <div className="relative w-full h-48">
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Konten Modern */}
              <div className="flex flex-col gap-3 p-6">
                <h3 className="text-lg font-bold text-gray-800 transition-colors duration-300 dark:text-white hover:text-green-800 hover:dark:text-cyan-50">
                  {project.title}
                </h3>
                <span className="self-start px-3 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded-full dark:text-green-300 dark:bg-green-900/30">
                  {project.role}
                </span>
                <p className="min-h-[60px] text-sm text-gray-600 dark:text-gray-300 line-clamp-4">
                  {project.deskripsi}
                </p>
                <div className="my-2 border-t border-gray-200 dark:border-gray-600"></div>
                <div className="flex flex-col gap-1 text-sm">
                  <p className="text-gray-700 dark:text-white">
                    <strong className="text-gray-800 dark:text-gray-300">
                      Frontend:
                    </strong>{" "}
                    <span className="text-gray-700 dark:text-cyan-50">
                      {project.frontend}
                    </span>
                  </p>
                  <p className="text-gray-700 dark:text-white">
                    <strong className="text-gray-800 dark:text-gray-300">
                      Backend:
                    </strong>{" "}
                    <span className="text-gray-700 dark:text-cyan-50">
                      {project.backend}
                    </span>
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
          {!isAllVisible && (
            <div className="flex justify-center mt-6">
              <button
                onClick={handleLoadMore}
                className="relative px-6 py-3 overflow-hidden font-bold text-white rounded-lg shadow-lg cursor-pointer group animate-bounce-slow"
              >
                <span className="absolute inset-0 w-full h-full transition-transform duration-300 transform -translate-x-1 -translate-y-1 bg-green-800 rounded-lg dark:bg-green-950 opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full transition-transform duration-300 transform translate-x-1 translate-y-1 bg-green-600 rounded-lg dark:bg-green-500 opacity-60 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
                <span className="relative z-10">Show More</span>
                <span className="absolute inset-0 bg-green-500 rounded-lg dark:bg-green-700 opacity-20 animate-pulse"></span>
              </button>
            </div>
          )}

      </div>
    </section>
  );
}