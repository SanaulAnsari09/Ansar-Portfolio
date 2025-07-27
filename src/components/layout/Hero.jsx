import { Mail, Youtube } from "lucide-react";

const Hero = ({ setActiveSection }) => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-6xl text-white mb-6 shadow-2xl">
              👨‍💻
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                MERN Stack
              </span>
              <br />
              <span className="text-gray-900 dark:text-white">Developer</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Passionate full-stack developer with 2+ years of experience
              building scalable web applications. Creator of educational
              content helping developers master the MERN stack.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="#contact"
              onClick={() => setActiveSection("contact")}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              <Mail size={20} />
              Get In Touch
            </a>
            <a
              href="https://www.youtube.com/@projectwithmee"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              <Youtube size={20} />
              YouTube Channel
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">2+</div>
              <div className="text-gray-600 dark:text-gray-400">
                Years Experience
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">5+</div>
              <div className="text-gray-600 dark:text-gray-400">
                Projects Built
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">50K+</div>
              <div className="text-gray-600 dark:text-gray-400">
                YouTube Views
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">100+</div>
              <div className="text-gray-600 dark:text-gray-400">
                Students Taught
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;