import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Flame, X } from 'lucide-react';

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-24 md:px-12">
      {/* Cinematic Background Image Overlay - Loading straight from public root */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
        <img 
          src="/gym_background.webp" 
          alt="Premium Dark Aesthetic Gym" 
          className="w-full h-full object-cover opacity-65 filter grayscale-[40%] contrast-110 brightness-[85%] scale-100"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#0A0A0A_95%)]" />
      </div>

      {/* Hero Content Area */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        
        {/* Micro-badge */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-background-card border border-muted-border px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-accent mb-6"
        >
          <Flame className="w-3.5 h-3.5 animate-pulse" />
          The New Era of Elite Fitness
        </motion.div>

        {/* Aggressive Typographic Main Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="heading-premium text-5xl sm:text-7xl md:text-9xl leading-[0.9] tracking-tighter mb-8"
        >
          Forge Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-accent">
            Ultimate Identity
          </span>
        </motion.h1>

        {/* Supporting Subtext */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-xl text-muted text-base md:text-lg font-light tracking-wide mb-10 leading-relaxed"
        >
          A premium ecosystem designed for those who demand absolute excellence. 
          Expert coaching, next-gen tracking, and elite equipment.
        </motion.p>

        {/* Action Call To Actions */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <a 
            href="#pricing" 
            className="w-full sm:w-auto bg-accent hover:bg-accent-hover text-black font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-xl transition-all duration-300 shadow-[0_0_30px_rgba(204,255,0,0.25)] hover:shadow-[0_0_45px_rgba(204,255,0,0.5)] text-center"
          >
            Claim Access Pass
          </a>
          
          <button 
            onClick={() => setIsVideoOpen(true)}
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-transparent hover:bg-white/5 border border-muted-border hover:border-white/20 px-8 py-4 rounded-xl text-sm font-semibold tracking-wide transition-all duration-300 group cursor-pointer"
          >
            <span className="flex items-center justify-center w-5 h-5 bg-white/10 rounded-full group-hover:bg-accent group-hover:text-black transition-colors duration-300">
              <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
            </span>
            Watch Facility Tour
          </button>
        </motion.div>
      </div>

      {/* Video Overlay Pop-up Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVideoOpen(false)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              onClick={(e) => e.stopPropagation()} 
              className="relative w-full max-w-4xl aspect-video bg-background-card border border-muted-border rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center"
            >
              <button 
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/60 hover:bg-accent hover:text-black text-white rounded-xl transition-colors duration-200"
              >
                <X className="w-4 h-4" />
              </button>

              <video 
                src="/facility_tour.mp4"
                className="w-full h-full object-cover"
                autoPlay
                controls
                playsInline
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative Side Accents */}
      <div className="absolute bottom-10 left-12 hidden xl:block text-[10px] font-mono tracking-[0.3em] text-muted/30 uppercase vertical-text select-none">
        [ BUILD_THE_LEGEND ]
      </div>
      <div className="absolute bottom-10 right-12 hidden xl:block text-[10px] font-mono tracking-[0.3em] text-muted/30 uppercase vertical-text select-none">
        KRONOS SYSTEM v4.0
      </div>
    </section>
  );
}