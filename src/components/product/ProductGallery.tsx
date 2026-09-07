import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({ images, productName }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-4">
      {/* Thumbnails (Desktop side list / Mobile bottom) */}
      {images.length > 1 && (
        <div className="flex lg:flex-col gap-2.5 overflow-x-auto lg:overflow-y-auto no-scrollbar lg:w-20 shrink-0">
          {images.map((img, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentIndex(index)}
              className={`relative aspect-[3/4] w-16 lg:w-full rounded-sm overflow-hidden border transition-all shrink-0 ${
                currentIndex === index
                  ? 'border-cocoa ring-1 ring-cocoa'
                  : 'border-sand opacity-70 hover:opacity-100'
              }`}
            >
              <img
                src={img}
                alt={`${productName} thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Main Image View */}
      <div className="relative flex-1 aspect-[3/4] bg-sand/30 rounded-sm overflow-hidden border border-sand/60">
        <img
          src={images[currentIndex]}
          alt={`${productName} view ${currentIndex + 1}`}
          className="w-full h-full object-cover object-center transition-all duration-300"
        />

        {/* Carousel arrows (if > 1 image) */}
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={prevImage}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-ivory/80 hover:bg-ivory text-cocoa flex items-center justify-center shadow-subtle transition-colors tap-target-44"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={nextImage}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-ivory/80 hover:bg-ivory text-cocoa flex items-center justify-center shadow-subtle transition-colors tap-target-44"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Mobile dot indicators */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center space-x-1.5 z-10 lg:hidden bg-cocoa/30 px-2.5 py-1 rounded-full backdrop-blur-xs">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    currentIndex === idx ? 'bg-ivory w-3.5' : 'bg-ivory/50'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
