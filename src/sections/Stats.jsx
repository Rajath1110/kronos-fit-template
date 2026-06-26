import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '15K+', label: 'Active Elite Members' },
  { value: '50+', label: 'Certified Pro Coaches' },
  { value: '25+', label: 'Premium Global Zones' },
  { value: '99.4%', label: 'Success Rate' },
];

export default function Stats() {
  return (
    <section className="relative z-20 bg-background-card border-y border-muted-border/60 py-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
        {stats.map((stat, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col justify-center"
          >
            <h2 className="heading-premium text-3xl md:text-5xl text-accent mb-1.5 font-extrabold tracking-tight">
              {stat.value}
            </h2>
            <p className="text-muted text-xs md:text-sm uppercase tracking-widest font-medium">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}