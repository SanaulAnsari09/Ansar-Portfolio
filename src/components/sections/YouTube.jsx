import { Youtube, Play, Eye } from "lucide-react";
import videosData from "../../data/videos";
import { useEffect, useState } from "react";

const YOUTUBE_API_KEY = "AIzaSyBtiPAD5kIu3GtcbQfJkEVkxkmgN5gN7fs";
const YOUTUBE_CHANNLE_ID = "UCS3SJLppdKf7BG46SlUX5kg";

const YouTube = ({ setActiveSection }) => {
  const [videos, setVideos] = useState([]);
  const [activeVideoId, setActiveVideoId] = useState(null);
  const [loadingVideoId, setLoadingVideoId] = useState(null);
  const [nextPageToken, setNextPageToken] = useState(null);
  const [loadingMore, setLoadingMore] = useState(false);

  const fetchVideos = async (pageToken = "") => {
    try {
      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${YOUTUBE_CHANNLE_ID}&part=snippet,id&order=date&maxResults=9&pageToken=${pageToken}`
      );
      const data = await res.json();

      const parsedVideos = data.items
        .filter((item) => item.id.kind === "youtube#video")
        .map((item) => ({
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.high.url,
          videoId: item.id.videoId,
          link: `https://www.youtube.com/watch?v=${item.id.videoId}`,
          views: "N/A",
        }));

      setVideos((prev) => [...prev, ...parsedVideos]);
      setNextPageToken(data.nextPageToken || null);
    } catch (err) {
      console.error("Error fetching videos:", err);
    } finally {
      setLoadingMore(false);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

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
            Teaching MERN stack development through practical project tutorials
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
              35K+ Views
            </span>
          </a>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-900 rounded-2xl p-2 overflow-hidden shadow-xl transition-all duration-300 hover:bg-gray-700"
            >
              <div className="relative w-full aspect-video rounded-xl overflow-hidden cursor-pointer">
                <div
                  className="absolute inset-0"
                  onClick={() => {
                    setActiveVideoId(video.videoId);
                    setLoadingVideoId(video.videoId);
                  }}
                >
                  {activeVideoId === video.videoId ? (
                    <>
                      {loadingVideoId === video.videoId && (
                        <div className="absolute inset-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center z-10">
                          <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin" />
                        </div>
                      )}

                      <iframe
                        className="absolute inset-0 w-full h-full"
                        src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        onLoad={() => setLoadingVideoId(null)}
                      />
                    </>
                  ) : (
                    <>
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute top-[calc(50%-28px)] left-[calc(50%-28px)] p-3 rounded-full bg-black opacity-20 hover:opacity-70 transition-all duration-500">
                        <Play
                          className="text-white group-hover:opacity-100 transition-all duration-300"
                          size={48}
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-bold mb-2 line-clamp-2">{video.title}</h3>
                <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <Eye size={14} />
                    {video.views}
                  </div>
                  <a
                    href={video.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-600 text-white px-3 py-1 rounded-full hover:bg-red-700 transition-colors duration-300"
                  >
                    Watch on YouTube
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        {nextPageToken && (
          <div className="text-center mt-10">
            <button
              onClick={() => {
                setLoadingMore(true);
                fetchVideos(nextPageToken);
              }}
              className="px-6 py-3 bg-red-600 text-white rounded-full font-medium hover:bg-red-700 transition-colors duration-300 disabled:opacity-50"
              disabled={loadingMore}
            >
              {loadingMore ? "Loading..." : "Show More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default YouTube;
