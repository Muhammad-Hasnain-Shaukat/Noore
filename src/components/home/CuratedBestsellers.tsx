import React from 'react';
import { Link } from 'react-router-dom';
import { ProductCard } from '../product/ProductCard';
import { PRODUCTS } from '../../data/products';
import { ArrowRight } from 'lucide-react';

export const CuratedBestsellers: React.FC = () => {
  // Curated 8 standout essentials
  const curatedProducts = PRODUCTS.filter((p) => p.isBestseller || p.featured).slice(0, 8);

  return (
    <section className="py-16 sm:py-20 bg-ivory border-t border-sand/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12">
          <div>
            <span className="text-xs uppercase tracking-widest text-taupe font-semibold mb-1 block">
              Curated Edit
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-medium text-cocoa">
              Boutique Favorites
            </h2>
            <p className="text-xs sm:text-sm text-cocoa/60 font-light mt-1">
              Hand-selected daily staples celebrated for texture, drape, and enduring ease.
            </p>
          </div>

          <Link
            to="/products"
            className="mt-4 sm:mt-0 text-xs uppercase tracking-wider font-semibold text-cocoa hover:text-taupe transition-colors flex items-center space-x-1.5 self-start"
          >
            <span>Shop Full Catalog</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 2 columns on mobile, 4 columns on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {curatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
