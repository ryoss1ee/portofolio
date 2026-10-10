import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ExternalLink, ArrowRight, PlayCircle, SkipForward, SkipBack } from 'lucide-react';

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto relative w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center w-full">
        
        {/* Left Side: Text */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-5 sm:gap-6 min-w-0"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Turning <br />
            <span className="text-primary">Ideas</span> <br />
            Into Reality
          </h1>
          
          <div className="text-xl sm:text-2xl font-semibold text-gray-300 min-h-[40px]">
            <TypeAnimation
              sequence={[
                'Software Engineer',
                2000,
                'IT Enthusiast',
                2000,
                'Web Developer',
                2000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="text-gray-400 max-w-md text-lg leading-relaxed">
            Started from curiosity, grown into a passion. I build digital experiences that not only look great, but also feel meaningful to users.
          </p>

          <div className="flex flex-wrap gap-3 sm:gap-4 mt-4">
            <a href="#portfolio" className="bg-primary hover:bg-blue-600 text-white px-4 sm:px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-all shadow-[0_0_15px_rgba(44,103,237,0.4)] whitespace-nowrap">
              Project <ExternalLink size={18} />
            </a>
            <a href="#contact" className="bg-transparent border border-gray-600 hover:border-white text-white px-4 sm:px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-all hover:bg-white/5 whitespace-nowrap">
              Contact Me <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>

        {/* Right Side: Spotify Widget Mock */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="glass p-6 rounded-2xl w-full max-w-md mx-auto relative overflow-hidden"
        >
          {/* Decorative glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-[50px] pointer-events-none"></div>
          
          <h3 className="text-2xl font-bold text-white mb-1">Daily Rotation</h3>
          <p className="text-sm text-gray-400 mb-6">My Spotify Playlist...</p>
          
          <iframe 
            style={{ borderRadius: '12px' }} 
            src="https://open.spotify.com/embed/playlist/1Xf2dQT22z5wi8WQUDbJso?utm_source=generator&theme=0" 
            width="100%" 
            height="352" 
            frameBorder="0" 
            allowFullScreen 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
            title="Spotify Playlist"
          ></iframe>
        </motion.div>

      </div>
    </section>
  );
};

export default Home;
