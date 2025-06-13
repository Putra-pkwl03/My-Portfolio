import {
  FaWhatsapp,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaAddressCard,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white/40 dark:bg-gray-900/70 backdrop-blur-md text-gray-800 dark:text-white w-full mt-4 py-8 px-6 md:px-16 shadow-[0_-4px_6px_-4px_rgba(0,0,0,0.2)]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Branding dan copyright */}
        <div className="flex flex-col items-start">
          <h3 className="text-xl font-semibold mb-3">My Portfolio</h3>
          <p className="text-sm max-w-xs mb-4">
            Selamat datang di portfolio saya! Terima kasih sudah mampir dan
            jangan ragu menghubungi saya.
          </p>
          <p className="text-xs opacity-70">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Container Contact + Social media kanan */}
        <div className="flex justify-end gap-28">
          {/* Contact Me */}
          <div className="flex flex-col items-start">
            <h4 className="font-semibold mb-4 text-md">Contact Me</h4>
            <nav className="flex flex-col gap-3 text-sm">
              <a
                href="https://wa.me/6282314969109"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-green-600 transition"
              >
                <FaWhatsapp size={20} />
                WhatsApp
              </a>
              <a
                href="mailto:putrapongkowulu@gmail.com"
                className="flex items-center gap-3 hover:text-blue-600 transition"
              >
                <FaEnvelope size={20} />
                Email
              </a>
              <a
                href="#contact"
                className="flex items-center gap-3 hover:text-indigo-600 transition"
              >
                <FaAddressCard size={20} />
                Contact Form
              </a>
            </nav>
          </div>

          {/* Follow Me */}
          <div className="flex flex-col items-start">
            <h4 className="font-semibold mb-4 text-md">Follow Me</h4>
            <nav className="flex flex-col gap-3 text-sm">
              <a
                href="https://github.com/putrapkwl114117"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-blue-900 dark:hover:text-white transition"
              >
                <FaGithub size={20} />
                Github
              </a>
              <a
                href="https://instagram.com/putra_pkwl03"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-pink-600 transition"
              >
                <FaInstagram size={20} />
                Instagram
              </a>
              <a
                href="https://linkedin.com/in/ma-ruf-hariam-1b894b267"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-blue-500 transition"
              >
                <FaLinkedin size={20} />
                LinkedIn
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
