import { Mail, Youtube } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = ({ setActiveSection }) => {
  const [stats, setStats] = useState([
    { value: "2+", label: "Years Experience", color: "text-blue-600" },
    { value: "5+", label: "Projects Built", color: "text-purple-600" },
    { value: "35K+", label: "YouTube Views", color: "text-green-600" },
    { value: "100+", label: "Students Taught", color: "text-orange-600" }
  ]);

  // Animation effect for stats
  useEffect(() => {
    const animateStats = () => {
      setStats(prevStats => 
        prevStats.map(stat => ({
          ...stat,
          value: stat.value.replace(/[0-9]+/g, "0")
        }))
      );

      setTimeout(() => {
        setStats([
          { value: "2+", label: "Years Experience", color: "text-blue-600" },
          { value: "5+", label: "Projects Built", color: "text-purple-600" },
          { value: "35K+", label: "YouTube Views", color: "text-green-600" },
          { value: "100+", label: "Students Taught", color: "text-orange-600" }
        ]);
      }, 500);
    };

    const timer = setTimeout(animateStats, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300"
      onMouseEnter={() => setActiveSection("home")}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8">
            {/* Animated Avatar */}
            <div className="w-40 h-40 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-6xl text-white mb-6 shadow-2xl animate-bounce transition-all duration-1000">
              {/* <span className="animate-pulse">👨‍💻</span> */}
              <img src="/ansar.png" alt="ansar" className="h-35 w-35 rounded-full" />
            </div>
            
            {/* Headline */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                MERN Stack
              </span>
              <br />
              <span className="text-gray-900 dark:text-white">Developer</span>
            </h1>
            
            {/* Description */}
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Passionate full-stack developer with 2+ years of experience
              building scalable web applications. Creator of educational
              content helping developers master the MERN stack.
            </p>
          </div>

          {/* Action Buttons */}
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

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-3xl font-bold ${stat.color} transition-all duration-1000`}>
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;