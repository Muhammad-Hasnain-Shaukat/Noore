import React, { useEffect, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/product/ProductCard';

export const SearchPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  useEffect(() => {
    document.title = query ? `Search: "${query}" | Noore` : 'Search | Noore';
    window.scrollTo(0, 0);
  }, [query]);

  const results = useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) return [];
    return PRODUCTS.filter((p) => {
      const matchName = p.name.toLowerCase().includes(trimmed);
      const matchCat = p.category.toLowerCase().includes(trimmed);
      const matchFabric = p.fabric?.toLowerCase().includes(trimmed);
      const matchColor = p.colors.some((c) => c.name.toLowerCase().includes(trimmed));
      const matchDesc = p.description.toLowerCase().includes(trimmed);
      return matchName || matchCat || matchFabric || matchColor || matchDesc;
    });
  }, [query]);

  return (
    <div className="flex-1 bg-ivory py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Header Bar */}
        <div className="max-w-xl mb-10">
          <h1 className="font-serif text-3xl sm:text-4xl font-medium text-cocoa tracking-tight mb-3">
            Search Our Catalog
          </h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const input = (e.currentTarget.elements.namedItem('search-term') as HTMLInputElement).value;
              setSearchParams({ q: input.trim() });
            }}
            className="flex items-center border border-sand bg-ivory rounded-sm shadow-subtle p-2"
          >
            <Search className="w-5 h-5 text-taupe ml-2 mr-3" strokeWidth={1.5} />
            <input
              name="search-term"
              type="text"
              defaultValue={query}
              placeholder="Search by fabric, color, or style..."
              className="flex-1 bg-transparent text-sm text-cocoa focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-cocoa text-ivory text-xs uppercase tracking-wider font-semibold rounded-sm hover:bg-cocoa-light transition-colors"
            >
              Search
            </button>
          </form>
        </div>

        {/* Results Info */}
        {query && (
          <div className="mb-6 pb-3 border-b border-sand flex items-center justify-between">
            <p className="text-xs text-taupe font-medium">
              Showing <strong className="text-cocoa">{results.length}</strong> results for “{query}”
            </p>
          </div>
        )}

        {/* Results Grid or Empty State */}
        {results.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {results.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : query ? (
          <div className="py-16 text-center bg-sand/15 rounded-sm border border-sand p-8 max-w-md mx-auto">
            <p className="font-serif text-2xl font-medium text-cocoa mb-2">No matching pieces</p>
            <p className="text-xs text-cocoa/70 mb-6 font-light">
              We couldn’t find anything matching “{query}”. Try searching for modal, chiffon, abaya, or taupe.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center space-x-2 px-6 py-2.5 bg-cocoa text-ivory text-xs uppercase tracking-wider font-semibold hover:bg-cocoa-light transition-colors rounded-sm"
            >
              <span>View All Pieces</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
};
