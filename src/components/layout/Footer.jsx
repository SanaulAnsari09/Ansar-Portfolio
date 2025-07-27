import { Mail, Github, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Sanaul Ansari
          </div>
          <p className="text-gray-400 mb-6">
            MERN Stack Developer & YouTube Content Creator
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="mailto:ansarocode09@gmail.com"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://github.com/SanaulAnsari09"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.youtube.com/@projectwithmee"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-400 transition-colors duration-300"
            >
              <Youtube size={24} />
            </a>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500">
              © 2025 Sanaul Ansari. Built with React & Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
