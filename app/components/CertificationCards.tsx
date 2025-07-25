"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface CertificationItem {
  image: string;
  date: string;
  title: string;
  description: string;
  institution: string;
}

const certifications: CertificationItem[] = [
  {
    image: "/img/sertif/1.png",
    date: "25 Februari 2023",
    title: "InHack Competition",
    description: "penghargaain sebagai top 10 semifinal, GDSC",
    institution: "Telkom Purwokerto",
  },
  {
    image: "/img/sertif/win.png",
    date: "22 Februari 2025",
    title: "Magang Mandiri Kampus Merdeka",
    description: "Partisipasi dalam program magang mandiri di PT.Winnicode",
    institution: "PT.Winnicode Garuda Teknologi",
  },
  {
    image: "/img/sertif/sn8n.jpg",
    date: "22 Juli 2025",
    title: "Workflow N8N Course, No Code AI Agent Builder",
    description: "Menyelesaikan kursus n8n: No Code AI Agent Builder tanpa coding menggunakan n8n workflow automation.",
    institution: "Simplilearn SkillUp",
  },
  {
    image: "/img/sertif/2.png",
    date: "Desember 2023",
    title: "Alibaba Cloud Certification",
    description: "Menyelesaikan pelatihan Database Management System SQL",
    institution: "Alibaba Cloud",
  },
  {
    image: "/img/sertif/3.png",
    date: "Februari 2024",
    title: "Kelas Python Lanjutan",
    description: "Menyelesaikan pembelajaran pemrograman Python lanjutan",
    institution: "Skilvul",
  },
  {
    image: "/img/sertif/4.png",
    date: "19 Juli 2024",
    title: "Front-End Developer Certification",
    description: "Study kasus membangun Landing Page dengan Bootstrap",
    institution: "CodePolitan",
  },
  {
    image: "/img/sertif/5.png",
    date: "Januari 2024",
    title: "SAP Analytics Cloud",
    description: "Analisis data menggunakan SAP Analytics Cloud",
    institution: "Alibaba Cloud",
  },
  {
    image: "/img/sertif/6.png",
    date: "Desember 2024",
    title: "Kelas Laravel",
    description: "Toko Online dengan Midtrans payment",
    institution: "CodePolitan",
  },
];

const CertificationCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerSlide = 3;

  const totalSlides = Math.ceil(certifications.length / cardsPerSlide);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const interval = setInterval(() => handleNext(), 5000); // Auto-slide
    return () => clearInterval(interval);
  }, []);

  const currentCards = certifications.slice(
    currentIndex * cardsPerSlide,
    currentIndex * cardsPerSlide + cardsPerSlide
  );

  return (
    <div className="relative mt-6 ">
      <div className="relative items-center justify-start hidden mt-12 mb-8 ml-2 md:flex sm:ml-12 md:ml-24">
        {/* Lingkaran besar */}
        <div className="flex flex-col items-center justify-center flex-shrink-0 w-40 h-40 rounded-full shadow-2xl bg-white/40 dark:bg-white/5 backdrop-blur-sm">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-green-500 dark:bg-[#12ED74]  mt-2 rounded-full" />
        </div>

        {/* Penjelasan singkat di sebelah kanan lingkaran */}
        <p className="inline-block max-w-xl px-4 py-2 mt-2 ml-6 text-sm font-semibold text-left text-gray-800 rounded-lg shadow-xl dark:text-gray-200 bg-white/40 dark:bg-white/5 b backdrop-blur-md">
          Daftar{" "}
          <span className="text-green-800 font-semibold dark:text-[#12ED74] ">
            Sertifikasi
          </span>{" "}
          yang telah berhasil saya selesaikan sebagai
          <span className="text-green-800 font-semibold dark:text-[#12ED74] ">
            {" "}
            Bukti Kompetensi, Keterampilan,
          </span>{" "}
          dan{" "}
          <span className="text-green-800 font-semibold dark:text-[#12ED74] ">
            Komitmen
          </span>{" "}
          terhadap pembelajaran berkelanjutan di berbagai bidang{" "}
          <span className="text-green-800 font-semibold dark:text-[#12ED74] ">
            Teknologi
          </span>{" "}
          dan pengembangan diri.
        </p>
      </div>

      {/* MOBILE version */}
      <div className="flex flex-col items-center justify-center w-full gap-4 px-4 py-6 md:hidden">
        {/* Bulatan */}
        <div className="flex flex-col items-center justify-center w-32 h-32 rounded-full shadow-2xl bg-white/40 dark:bg-white/5 backdrop-blur-sm">
          <h2 className="text-base font-semibold text-center text-gray-800 dark:text-white">
            Certifications
          </h2>
          <div className="w-12 h-1 bg-green-500 dark:bg-[#12ED74] mt-2 rounded-full" />
        </div>

        {/* Deskripsi */}
        <p className="text-xs font-medium text-center text-gray-800 dark:text-gray-200 bg-white/40 dark:bg-white/5 px-4 py-3 rounded-lg shadow-xl backdrop-blur-md max-w-[300px]">
          Daftar{" "}
          <span className="text-green-800 dark:text-[#12ED74] font-semibold">
            Sertifikasi
          </span>{" "}
          yang telah berhasil saya selesaikan sebagai
          <span className="text-green-800 dark:text-[#12ED74] font-semibold">
            {" "}
            Bukti Kompetensi, Keterampilan,
          </span>{" "}
          dan
          <span className="text-green-800 dark:text-[#12ED74] font-semibold">
            {" "}
            Komitmen
          </span>{" "}
          terhadap pembelajaran berkelanjutan di berbagai bidang
          <span className="text-green-800 dark:text-[#12ED74] font-semibold">
            {" "}
            Teknologi
          </span>{" "}
          dan pengembangan diri.
        </p>
      </div>

      <div className="flex items-center justify-center gap-2">
        <div
          onClick={handlePrev}
          className="flex items-center justify-center px-1 py-3 transition-colors duration-300 rounded-sm shadow-xl cursor-pointer bg-white/40 dark:bg-white/10 backdrop-blur-md hover:bg-white/15 hover:dark:bg-white/20 hover:text-green-700 hover:dark:text-green-700"
        >
          <FaChevronLeft size={20} />
        </div>

        <div className="hidden gap-4 px-4 py-6 border shadow-lg sm:flex bg-white/40 dark:bg-white/5 backdrop-blur-md rounded-xl border-white/20">
          {currentCards.map((cert, index) => (
            <div
              key={index}
              className="bg-white/10 dark:bg-gray-800/60 backdrop-blur-md rounded-lg shadow-xl overflow-hidden w-[270px] flex-shrink-0 
                    transition-all duration-300 transform 
                    hover:-translate-y-8 hover:scale-110 hover:z-30 hover:shadow-2xl"
            >
              <div className="relative w-full h-40">
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                className="object-cover rounded-t-lg"
                sizes="(max-width: 768px) 100vw, 270px"
                priority
              />
            </div>

              <div className="p-3 space-y-2">
                {/* Tanggal & Institusi Sejajar */}
                <div className="flex justify-between text-xs text-green-700 dark:text-[#12ED74]  font-semibold">
                  <span>{cert.date}</span>
                  <span className="italic text-right text-gray-600 dark:text-gray-300">
                    {cert.institution}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-gray-800 dark:text-white">
                  {cert.title}
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {cert.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* mobile version */}
        <div className="flex w-full gap-3 px-2 py-4 overflow-x-auto border shadow-lg sm:hidden bg-white/40 dark:bg-white/5 backdrop-blur-md rounded-xl border-white/20 scrollbar-thin scrollbar-thumb-green-500">
          {currentCards.map((cert, index) => (
            <div
              key={index}
              className="w-[236px] flex-shrink-0 bg-white/10 dark:bg-gray-800/60 backdrop-blur-md rounded-lg shadow-xl 
      transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.03] hover:z-10 hover:shadow-2xl overflow-hidden"
            >
              {/* gambar diatur agar mengisi penuh lebar card */}
              <div className="relative w-full h-32">
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                className="object-cover rounded-t-lg"
                sizes="(max-width: 768px) 100vw, 236px"
                priority
              />
            </div>

              {/* konten teks */}
              <div className="p-3 space-y-1">
                <div className="flex justify-between text-[10px] text-green-700 dark:text-[#12ED74] font-semibold">
                  <span>{cert.date}</span>
                  <span className="italic text-gray-600 dark:text-gray-300">
                    {cert.institution}
                  </span>
                </div>
                <h4 className="text-xs font-bold text-gray-800 dark:text-white">
                  {cert.title}
                </h4>
                <p className="text-xs text-gray-700 dark:text-gray-300">
                  {cert.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div
          onClick={handleNext}
          className="flex items-center justify-center px-1 py-3 transition-colors duration-300 rounded-sm shadow-sm cursor-pointer bg-white/40 dark:bg-white/10 backdrop-blur-md hover:bg-white/15 hover:dark:bg-white/20 hover:text-green-700 hover:dark:text-green-700"
        >
          <FaChevronRight size={20} />
        </div>
      </div>

      {/* Slide Indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full ${
              i === currentIndex
                ? "bg-black dark:bg-[#12ED74]  "
                : "bg-gray-400 dark:bg-gray-600"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default CertificationCards;
