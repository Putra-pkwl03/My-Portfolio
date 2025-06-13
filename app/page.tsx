import ProfileCard from "./components/ProfileCard";
import AboutMeSection from "./components/AboutMe";
import SkillsSection from "./components/Skills";
import ProjectCarousel from "./components/Projects";
import ExperienceSection from "./components/Exeriences";
import ContactSection from "./components/ContactSection";



export default function HomePage() {
  return (
    <>
      <section
        id="about"
        className="flex items-center justify-center px-4 py-6  pt-18"
      >
        <div className="flex flex-col md:flex-row items-center gap-2 w-full max-w-6xl">
          {/* Kartu Profil */}
          <div className="w-full md:w-1/2 flex justify-center md:-ml-8 mb-6">
            <ProfileCard />
          </div>

          {/* About Me */}
          <div className="w-full md:w-1/2 mt-[-20px]">
            <AboutMeSection />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection />

      {/* Experience Section */}
      <ExperienceSection />

      {/* projects sectiosn carosel */}
      <ProjectCarousel />

      {/* contaxt section page */}
      <ContactSection />


    </>
  );
}
