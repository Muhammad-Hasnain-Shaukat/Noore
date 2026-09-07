import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { Product } from '../../types/product';
import { formatPrice } from '../../config/currency';

interface StickyMobileBuyBarProps {
  product: Product;
  selectedColorName: string;
  selectedColorHex: string;
  selectedSize?: string;
  onAddToCart: () => void;
  isVisible: boolean;
}

export const StickyMobileBuyBar: React.FC<StickyMobileBuyBarProps> = ({
  product,
  selectedColorName,
  selectedColorHex,
  selectedSize,
  onAddToCart,
  isVisible,
}) => {
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-ivory/95 backdrop-blur-md border-t border-sand shadow-elevated px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] animate-in slide-in-from-bottom duration-300">
      <div className="flex items-center justify-between gap-3">
        {/* Thumbnail & Info */}
        <div className="flex items-center space-x-3 min-w-0 flex-1">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-10 h-12 object-cover rounded-sm border border-sand shrink-0 bg-sand/30"
          />
          <div className="min-w-0">
            <p className="text-xs font-semibold text-cocoa truncate">{product.name}</p>
            <div className="flex items-center space-x-1.5 text-[11px] text-taupe mt-0.5">
              <span
                className="w-2 h-2 rounded-full border border-sand shrink-0"
                style={{ backgroundColor: selectedColorHex }}
              />
              <span className="truncate">{selectedColorName}</span>
              {selectedSize && <span>• Size {selectedSize}</span>}
              <span className="font-semibold text-cocoa ml-1">
                {formatPrice(product.price)}
              </span>
            </div>
          </div>
        </div>

        {/* Buy Button */}
        <button
          type="button"
          onClick={onAddToCart}
          className="px-5 py-3 bg-cocoa text-ivory text-xs uppercase tracking-widest font-semibold hover:bg-cocoa-light transition-colors rounded-sm shrink-0 flex items-center space-x-1.5 shadow-sm tap-target-44"
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          <span>Add</span>
        </button>
      </div>
    </div>
  );
};
