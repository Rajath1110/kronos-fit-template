import React from 'react';
import { motion } from 'framer-motion';
import { Check, ShieldCheck } from 'lucide-react';

const tiers = [
  {
    name: 'Access Pass',
    price: '$49',
    period: '/month',
    desc: 'Perfect for local gym enthusiasts demanding elite infrastructure.',
    features: [
      '24/7 Facility Entry Matrix',
      'Full Access to Premium Strength Gear',
      'Locker & Sauna Privileges',
      'Complementary High-Speed WiFi',
    ],
    popular: false,
  },
  {
    name: 'Black Tier Elite',
    price: '$99',
    period: '/month',
    desc: 'Our flagship membership plan designed for absolute physique optimization.',
    features: [
      'All Access Pass Amenities Included',
      'Custom Biometric Tracking & Data Reports',
      '4x Monthly Elite Coaching Orientations',
      'Tailored Nutritional Macro-Programming',
      'VIP Locker Lounge & Recovery Room access',
    ],
    popular: true,
  },
  {
    name: 'Titanium Squad',
    price: '$189',
    period: '/month',
    desc: 'An uncompromised premium package for those who demand competitive excellence.',
    features: [
      'All Black Tier Elite Privileges',
      'Unlimited 1-on-1 Athletic Mentorship Sessions',
      'Daily Bio-Hacking Cryotherapy Access',
      'Complimentary Custom Protein Shake Bar Pass',
      'Global Cross-Facility Entry Matrix Pass',
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-16">
      
      {/* Header Typography Section */}
      <div className="text-center mb-16 flex flex-col items-center">
        <span className="text-xs font-bold uppercase tracking-widest text-accent mb-3 block">
          // ACCESS CHANNELS
        </span>
        <h2 className="heading-premium text-4xl md:text-6xl text-center mb-4">
          Invest In Your <span className="text-muted">Evolution</span>
        </h2>
        <p className="text-muted max-w-lg text-sm md:text-base font-light tracking-wide leading-relaxed">
          Transparent luxury pricing architectures built for dedicated physical goals. Choose your point of activation.
        </p>
      </div>

      {/* Pricing Tiers Grid Component Canvas */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {tiers.map((tier, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative bg-background-card border rounded-2xl p-8 transition-all duration-300 flex flex-col justify-between ${
              tier.popular 
                ? 'border-accent shadow-[0_0_40px_rgba(204,255,0,0.15)] lg:-translate-y-4 lg:p-10 z-10' 
                : 'border-muted-border hover:border-white/20'
            }`}
          >
            {/* Pop Indicator Badge for Highlighted Card */}
            {tier.popular && (
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-accent text-black text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow-lg inline-flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" /> Most Demanded
              </span>
            )}

            <div>
              {/* Card Heading Structure */}
              <h3 className="heading-premium text-lg mb-2 text-white font-bold tracking-wide">
                {tier.name}
              </h3>
              <p className="text-muted text-xs font-light mb-6 leading-relaxed">
                {tier.desc}
              </p>

              {/* Numerical Price Display */}
              <div className="flex items-baseline gap-1 mb-8 border-b border-muted-border pb-6">
                <span className="heading-premium text-4xl md:text-5xl text-white">
                  {tier.price}
                </span>
                <span className="text-muted text-sm font-light">
                  {tier.period}
                </span>
              </div>

              {/* Package Feature Checklist Stack */}
              <ul className="flex flex-col gap-4 mb-8">
                {tier.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-sm font-light text-muted">
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                      tier.popular ? 'bg-accent/10 text-accent' : 'bg-white/5 text-white'
                    }`}>
                      <Check className="w-3 h-3" />
                    </span>
                    <span className={tier.popular ? 'text-white/90' : 'text-muted'}>
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solid Action Target Button */}
            <a
              href="#contact"
              className={`w-full text-center font-bold text-xs uppercase tracking-widest py-4 rounded-xl transition-all duration-300 ${
                tier.popular
                  ? 'bg-accent hover:bg-accent-hover text-black shadow-[0_0_20px_rgba(204,255,0,0.2)]'
                  : 'bg-white/5 hover:bg-white/10 text-white border border-muted-border hover:border-white/20'
              }`}
            >
              Activate Pass
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}