import React from 'react';
import { ArrowRight, Globe, MessageSquare, Share2, Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-muted-border/60 pt-20 pb-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-muted-border/40">
          
          <div className="flex flex-col gap-4">
            <a href="#" className="heading-premium text-2xl tracking-tight">
              KRONOS<span className="text-accent">//</span>FIT
            </a>
            <p className="text-muted text-sm font-light leading-relaxed max-w-xs">
              An uncompromised premium athletic ecosystem engineered for elite physical evolution.
            </p>
            {/* Universal fail-safe social vectors */}
            <div className="flex items-center gap-4 mt-2 text-muted">
              <a href="#" className="hover:text-accent transition-colors"><Globe className="w-4 h-4" /></a>
              <a href="#" className="hover:text-accent transition-colors"><MessageSquare className="w-4 h-4" /></a>
              <a href="#" className="hover:text-accent transition-colors"><Share2 className="w-4 h-4" /></a>
            </div>
          </div>

          <div>
            <h4 className="heading-premium text-xs tracking-wider text-white mb-6">// EXPLORE</h4>
            <ul className="flex flex-col gap-3.5 text-sm font-light text-muted">
              <li><a href="#features" className="hover:text-white transition-colors">Core Amenities</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">Elite Programs</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Membership Tiers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="heading-premium text-xs tracking-wider text-white mb-6">// UTILITY</h4>
            <ul className="flex flex-col gap-3.5 text-sm font-light text-muted">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Charter</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Access</a></li>
            </ul>
          </div>

          <div>
            <h4 className="heading-premium text-xs tracking-wider text-white mb-6">// TRANSMISSIONS</h4>
            <p className="text-muted text-xs font-light mb-4 leading-relaxed">
              Subscribe to unlock priority facility openings.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="relative w-full flex items-center">
              <input 
                type="email" 
                placeholder="Secure Access Email" 
                className="w-full bg-background-card border border-muted-border focus:border-accent/40 rounded-xl px-4 py-3 text-xs text-white placeholder-muted focus:outline-none transition-colors duration-300 pr-10"
              />
              <button className="absolute right-2 p-1.5 bg-accent hover:bg-accent-hover text-black rounded-lg transition-colors group">
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>
            </form>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted/40">
          <div>© {new Date().getFullYear()} KRONOS FIT GLOBAL. ALL RIGHTS RESERVED.</div>
          <div className="flex items-center gap-1.5 tracking-wider uppercase">
            <Shield className="w-3 h-3 text-accent" /> Premium Commercial Template
          </div>
        </div>

      </div>
    </footer>
  );
}