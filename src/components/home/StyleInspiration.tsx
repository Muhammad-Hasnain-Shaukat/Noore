import React from 'react';
import { Link } from 'react-router-dom';

interface LookItem {
  id: string;
  image: string;
  caption: string;
  pieces: string;
  link: string;
}

export const StyleInspiration: React.FC = () => {
  const looks: LookItem[] = [
    {
      id: 'look-1',
      image: '/assets/story/hijab_1.jpg',
      caption: 'The Tonal Neutral',
      pieces: 'Everyday Modal (Warm Taupe) + Ribbed Cap (Sand)',
      link: '/product/everyday-modal-hijab-warm-taupe',
    },
    {
      id: 'look-2',
      image: '/assets/story/abayas_2.jpg',
      caption: 'Minimalist Architecture',
      pieces: 'Classic Open Abaya (Midnight) + Matte Gold Magnets',
      link: '/product/classic-open-abaya-midnight',
    },
    {
      id: 'look-3',
      image: '/assets/story/accessories_4.jpg',
      caption: 'Evening Refinement',
      pieces: 'Georgette Chiffon (Ivory) + Matte Gold Magnets',
      link: '/product/essential-chiffon-hijab-soft-ivory',
    },
    {
      id: 'look-4',
      image: '/assets/story/inner_caps_1.jpg',
      caption: 'Active Pin-Free Comfort',
      pieces: 'Turkish Bamboo Jersey (Cocoa) + Bamboo Inner Cap',
      link: '/product/jersey-comfort-hijab-cocoa',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-sand/15 border-t border-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12">
          <div>
            <p className="text-xs uppercase tracking-widest text-taupe font-semibold mb-1">
              Lookbook
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-medium text-cocoa">
              Style Inspiration
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-cocoa/60 font-light mt-2 sm:mt-0 max-w-sm">
            Curated modest combinations demonstrating tonal layering, drape stability, and clean accessories.
          </p>
        </div>

        {/* 4 Image Grid (2-col mobile, 4-col desktop) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {looks.map((look) => (
            <Link
              key={look.id}
              to={look.link}
              className="group relative flex flex-col bg-ivory rounded-sm overflow-hidden border border-sand/70 shadow-subtle hover:border-taupe transition-all"
            >
              <div className="aspect-[3/4] w-full overflow-hidden bg-sand/30">
                <img
                  src={look.image}
                  alt={look.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              <div className="p-3.5 bg-ivory">
                <p className="font-serif text-sm sm:text-base font-medium text-cocoa group-hover:text-taupe transition-colors">
                  {look.caption}
                </p>
                <p className="text-[11px] text-taupe font-light line-clamp-1 mt-0.5">
                  {look.pieces}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
