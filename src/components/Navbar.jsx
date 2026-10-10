import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.div 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-4 sm:top-6 inset-x-0 z-50 flex justify-center px-3"
    >
      <nav aria-label="Main navigation" className="glass w-fit max-w-full px-1 sm:px-6 py-2 sm:py-3 rounded-full shadow-[0_0_15px_rgba(44,103,237,0.5)] border border-primary/30 flex items-center justify-center gap-0 sm:gap-6 backdrop-blur-md bg-[#030014]/60">
        {['Home', 'About', 'Portfolio', 'Contact'].map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`}
            className="text-gray-300 hover:text-white px-2 sm:px-3 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all hover:bg-primary/20 hover:shadow-[0_0_10px_rgba(44,103,237,0.3)]"
          >
            {item}
          </a>
        ))}
      </nav>
    </motion.div>
  );
};

export default Navbar;
