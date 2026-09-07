import React, { useState, useMemo, useEffect } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import { SlidersHorizontal, ChevronRight, X, RotateCcw } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { CATEGORIES } from '../data/categories';
import { ProductCard } from '../components/product/ProductCard';
import { FabricType, ColorFamily, Product } from '../types/product';

export const CollectionPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId?: string }>();
  const [searchParams, setSearchParams] = useSearchParams();

  // Mobile Filter Drawer state
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Extract filters from URL query parameters
  const selectedFabric = searchParams.get('fabric') || '';
  const selectedShade = searchParams.get('shade') || '';
  const selectedSort = searchParams.get('sort') || 'featured';
  const onlyInStock = searchParams.get('inStock') === 'true';

  // Available fabrics and color families for filters
  const allFabrics: FabricType[] = ['Modal', 'Chiffon', 'Jersey', 'Satin', 'Linen Blend', 'Bamboo', 'Metal/Brass'];
  const allShades: { id: ColorFamily; label: string; hex: string }[] = [
    { id: 'neutrals', label: 'Warm Neutrals', hex: '#E8DDD0' },
    { id: 'earth-tones', label: 'Earth Tones', hex: '#7A6251' },
    { id: 'pastels', label: 'Pastels', hex: '#C59A8D' },
    { id: 'dark-shades', label: 'Deep Shades', hex: '#352B27' },
  ];

  // Derive Collection Information
  const isNewArrivals = categoryId === 'new-arrivals';
  const currentCategory = CATEGORIES.find((c) => c.slug === categoryId);

  const collectionTitle = useMemo(() => {
    if (isNewArrivals) return 'New Arrivals';
    if (currentCategory) return currentCategory.name;
    return 'All Modest Essentials';
  }, [isNewArrivals, currentCategory]);

  const collectionDescription = useMemo(() => {
    if (isNewArrivals) return 'The latest thoughtful additions to our catalog, cut from refined seasonal textiles.';
    if (currentCategory) return currentCategory.description;
    return 'Everyday hijabs, tactile abayas, cooling inner caps, and snag-free accessories designed for quiet grace.';
  }, [isNewArrivals, currentCategory]);

  // Set document title
  useEffect(() => {
    document.title = `${collectionTitle} | Noore`;
    window.scrollTo(0, 0);
  }, [collectionTitle]);

  // Helper to update query parameters
  const updateQueryParam = (key: string, value: string | null) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    setSearchParams(newParams, { replace: true });
  };

  const clearAllFilters = () => {
    const newParams = new URLSearchParams();
    if (selectedSort !== 'featured') {
      newParams.set('sort', selectedSort);
    }
    setSearchParams(newParams, { replace: true });
  };

  // Filter & Sort Products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // 1. Category Filter
      if (isNewArrivals && !product.isNew) return false;
      if (categoryId && !isNewArrivals && product.category !== categoryId) return false;

      // 2. Fabric Filter
      if (selectedFabric && product.fabric !== selectedFabric) return false;

      // 3. Shade/ColorFamily Filter
      if (selectedShade && product.colorFamily !== selectedShade) return false;

      // 4. In Stock Filter
      if (onlyInStock && !product.inStock) return false;

      return true;
    }).sort((a: Product, b: Product) => {
      if (selectedSort === 'price-low') return a.price - b.price;
      if (selectedSort === 'price-high') return b.price - a.price;
      if (selectedSort === 'newest') return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      // Default: Featured
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [categoryId, isNewArrivals, selectedFabric, selectedShade, onlyInStock, selectedSort]);

  const hasActiveFilters = Boolean(selectedFabric || selectedShade || onlyInStock);

  return (
    <div className="flex-1 bg-ivory">
      {/* Breadcrumb Header */}
      <div className="border-b border-sand/60 bg-sand/20 py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-xs text-taupe mb-3" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-cocoa transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/products" className="hover:text-cocoa transition-colors">
              Collections
            </Link>
            {categoryId && (
              <>
                <ChevronRight className="w-3.5 h-3.5" />
                <span className="text-cocoa font-medium">{collectionTitle}</span>
              </>
            )}
          </nav>

          <div className="max-w-2xl">
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-cocoa tracking-tight mb-2">
              {collectionTitle}
            </h1>
            <p className="text-sm text-cocoa/75 font-light leading-relaxed">
              {collectionDescription}
            </p>
          </div>
        </div>
      </div>

      {/* Visual Category Gallery Strip (5 Curated Category Perspectives) */}
      {currentCategory && currentCategory.galleryImages && currentCategory.galleryImages.length > 0 && (
        <div className="border-b border-sand/60 bg-sand/15 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-5">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-taupe font-semibold block mb-1">
                  Category Lookbook
                </span>
                <h2 className="font-serif text-xl sm:text-2xl font-medium text-cocoa">
                  {currentCategory.name} In Focus — 5 Curated Editorial Angles
                </h2>
              </div>
              <p className="text-xs text-taupe font-light mt-1 sm:mt-0">
                5 Authentic Atelier Perspectives
              </p>
            </div>

            {/* 5-image responsive showcase */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
              {currentCategory.galleryImages.map((imageUrl, idx) => (
                <div
                  key={idx}
                  className="group relative aspect-[3/4] rounded-sm overflow-hidden bg-sand/30 border border-sand/70 shadow-subtle hover:border-taupe transition-all duration-300"
                >
                  <img
                    src={imageUrl}
                    alt={`${currentCategory.name} curated look ${idx + 1}`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cocoa/70 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 text-ivory">
                    <span className="text-[9px] uppercase tracking-widest text-gold-light font-semibold block">
                      Look 0{idx + 1}
                    </span>
                    <p className="font-serif text-xs font-medium text-ivory/90 line-clamp-1">
                      {idx === 0 && 'Silhouette Draped'}
                      {idx === 1 && 'Tactile Texture'}
                      {idx === 2 && 'Fluid Movement'}
                      {idx === 3 && 'Atelier Craft'}
                      {idx === 4 && 'Curated Ensemble'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filter / Sort Control Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-sand/60 gap-4">
          {/* Mobile Filter Button */}
          <button
            type="button"
            onClick={() => setIsMobileFilterOpen(true)}
            className="lg:hidden px-4 py-2 bg-sand/30 border border-sand rounded-sm text-xs uppercase tracking-wider font-semibold text-cocoa flex items-center space-x-2 hover:bg-sand/50 transition-colors tap-target-44"
          >
            <SlidersHorizontal className="w-4 h-4 text-taupe" />
            <span>Filters {hasActiveFilters && '(Active)'}</span>
          </button>

          {/* Product Count */}
          <p className="text-xs text-taupe font-medium hidden sm:block">
            Showing <strong className="text-cocoa">{filteredProducts.length}</strong> modest essentials
          </p>

          {/* Sort Dropdown */}
          <div className="flex items-center space-x-2 ml-auto">
            <label htmlFor="sort-select" className="text-xs text-taupe uppercase tracking-wider font-medium hidden sm:inline-block">
              Sort by:
            </label>
            <select
              id="sort-select"
              value={selectedSort}
              onChange={(e) => updateQueryParam('sort', e.target.value)}
              className="bg-ivory border border-sand text-cocoa text-xs font-medium py-2 px-3 rounded-sm focus:outline-none focus:ring-1 focus:ring-taupe cursor-pointer"
            >
              <option value="featured">Featured Collection</option>
              <option value="newest">Newest Arrivals</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Active Filter Chips */}
        {hasActiveFilters && (
          <div className="py-4 flex flex-wrap items-center gap-2 border-b border-sand/40">
            <span className="text-xs text-taupe font-medium mr-1">Active filters:</span>
            {selectedFabric && (
              <span className="inline-flex items-center space-x-1 px-2.5 py-1 bg-sand/50 text-cocoa text-xs rounded-sm border border-sand">
                <span>Fabric: {selectedFabric}</span>
                <button
                  type="button"
                  onClick={() => updateQueryParam('fabric', null)}
                  className="hover:text-taupe ml-1"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {selectedShade && (
              <span className="inline-flex items-center space-x-1 px-2.5 py-1 bg-sand/50 text-cocoa text-xs rounded-sm border border-sand">
                <span>Shade: {allShades.find((s) => s.id === selectedShade)?.label || selectedShade}</span>
                <button
                  type="button"
                  onClick={() => updateQueryParam('shade', null)}
                  className="hover:text-taupe ml-1"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {onlyInStock && (
              <span className="inline-flex items-center space-x-1 px-2.5 py-1 bg-sand/50 text-cocoa text-xs rounded-sm border border-sand">
                <span>In Stock Only</span>
                <button
                  type="button"
                  onClick={() => updateQueryParam('inStock', null)}
                  className="hover:text-taupe ml-1"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            <button
              type="button"
              onClick={clearAllFilters}
              className="text-xs text-taupe hover:text-cocoa underline ml-2 flex items-center space-x-1 transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Clear All</span>
            </button>
          </div>
        )}

        {/* Main Grid with Desktop Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-10 pt-6">
          {/* Desktop Filter Sidebar */}
          <aside className="hidden lg:block lg:col-span-1 space-y-8 pr-4">
            {/* Category Quick Links */}
            <div>
              <h2 className="text-xs uppercase tracking-widest text-taupe font-semibold mb-3">
                Categories
              </h2>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    to="/products"
                    className={`block py-0.5 transition-colors ${
                      !categoryId ? 'font-semibold text-cocoa' : 'text-cocoa/75 hover:text-cocoa'
                    }`}
                  >
                    All Essentials
                  </Link>
                </li>
                <li>
                  <Link
                    to="/collections/new-arrivals"
                    className={`block py-0.5 transition-colors ${
                      isNewArrivals ? 'font-semibold text-cocoa' : 'text-cocoa/75 hover:text-cocoa'
                    }`}
                  >
                    New Arrivals
                  </Link>
                </li>
                {CATEGORIES.map((cat) => (
                  <li key={cat.id}>
                    <Link
                      to={`/collections/${cat.slug}`}
                      className={`block py-0.5 transition-colors ${
                        categoryId === cat.slug ? 'font-semibold text-cocoa' : 'text-cocoa/75 hover:text-cocoa'
                      }`}
                    >
                      {cat.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Fabric Filter */}
            <div>
              <h2 className="text-xs uppercase tracking-widest text-taupe font-semibold mb-3">
                Fabric Texture
              </h2>
              <div className="space-y-2 text-xs">
                {allFabrics.map((fabric) => {
                  const isSelected = selectedFabric === fabric;
                  return (
                    <button
                      key={fabric}
                      type="button"
                      onClick={() => updateQueryParam('fabric', isSelected ? null : fabric)}
                      className={`w-full flex items-center justify-between text-left py-1 transition-colors ${
                        isSelected ? 'font-semibold text-cocoa' : 'text-cocoa/70 hover:text-cocoa'
                      }`}
                    >
                      <span>{fabric}</span>
                      {isSelected && <span className="text-[10px] text-taupe">●</span>}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Shade Filter */}
            <div>
              <h2 className="text-xs uppercase tracking-widest text-taupe font-semibold mb-3">
                Shade Family
              </h2>
              <div className="space-y-2 text-xs">
                {allShades.map((shade) => {
                  const isSelected = selectedShade === shade.id;
                  return (
                    <button
                      key={shade.id}
                      type="button"
                      onClick={() => updateQueryParam('shade', isSelected ? null : shade.id)}
                      className={`w-full flex items-center space-x-2.5 text-left py-1 transition-colors ${
                        isSelected ? 'font-semibold text-cocoa' : 'text-cocoa/70 hover:text-cocoa'
                      }`}
                    >
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-sand"
                        style={{ backgroundColor: shade.hex }}
                      />
                      <span className="flex-1">{shade.label}</span>
                      {isSelected && <span className="text-[10px] text-taupe">●</span>}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* In Stock Only Toggle */}
            <div className="pt-2 border-t border-sand/40">
              <label className="flex items-center space-x-2 cursor-pointer text-xs text-cocoa">
                <input
                  type="checkbox"
                  checked={onlyInStock}
                  onChange={(e) => updateQueryParam('inStock', e.target.checked ? 'true' : null)}
                  className="rounded-sm border-sand text-cocoa focus:ring-taupe accent-cocoa"
                />
                <span>Show in-stock only</span>
              </label>
            </div>
          </aside>

          {/* Product Grid Area */}
          <main className="lg:col-span-3">
            {filteredProducts.length === 0 ? (
              <div className="py-16 text-center bg-sand/15 rounded-sm border border-sand/50 p-8">
                <h2 className="font-serif text-2xl font-medium text-cocoa mb-2">
                  No matching pieces found
                </h2>
                <p className="text-xs sm:text-sm text-cocoa/60 max-w-sm mx-auto mb-6">
                  Try adjusting or clearing your active filters to see all available items in this collection.
                </p>
                <button
                  type="button"
                  onClick={clearAllFilters}
                  className="px-6 py-2.5 bg-cocoa text-ivory text-xs uppercase tracking-widest font-semibold hover:bg-cocoa-light transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div
            className="fixed inset-0 bg-cocoa/50 backdrop-blur-sm"
            onClick={() => setIsMobileFilterOpen(false)}
            aria-hidden="true"
          />
          <div className="relative ml-auto w-full max-w-xs bg-ivory text-cocoa h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-300">
            <div className="p-4 border-b border-sand flex items-center justify-between">
              <h2 className="font-serif text-lg font-medium">Filter Catalog</h2>
              <button
                type="button"
                onClick={() => setIsMobileFilterOpen(false)}
                className="p-1 text-cocoa/60 tap-target-44 flex items-center justify-center"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5 space-y-6">
              {/* Fabrics */}
              <div>
                <p className="text-xs uppercase tracking-widest text-taupe font-semibold mb-2">
                  Fabric Texture
                </p>
                <div className="space-y-1.5">
                  {allFabrics.map((fabric) => {
                    const isSelected = selectedFabric === fabric;
                    return (
                      <button
                        key={fabric}
                        type="button"
                        onClick={() => updateQueryParam('fabric', isSelected ? null : fabric)}
                        className={`w-full text-left py-1.5 px-2 rounded-sm text-xs flex justify-between ${
                          isSelected ? 'bg-sand font-semibold text-cocoa' : 'text-cocoa/75'
                        }`}
                      >
                        <span>{fabric}</span>
                        {isSelected && <span>✓</span>}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Shades */}
              <div>
                <p className="text-xs uppercase tracking-widest text-taupe font-semibold mb-2">
                  Shade Family
                </p>
                <div className="space-y-1.5">
                  {allShades.map((shade) => {
                    const isSelected = selectedShade === shade.id;
                    return (
                      <button
                        key={shade.id}
                        type="button"
                        onClick={() => updateQueryParam('shade', isSelected ? null : shade.id)}
                        className={`w-full text-left py-1.5 px-2 rounded-sm text-xs flex items-center space-x-2 ${
                          isSelected ? 'bg-sand font-semibold text-cocoa' : 'text-cocoa/75'
                        }`}
                      >
                        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: shade.hex }} />
                        <span className="flex-1">{shade.label}</span>
                        {isSelected && <span>✓</span>}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="p-4 border-t border-sand bg-sand/30 flex space-x-3">
              <button
                type="button"
                onClick={clearAllFilters}
                className="flex-1 py-2.5 bg-ivory border border-sand text-xs uppercase tracking-wider font-medium text-cocoa"
              >
                Clear
              </button>
              <button
                type="button"
                onClick={() => setIsMobileFilterOpen(false)}
                className="flex-1 py-2.5 bg-cocoa text-ivory text-xs uppercase tracking-wider font-semibold"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
