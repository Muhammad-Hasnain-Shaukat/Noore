import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Feather, Compass, Heart, ShieldCheck, Check, Layers, Scissors, SunMedium } from 'lucide-react';
import { STORE_CONFIG } from '../config/store';

export const OurStoryPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Our Story — The Atelier | Noore';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex-1 bg-ivory">
      {/* ===================================================================== */}
      {/* 1. HERO COVER */}
      {/* ===================================================================== */}
      <section className="relative pt-16 pb-20 sm:pt-24 sm:pb-28 border-b border-sand/60 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.3em] text-taupe font-semibold bg-sand/30 px-3.5 py-1.5 rounded-full border border-sand/60">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>The Noore Manifesto</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-medium text-cocoa leading-[1.1]">
            Modesty, thoughtfully considered.
          </h1>

          <p className="font-serif italic text-lg sm:text-2xl text-taupe-dark max-w-2xl mx-auto">
            “{STORE_CONFIG.tagline}”
          </p>

          <p className="text-sm sm:text-base text-cocoa/75 font-light leading-relaxed max-w-2xl mx-auto">
            Noore was founded to bridge a silent gap in modern modest fashion: the belief that everyday
            clothing should honor both complete modest coverage and high-end tactile beauty—without
            stiffness, synthetic irritation, or constant adjustment.
          </p>
        </div>

        {/* Hero Editorial Composition: Main image with smaller overlapping corner image */}
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 pb-8 sm:pb-10">
          <div className="relative">
            {/* Primary Main Image */}
            <div className="aspect-[4/5] sm:aspect-[3/4] rounded-sm overflow-hidden bg-sand/30 border border-sand shadow-elevated">
              <img
                src="/assets/story/abayas_1.jpg"
                alt="Noore Abaya tailored silhouette"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>

            {/* Second Smaller Image on Right Corner */}
            <div className="absolute -bottom-6 -right-3 sm:-bottom-8 sm:-right-6 w-44 sm:w-56 aspect-[4/5] sm:aspect-[3/4] rounded-sm overflow-hidden border-4 border-ivory shadow-drawer bg-sand/50">
              <img
                src="/assets/story/hijab_3.jpg"
                alt="Noore Hijab draped fabric detail"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
          </div>
          <p className="text-center text-xs text-taupe font-light italic mt-10 sm:mt-12">
            Atelier Noore — High-density Japanese Nidha crepe and botanic beechwood modal in natural lighting.
          </p>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 2. THE FOUR PILLARS OF CRAFTSMANSHIP */}
      {/* ===================================================================== */}
      <section className="py-20 sm:py-28 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Chapter 1: The Abaya */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          <div className="lg:col-span-6 relative">
            <div className="aspect-[3/4] rounded-sm overflow-hidden bg-sand/30 border border-sand shadow-elevated">
              <img
                src="/assets/story/abayas_3.jpg"
                alt="The tailored abaya cut"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="hidden sm:block absolute -bottom-5 -right-5 w-48 aspect-[3/4] rounded-sm overflow-hidden border-2 border-ivory shadow-drawer">
              <img
                src="/assets/story/abayas_4.jpg"
                alt="Abaya movement and drop shoulders"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-5 lg:pl-4">
            <span className="text-xs uppercase tracking-[0.25em] text-taupe font-semibold block">
              Chapter I / The Silhouette
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-cocoa leading-tight">
              Architectural drape that breathes with motion.
            </h2>
            <p className="text-sm sm:text-base text-cocoa/80 font-light leading-relaxed">
              We design abayas around intentional proportion. Rather than heavy, clingy synthetics, we
              import Japanese Nidha crepes and breathable washed linen blends. The result is an airy,
              structured drop-shoulder silhouette that floats away from the body while holding its shape
              through full active days.
            </p>
            <div className="space-y-2 pt-2 border-t border-sand/60">
              <div className="flex items-center space-x-2 text-xs text-cocoa/85 font-light">
                <Check className="w-3.5 h-3.5 text-olive" />
                <span>Seamlessly integrated deep functional side-seam pockets</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-cocoa/85 font-light">
                <Check className="w-3.5 h-3.5 text-olive" />
                <span>Discreet front closures adaptable as open bishts or closed wraps</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-cocoa/85 font-light">
                <Check className="w-3.5 h-3.5 text-olive" />
                <span>Precision length grading from 50 to 58 inches</span>
              </div>
            </div>
            <div className="pt-2">
              <Link
                to="/collections/abayas"
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-semibold text-cocoa hover:text-taupe transition-colors group"
              >
                <span>Discover The Abaya Edit</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Chapter 2: The Hijab */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          <div className="lg:col-span-6 space-y-5 lg:pr-4 order-2 lg:order-1">
            <span className="text-xs uppercase tracking-[0.25em] text-taupe font-semibold block">
              Chapter II / The Shayla
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-cocoa leading-tight">
              Sensory fabrics against sensitive skin.
            </h2>
            <p className="text-sm sm:text-base text-cocoa/80 font-light leading-relaxed">
              A hijab is worn intimately against the face and hair for ten to twelve hours daily. We refuse
              scratchy, sweat-trapping polyester. Instead, our scarfs are spun from certified Austrian
              Lenzing modal harvested from sustainable beechwood forests, paired with featherweight georgette
              pebble chiffons and natural bamboo-rayon jerseys.
            </p>
            <div className="space-y-2 pt-2 border-t border-sand/60">
              <div className="flex items-center space-x-2 text-xs text-cocoa/85 font-light">
                <Check className="w-3.5 h-3.5 text-olive" />
                <span>Naturally thermo-regulating fibers that stay cool in warm climates</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-cocoa/85 font-light">
                <Check className="w-3.5 h-3.5 text-olive" />
                <span>Hand-finished rolled baby hems that resist fraying after washing</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-cocoa/85 font-light">
                <Check className="w-3.5 h-3.5 text-olive" />
                <span>Generous 195 cm maxi dimensions for versatile, multi-layered drape</span>
              </div>
            </div>
            <div className="pt-2">
              <Link
                to="/collections/hijabs"
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-semibold text-cocoa hover:text-taupe transition-colors group"
              >
                <span>Explore The Hijab Collection</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 relative order-1 lg:order-2">
            <div className="aspect-[3/4] rounded-sm overflow-hidden bg-sand/30 border border-sand shadow-elevated">
              <img
                src="/assets/story/hijab_4.jpg"
                alt="Modest woman wearing soft draped scarf"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="hidden sm:block absolute -bottom-5 -left-5 w-48 aspect-[3/4] rounded-sm overflow-hidden border-2 border-ivory shadow-drawer">
              <img
                src="/assets/story/hijab_5.jpg"
                alt="Detailed fabric texture"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Chapter 3: Inner Caps */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          <div className="lg:col-span-6 relative">
            <div className="aspect-[3/4] rounded-sm overflow-hidden bg-sand/30 border border-sand shadow-elevated">
              <img
                src="/assets/story/inner_caps_3.jpg"
                alt="Woman wearing bamboo undercap"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="hidden sm:block absolute -bottom-5 -right-5 w-48 aspect-[3/4] rounded-sm overflow-hidden border-2 border-ivory shadow-drawer">
              <img
                src="/assets/story/inner_caps_4.jpg"
                alt="Inner cap detail and fit"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-5 lg:pl-4">
            <span className="text-xs uppercase tracking-[0.25em] text-taupe font-semibold block">
              Chapter III / The Foundation
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-cocoa leading-tight">
              Tension-free wear. Gentle on your hair health.
            </h2>
            <p className="text-sm sm:text-base text-cocoa/80 font-light leading-relaxed">
              We spent months engineering our inner caps to eliminate the common headaches and hairline
              recession associated with traditional tight undercaps. By introducing seamless flatlock
              stitching around the ears and forehead, coupled with Grade 6A pure mulberry silk crown linings,
              hair friction is dramatically minimized while hydration is preserved.
            </p>
            <div className="space-y-2 pt-2 border-t border-sand/60">
              <div className="flex items-center space-x-2 text-xs text-cocoa/85 font-light">
                <Check className="w-3.5 h-3.5 text-olive" />
                <span>Zero-pressure flatlock seams prevent ear aches</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-cocoa/85 font-light">
                <Check className="w-3.5 h-3.5 text-olive" />
                <span>100% Grade 6A mulberry silk lining eliminates friction & breakage</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-cocoa/85 font-light">
                <Check className="w-3.5 h-3.5 text-olive" />
                <span>Deep back pouch gently holds voluminous hair buns without crushing</span>
              </div>
            </div>
            <div className="pt-2">
              <Link
                to="/collections/inner-caps"
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-semibold text-cocoa hover:text-taupe transition-colors group"
              >
                <span>View Foundation Caps</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Chapter 4: Accessories */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          <div className="lg:col-span-6 space-y-5 lg:pr-4 order-2 lg:order-1">
            <span className="text-xs uppercase tracking-[0.25em] text-taupe font-semibold block">
              Chapter IV / Considered Accents
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-cocoa leading-tight">
              Micro-engineered to protect fragile weaves.
            </h2>
            <p className="text-sm sm:text-base text-cocoa/80 font-light leading-relaxed">
              A single needle puncture can unravel an expensive silk or georgette chiffon scarf. Our
              accessories are designed to secure your wraps with zero mechanical harm. Industrial-strength
              neodymium magnets grip through four folded layers with seamless ease, while our seamless
              coilless pear pins eliminate the wire coil where threads catch.
            </p>
            <div className="space-y-2 pt-2 border-t border-sand/60">
              <div className="flex items-center space-x-2 text-xs text-cocoa/85 font-light">
                <Check className="w-3.5 h-3.5 text-olive" />
                <span>Grade N52 neodymium magnetic force that holds all day</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-cocoa/85 font-light">
                <Check className="w-3.5 h-3.5 text-olive" />
                <span>Velvet matte scratch-resistant electroplated finish</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-cocoa/85 font-light">
                <Check className="w-3.5 h-3.5 text-olive" />
                <span>Coilless calabash safety pins with zero snag points</span>
              </div>
            </div>
            <div className="pt-2">
              <Link
                to="/collections/accessories"
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-semibold text-cocoa hover:text-taupe transition-colors group"
              >
                <span>Explore Pin-Free Accessories</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 relative order-1 lg:order-2">
            <div className="aspect-[3/4] rounded-sm overflow-hidden bg-sand/30 border border-sand shadow-elevated">
              <img
                src="/assets/story/accessories_3.jpg"
                alt="Metallic magnetic pins and jewelry"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="hidden sm:block absolute -bottom-5 -left-5 w-48 aspect-[3/4] rounded-sm overflow-hidden border-2 border-ivory shadow-drawer">
              <img
                src="/assets/story/accessories_4.jpg"
                alt="Accessories styling detail"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

      </section>

      {/* ===================================================================== */}
      {/* 3. ATELIER LOOKBOOK MOSAIC (Featuring User's Photography) */}
      {/* ===================================================================== */}
      <section className="py-20 bg-sand/20 border-t border-b border-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
            <p className="text-xs uppercase tracking-[0.25em] text-taupe font-semibold">
              The Noore Lookbook Edit
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-cocoa">
              In motion across every shade.
            </h2>
            <p className="text-xs sm:text-sm text-cocoa/70 font-light">
              Moments captured from our atelier collection showing subtle fabric textures, fluid drape, and clean lines.
            </p>
          </div>

          {/* Curated Grid of 6 Photos */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            <div className="group relative aspect-[3/4] rounded-sm overflow-hidden bg-sand/40 border border-sand shadow-subtle">
              <img
                src="/assets/story/abayas_6.jpg"
                alt="Abaya in Motion"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-cocoa/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 text-ivory text-[11px] font-medium">
                Emirati Bisht
              </div>
            </div>

            <div className="group relative aspect-[3/4] rounded-sm overflow-hidden bg-sand/40 border border-sand shadow-subtle">
              <img
                src="/assets/story/hijab_6.jpg"
                alt="Hijab Draping"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-cocoa/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 text-ivory text-[11px] font-medium">
                Botanic Modal
              </div>
            </div>

            <div className="group relative aspect-[3/4] rounded-sm overflow-hidden bg-sand/40 border border-sand shadow-subtle">
              <img
                src="/assets/story/inner_caps_5.jpg"
                alt="Bamboo Undercap"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-cocoa/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 text-ivory text-[11px] font-medium">
                Cooling Rib
              </div>
            </div>

            <div className="group relative aspect-[3/4] rounded-sm overflow-hidden bg-sand/40 border border-sand shadow-subtle">
              <img
                src="/assets/story/accessories_5.jpg"
                alt="Matte Magnetic Pin"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-cocoa/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 text-ivory text-[11px] font-medium">
                Matte Brass
              </div>
            </div>

            <div className="group relative aspect-[3/4] rounded-sm overflow-hidden bg-sand/40 border border-sand shadow-subtle">
              <img
                src="/assets/story/accessories_6.jpg"
                alt="Snag Free Pins"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-cocoa/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 text-ivory text-[11px] font-medium">
                Coilless Pins
              </div>
            </div>

            <div className="group relative aspect-[3/4] rounded-sm overflow-hidden bg-sand/40 border border-sand shadow-subtle">
              <img
                src="/assets/story/abayas_2.jpg"
                alt="Farasha Silhouette"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-cocoa/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 text-ivory text-[11px] font-medium">
                A-Line Closed
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 4. THE THREE ATELIER STANDARDS */}
      {/* ===================================================================== */}
      <section className="py-20 sm:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-14 space-y-2">
          <p className="text-xs uppercase tracking-[0.25em] text-taupe font-semibold">
            Quality Assured
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-cocoa">
            Our Three Commitments
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-sand/25 rounded-sm border border-sand/70 space-y-3">
            <Feather className="w-6 h-6 text-taupe" strokeWidth={1.5} />
            <h3 className="font-serif text-xl font-medium text-cocoa">Tactile Honesty</h3>
            <p className="text-xs text-cocoa/75 leading-relaxed font-light">
              We never cut corners with cheap scratchy polyester. Every piece is sourced from breathable
              certified natural fibers that become softer with every gentle wash.
            </p>
          </div>

          <div className="p-6 bg-sand/25 rounded-sm border border-sand/70 space-y-3">
            <Compass className="w-6 h-6 text-taupe" strokeWidth={1.5} />
            <h3 className="font-serif text-xl font-medium text-cocoa">Nuanced Undertones</h3>
            <p className="text-xs text-cocoa/75 leading-relaxed font-light">
              Color is personal. Our palettes are curated to flatter warm, olive, neutral, and cool
              undertones, making mixing and matching completely effortless.
            </p>
          </div>

          <div className="p-6 bg-sand/25 rounded-sm border border-sand/70 space-y-3">
            <Heart className="w-6 h-6 text-taupe" strokeWidth={1.5} />
            <h3 className="font-serif text-xl font-medium text-cocoa">Enduring Ease</h3>
            <p className="text-xs text-cocoa/75 leading-relaxed font-light">
              Modesty should grant you peace of mind. We construct garments that remain in place through
              ablution, commutes, prayer, and evening celebrations without demanding repairs.
            </p>
          </div>
        </div>

        {/* Closing Action Buttons */}
        <div className="text-center pt-16 mt-16 border-t border-sand space-y-4">
          <h3 className="font-serif text-2xl sm:text-3xl font-medium text-cocoa">
            Begin your journey with Noore.
          </h3>
          <p className="text-xs sm:text-sm text-cocoa/70 font-light max-w-md mx-auto">
            Discover intentional modest pieces designed to feel like your favorite everyday essentials.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/products"
              className="px-8 py-4 bg-cocoa text-ivory text-xs uppercase tracking-widest font-semibold hover:bg-cocoa-light transition-all rounded-sm shadow-subtle tap-target-44"
            >
              <span>Explore The Collection</span>
            </Link>
            <Link
              to="/size-guide"
              className="px-8 py-4 bg-sand/40 border border-taupe/40 text-cocoa text-xs uppercase tracking-widest font-semibold hover:bg-sand/70 transition-all rounded-sm tap-target-44"
            >
              <span>View Abaya Sizing Guide</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
