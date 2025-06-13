"use client";
import { useEffect, useRef, useState } from "react";

export default function AboutMeSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`w-full text-center md:text-left space-y-6 min-h-[70vh] ${
        visible ? "animate-slide-in-right-bottom" : "opacity-0"
      }`}
    >
      <div className="mb-4">
        {/* Untuk layar kecil: teks di atas, garis di bawah */}
        <div className="block md:hidden text-center">
          <h4 className="text-[#12ED74]  font-bold text-lg mb-1">About Me</h4>
          <div className="w-16 h-1 bg-[#12ED74] dark:bg-[#12ED74]  rounded-full mx-auto"></div>
        </div>

        {/* Untuk layar besar: teks kiri, garis kanan */}
        <div className="hidden md:flex items-center gap-1">
          <h4 className="text-green-600 dark:text-[#12ED74]  font-bold text-lg whitespace-nowrap">
            About Me
          </h4>
          <div className="w-12  h-1 bg-green-600 dark:bg-[#12ED74]  rounded-full"></div>
        </div>
      </div>

      {/* Nama */}
      <h2 className="text-2xl md:text-3xl font-bold">
        <span className="text-black dark:text-gray-300">Hello, Saya </span>
        <span className="text-green-600 dark:text-[#12ED74] ">
          MA'RUF HARIAM
        </span>
      </h2>

      {/* Deskripsi */}
      <p className=" italic text-sm text-gray-700 dark:text-gray-300 bg-white/40 dark:bg-gray-800/40 p-4 rounded-xl shadow-sm backdrop-blur-sm">
        <span className="italic">
          Saya mahasiswa semester enam di Universitas Jenderal Achmad Yani
          Yogyakarta, jurusan Sistem Informasi. Fokus saya sebagai{" "}
          <span className="font-semibold text-green-700 dark:text-[#12ED74] ">
            Fullstack Developer
          </span>{" "}
          dengan minat kuat di bidang{" "}
          <span className="font-semibold">Backend Development</span> dan{" "}
          <span className="font-semibold">DevOps</span>.
        </span>
        Saya memiliki pengalaman mengerjakan berbagai proyek berbasis web secara
        end-to-end, baik secara individu maupun tim. Fokus utama saya adalah
        membangun arsitektur backend yang efisien, terstruktur, dan mudah
        di-maintain.
        <br />
        <br />
        Saya juga terbiasa mengembangkan dan mengintegrasikan sisi frontend,
        sehingga memahami alur kerja sistem secara menyeluruh. Praktik kerja
        saya mencakup penggunaan version control, dokumentasi yang baik, dan
        otomasi dalam proses deployment. Saya percaya bahwa teknologi bukan
        hanya soal alat, tapi tentang menciptakan solusi nyata yang bermanfaat.
        Saya juga terus terbuka untuk belajar hal-hal baru, baik secara teknis
        maupun dalam pengembangan soft skill.
      </p>

      {/* Card info */}
      <div className="flex gap-4 justify-center md:justify-start">
        {/* Card 1 */}
        <div className="bg-white/20 dark:bg-gray-800/40 p-4 rounded-lg flex items-center gap-4 w-fit shadow-md">
          <p className="text-3xl font-bold text-green-700 dark:text-[#12ED74]  ">
            3+
          </p>
          <p className="text-sm font-medium text-black dark:text-gray-200">
            Years of Experience
          </p>
        </div>

        {/* Card 2 */}
        <div className=" bg-white/20 dark:bg-gray-800/40 p-4 rounded-lg flex items-center gap-4 w-fit shadow-md">
          <p className="text-3xl font-bold text-green-700 dark:text-[#12ED74]  ">
            20
          </p>
          <p className="text-sm font-medium text-black dark:text-gray-200">
            Projects Completed
          </p>
        </div>
      </div>
    </div>
  );
}
