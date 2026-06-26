import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const reviews = [
  {
    name: 'Marcus Vance',
    role: 'Competitive Powerlifter',
    metric: '+45kg Deadlift Adaptation',
    quote: 'The infrastructure at Kronos is completely unmatched. The data-driven tracking profiles and competition-grade iron spaces allowed me to break my structural plateaus within 90 days.',
    img: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=400&auto=format&fit=crop'
  },
  {
    name: 'Elena Rostova',
    role: 'Triathlete',
    metric: 'VO2 Max Optimized by 14%',
    quote: 'The metabolic conditioning protocols combined with the constant biometric tracking completely revolutionized my endurance scheduling. It is not just a gym; it is a human performance laboratory.',
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop'
  },
  {
    name: 'David Cho',
    role: 'Corporate Executive',
    metric: '11% Body Fat Reduction',
    quote: 'Working out in an elite, distraction-free space with personalized nutritional support fit seamlessly into my busy schedule. The executive lounges and premium recovery tools are world-class.',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop'
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="py-24 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-16 relative">
      
      {/* Background Accent Lines */}
      <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-muted-border/20 -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
        
        {/* Left Typography Side Column */}
        <div className="lg:col-span-2">
          <span className="text-xs font-bold uppercase tracking-widest text-accent mb-3 block">
            // ELITE REVIEWS
          </span>
          <h2 className="heading-premium text-4xl md:text-6xl leading-[0.95] mb-6">
            Real adaptation. <br /><span className="text-muted">Zero Noise.</span>
          </h2>
          <p className="text-muted text-sm font-light leading-relaxed mb-8 max-w-sm">
            Read transparent case files from athletes who shifted their somatic thresholds within our ecosystem.
          </p>

          {/* Interactive Navigation Triggers */}
          <div className="flex items-center gap-3">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 rounded-xl border border-muted-border bg-background-card hover:bg-white/5 text-white flex items-center justify-center transition-all duration-300 active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={nextSlide}
              className="w-12 h-12 rounded-xl border border-muted-border bg-background-card hover:bg-white/5 text-white flex items-center justify-center transition-all duration-300 active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Right Slider Content Showcase Window */}
        <div className="lg:col-span-3 bg-background-card border border-muted-border rounded-2xl p-8 md:p-12 relative overflow-hidden min-h-[380px] flex flex-col justify-between">
          <Quote className="absolute top-8 right-8 w-24 h-24 text-white/[0.02] stroke-[1.5] pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col justify-between h-full"
            >
              <div>
                {/* Five Star Matrix Badge Row */}
                <div className="flex items-center gap-1 text-accent mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Main Quote Text */}
                <p className="text-white text-lg md:text-xl font-light leading-relaxed italic mb-8">
                  "{reviews[current].quote}"
                </p>
              </div>

              {/* User Bio Footer Layout Info */}
              <div className="flex items-center gap-4 border-t border-muted-border/50 pt-6">
                <img 
                  src={reviews[current].img} 
                  alt={reviews[current].name} 
                  className="w-14 h-14 rounded-xl object-cover border border-muted-border filter grayscale contrast-115"
                />
                <div>
                  <h4 className="heading-premium text-base text-white tracking-wide">
                    {reviews[current].name}
                  </h4>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-xs font-mono text-muted mt-0.5">
                    <span>{reviews[current].role}</span>
                    <span className="hidden sm:block text-accent/40">•</span>
                    <span className="text-accent uppercase tracking-wider font-semibold">{reviews[current].metric}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}