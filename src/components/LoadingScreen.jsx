import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete(), 500); // Wait a bit after 100%
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 1; // Random jump
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="fixed inset-0 z-[100] bg-[#030014] flex flex-col items-center justify-center overflow-hidden"
      >
        {/* Lightning mock effect using simple CSS */}
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        <motion.div 
          animate={{ opacity: [0.1, 0.5, 0.1, 0.8, 0.2] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-blue-300 shadow-[0_0_50px_20px_rgba(44,103,237,0.8)]"
          style={{ clipPath: 'polygon(0% 0%, 100% 20%, 0% 40%, 100% 60%, 0% 80%, 100% 100%)' }} // simplistic lightning path
        ></motion.div>

        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold text-white text-center z-10 drop-shadow-[0_5px_15px_rgba(44,103,237,0.5)] leading-tight"
        >
          Welcome To My <br/>
          <span className="text-primary">Portofolio Website</span>
        </motion.h1>

        <div className="mt-12 w-64 z-10 flex flex-col items-center">
          <div className="flex justify-between w-full text-white text-sm font-bold tracking-widest uppercase mb-2">
            <span>Loading</span>
            <span>{progress > 100 ? 100 : progress}%</span>
          </div>
          <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-white shadow-[0_0_10px_#fff]"
              initial={{ width: '0%' }}
              animate={{ width: `${progress > 100 ? 100 : progress}%` }}
              transition={{ ease: "easeOut" }}
            ></motion.div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
