import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Eye } from 'lucide-react';
import { Product } from '../../types/product';
import { formatPrice } from '../../config/currency';
import { useWishlistStore } from '../../store/useWishlistStore';
import { useCartStore } from '../../store/useCartStore';
import { useUIStore } from '../../store/useUIStore';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [isHovered, setIsHovered] = useState(false);

  const { isInWishlist, toggleWishlist } = useWishlistStore();
  const addItem = useCartStore((state) => state.addItem);
  const { openCart, showToast } = useUIStore();

  const isFavorited = isInWishlist(product.id);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // If product requires size selection (e.g. Abayas), navigate to product page instead of blind adding
    if (product.availableSizes && product.availableSizes.length > 0) {
      window.location.href = `/product/${product.slug}`;
      return;
    }

    addItem(product, selectedColor.name, selectedColor.hex);
    showToast(`Added ${product.name} (${selectedColor.name}) to bag`);
    openCart();
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
    showToast(isFavorited ? 'Removed from wishlist' : 'Saved to wishlist');
  };

  const displayImage = isHovered && product.images[1] ? product.images[1] : product.images[0];

  return (
    <div
      className="group relative flex flex-col bg-ivory text-cocoa transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container (3:4 Aspect Ratio) */}
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm bg-sand/30 border border-sand/40">
        <Link to={`/product/${product.slug}`} className="block w-full h-full">
          <img
            src={displayImage}
            alt={product.name}
            className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
            loading="lazy"
          />
        </Link>

        {/* Badges */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 z-10 pointer-events-none">
          {product.isNew && (
            <span className="bg-ivory/95 text-cocoa text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-sm shadow-subtle border border-sand/60">
              New
            </span>
          )}
          {product.isBestseller && !product.isNew && (
            <span className="bg-cocoa text-ivory text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-sm shadow-subtle">
              Curated
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          type="button"
          onClick={handleToggleWishlist}
          aria-label={isFavorited ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
          className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-ivory/90 hover:bg-ivory text-cocoa flex items-center justify-center shadow-subtle transition-all duration-200 z-10 tap-target-44"
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              isFavorited ? 'fill-taupe text-taupe' : 'text-cocoa/80 hover:text-cocoa'
            }`}
            strokeWidth={1.5}
          />
        </button>

        {/* Desktop Hover Quick Action Bar */}
        <div className="hidden lg:flex absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-cocoa/50 via-cocoa/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center space-x-2">
          {product.availableSizes && product.availableSizes.length > 0 ? (
            <Link
              to={`/product/${product.slug}`}
              className="w-full py-2 bg-ivory text-cocoa hover:bg-sand text-xs uppercase tracking-wider font-semibold text-center rounded-sm transition-colors shadow-subtle flex items-center justify-center space-x-1.5"
            >
              <Eye className="w-3.5 h-3.5 text-taupe" />
              <span>Select Options</span>
            </Link>
          ) : (
            <button
              type="button"
              onClick={handleQuickAdd}
              className="w-full py-2 bg-ivory text-cocoa hover:bg-sand text-xs uppercase tracking-wider font-semibold text-center rounded-sm transition-colors shadow-subtle flex items-center justify-center space-x-1.5"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-taupe" />
              <span>Quick Add</span>
            </button>
          )}
        </div>
      </div>

      {/* Product Information */}
      <div className="pt-3 pb-2 flex-1 flex flex-col justify-between">
        <div>
          {/* Fabric / Subtitle */}
          <p className="text-[11px] uppercase tracking-wider text-taupe font-medium mb-1">
            {product.fabric || product.category}
          </p>

          {/* Title */}
          <Link
            to={`/product/${product.slug}`}
            className="block font-medium text-sm text-cocoa hover:text-taupe transition-colors line-clamp-1 mb-1"
          >
            {product.name}
          </Link>

          {/* Modest Specific Badge */}
          {product.opacity && (
            <span className="inline-block text-[10px] text-olive font-medium bg-olive/10 px-1.5 py-0.5 rounded-xs mb-1.5">
              {product.opacity}
            </span>
          )}
          {product.abayaCut && (
            <span className="inline-block text-[10px] text-taupe-dark font-medium bg-sand/60 px-1.5 py-0.5 rounded-xs mb-1.5">
              {product.abayaCut}
            </span>
          )}
        </div>

        <div>
          {/* Price */}
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-sm font-semibold text-cocoa">
              {formatPrice(product.price)}
            </span>
            {product.compareAtPrice && (
              <span className="text-xs text-taupe line-through font-light">
                {formatPrice(product.compareAtPrice)}
              </span>
            )}
          </div>

          {/* Color Swatches */}
          {product.colors && product.colors.length > 1 && (
            <div className="flex items-center space-x-1.5 pt-1">
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedColor(color);
                  }}
                  title={color.name}
                  aria-label={`Select color ${color.name}`}
                  className={`w-3.5 h-3.5 rounded-full border transition-all ${
                    selectedColor.name === color.name
                      ? 'ring-1 ring-cocoa ring-offset-1 border-cocoa'
                      : 'border-sand/80 hover:scale-110'
                  }`}
                  style={{ backgroundColor: color.hex }}
                />
              ))}
              <span className="text-[10px] text-taupe ml-1">
                {selectedColor.name}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
