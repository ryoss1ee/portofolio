import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, GitBranch, Award } from 'lucide-react';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('projects');

  const tabs = [
    { id: 'projects', label: 'Projects' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'tech', label: 'Tech Stack' }
  ];

  const projects = [
    { id: 1, title: 'Space Portfolio', desc: 'Personal portfolio with space theme and dark mode.', tech: ['React', 'Tailwind', 'Framer'] },
    { id: 2, title: 'E-Commerce Platform', desc: 'Fullstack modern e-commerce solution with Next.js.', tech: ['Next.js', 'Node.js', 'MongoDB'] },
    { id: 3, title: 'Task Manager', desc: 'Productivity app with real-time collaboration.', tech: ['Vue', 'Firebase', 'Tailwind'] },
    { id: 4, title: 'AI Assistant', desc: 'Chatbot using OpenAI API for customer support.', tech: ['React', 'Python', 'OpenAI'] }
  ];

  return (
    <section id="portfolio" className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-14 sm:py-20">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">My <span className="text-primary">Portfolio</span></h2>
        <p className="text-gray-400 max-w-2xl mx-auto">Explore my latest projects, certifications, and the technologies I work with.</p>
      </motion.div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-10 sm:mb-12">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 sm:px-6 py-2.5 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
              activeTab === tab.id 
                ? 'bg-primary text-white shadow-[0_0_15px_rgba(44,103,237,0.5)]' 
                : 'glass text-gray-400 hover:text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="min-h-[400px]">
        <AnimatePresence mode="wait">
          {activeTab === 'projects' && (
            <motion.div
              key="projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {projects.map(project => (
                <div key={project.id} className="glass p-4 sm:p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300 group">
                  <div className="h-48 bg-gray-800 rounded-xl mb-6 overflow-hidden relative">
                     <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500"></div>
                     <div className="flex items-center justify-center h-full text-gray-600 text-lg font-bold uppercase tracking-widest">{project.title.substring(0,3)}...</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-xs bg-white/5 text-gray-300 px-3 py-1 rounded-full border border-gray-700">{t}</span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <button className="text-sm text-primary hover:text-white transition-colors flex items-center gap-1 font-medium"><GitBranch size={16}/> Repo</button>
                    <button className="text-sm text-primary hover:text-white transition-colors flex items-center gap-1 font-medium"><ExternalLink size={16}/> Demo</button>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === 'certificates' && (
            <motion.div
              key="certificates"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {[1, 2, 3].map(item => (
                <div key={item} className="glass p-6 rounded-2xl text-center flex flex-col items-center">
                  <div className="w-16 h-16 bg-purple-500/20 text-purple-400 rounded-full flex items-center justify-center mb-4">
                    <Award size={30} />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Google IT Automation</h4>
                  <p className="text-xs text-gray-400 mb-4">Coursera • 2026</p>
                  <button className="text-primary text-sm hover:underline">View Credential</button>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === 'tech' && (
            <motion.div
              key="tech"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'TypeScript', 'MongoDB', 'PostgreSQL', 'Python', 'Git', 'Docker'].map((tech, i) => (
                <div key={i} className="glass px-6 py-4 rounded-xl flex flex-col items-center gap-3 hover:border-primary transition-colors cursor-pointer w-[120px]">
                   <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 font-bold text-xs">{tech[0]}</div>
                   <span className="text-white text-sm font-medium">{tech}</span>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;
