import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dumbbell, Flame, Heart, ArrowRight } from 'lucide-react';

// Categories for our filter tabs
const categories = ['All', 'Strength', 'Cardio', 'Mind & Body'];

// Premium program data with associated categories
const programsData = [
  {
    id: 1,
    category: 'Strength',
    title: 'Hypertrophy Axis',
    duration: '60 Mins',
    intensity: 'High',
    icon: <Dumbbell className="w-5 h-5 text-accent" />,
    desc: 'Engineered for maximal muscular adaptation and raw mechanical tension building.'
  },
  {
    id: 2,
    category: 'Cardio',
    title: 'Metabolic VO2 Max',
    duration: '45 Mins',
    intensity: 'Elite',
    icon: <Flame className="w-5 h-5 text-accent" />,
    desc: 'High-intensity anaerobic thresholds designed to optimize your cardiovascular output.'
  },
  {
    id: 3,
    category: 'Mind & Body',
    title: 'Kinetic Recovery',
    duration: '50 Mins',
    intensity: 'Medium',
    icon: <Heart className="w-5 h-5 text-accent" />,
    desc: 'Deep mobility metrics, postural core alignments, and central nervous system decompression.'
  },
  {
    id: 4,
    category: 'Strength',
    title: 'Olympic Power Lift',
    duration: '75 Mins',
    intensity: 'Elite',
    icon: <Dumbbell className="w-5 h-5 text-accent" />,
    desc: 'Master structural technical explosive movements: snatch, clean, jerk, and heavy deadlifts.'
  },
  {
    id: 5,
    category: 'Cardio',
    title: 'Endurance Protocol',
    duration: '60 Mins',
    intensity: 'High',
    icon: <Flame className="w-5 h-5 text-accent" />,
    desc: 'Sustained pacing metrics designed to strip body fat and amplify respiratory efficiency.'
  },
  {
    id: 6,
    category: 'Mind & Body',
    title: 'Asana Flow Alpha',
    duration: '45 Mins',
    intensity: 'Low',
    icon: <Heart className="w-5 h-5 text-accent" />,
    desc: 'Advanced physical alignment principles focused on deep oxygenation and micro-stability.'
  }
];

export default function Programs() {
  const [activeTab, setActiveTab] = useState('All');

  // Filter logic based on selected state tab
  const filteredPrograms = activeTab === 'All' 
    ? programsData 
    : programsData.filter(prog => prog.category === activeTab);

  return (
    <section id="programs" className="py-24 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-16">
      
      {/* Structural Header Layout */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-accent mb-3 block">
            // ELITE PATHWAYS
          </span>
          <h2 className="heading-premium text-4xl md:text-6xl leading-tight">
            Optimize Your <br /><span className="text-muted">Training Target</span>
          </h2>
        </div>

        {/* Interactive Filter Taps Controller */}
        <div className="flex flex-wrap gap-2 bg-background-card p-1.5 border border-muted-border rounded-xl self-start md:self-end">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`relative px-4 py-2 text-xs md:text-sm font-semibold uppercase tracking-wider rounded-lg transition-colors duration-300 z-10 ${
                activeTab === cat ? 'text-black' : 'text-muted hover:text-white'
              }`}
            >
              {cat}
              {activeTab === cat && (
                <motion.div 
                  layoutId="activeProgramTab"
                  className="absolute inset-0 bg-accent rounded-lg -z-10"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Canvas with Layout Animations */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredPrograms.map((prog) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              key={prog.id}
              className="bg-background-card border border-muted-border p-8 rounded-2xl flex flex-col justify-between group hover:border-accent/30 transition-all duration-300"
            >
              <div>
                {/* Meta Row */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 bg-white/5 border border-muted-border rounded-lg flex items-center justify-center">
                    {prog.icon}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-muted border border-muted-border px-2.5 py-1 rounded-full">
                    {prog.duration} | {prog.intensity}
                  </span>
                </div>

                {/* Typography */}
                <h3 className="heading-premium text-xl mb-3 group-hover:text-accent transition-colors duration-300">
                  {prog.title}
                </h3>
                <p className="text-muted text-sm font-light leading-relaxed mb-6">
                  {prog.desc}
                </p>
              </div>

              {/* Interactive CTA Link */}
              <a href="#pricing" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white group-hover:text-accent transition-colors duration-300 w-fit">
                Book Session 
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}