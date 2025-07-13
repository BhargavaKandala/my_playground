import React, { useState } from 'react';

export default function App() {
  const [activeSection, setActiveSection] = useState('about');

  const projects = [
    {
      title: "Sentiment Analysis with LSTM",
      description: "Developed an LSTM-based model to predict sentiment from textual data.",
      tech: "Python, TensorFlow"
    },
    {
      title: "Image Classifier using CNN",
      description: "Built a convolutional neural network for multi-class image classification.",
      tech: "Python, PyTorch"
    },
    {
      title: "Chatbot using NLP",
      description: "Designed a chatbot that responds to domain-specific queries using NLP techniques.",
      tech: "Python, Flask, NLTK"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      {/* Header / Navbar */}
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold text-indigo-600">John Doe</h1>
          <nav className="space-x-4 hidden md:flex">
            <button onClick={() => setActiveSection('about')} className={transition-colors hover:text-indigo-600 ${activeSection === 'about' ? 'text-indigo-600 font-semibold' : ''}}>About</button>
            <button onClick={() => setActiveSection('projects')} className={transition-colors hover:text-indigo-600 ${activeSection === 'projects' ? 'text-indigo-600 font-semibold' : ''}}>Projects</button>
            <button onClick={() => setActiveSection('skills')} className={transition-colors hover:text-indigo-600 ${activeSection === 'skills' ? 'text-indigo-600 font-semibold' : ''}}>Skills</button>
            <button onClick={() => setActiveSection('contact')} className={transition-colors hover:text-indigo-600 ${activeSection === 'contact' ? 'text-indigo-600 font-semibold' : ''}}>Contact</button>
          </nav>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div className="md:hidden bg-white border-b px-4 py-2">
        <select
          value={activeSection}
          onChange={(e) => setActiveSection(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          <option value="about">About</option>
          <option value="projects">Projects</option>
          <option value="skills">Skills</option>
          <option value="contact">Contact</option>
        </select>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8 space-y-12">

        {/* About Section */}
        {activeSection === 'about' && (
          <section className="animate-fadeInUp">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <img src="https://placehold.co/300x300 " alt="Profile" className="rounded-full w-32 h-32 object-cover shadow-lg transition-transform hover:scale-105 duration-300" />
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Hello, I'm John Doe</h2>
                <p className="text-lg text-gray-600 mb-4">BTech 3rd Year | AIML Enthusiast</p>
                <p className="mb-4 leading-relaxed">
                  I am a passionate third-year undergraduate student pursuing BTech in Artificial Intelligence and Machine Learning. My goal is to develop intelligent systems that solve real-world problems using cutting-edge technologies.
                </p>
                <a href="#contact" className="inline-block mt-2 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition duration-300">
                  Contact Me
                </a>
              </div>
            </div>
          </section>
        )}

        {/* Projects Section */}
        {activeSection === 'projects' && (
          <section className="animate-fadeInUp">
            <h2 className="text-2xl font-bold mb-6">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <span className="text-sm text-gray-500">{project.tech}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Skills Section */}
        {activeSection === 'skills' && (
          <section className="animate-fadeInUp">
            <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Languages</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Python</li>
                  <li>JavaScript</li>
                  <li>C++</li>
                  <li>Java</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Frameworks & Tools</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>TensorFlow / Keras</li>
                  <li>PyTorch</li>
                  <li>Scikit-learn</li>
                  <li>Flask</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">AI & ML Concepts</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Neural Networks</li>
                  <li>Natural Language Processing</li>
                  <li>Computer Vision</li>
                  <li>Data Analysis</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Web Development</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>React.js</li>
                  <li>Tailwind CSS</li>
                  <li>HTML/CSS</li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* Contact Section */}
        {activeSection === 'contact' && (
          <section className="animate-fadeInUp">
            <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input type="text" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input type="email" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Message</label>
                  <textarea rows="5" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400" placeholder="Your message"></textarea>
                </div>
                <button type="submit" className="px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition duration-300">
                  Send Message
                </button>
              </form>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-3 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <span>johndoe@example.com</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-3 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  <span>+91 1234567890</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-3 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span>Bangalore, India</span>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} John Doe | Made with React & TailwindCSS
      </footer>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}