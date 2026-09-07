import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export const FeaturedAbaya: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Asymmetric Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Editorial Visual (Asymmetric positioning, spans 7 columns) */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[3/4] sm:aspect-[4/3] lg:aspect-[3/4] w-full rounded-sm overflow-hidden bg-sand/30 border border-sand shadow-elevated">
              <img
                src="/assets/story/abayas_4.jpg"
                alt="Featured Classic Open Abaya in Midnight black tailored silhouette"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cocoa/40 via-transparent to-transparent" />
            </div>

            {/* Asymmetric Floating Accent Box */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 bg-sand/90 backdrop-blur-md p-6 max-w-xs rounded-sm border border-taupe/30 shadow-subtle">
              <p className="text-[10px] uppercase tracking-widest text-taupe-dark font-semibold mb-1">
                Crafted Silhouette
              </p>
              <p className="font-serif text-base text-cocoa font-medium leading-snug">
                Japanese Nidha Crepe with fluid drop shoulders and discreet pockets.
              </p>
            </div>
          </div>

          {/* Editorial Copy (Spans 5 columns with generous spacing) */}
          <div className="lg:col-span-5 space-y-6 lg:pl-4">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-taupe font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span>THE ABAYA EDIT</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-cocoa leading-[1.15]">
              Movement with quiet distinction.
            </h2>

            <p className="text-sm sm:text-base text-cocoa/75 font-light leading-relaxed">
              Our abayas are tailored to float naturally, honoring full modest coverage while
              maintaining clean, modern lines. Crafted from breathable textured crepes and organic
              linen blends that maintain structured drape through every season.
            </p>

            <div className="pt-2">
              <Link
                to="/collections/abayas"
                className="inline-flex items-center space-x-2.5 px-8 py-3.5 bg-cocoa text-ivory text-xs uppercase tracking-widest font-semibold hover:bg-cocoa-light transition-all rounded-sm shadow-subtle tap-target-44"
              >
                <span>Explore Abayas</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
