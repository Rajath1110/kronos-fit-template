import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Target, Trophy } from 'lucide-react';

const features = [
  {
    icon: <Zap className="w-6 h-6 text-black" />,
    title: 'Elite Coaching',
    desc: 'Train under personalized data-driven roadmaps engineered by world-class athletic mentors.'
  },
  {
    icon: <Shield className="w-6 h-6 text-black" />,
    title: 'Next-Gen Gear',
    desc: 'Access premium biometric-tracking machines, specialized strength zones, and custom turf spaces.'
  },
  {
    icon: <Target className="w-6 h-6 text-black" />,
    title: 'Tailored Nutrition',
    desc: 'Unlock tailored macronutrient meal programming mapped specifically to your physique goals.'
  },
  {
    icon: <Trophy className="w-6 h-6 text-black" />,
    title: '24/7 Access Pass',
    desc: 'Seamless biometric integration grants entry to every luxury facility worldwide, anytime.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-16">
      <div className="text-center md:text-left mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div className="max-w-xl">
          <span className="text-xs font-bold uppercase tracking-widest text-accent mb-3 block">
            // AMENITIES & EXPERIENCE
          </span>
          <h2 className="heading-premium text-4xl md:text-6xl leading-[0.95]">
            Why Compromise <br />On Your <span className="text-muted">Potential?</span>
          </h2>
        </div>
        <p className="text-muted font-light max-w-sm text-sm md:text-base leading-relaxed md:text-right">
          We strip away the noise to provide a flawless ecosystem designed for absolute physics optimization.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feat, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="group relative bg-background-card border border-muted-border p-8 rounded-2xl transition-all duration-300 hover:border-accent/30 overflow-hidden"
          >
            <div className="absolute -inset-px bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
            <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(204,255,0,0.2)] group-hover:scale-105 transition-transform duration-300 relative z-10">
              {feat.icon}
            </div>
            <h3 className="heading-premium text-xl mb-3 tracking-wide relative z-10 group-hover:text-accent transition-colors duration-300">
              {feat.title}
            </h3>
            <p className="text-muted text-sm font-light leading-relaxed relative z-10">
              {feat.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}