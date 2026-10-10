import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Code, GraduationCap, Briefcase, Trophy, Award, FolderKanban } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-14 sm:py-20">
      
      {/* Profile Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 items-center mb-16 sm:mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="col-span-1 min-w-0"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-2">Hi, I'm</h2>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">M. Satrio <br /> Rafiur Rahman</h2>
          <div className="flex gap-4">
            <button className="bg-primary hover:bg-blue-600 text-white px-5 py-2.5 rounded-lg font-medium flex items-center gap-2 transition-all shadow-[0_0_15px_rgba(44,103,237,0.4)]">
              <FileText size={18} /> View Resume
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="col-span-1 flex justify-center relative"
        >
          {/* Mock Profile Picture Container */}
          <div className="w-56 h-72 sm:w-64 sm:h-80 bg-gray-800 rounded-2xl overflow-hidden relative shadow-[0_0_30px_rgba(44,103,237,0.2)] border border-gray-700">
             <div className="absolute inset-0 bg-gradient-to-t from-[#030014] to-transparent z-10"></div>
             {/* Using a placeholder since we don't have the real image path in the final server */}
             <img src="/profile.png" alt="Profile" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="col-span-1 md:col-span-2 lg:col-span-1 min-w-0"
        >
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            As a student at the Faculty of Engineering, State University Of Surabaya, I focus on technology development that is not only functional, but also delivers engaging and impactful digital experiences.
          </p>
          <button className="bg-transparent border border-gray-600 hover:border-primary text-white px-5 py-2.5 rounded-lg font-medium flex items-center gap-2 transition-all hover:text-primary">
            <Code size={18} /> View Projects
          </button>
        </motion.div>
      </div>

      {/* Education & Course & Certifications */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-24">
        {/* Education */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <GraduationCap className="text-primary" /> Education
          </h3>
          <div className="space-y-4">
            <div className="glass p-5 rounded-xl border-l-4 border-l-primary hover:bg-white/5 transition-colors">
              <h4 className="text-xl font-bold text-white">State University of Surabaya</h4>
              <p className="text-sm text-gray-400 mt-1">IT Edu | Faculty of Engineering</p>
              <p className="text-xs text-primary mt-2">2026 - Present</p>
            </div>
            <div className="glass p-5 rounded-xl border-l-4 border-l-gray-600 hover:bg-white/5 transition-colors">
              <h4 className="text-xl font-bold text-white">SMA PGRI 5 Sidoarjo</h4>
              <p className="text-sm text-gray-400 mt-1">MIPA</p>
              <p className="text-xs text-gray-500 mt-2">2022 - 2025</p>
            </div>
          </div>
        </motion.div>

        {/* Courses & Certfications */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Briefcase className="text-primary" /> Course & Certification
          </h3>
          <div className="space-y-4">
            <div className="glass p-5 rounded-xl border-l-4 border-l-primary hover:bg-white/5 transition-colors">
              <h4 className="text-xl font-bold text-white">@myskill.id</h4>
              <p className="text-sm text-gray-400 mt-1">Website Development</p>
              <p className="text-xs text-primary mt-2">Agustus 2026</p>
            </div>
            <div className="glass p-5 rounded-xl border-l-4 border-l-gray-600 hover:bg-white/5 transition-colors">
              <h4 className="text-xl font-bold text-white">@myskill.id</h4>
              <p className="text-sm text-gray-400 mt-1">UX Writing Introduction</p>
              <p className="text-xs text-gray-500 mt-2">Agustus 2026</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
      >
        <div className="glass p-4 sm:p-6 rounded-xl flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
              <FolderKanban size={24} />
            </div>
            <p className="text-sm text-gray-400 font-medium uppercase tracking-wider mt-2">Projects</p>
          </div>
          <h3 className="text-4xl sm:text-5xl font-bold text-white">6</h3>
        </div>
        
        <div className="glass p-4 sm:p-6 rounded-xl flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400">
              <Award size={24} />
            </div>
            <p className="text-sm text-gray-400 font-medium uppercase tracking-wider mt-2">Certificates</p>
          </div>
          <h3 className="text-4xl sm:text-5xl font-bold text-white">6</h3>
        </div>

        <div className="glass p-4 sm:p-6 rounded-xl flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <div className="w-12 h-12 rounded-lg bg-yellow-500/20 flex items-center justify-center text-yellow-400">
              <Trophy size={24} />
            </div>
            <p className="text-sm text-gray-400 font-medium uppercase tracking-wider mt-2">Awards</p>
          </div>
          <h3 className="text-4xl sm:text-5xl font-bold text-white">4</h3>
        </div>
      </motion.div>

    </section>
  );
};

export default About;
