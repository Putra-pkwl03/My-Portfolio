'use client';
import { useState } from 'react';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    title: "E-Learning Pembelajaran Siswa Disabilitas",
    deskripsi: "Dengan mempertimbangkan responstabilitas tinggi dan vitur interaktif text to speach, speach to text dan penggunakan API Userawai untuk membangun vitur disabilitas interaktive.",
    role: "Full Stack Developer",
    frontend: "Laravel, Botstrap CSS, Jquery, JavaScripts",
    backend: "Python-Flask, MongoDb, API Userawai, API TTS, API STT",
    images: [
      "/img/projects/1.png",
      "/img/projects/2.png",
      "/img/projects/3.png",
      "/img/projects/4.png"
    ]
  },
  {
    title: "Website Pariwisata Ramah Disabilitas",
    deskripsi: "Terdiri dari beberapa vitur diantaranya vitur navigasi suara, vitur navigasi disabilitas otomatis yang di integrasikan sesuai kebutuhan. (kompetisi inhack gdsc telkom purwekerto)",
    role: "Full Stack Developer",
    frontend: "Vite.js, JavaScript, Botstrap CSS",
    backend: "PHP-Laravel, MySql, API Endpoin, TTS API, STT API",
    images: [
      "/img/projects/5.png",
      "/img/projects/6.png",
      "/img/projects/7.png"
    ]
  },
  {
    title: "Prediksi Kesehatan Mental",
    deskripsi: "Project ini adalah website yang diintegrasikan dengan michine learning untuk memprediksi tingkat stres.dilengkapi dengan vitur ramah disabilitas menggunakan model Logistic Regresi",
    role: "Backend Developer",
    frontend: "-",
    backend: "Python-Flask, MySql, API Endpoin, TTS API, Mechine Learning Model Git dan Github",
    images: [
      "/img/projects/8.png",
      "/img/projects/9.png",
      "/img/projects/10.png",
      "/img/projects/11.png"
    ]
  },
  {
    title: "Admin Panel With Midtrans",
    deskripsi: "Website ini dibangun menggunakan Laravel Livewire dengan integrasi Midtrans untuk sistem pembayaran. Paket: MIDTRANS_CLIENTKEY dan MIDTRANS_SERVERKEY untuk autentikasi. MIDTRANS_IS_PRODUCTION, MIDTRANS_IS_SANITIZED, dan MIDTRANS_IS_3DS",
    role: "Full Stack Developer",
    frontend: "View Laravel Blade, Bootstrap",
    backend: "PHP-Laravel, MySql, API Endpoin",
    images: [
      "/img/projects/12.png",
      "/img/projects/13.png",
      "/img/projects/14.png",
      "/img/projects/15.png"
    ]
  },
  {
    title: "Compeny Prifile Cendana Solutions",
    deskripsi: "Pengambangan Website compeny prifile ini merupakan permintaan client dan saya membangunnya menggunakan Laravel dan bootstrap css kemudian integrasi vitur WA dan optimasi kecepatan dan terakhir melakukan Hosting Ke NiagaHoster",
    role: "Backend Developer",
    frontend: "View Laravel Blade, Bootstrap",
    backend: "PHP-Laravel,  API Endpoin Git dan Github",
    images: [
      "/img/projects/16.png",
      "/img/projects/17.png",
      "/img/projects/18.png",
    ]
  },
];

export default function ProjectCarousel() {
  const [projectIndex, setProjectIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  const currentProject = projects[projectIndex];
  const currentImage = currentProject.images[imageIndex];

  const nextImage = () => {
    setImageIndex((prev) => (prev + 1) % currentProject.images.length);
  };

  const prevImage = () => {
    setImageIndex((prev) =>
      prev === 0 ? currentProject.images.length - 1 : prev - 1
    );
  };

  const nextProject = () => {
    const newIndex = (projectIndex + 1) % projects.length;
    setProjectIndex(newIndex);
    setImageIndex(0);
  };

  const prevProject = () => {
    const newIndex = projectIndex === 0 ? projects.length - 1 : projectIndex - 1;
    setProjectIndex(newIndex);
    setImageIndex(0);
  };

  return (
    <section
      id="projects"
      className=" text-black dark:text-gray-500 px-4 md:px-12 mb-16"
    >
      <div className="max-w-5xl mx-auto">
        {/* Judul seluruh section */}
        <h2 className="text-2xl font-bold mb-8 text-gray-700 dark:text-gray-300 bg-white/70 dark:bg-gray-900/70 px-4 py-2 rounded-lg shadow-md backdrop-blur-md inline-block">
          PROJECT SELECTED
        </h2>

        {/* Container Project */}
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-4 md:gap-6 dark:text-gray-100">
          {/* Kiri: Konten deskripsi + judul + role */}
          <motion.div
            key={projectIndex}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.4 }}
            className="flex-1 bg-white/60 dark:bg-gray-800/70 rounded-xl  backdrop-blur-sm p-6 shadow-xl"
          >
            <h3 className="text-md font-semibold text-black dark:text-white mb-2">
              {currentProject.title}
            </h3>
            <p className="text-green-500 dark:text-[#12ED74]  mb-2">
              {currentProject.role}
            </p>
            <p className="text-gray-700 dark:text-gray-100 mb-3 text-sm font-semibold">
              {currentProject.deskripsi}
            </p>
            <p className="text-sm text-gray-800 dark:text-gray-300 mb-1">
              <strong>Frontend Stack:</strong> {currentProject.frontend}
            </p>
            <p className="text-sm text-gray-800 dark:text-gray-300 mb-4">
              <strong>Backend:</strong> {currentProject.backend}
            </p>

            {/* Navigasi project */}
            <div className="flex gap-4 mt-6 flex-wrap">
              {projectIndex > 0 && (
                <button
                  onClick={prevProject}
                  className="group relative flex items-center gap-1 sm:gap-2 px-3 sm:px-5 py-1.5 sm:py-2 text-sm sm:text-base rounded bg-green-500 text-white overflow-hidden transition-all duration-300 dark:bg-[#12ED74] hover:bg-green-600 hover:dark:bg-green-600"
                >
                  <span className="relative z-10 flex items-center gap-1 sm:gap-2">
                    <FaArrowLeft className="text-sm sm:text-base" />
                    <span>Back Project</span>
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/60 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-move blur-sm brightness-125" />
                </button>
              )}
              <button
                onClick={nextProject}
                className="group relative flex items-center gap-1 sm:gap-2 px-3 sm:px-5 py-1.5 sm:py-2 text-sm sm:text-base rounded bg-green-500 text-white overflow-hidden transition-all duration-300 dark:bg-[#12ED74] hover:bg-green-600 hover:dark:bg-green-600"
              >
                <span className="relative z-10 flex items-center gap-1 sm:gap-2">
                  <span>Next Project</span>
                  <FaArrowRight className="text-sm sm:text-base" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-black/20 via-green/80 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-move blur-sm brightness-125" />
              </button>
            </div>
          </motion.div>

          {/* Kanan: Gambar */}
          <div className="relative flex-1 max-w-[400px] w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImage}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="w-full"
              >
                <Image
                  src={currentImage}
                  alt={currentProject.title}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl object-cover w-full hover:scale-[1.02] transition-transform duration-300 ease-in-out"
                />
              </motion.div>
            </AnimatePresence>

            {/* Tombol navigasi gambar */}
            <button
              onClick={prevImage}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full hover:bg-gray-700 hover:scale-110 transition cursor-pointer"
              title="Previous Image"
            >
              <FaArrowLeft className="text-white" />
            </button>
            <button
              onClick={nextImage}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-[#12ED74]  p-2 rounded-full hover:bg-green-600 hover:scale-110 transition cursor-pointer"
              title="Next Image"
            >
              <FaArrowRight className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}  