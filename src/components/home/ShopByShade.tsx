import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ColorFamily } from '../../types/product';

interface ShadeItem {
  id: ColorFamily;
  title: string;
  palette: string[];
  description: string;
}

export const ShopByShade: React.FC = () => {
  const shades: ShadeItem[] = [
    {
      id: 'neutrals',
      title: 'Warm Neutrals',
      palette: ['#F7F3ED', '#E8DDD0', '#C5B4A4', '#A58E7A'],
      description: 'Ivory, Sand, Oatmeal & Warm Taupe',
    },
    {
      id: 'earth-tones',
      title: 'Earth Tones',
      palette: ['#A58E7A', '#7A6251', '#7B8068', '#352B27'],
      description: 'Cocoa, Muted Olive, Mocha & Clay',
    },
    {
      id: 'pastels',
      title: 'Soft Pastels',
      palette: ['#F3E8DC', '#E2D5C8', '#C59A8D', '#B88B82'],
      description: 'Rosewood, Blush Sand & Champagne',
    },
    {
      id: 'dark-shades',
      title: 'Deep Shades',
      palette: ['#352B27', '#3B2F2F', '#231B18', '#1C1B1A'],
      description: 'Midnight Black, Espresso & Charcoal',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-sand/20 border-t border-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-widest text-taupe font-semibold mb-1">
            Harmonious Tones
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-cocoa mb-3">
            Shop By Shade
          </h2>
          <p className="text-sm text-cocoa/70 font-light">
            Complement your natural skin tone with curated palette families designed to blend seamlessly together.
          </p>
        </div>

        {/* 4 Shade Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {shades.map((shade) => (
            <Link
              key={shade.id}
              to={`/products?shade=${shade.id}`}
              className="bg-ivory p-6 rounded-sm border border-sand/80 shadow-subtle hover:border-taupe transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                {/* Swatch Strip */}
                <div className="flex items-center space-x-2 mb-4">
                  {shade.palette.map((color, idx) => (
                    <span
                      key={idx}
                      className="w-7 h-7 rounded-full border border-sand shadow-xs"
                      style={{ backgroundColor: color }}
                      aria-hidden="true"
                    />
                  ))}
                </div>

                <h3 className="font-serif text-xl font-medium text-cocoa mb-1 group-hover:text-taupe transition-colors">
                  {shade.title}
                </h3>
                <p className="text-xs text-taupe font-light mb-4">
                  {shade.description}
                </p>
              </div>

              <div className="pt-2 border-t border-sand/40 flex items-center justify-between text-xs font-semibold text-cocoa">
                <span>View Matching Pieces</span>
                <ArrowRight className="w-3.5 h-3.5 text-taupe transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
