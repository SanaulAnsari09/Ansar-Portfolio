import { Globe, Server, Database, GitBranch } from "lucide-react";
import SkillBar from "../common/SkillBar";
import skillsData from "../../data/skills";

const Skills = ({ setActiveSection }) => {
  return (
    <section 
      id="skills" 
      className="py-20 transition-colors duration-300"
      onMouseEnter={() => setActiveSection("skills")}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Proficient in modern web technologies and frameworks
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg transition-colors duration-300">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Globe className="text-blue-600" size={24} />
              Frontend
            </h3>
            {skillsData.frontend.map((skill, index) => (
              <SkillBar key={index} skill={skill} />
            ))}
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg transition-colors duration-300">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Server className="text-green-600" size={24} />
              Backend
            </h3>
            {skillsData.backend.map((skill, index) => (
              <SkillBar key={index} skill={skill} />
            ))}
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg transition-colors duration-300">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Database className="text-purple-600" size={24} />
              Database
            </h3>
            {skillsData.database.map((skill, index) => (
              <SkillBar key={index} skill={skill} />
            ))}
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg transition-colors duration-300">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <GitBranch className="text-orange-600" size={24} />
              Tools
            </h3>
            {skillsData.tools.map((skill, index) => (
              <SkillBar key={index} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;