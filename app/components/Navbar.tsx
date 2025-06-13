"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState<string | null>(null);


  useEffect(() => {
    const saved = localStorage.getItem("darkMode") === "true";
    setIsDark(saved);
    document.documentElement.classList.toggle("dark", saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", isDark ? "true" : "false");
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const [showRocket, setShowRocket] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 4); 
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(
            "Section in view:",
            entry.target.id,
            entry.isIntersecting
          );
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      setShowRocket(true);
  
      const id = href.slice(1);
      const target = document.getElementById(id);
  
      // Set active langsung
      setCurrentSection(id);
  
      setTimeout(() => {
        if (target) {
          const yOffset = -120;
          const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
          history.replaceState(null, "", href);
        }
        setShowRocket(false);
      }, 900);
    }
  };
  
  
  

  return (
    <>
      <nav
        className={`fixed z-50 left-1/2 transform -translate-x-1/2 transition-all duration-500 ease-in-out
      ${
        isScrolled
          ? "top-0 left-0 w-full  bg-white/70 dark:bg-gray-900/70 backdrop-blur-md  text-gray-800 dark:text-white shadow-md py-2 px-4 rounded-none"
          : "top-6 px-8 py-2  bg-white/70 dark:bg-gray-900/70 shadow-xl rounded-full backdrop-blur-xl border border-gray-200 dark:border-gray-700"
      }
    `}
      >
        <div
          className={`max-w-5xl mx-auto flex justify-between items-center ${
            isScrolled ? "gap-2" : "gap-18"
          }`}
        >
          {/* Brand */}
          <div className="flex items-center">
            <div className="text-xl font-semibold">
              {isScrolled ? "My Portfolio" : "M"}
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 text-md font-bold text-gray-500 dark:text-gray-300">
            {["About", "Skills", "Experience", "Projects", "Contact"].map(
              (item) => {
                const isContact = item === "Contact";
                const href = `#${item.toLowerCase()}`;

                return (
                  <Link
                    key={item}
                    href={href}
                    onClick={(e) => handleClick(e, href)}
                    scroll={false}
                    className={`transition font-bold text-md flex items-center px-3 py-1.5 ${
                      isContact
                        ? "bg-green-500 dark:bg-[#12ED74] text-white rounded-lg shadow-md hover:bg-green-600 hover:dark:bg-[#12ed75a6]"
                        : currentSection === item.toLowerCase()
                        ? "text-green-600 dark:text-[#12ED74]"
                        : "text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-green-100"
                    }`}
                  >
                    {item}
                  </Link>
                );
              }
            )}

            <button
              onClick={() => setIsDark(!isDark)}
              className="text-xl text-gray-600 dark:text-gray-300 hover:text-sky-100 hover:bg-gray-800 cursor-pointer dark:hover:text-yellow-400 transition 
             border-2 border-green-400 dark:border-[#12ED74]  rounded-full p-2 w-10 h-10 flex items-center justify-center"
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDark ? <FaSun /> : <FaMoon />}
            </button>
          </div>

          {/* Mobile Toggle Button + Theme Toggle */}
          <div className="md:hidden flex items-center gap-4">
            {/* Theme Toggle (di kiri) */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="text-xl text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-yellow-400 transition"
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDark ? <FaSun /> : <FaMoon />}
            </button>

            {/* Burger menu */}
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 mx-4 rounded-xl bg-white dark:bg-gray-800 py-3 px-4 space-y-2 z-40">
            {["About", "Skills", "experience", "Projects", "Contact"].map(
              (item) => {
                const isContact = item === "Contact";
                const href = `#${item.toLowerCase()}`;

                return (
                  <Link
                    key={item}
                    href={href}
                    onClick={(e) => {
                      handleClick(e, href);
                      setIsOpen(false);
                    }}
                    scroll={false}
                    className={`transition font-bold text-md flex items-center px-3 py-1.5 rounded-md ${
                      isContact
                        ? "bg-green-500 dark:bg-[#12ED74] text-white shadow-md hover:bg-green-600 hover:dark:bg-[#12ed75a6]"
                        : currentSection === item.toLowerCase()
                        ? "text-green-800 dark:text-[#12ED74]"
                        : "text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-green-100"
                    }`}                    
                  >
                    {item}
                  </Link>
                );
              }
            )}
          </div>
        )}
      </nav>

      {showRocket && (
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 translate-y-75 z-[9999] animate-rocket pointer-events-none">
          <div className="relative">
            <img
              src="/rocket.svg"
              alt="Rocket"
              className="w-32 h-32 mx-auto drop-shadow-[0_0_25px_rgba(255,255,255,0.9)] animate-rocket-shake"
            />
            {/* Api roket */}
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-30 h-24 bg-yellow-400 rounded-full blur-2xl animate-flame" />
          </div>

          {/* Asap besar */}
          <div className="relative mt-6 flex flex-col items-center space-y-3">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className={`w-36 h-34 rounded-full bg-gray-500/70 blur-xl animate-smoke-pulse`}
                style={{ animationDelay: `${i * 300}ms` }}
              />
            ))}
          </div>

          {/* Gumpalan awan */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-3 opacity-80">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-8 h-8 bg-gray-500 rounded-full blur-2xl opacity-60"
                style={{
                  animation: "cloud 6s ease-in-out infinite",
                  animationDelay: `${i * 300}ms`,
                }}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
