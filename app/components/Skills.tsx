"use client";
import React, { useEffect, useRef, useState } from "react";

const skills = [
  { name: "HTML, CSS", level: 97 },
  { name: "JavaScript", level: 85 },
  { name: "React.js", level: 90 },
  { name: "Next.js", level: 85 },
  { name: "Vue.js", level: 75 },
  { name: "PHP", level: 80 },
  { name: "Laravel", level: 90 },
  { name: "MySQL", level: 85 },
  { name: "Python", level: 80 },
  { name: "Flask", level: 75 },
  { name: "Django", level: 75 },
  { name: "PostgreSQL", level: 80 },
];

const services = [
  { name: "API Management", icon: "/img/api-app-coding-2-svgrepo-com.svg" },
  { name: "Website Development", icon: "/img/website-question-svgrepo-com.svg" },
  { name: "DevOps & CI/CD", icon: "/img/dev-ops-solid-svgrepo-com.svg" },
  { name: "Relationship Database Management System", icon: "/img/database-svgrepo-com.svg" },
  { name: "API Documentation ", icon: "/img/api-page-svgrepo-com.svg" },
  { name: "Git Workflow Management", icon: "/img/git-svgrepo-com.svg" },
  { name: "NoSQL Database", icon: "/img/mongodb-svgrepo-com.svg" },
  { name: "Website Deployment", icon: "/img/website-generic-svgrepo-com.svg" },
  { name: "Debugging and Testing", icon: "/img/app-manager-debug-svgrepo-com.svg" },
  { name: "Problem Solving", icon: "/img/problem-solving-skill-svgrepo-com.svg" },
];

export default function SkillsSection() {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);
  const offerRef = useRef(null);
  const [offerVisible, setOfferVisible] = useState(false);
  const [visibleLevels, setVisibleLevels] = useState(skills.map(() => 0));

  // SKILLS ANIMASI
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setAnimate(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (animate) {
      const intervals: NodeJS.Timeout[] = [];

      skills.forEach((skill, index) => {
        let current = 0;
        const target = skill.level;
        const step = Math.ceil(target / 40);

        const interval = setInterval(() => {
          current += step;
          if (current >= target) {
            current = target;
            clearInterval(interval);
          }
          setVisibleLevels((prev) => {
            const updated = [...prev];
            updated[index] = current;
            return updated;
          });
        }, 30);

        intervals.push(interval);
      });

      return () => intervals.forEach(clearInterval);
    } else {
      setVisibleLevels(skills.map(() => 0));
    }
  }, [animate]);

  // WHAT I OFFER ANIMASI
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setOfferVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (offerRef.current) observer.observe(offerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      className="text-black dark:text-gray-300 px-4 md:px-12 mb-16"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-gray-500 dark:text-gray-300 bg-white/70 dark:bg-gray-900/70 px-4 py-2 rounded-lg shadow-md backdrop-blur-md inline-block">
          WHAT AM I BEST AT?
        </h2>

        <div
          ref={sectionRef}
          className="grid md:grid-cols-2 gap-6 text-gray-500 dark:text-gray-100 bg-white/40 dark:bg-gray-800/70 rounded-xl shadow-xl backdrop-blur-sm p-4 mb-6"
        >
          {skills.map((skill, index) => (
            <div key={skill.name} className="mb-2">
              <div className="flex justify-between items-center mb-1">
                <span className="text-md font-medium">{skill.name}</span>
                <span className="text-sm text-green-600 dark:text-[#12ed75ad]  font-semibold">
                  {visibleLevels[index]}%
                </span>
              </div>
              <div className="w-full bg-gray-700 dark:bg-gray-500 rounded-full h-2 relative">
                <div
                  className="bg-green-500 h-2 rounded-full dark:bg-[#12ED74]  transition-all duration-[2000ms] ease-out"
                  style={{ width: animate ? `${skill.level}%` : "0%" }}
                ></div>
                <div
                  className="absolute -top-1 w-4 h-4 rounded-full bg-green-800 dark:bg-[#12ED74]  z-10 transition-all duration-[2000ms] ease-out shadow-md"
                  style={{
                    left: animate ? `${skill.level}%` : "0%",
                    transform: "translate(-50%, 0)",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-bold text-gray-500 dark:text-gray-300 bg-white/70 dark:bg-gray-900/70 px-4 py-2 rounded-lg shadow-md backdrop-blur-md inline-block mb-4">
          WHAT I OFFER?
        </h2>

        <div className="bg-white/40 dark:bg-gray-800/70 rounded-xl shadow-xl backdrop-blur-sm p-4">
          <p className="mb-8 text-gray-800 dark:text-gray-200">
            I offer a wide range of{" "}
            <span className="text-green-400 font-semibold">Top Notch</span>{" "}
            services to complete the{" "}
            <span className="text-green-400 font-semibold">Dream projects</span>{" "}
            of my clients.
          </p>

          <div
            ref={offerRef}
            className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {services.map((service, index) => (
              <div
                key={service.name}
                className={`bg-white/20 dark:bg-gray-600/70 p-3 rounded-xl shadow-xl flex flex-col items-center text-center text-sm font-medium text-gray-800 dark:text-gray-200 overflow-hidden flex-shrink-0 w-54 mx-auto
                transform transition-all duration-300
                hover:-translate-y-8 hover:scale-100 hover:z-50 hover:shadow-2xl
                ${offerVisible ? "animate-drop-in" : "opacity-0"}`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: "forwards",
                }}
              >
                <img
                  src={service.icon}
                  alt={service.name}
                  className="w-12 h-12 mb-2"
                />
                <div>{service.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
