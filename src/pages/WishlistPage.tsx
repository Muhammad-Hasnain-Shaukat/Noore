import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ArrowRight } from 'lucide-react';
import { useWishlistStore } from '../store/useWishlistStore';
import { ProductCard } from '../components/product/ProductCard';

export const WishlistPage: React.FC = () => {
  const { items } = useWishlistStore();

  useEffect(() => {
    document.title = 'Saved Wishlist | Noore';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex-1 bg-ivory py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-8 pb-4 border-b border-sand">
          <div>
            <h1 className="font-serif text-3xl sm:text-4xl font-medium text-cocoa tracking-tight mb-1">
              Your Wishlist
            </h1>
            <p className="text-xs sm:text-sm text-taupe font-light">
              Pieces you’ve saved for later. Select your desired color or size before moving to your bag.
            </p>
          </div>
          <span className="text-xs text-taupe font-medium mt-2 sm:mt-0">
            {items.length} {items.length === 1 ? 'item' : 'items'} saved
          </span>
        </div>

        {items.length === 0 ? (
          <div className="py-20 text-center bg-sand/15 rounded-sm border border-sand p-8 max-w-lg mx-auto">
            <div className="w-16 h-16 rounded-full bg-sand/50 flex items-center justify-center mx-auto mb-4 text-taupe">
              <Heart className="w-8 h-8" strokeWidth={1.5} />
            </div>
            <h2 className="font-serif text-2xl font-medium text-cocoa mb-2">
              No saved items yet
            </h2>
            <p className="text-xs sm:text-sm text-cocoa/70 mb-6 font-light">
              Tap the heart icon on any hijab, abaya, or accessory to keep track of your favorites.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center space-x-2 px-7 py-3 bg-cocoa text-ivory text-xs uppercase tracking-widest font-semibold hover:bg-cocoa-light transition-colors rounded-sm"
            >
              <span>Explore Collection</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {items.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
