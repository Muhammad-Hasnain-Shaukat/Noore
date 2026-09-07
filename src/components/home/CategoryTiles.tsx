import React from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '../../data/categories';
import { ArrowRight } from 'lucide-react';

export const CategoryTiles: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10">
        <div>
          <p className="text-xs uppercase tracking-widest text-taupe font-semibold mb-1">
            Shop By Category
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-medium text-cocoa">
            Curated For Modern Modesty
          </h2>
        </div>
        <Link
          to="/products"
          className="mt-3 sm:mt-0 text-xs uppercase tracking-wider font-semibold text-cocoa hover:text-taupe transition-colors flex items-center space-x-1 self-start"
        >
          <span>View All Pieces</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Category Grid: 2 columns on small screens, 4 columns on desktop */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {CATEGORIES.map((category) => (
          <Link
            key={category.id}
            to={`/collections/${category.slug}`}
            className="group relative aspect-[3/4] overflow-hidden rounded-sm bg-sand/30 border border-sand/50 shadow-subtle flex flex-col justify-end p-4 sm:p-5"
          >
            {/* Background Photography */}
            <img
              src={category.heroImage}
              alt={category.name}
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />

            {/* Gradient Overlay for Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-cocoa/80 via-cocoa/30 to-transparent transition-opacity duration-300 group-hover:from-cocoa/90" />

            {/* Content at Bottom */}
            <div className="relative z-10 text-ivory">
              <h3 className="font-serif text-lg sm:text-xl font-medium mb-1 tracking-wide">
                {category.name}
              </h3>
              <p className="text-xs text-ivory/80 font-light line-clamp-1 hidden sm:block mb-2">
                {category.tagline}
              </p>
              <div className="inline-flex items-center space-x-1.5 text-xs text-gold-light uppercase tracking-wider font-semibold group-hover:underline">
                <span>Explore</span>
                <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
