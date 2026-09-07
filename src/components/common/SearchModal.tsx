import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Search, X, ArrowRight } from 'lucide-react';
import { useUIStore } from '../../store/useUIStore';
import { PRODUCTS } from '../../data/products';
import { formatPrice } from '../../config/currency';

export const SearchModal: React.FC = () => {
  const { isSearchOpen, closeSearch } = useUIStore();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setQuery('');
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isSearchOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isSearchOpen) {
        closeSearch();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, closeSearch]);

  if (!isSearchOpen) return null;

  const trimmed = query.trim().toLowerCase();
  const filteredProducts = trimmed
    ? PRODUCTS.filter((p) => {
        const matchName = p.name.toLowerCase().includes(trimmed);
        const matchCategory = p.category.toLowerCase().includes(trimmed);
        const matchFabric = p.fabric?.toLowerCase().includes(trimmed);
        const matchColor = p.colors.some((c) => c.name.toLowerCase().includes(trimmed));
        const matchDesc = p.description.toLowerCase().includes(trimmed);
        return matchName || matchCategory || matchFabric || matchColor || matchDesc;
      }).slice(0, 6)
    : [];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
      closeSearch();
    }
  };

  const quickTerms = ['Modal Hijab', 'Classic Abaya', 'Chiffon', 'Inner Cap', 'Magnets', 'Taupe'];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-cocoa/50 backdrop-blur-sm transition-opacity"
        onClick={closeSearch}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-ivory text-cocoa rounded-sm shadow-elevated border border-sand z-10 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Search Input Bar */}
        <form onSubmit={handleSearchSubmit} className="relative flex items-center border-b border-sand px-5 py-4">
          <Search className="w-5 h-5 text-taupe mr-3 shrink-0" strokeWidth={1.5} />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search hijabs, abayas, fabrics, colors..."
            className="w-full bg-transparent text-base sm:text-lg text-cocoa placeholder:text-cocoa/40 focus:outline-none font-sans"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="p-1 text-cocoa/40 hover:text-cocoa mr-2"
              aria-label="Clear search input"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            type="button"
            onClick={closeSearch}
            className="p-1 text-cocoa/60 hover:text-cocoa tap-target-44 flex items-center justify-center rounded-sm"
            aria-label="Close search dialog"
          >
            <X className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </form>

        {/* Search Content */}
        <div className="p-6 max-h-[70vh] overflow-y-auto">
          {trimmed.length === 0 ? (
            <div>
              <p className="text-xs uppercase tracking-widest text-taupe font-semibold mb-3">
                Suggested Searches
              </p>
              <div className="flex flex-wrap gap-2">
                {quickTerms.map((term) => (
                  <button
                    key={term}
                    type="button"
                    onClick={() => setQuery(term)}
                    className="px-3 py-1.5 bg-sand/40 hover:bg-sand text-cocoa text-xs rounded-sm border border-sand/70 transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-sand/40">
                <span className="text-xs uppercase tracking-wider text-taupe font-medium">
                  {filteredProducts.length} Results for “{query}”
                </span>
                <button
                  type="button"
                  onClick={handleSearchSubmit}
                  className="text-xs font-semibold text-cocoa hover:text-taupe flex items-center space-x-1"
                >
                  <span>View all results</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

              <div className="divide-y divide-sand/40">
                {filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.slug}`}
                    onClick={closeSearch}
                    className="py-3 flex items-center space-x-4 group hover:bg-sand/20 px-2 -mx-2 rounded-sm transition-colors"
                  >
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-12 h-16 object-cover rounded-sm bg-sand/30 shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-cocoa group-hover:text-taupe transition-colors truncate">
                        {product.name}
                      </p>
                      <p className="text-xs text-taupe mt-0.5">
                        {product.fabric ? `${product.fabric} • ` : ''}
                        {formatPrice(product.price)}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <div className="py-8 text-center">
              <p className="font-serif text-lg font-medium text-cocoa mb-1">
                No items found for “{query}”
              </p>
              <p className="text-xs text-cocoa/60 max-w-sm mx-auto">
                Check spelling or explore our collections in the navigation above.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
