import { Youtube, Play, Eye } from "lucide-react";
import videosData from "../../data/videos";

const YouTube = ({ setActiveSection }) => {
  return (
    <section 
      id="youtube" 
      className="py-20 transition-colors duration-300"
      onMouseEnter={() => setActiveSection("youtube")}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            YouTube Channel
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Teaching MERN stack development through practical project
            tutorials
          </p>
          <a
            href="https://www.youtube.com/@projectwithmee"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-red-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <Youtube size={24} />
            Subscribe to @projectwithmee
            <span className="bg-red-500 px-3 py-1 rounded-full text-sm">
              50K+ Views
            </span>
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videosData.map((video, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-video bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900 dark:to-red-800 flex items-center justify-center text-6xl relative group cursor-pointer">
                {video.thumbnail}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <Play
                    className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300"
                    size={48}
                  />
                </div>
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                  {video.duration}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold mb-2 line-clamp-2">{video.title}</h3>
                <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <Eye size={14} />
                    {video.views} views
                  </div>
                  <a
                    href={video.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-600 text-white px-3 py-1 rounded-full hover:bg-red-700 transition-colors duration-300"
                  >
                    Watch
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YouTube;