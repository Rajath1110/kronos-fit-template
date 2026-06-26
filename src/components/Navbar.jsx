import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navLinks = [
  { name: 'Features', href: '#features' },
  { name: 'Programs', href: '#programs' },
  { name: 'Membership', href: '#pricing' },
  { name: 'Testimonials', href: '#testimonials' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background-nav backdrop-blur-xl border-b border-muted-border/40 px-6 py-4 md:px-12"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="heading-premium text-2xl tracking-tight">
            KRONOS<span className="text-accent">//</span>FIT
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium tracking-wide text-muted hover:text-white transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop Premium CTA Button */}
          <div className="hidden md:block">
            <a 
              href="#pricing" 
              className="inline-flex items-center gap-1.5 bg-accent hover:bg-accent-hover text-black font-semibold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full transition-all duration-300 group shadow-[0_0_20px_rgba(204,255,0,0.2)] hover:shadow-[0_0_30px_rgba(204,255,0,0.4)]"
            >
              Join Elite
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Menu Trigger button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-1 hover:text-accent transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[69px] z-40 bg-background/95 backdrop-blur-2xl border-b border-muted-border p-6 flex flex-col gap-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="heading-premium text-xl text-muted hover:text-accent transition-colors py-2"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <a 
              href="#pricing" 
              onClick={() => setIsOpen(false)}
              className="w-full text-center bg-accent text-black font-bold text-sm uppercase tracking-wider py-3.5 rounded-xl block"
            >
              Join Elite Area
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}