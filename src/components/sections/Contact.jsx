import { Mail, Phone, Github, Youtube } from "lucide-react";

const Contact = ({ setActiveSection }) => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300"
      onMouseEnter={() => setActiveSection("contact")}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Ready to bring your ideas to life? Let's discuss your next
            project!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center transition-colors duration-300">
                  <Mail className="text-blue-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a
                    href="mailto:ansarocode09@gmail.com"
                    className="text-blue-600 hover:underline transition-colors duration-300"
                  >
                    ansarocode09@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center transition-colors duration-300">
                  <Phone className="text-green-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <a
                    href="tel:+918809451434"
                    className="text-green-600 hover:underline transition-colors duration-300"
                  >
                    +91-8809451434
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-300">
                  <Github
                    className="text-gray-600 dark:text-gray-400"
                    size={20}
                  />
                </div>
                <div>
                  <h4 className="font-semibold">GitHub</h4>
                  <a
                    href="https://github.com/SanaulAnsari09"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:underline transition-colors duration-300"
                  >
                    github.com/SanaulAnsari09
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center transition-colors duration-300">
                  <Youtube className="text-red-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">YouTube</h4>
                  <a
                    href="https://www.youtube.com/@projectwithmee"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 hover:underline transition-colors duration-300"
                  >
                    @projectwithmee
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl transition-colors duration-300">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;