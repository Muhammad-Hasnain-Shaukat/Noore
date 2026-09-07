import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  // Playlists provided by user
  const pcVideos = ['/videos/pc1.mp4', '/videos/pc2.mp4'];
  const mobileVideos = ['/videos/mobile1.mp4', '/videos/mobile2.mp4'];

  const [pcIndex, setPcIndex] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);

  const pcVideoRef = useRef<HTMLVideoElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);

  // When pcIndex changes, load and play
  useEffect(() => {
    if (pcVideoRef.current) {
      pcVideoRef.current.load();
      pcVideoRef.current.play().catch(() => {});
    }
  }, [pcIndex]);

  // When mobileIndex changes, load and play
  useEffect(() => {
    if (mobileVideoRef.current) {
      mobileVideoRef.current.load();
      mobileVideoRef.current.play().catch(() => {});
    }
  }, [mobileIndex]);

  // Handler when PC video ends -> automatically play next video
  const handlePcEnded = () => {
    setPcIndex((prev) => (prev + 1) % pcVideos.length);
  };

  // Handler when Mobile video ends -> automatically play next video
  const handleMobileEnded = () => {
    setMobileIndex((prev) => (prev + 1) % mobileVideos.length);
  };

  return (
    <section className="relative w-full h-[calc(100dvh-44px)] sm:h-auto sm:min-h-[90vh] lg:min-h-screen flex flex-col justify-between sm:items-center sm:justify-center overflow-hidden bg-cocoa-dark">
      
      {/* ========================================================================= */}
      {/* 1. FULL BACKGROUND VIDEO (PC: pc1.mp4/pc2.mp4, Mobile: mobile1/mobile2) */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* PC Full Video Background */}
        <video
          ref={pcVideoRef}
          autoPlay
          muted
          playsInline
          onEnded={handlePcEnded}
          className="hidden sm:block absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700"
        >
          <source src={pcVideos[pcIndex]} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>

        {/* Mobile Full Video Background */}
        <video
          ref={mobileVideoRef}
          autoPlay
          muted
          playsInline
          onEnded={handleMobileEnded}
          className="sm:hidden absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700"
        >
          <source src={mobileVideos[mobileIndex]} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>

        {/* Luxury Scrim / Gradient Overlays (Ensures text is 100% legible) */}
        {/* Desktop Gradient: richer from left to right */}
        <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-cocoa-dark/90 via-cocoa-dark/65 to-cocoa-dark/30 pointer-events-none" />
        
        {/* Mobile Gradient: richer from bottom up */}
        <div className="sm:hidden absolute inset-0 bg-gradient-to-t from-cocoa-dark/95 via-cocoa-dark/60 to-cocoa-dark/20 pointer-events-none" />
        
        {/* Subtle Top Scrim for seamless header blend */}
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-cocoa-dark/70 via-cocoa-dark/30 to-transparent pointer-events-none" />
      </div>

      {/* ========================================================================= */}
      {/* 2. EDITORIAL TEXT CONTENT WRITTEN DIRECTLY OVER THE VIDEO */}
      {/* ========================================================================= */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-between pt-5 pb-6 sm:block sm:py-24 lg:py-36">
        <div className="max-w-2xl text-left space-y-2 sm:space-y-6">
          
          {/* Label Badge */}
          <div className="inline-flex items-center space-x-1.5 bg-ivory/15 backdrop-blur-md px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-ivory/20 shadow-subtle">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <span className="text-[9.5px] sm:text-[11px] uppercase tracking-[0.2em] text-ivory font-semibold">
              THE NOORE COLLECTION
            </span>
          </div>

          {/* Main Editorial Heading: Sits neatly below nav bar in upper blank space */}
          <h1 className="font-serif text-2xl sm:text-5xl lg:text-7xl font-medium tracking-tight text-ivory leading-tight drop-shadow-sm">
            Modesty, beautifully expressed.
          </h1>

          {/* Business One-Liner on Mobile: Covers blank space without covering model's face */}
          <p className="sm:hidden text-xs text-ivory/90 font-light tracking-wide leading-snug pt-0 max-w-xs">
            Everyday modest essentials, cut from refined natural textiles for quiet dignity.
          </p>

          {/* Desktop Supporting Copy: Hidden on mobile per request */}
          <p className="hidden sm:block text-base sm:text-lg lg:text-xl text-ivory/90 font-light leading-relaxed max-w-xl drop-shadow-xs">
            Thoughtful essentials for every shade of you. Discover breathable botanic modals,
            weightless georgette chiffons, and architectural abayas designed with effortless daily grace.
          </p>
        </div>

        {/* Call-to-Action Buttons: Lifted up from the bottom with comfortable margin on mobile */}
        <div className="mt-auto sm:mt-8 pt-4 sm:pt-6 pb-6 sm:pb-0">
          <div className="grid grid-cols-2 gap-2.5 sm:flex sm:flex-row sm:items-center sm:gap-4 max-w-md sm:max-w-none">
            <Link
              to="/collections/hijabs"
              className="py-3 sm:py-4 px-3 sm:px-8 bg-ivory text-cocoa text-[11px] sm:text-xs uppercase tracking-widest font-semibold hover:bg-sand transition-all duration-200 rounded-sm text-center shadow-elevated flex items-center justify-center space-x-1.5 group tap-target-44 active:scale-[0.99]"
            >
              <span>Shop Hijabs</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1 text-taupe" />
            </Link>

            <Link
              to="/collections/abayas"
              className="py-3 sm:py-4 px-3 sm:px-8 bg-cocoa/40 backdrop-blur-md border border-ivory/60 text-ivory text-[11px] sm:text-xs uppercase tracking-widest font-semibold hover:bg-ivory/20 hover:border-ivory transition-all duration-200 rounded-sm text-center tap-target-44 shadow-subtle flex items-center justify-center"
            >
              <span>Explore Abayas</span>
            </Link>
          </div>

          {/* Guarantee Badges: Hidden on mobile per request */}
          <div className="hidden sm:flex pt-4 flex-wrap items-center gap-6 text-xs text-ivory/80 font-light">
            <div className="flex items-center space-x-1.5 bg-cocoa/30 backdrop-blur-xs px-2.5 py-1 rounded-full border border-ivory/15">
              <Sparkles className="w-3.5 h-3.5 text-gold-light" />
              <span>Ethical Lenzing Modal</span>
            </div>
            <div className="flex items-center space-x-1.5 bg-cocoa/30 backdrop-blur-xs px-2.5 py-1 rounded-full border border-ivory/15">
              <span className="w-1.5 h-1.5 rounded-full bg-olive-light" />
              <span>100% Opacity Options</span>
            </div>
            <div className="flex items-center space-x-1.5 bg-cocoa/30 backdrop-blur-xs px-2.5 py-1 rounded-full border border-ivory/15">
              <span className="w-1.5 h-1.5 rounded-full bg-sand" />
              <span>Snag-Free Magnetic Hold</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
