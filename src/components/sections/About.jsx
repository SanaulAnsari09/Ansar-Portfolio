import { Code, Database, Users } from "lucide-react";

const About = ({ setActiveSection }) => {
  return (
    <section 
      id="about" 
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
      onMouseEnter={() => setActiveSection("about")}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-blue-600">
              Professional Journey
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              I'm a passionate MERN Stack Developer with over 2 years of
              hands-on experience in building scalable web applications.
              Currently working at PerfectionGeeks Pvt Ltd, I specialize in
              creating dynamic UIs and robust backend systems.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              My expertise spans the entire development lifecycle - from
              designing responsive frontends with React.js to building secure
              APIs with Node.js and Express.js. I'm committed to writing
              clean, modular, and reusable code that follows industry best
              practices.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-blue-100 dark:bg-blue-900 px-4 py-2 rounded-full transition-colors duration-300">
                <Code size={16} />
                <span className="text-sm font-medium">Clean Code</span>
              </div>
              <div className="flex items-center gap-2 bg-purple-100 dark:bg-purple-900 px-4 py-2 rounded-full transition-colors duration-300">
                <Database size={16} />
                <span className="text-sm font-medium">Scalable Systems</span>
              </div>
              <div className="flex items-center gap-2 bg-green-100 dark:bg-green-900 px-4 py-2 rounded-full transition-colors duration-300">
                <Users size={16} />
                <span className="text-sm font-medium">Team Player</span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl transition-colors duration-300">
            <h4 className="text-xl font-bold mb-6">Experience Timeline</h4>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div>
                  <h5 className="font-bold">Full-Stack Developer</h5>
                  <p className="text-blue-600 font-medium">
                    DeboxGlobal Pvt Ltd
                  </p>
                  <p className="text-sm text-gray-500">
                    March 2025 - Present
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div>
                  <h5 className="font-bold">Full-Stack Developer</h5>
                  <p className="text-purple-600 font-medium">
                    PerfectionGeeks Technologies
                  </p>
                  <p className="text-sm text-gray-500">
                    Sep 2023 - March 2025
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">
                  📺
                </div>
                <div>
                  <h5 className="font-bold">YouTube Practical Project Creator</h5>
                  <p className="text-red-600 font-medium">Self-Initiated</p>
                  <p className="text-sm text-gray-500">Ongoing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;