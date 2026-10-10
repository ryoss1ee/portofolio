import React from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, MessageSquare, Image as ImageIcon } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-14 sm:py-20 mb-12 sm:mb-20">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Contact <span className="text-primary">Me</span></h2>
        <p className="text-gray-400 max-w-2xl mx-auto">Let's connect! Feel free to reach out for collaborations or just a friendly hello.</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-8 mb-12 sm:mb-16">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass p-5 sm:p-8 rounded-2xl min-w-0"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-2">Get in touch</h3>
          <p className="text-gray-400 mb-8">Have something to discuss? Send a message directly!</p>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
              <input type="text" placeholder="Your Name" className="w-full bg-[#030014]/50 border border-gray-700 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-primary transition-colors" />
            </div>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
              <input type="email" placeholder="Your Email" className="w-full bg-[#030014]/50 border border-gray-700 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-primary transition-colors" />
            </div>
            <div className="relative">
              <MessageSquare className="absolute left-4 top-4 text-gray-500" size={20} />
              <textarea placeholder="Your Message" rows="5" className="w-full bg-[#030014]/50 border border-gray-700 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-primary transition-colors resize-none"></textarea>
            </div>
            <button className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all shadow-[0_0_15px_rgba(44,103,237,0.4)]">
              <Send size={18} /> Send Message
            </button>
          </form>
        </motion.div>

        {/* Comment Section Mock */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass p-5 sm:p-8 rounded-2xl min-w-0"
        >
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <MessageSquare className="text-gray-400" /> Comments (74)
          </h3>
          
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
              <input type="text" placeholder="Enter your name" className="w-full bg-[#030014]/50 border border-gray-700 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-primary transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Comment</label>
              <textarea placeholder="Write your comment here..." rows="4" className="w-full bg-[#030014]/50 border border-gray-700 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-primary transition-colors resize-none"></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Profile Photo (optional)</label>
              <div className="border border-dashed border-gray-700 rounded-xl p-4 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-primary transition-colors bg-[#030014]/30">
                <ImageIcon className="text-gray-500" size={24} />
                <span className="text-sm text-gray-400">Choose Profile Photo</span>
                <span className="text-xs text-gray-600">Max file size: 5MB</span>
              </div>
            </div>
            <button className="w-full bg-transparent border border-primary text-primary hover:bg-primary hover:text-white font-bold py-3.5 rounded-xl transition-all">
              Post Comment
            </button>
          </form>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-x-5 gap-y-3 sm:gap-6 mt-8"
      >
        {[
          { name: 'GitHub', url: 'https://github.com/ryoss1ee' },
          { name: 'LinkedIn', url: 'https://www.linkedin.com/in/m-satrio-rafi-ur-rahman?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
          { name: 'Instagram', url: 'https://www.instagram.com/ryomoraless?srtk=bTI4YWh1Ymg2NGF4' },
          { name: 'WhatsApp', url: 'https://wa.me/6285786023802' }
        ].map((social) => (
          <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors text-lg font-medium">
            {social.name}
          </a>
        ))}
      </motion.div>
    </section>
  );
};

export default Contact;
