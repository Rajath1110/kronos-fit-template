import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Stats from './sections/Stats';
import Features from './sections/Features';
import Programs from './sections/Programs';
import Testimonials from './sections/Testimonials';
import Pricing from './sections/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-white antialiased selection:bg-accent selection:text-black">
      {/* Floating Glass Navbar */}
      <Navbar />
      
      <main>
        {/* Core Layout Core Blocks */}
        <Hero />
        <Stats />
        <Features />
        <Programs />
        <Testimonials />
        <Pricing />
      </main>

      {/* Persistent Base Layout Closure */}
      <Footer />
    </div>
  );
}

export default App;