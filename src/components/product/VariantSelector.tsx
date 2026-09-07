import React from 'react';
import { ProductColor } from '../../types/product';
import { Ruler } from 'lucide-react';
import { useUIStore } from '../../store/useUIStore';

interface VariantSelectorProps {
  colors: ProductColor[];
  selectedColor: ProductColor;
  onSelectColor: (color: ProductColor) => void;
  availableSizes?: string[];
  selectedSize?: string;
  onSelectSize?: (size: string) => void;
  sizeError?: boolean;
}

export const VariantSelector: React.FC<VariantSelectorProps> = ({
  colors,
  selectedColor,
  onSelectColor,
  availableSizes,
  selectedSize,
  onSelectSize,
  sizeError,
}) => {
  const openSizeGuide = useUIStore((state) => state.openSizeGuide);

  return (
    <div className="space-y-6">
      {/* Color Swatches */}
      <div>
        <div className="flex items-center justify-between mb-2.5">
          <label className="text-xs uppercase tracking-wider text-taupe font-semibold">
            Color: <span className="text-cocoa font-medium">{selectedColor.name}</span>
          </label>
        </div>
        <div className="flex flex-wrap gap-2.5">
          {colors.map((color) => {
            const isSelected = selectedColor.name === color.name;
            return (
              <button
                key={color.name}
                type="button"
                onClick={() => onSelectColor(color)}
                className={`group relative flex items-center space-x-2 px-3 py-1.5 rounded-sm border text-xs transition-all ${
                  isSelected
                    ? 'border-cocoa bg-sand/30 font-medium'
                    : 'border-sand hover:border-taupe bg-ivory text-cocoa/80'
                }`}
                aria-label={`Select ${color.name}`}
              >
                <span
                  className="w-3.5 h-3.5 rounded-full border border-sand/80 shrink-0"
                  style={{ backgroundColor: color.hex }}
                />
                <span>{color.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Abaya Size Selector */}
      {availableSizes && availableSizes.length > 0 && onSelectSize && (
        <div>
          <div className="flex items-center justify-between mb-2.5">
            <label className="text-xs uppercase tracking-wider text-taupe font-semibold">
              Garment Length / Size:{' '}
              {selectedSize ? (
                <span className="text-cocoa font-medium">Size {selectedSize}</span>
              ) : (
                <span className="text-cocoa/50 font-normal">Select length</span>
              )}
            </label>

            {/* Size Guide Trigger */}
            <button
              type="button"
              onClick={openSizeGuide}
              className="text-xs text-taupe hover:text-cocoa flex items-center space-x-1 underline underline-offset-2 transition-colors"
            >
              <Ruler className="w-3.5 h-3.5" />
              <span>Abaya Size Guide</span>
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            {availableSizes.map((size) => {
              const isSelected = selectedSize === size;
              return (
                <button
                  key={size}
                  type="button"
                  onClick={() => onSelectSize(size)}
                  className={`w-12 h-11 rounded-sm border text-xs font-semibold flex items-center justify-center transition-all ${
                    isSelected
                      ? 'border-cocoa bg-cocoa text-ivory'
                      : 'border-sand hover:border-taupe text-cocoa bg-ivory'
                  } ${sizeError && !selectedSize ? 'border-red-400 bg-red-50/30 animate-pulse' : ''}`}
                  aria-label={`Size ${size}`}
                >
                  {size}
                </button>
              );
            })}
          </div>

          {sizeError && !selectedSize && (
            <p className="text-xs text-red-600 mt-2 font-medium">
              Please choose an abaya length / size before adding to bag.
            </p>
          )}
        </div>
      )}
    </div>
  );
};
