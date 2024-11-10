import { FaFacebook, FaDiscord, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-8 px-4">
      {/* Top Section: Profile and Navigation */}
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-start">
        
        {/* Profile Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src="../images/logo.png" 
            alt="Ruba Haroon"
            className="w-16 h-16 rounded-full mb-2"
          />
          <h2 className="text-lg font-semibold">Ruba Haroon</h2>
          <p className="text-sm mt-2">
            An amazing web developer portfolio website to showcase their work and skills.
          </p>
        </div>

        {/* Navigation Links Section (Align to the right) */}
        <div className="flex justify-end md:justify-start space-x-6 lg:space-x-0 lg:flex-col lg:space-y-2 text-center">
          <a href="/" className="hover:text-white">Home</a>
          <a href="/about" className="hover:text-white">About Me</a>
          <a href="/skills" className="hover:text-white">Skills</a>
          <a href="/blogs" className="hover:text-white">Blogs</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </div>

      {/* Bottom Section: Social Media Icons */}
      <div className="flex justify-center space-x-6 mt-8">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-white">
          <FaFacebook size={24} />
        </a>
        <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-white">
          <FaDiscord size={24} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-white">
          <FaLinkedin size={24} />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-white">
          <FaGithub size={24} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-white">
          <FaInstagram size={24} />
        </a>
      </div>

      {/* Copyright Text */}
      <div className="text-center text-sm text-gray-500 mt-4">
        © Ruba Haroon — 2024
      </div>
    </footer>
  );
}
