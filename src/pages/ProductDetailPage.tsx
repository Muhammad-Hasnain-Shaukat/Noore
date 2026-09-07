import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Heart, ShoppingBag, ChevronRight, Check, Minus, Plus, ShieldCheck, Truck, RefreshCw } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { ProductGallery } from '../components/product/ProductGallery';
import { VariantSelector } from '../components/product/VariantSelector';
import { ProductAccordion } from '../components/product/ProductAccordion';
import { ProductCard } from '../components/product/ProductCard';
import { StickyMobileBuyBar } from '../components/product/StickyMobileBuyBar';
import { formatPrice } from '../config/currency';
import { useCartStore } from '../store/useCartStore';
import { useWishlistStore } from '../store/useWishlistStore';
import { useRecentlyViewed } from '../store/useRecentlyViewed';
import { useUIStore } from '../store/useUIStore';

export const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const product = PRODUCTS.find((p) => p.slug === slug);

  // Fallback if product slug not found
  useEffect(() => {
    if (!product) {
      navigate('/404', { replace: true });
    }
  }, [product, navigate]);

  if (!product) return null;

  // Track selection state
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState<string | undefined>(undefined);
  const [quantity, setQuantity] = useState(1);
  const [sizeError, setSizeError] = useState(false);

  // Sticky mobile bar visibility observer
  const mainBuyButtonRef = useRef<HTMLButtonElement>(null);
  const [isStickyBarVisible, setIsStickyBarVisible] = useState(false);

  const addItem = useCartStore((state) => state.addItem);
  const { isInWishlist, toggleWishlist } = useWishlistStore();
  const { addRecentlyViewed, items: recentlyViewed } = useRecentlyViewed();
  const { openCart, showToast } = useUIStore();

  const isFavorited = isInWishlist(product.id);

  // Record recently viewed & update document title
  useEffect(() => {
    document.title = `${product.name} | Noore`;
    window.scrollTo(0, 0);
    addRecentlyViewed(product);
    setSelectedColor(product.colors[0]);
    setSelectedSize(undefined);
    setQuantity(1);
    setSizeError(false);
  }, [product, addRecentlyViewed]);

  // Observer for main Add to Bag button on mobile
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsStickyBarVisible(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (mainBuyButtonRef.current) {
      observer.observe(mainBuyButtonRef.current);
    }

    return () => observer.disconnect();
  }, [product]);

  const handleAddToCart = () => {
    // Validate required size for abayas
    if (product.availableSizes && product.availableSizes.length > 0 && !selectedSize) {
      setSizeError(true);
      showToast('Please select your abaya size');
      return;
    }

    addItem(product, selectedColor.name, selectedColor.hex, selectedSize, quantity);
    const sizeText = selectedSize ? ` (Size ${selectedSize})` : '';
    showToast(`Added ${product.name} - ${selectedColor.name}${sizeText} to bag`);
    openCart();
  };

  // Related products (same category, excluding current)
  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  // Accordion Data
  const accordionItems = [
    {
      id: 'specifications',
      title: 'Fabric & Specifications',
      content: (
        <div className="space-y-2">
          {product.fabric && (
            <p>
              <strong>Fabric Composition:</strong> {product.fabric}
            </p>
          )}
          {product.dimensions && (
            <p>
              <strong>Dimensions:</strong> {product.dimensions}
            </p>
          )}
          <ul className="list-disc list-inside space-y-1 mt-2 text-cocoa/80">
            {product.details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      id: 'care',
      title: 'Care Instructions',
      content: (
        <ul className="list-disc list-inside space-y-1.5">
          {product.careInstructions.map((instruction, i) => (
            <li key={i}>{instruction}</li>
          ))}
        </ul>
      ),
    },
    {
      id: 'fit',
      title: 'Fit & Modest Sizing',
      content: (
        <p>
          {product.fitAndSizing ||
            'Designed with generous, graceful proportions. Hijabs provide full chest and shoulder coverage; abayas are cut with ample ease for modest comfort.'}
        </p>
      ),
    },
    {
      id: 'delivery',
      title: 'Delivery & WhatsApp Ordering',
      content: (
        <div className="space-y-2 text-xs leading-relaxed">
          <p>
            <strong>Concierge Ordering:</strong> Orders are verified directly via our WhatsApp
            concierge. Standard domestic dispatch takes 2 to 4 business days.
          </p>
          <p>
            <strong>Exchange Period:</strong> 7-day exchange window for unworn items in original
            packaging.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="flex-1 bg-ivory pb-16">
      {/* Breadcrumbs */}
      <div className="border-b border-sand/60 py-3.5 bg-sand/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-xs text-taupe truncate" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-cocoa transition-colors shrink-0">
              Home
            </Link>
            <ChevronRight className="w-3 h-3 shrink-0" />
            <Link
              to={`/collections/${product.category}`}
              className="hover:text-cocoa capitalize transition-colors shrink-0"
            >
              {product.category.replace('-', ' ')}
            </Link>
            <ChevronRight className="w-3 h-3 shrink-0" />
            <span className="text-cocoa font-medium truncate">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Main Product Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
          
          {/* Left Column: Image Gallery (spans 7 cols on desktop) */}
          <div className="lg:col-span-7">
            <ProductGallery images={product.images} productName={product.name} />
          </div>

          {/* Right Column: Product Purchasing Details (spans 5 cols on desktop) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              {/* Category / Fabric */}
              <p className="text-xs uppercase tracking-widest text-taupe font-semibold mb-2">
                {product.fabric || product.category}
              </p>

              {/* Title */}
              <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-medium text-cocoa leading-snug mb-2">
                {product.name}
              </h1>

              {/* Price & Availability */}
              <div className="flex items-center space-x-3 mt-2">
                <span className="text-xl sm:text-2xl font-semibold text-cocoa">
                  {formatPrice(product.price)}
                </span>
                {product.compareAtPrice && (
                  <span className="text-sm text-taupe line-through font-light">
                    {formatPrice(product.compareAtPrice)}
                  </span>
                )}
                <span className="inline-flex items-center text-xs text-olive font-medium bg-olive/10 px-2 py-0.5 rounded-sm">
                  <Check className="w-3 h-3 mr-1" />
                  In Stock
                </span>
              </div>
            </div>

            {/* Modest Fashion Specifications Pill Box */}
            <div className="p-3.5 bg-sand/30 border border-sand rounded-sm grid grid-cols-2 gap-3 text-xs">
              {product.opacity && (
                <div>
                  <span className="text-taupe uppercase tracking-wider text-[10px] block font-semibold">
                    Opacity Rating
                  </span>
                  <span className="text-cocoa font-medium">{product.opacity}</span>
                </div>
              )}
              {product.abayaCut && (
                <div>
                  <span className="text-taupe uppercase tracking-wider text-[10px] block font-semibold">
                    Silhouette Cut
                  </span>
                  <span className="text-cocoa font-medium">{product.abayaCut}</span>
                </div>
              )}
              {product.dimensions && (
                <div>
                  <span className="text-taupe uppercase tracking-wider text-[10px] block font-semibold">
                    Dimensions
                  </span>
                  <span className="text-cocoa font-medium">{product.dimensions}</span>
                </div>
              )}
              {product.drapingDifficulty && (
                <div>
                  <span className="text-taupe uppercase tracking-wider text-[10px] block font-semibold">
                    Draping
                  </span>
                  <span className="text-cocoa font-medium">{product.drapingDifficulty}</span>
                </div>
              )}
            </div>

            {/* Short Description */}
            <p className="text-sm text-cocoa/80 font-light leading-relaxed">
              {product.description}
            </p>

            {/* Variant Selector (Colors + Sizes) */}
            <VariantSelector
              colors={product.colors}
              selectedColor={selectedColor}
              onSelectColor={(c) => setSelectedColor(c)}
              availableSizes={product.availableSizes}
              selectedSize={selectedSize}
              onSelectSize={(s) => {
                setSelectedSize(s);
                setSizeError(false);
              }}
              sizeError={sizeError}
            />

            {/* Quantity Stepper & Actions */}
            <div className="pt-2 space-y-3">
              <div className="flex items-center space-x-4">
                {/* Quantity */}
                <div className="flex items-center border border-sand rounded-sm bg-sand/20">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="p-3 text-cocoa hover:bg-sand/60 transition-colors tap-target-44 flex items-center justify-center"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-4 text-xs font-semibold select-none min-w-[32px] text-center">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    className="p-3 text-cocoa hover:bg-sand/60 transition-colors tap-target-44 flex items-center justify-center"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Primary Add to Bag Button */}
                <button
                  ref={mainBuyButtonRef}
                  type="button"
                  onClick={handleAddToCart}
                  className="flex-1 py-3.5 px-6 bg-cocoa text-ivory text-xs uppercase tracking-widest font-semibold hover:bg-cocoa-light transition-all rounded-sm flex items-center justify-center space-x-2 shadow-subtle tap-target-44 active:scale-[0.99]"
                >
                  <ShoppingBag className="w-4 h-4 text-taupe-light" />
                  <span>Add to Bag • {formatPrice(product.price * quantity)}</span>
                </button>

                {/* Wishlist Button */}
                <button
                  type="button"
                  onClick={() => {
                    toggleWishlist(product);
                    showToast(isFavorited ? 'Removed from wishlist' : 'Saved to wishlist');
                  }}
                  aria-label={isFavorited ? 'Remove from wishlist' : 'Save to wishlist'}
                  className="p-3.5 border border-sand rounded-sm bg-ivory hover:bg-sand/30 text-cocoa transition-colors tap-target-44 flex items-center justify-center"
                >
                  <Heart
                    className={`w-5 h-5 ${isFavorited ? 'fill-taupe text-taupe' : 'text-cocoa'}`}
                    strokeWidth={1.5}
                  />
                </button>
              </div>

              {/* Informative Assurance Badges */}
              <div className="grid grid-cols-3 gap-2 pt-3 border-t border-sand/50 text-[11px] text-cocoa/70">
                <div className="flex items-center space-x-1.5">
                  <Truck className="w-3.5 h-3.5 text-taupe shrink-0" />
                  <span>Nationwide Courier</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-taupe shrink-0" />
                  <span>100% Quality Checked</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <RefreshCw className="w-3.5 h-3.5 text-taupe shrink-0" />
                  <span>7-Day Exchange</span>
                </div>
              </div>
            </div>

            {/* Accordions */}
            <div className="pt-4">
              <ProductAccordion items={accordionItems} />
            </div>
          </div>

        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-12 border-t border-sand/70">
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-cocoa mb-6">
              Complete the Look
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {relatedProducts.map((relProduct) => (
                <ProductCard key={relProduct.id} product={relProduct} />
              ))}
            </div>
          </div>
        )}

        {/* Recently Viewed Products */}
        {recentlyViewed.length > 1 && (
          <div className="mt-16 pt-12 border-t border-sand/50">
            <h2 className="font-serif text-xl sm:text-2xl font-medium text-cocoa mb-6">
              Recently Viewed
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {recentlyViewed
                .filter((p) => p.id !== product.id)
                .slice(0, 4)
                .map((recent) => (
                  <ProductCard key={recent.id} product={recent} />
                ))}
            </div>
          </div>
        )}
      </div>

      {/* Mobile Sticky Add to Bag Bar */}
      <StickyMobileBuyBar
        product={product}
        selectedColorName={selectedColor.name}
        selectedColorHex={selectedColor.hex}
        selectedSize={selectedSize}
        onAddToCart={handleAddToCart}
        isVisible={isStickyBarVisible}
      />
    </div>
  );
};
