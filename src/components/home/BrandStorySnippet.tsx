import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Check, ShieldCheck, HeartHandshake, Leaf } from 'lucide-react';

interface StoryPillar {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  mainImage: string;
  imagePosition?: string;
  detailImage: string;
  collectionLink: string;
  collectionName: string;
}

export const BrandStorySnippet: React.FC = () => {
  const [activePillar, setActivePillar] = useState(0);

  const pillars: StoryPillar[] = [
    {
      id: 'abayas',
      tag: '01 / The Silhouette',
      title: 'Architectural Grace & Flow',
      subtitle: 'Tailored Abayas designed to move with quiet distinction.',
      description:
        'Every Noore abaya is cut to drape with fluid dignity. Sourced from high-density Japanese Nidha crepe and washed organic linen blends, our silhouettes offer generous coverage without clinging or losing their tailored structure.',
      features: [
        'Drop-shoulder bisht & A-line cuts',
        'Deep concealed functional side pockets',
        'Breathable non-static Japanese crepe',
        'Includes matching bespoke shayla'
      ],
      mainImage: '/assets/story/abayas_1.jpg',
      imagePosition: 'object-center',
      detailImage: '/assets/story/abayas_6.jpg',
      collectionLink: '/collections/abayas',
      collectionName: 'Abaya Collection',
    },
    {
      id: 'hijab',
      tag: '02 / The Veil',
      title: 'Sensory Fabrics Against Sensitive Skin',
      subtitle: 'Featherweight botanic modals, chiffons & Medinan silks.',
      description:
        'A hijab should feel like an extension of your spirit—light, cooling, and effortless. We eliminate synthetic stiffness by exclusively formulating natural beechwood modals, breathable pebbled chiffons, and comforting stretch jerseys in skin-adaptive tones.',
      features: [
        '100% sustainably harvested Lenzing modal',
        'Micro-grain non-slip georgette weave',
        'Multi-layered generous chest coverage',
        'Hypoallergenic, breathable fibers'
      ],
      mainImage: '/assets/story/hijab_6.jpg',
      imagePosition: 'object-top',
      detailImage: '/assets/story/inner_caps_3.jpg',
      collectionLink: '/collections/hijabs',
      collectionName: 'Hijab Collection',
    },
    {
      id: 'inner-caps',
      tag: '03 / The Foundation',
      title: 'Tension-Free All-Day Foundations',
      subtitle: 'Cooling bamboo ribs & silk linings that end tension headaches.',
      description:
        'The secret to all-day modest confidence begins at the crown. Our inner caps combine thermo-regulating bamboo viscose with flatlock zero-pressure seams and pure mulberry silk crown linings that protect hair follicles from friction and split ends.',
      features: [
        'Organic bamboo viscose with 4-way stretch',
        'Flatlock seams to prevent ear & forehead pressure',
        'Silk-lined crown prevents breakage & retains moisture',
        'Open-back pouch accommodates high hair buns'
      ],
      mainImage: '/assets/story/inner_caps_4.jpg',
      detailImage: '/assets/story/inner_caps_5.jpg',
      collectionLink: '/collections/inner-caps',
      collectionName: 'Inner Caps Collection',
    },
    {
      id: 'accessories',
      tag: '04 / The Accents',
      title: 'Micro-Engineered Fabric Protection',
      subtitle: 'Industrial-strength magnetic clasps & snag-free styling pins.',
      description:
        'Traditional pins puncture and fray delicate chiffon and silk. Noore accessories are engineered with Grade N52 neodymium magnetic cores and seamless coilless pear pins that secure multiple fabric layers with zero snags or needle holes.',
      features: [
        'Grade N52 neodymium ultra-hold magnets',
        'Scratch-resistant matte electroplated alloy',
        'Coilless snag-free safety styling pins',
        'Preserves delicate silk, modal & chiffon weaves'
      ],
      mainImage: '/assets/story/accessories_2.jpg',
      detailImage: '/assets/story/accessories_3.jpg',
      collectionLink: '/collections/accessories',
      collectionName: 'Accessories Collection',
    },
  ];

  const current = pillars[activePillar];

  return (
    <section className="py-20 sm:py-28 bg-ivory border-t border-sand/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-taupe font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>The Noore Atelier</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-cocoa leading-[1.15]">
            Four pillars of intentional modest craft.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-cocoa/75 font-light leading-relaxed">
            Every garment in our boutique begins with a simple premise: modesty should feel effortless,
            dignified, and enduring. Explore the deliberate engineering behind each of our core disciplines.
          </p>
        </div>

        {/* Interactive Category Pillar Tabs */}
        <div className="flex overflow-x-auto pb-3 sm:pb-4 mb-8 sm:mb-12 border-b border-sand/70 scrollbar-none gap-2 sm:gap-3.5 -mx-4 px-4 sm:mx-0 sm:px-0">
          {pillars.map((pillar, idx) => (
            <button
              key={pillar.id}
              type="button"
              onClick={() => setActivePillar(idx)}
              className={`flex-shrink-0 px-3.5 sm:px-6 py-2.5 sm:py-3 rounded-full text-[11px] sm:text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap tap-target-44 flex items-center space-x-1.5 ${
                activePillar === idx
                  ? 'bg-cocoa text-ivory shadow-subtle'
                  : 'bg-sand/35 text-cocoa/75 hover:bg-sand/60 hover:text-cocoa'
              }`}
            >
              <span>{pillar.tag}</span>
            </button>
          ))}
        </div>

        {/* Dynamic Pillar Content Grid: Equal height image and text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-stretch">
          
          {/* Single Image Column: Exactly equal in height to the text */}
          <div className="lg:col-span-6 relative w-full h-[360px] sm:h-[420px] lg:h-full min-h-[380px] rounded-sm overflow-hidden bg-sand/30 border border-sand shadow-elevated">
            <img
              src={current.mainImage}
              alt={current.title}
              key={current.mainImage}
              className={`absolute inset-0 w-full h-full object-cover animate-in fade-in zoom-in-95 duration-500 ${current.imagePosition || 'object-center'}`}
              loading="lazy"
            />
          </div>

          {/* Narrative & Craftsmanship Details (Spans 6 columns) */}
          <div className="lg:col-span-6 space-y-6 lg:pl-2 flex flex-col justify-center">
            <div>
              <p className="font-serif italic text-base sm:text-lg text-taupe-dark mb-1">
                “{current.subtitle}”
              </p>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-cocoa leading-snug">
                {current.title}
              </h3>
            </div>

            <p className="text-sm sm:text-base text-cocoa/80 font-light leading-relaxed">
              {current.description}
            </p>

            {/* Key Craftsmanship Bullet Points */}
            <div className="space-y-2.5 pt-2 border-t border-sand/60">
              {current.features.map((feature, i) => (
                <div key={i} className="flex items-start space-x-2.5 text-xs text-cocoa/90 font-light">
                  <div className="w-4 h-4 rounded-full bg-olive/15 flex items-center justify-center text-olive flex-shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5" strokeWidth={2.5} />
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* Call to Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to={current.collectionLink}
                className="inline-flex items-center space-x-2 px-6 py-3.5 bg-cocoa text-ivory text-xs uppercase tracking-widest font-semibold hover:bg-cocoa-light transition-all rounded-sm shadow-subtle tap-target-44"
              >
                <span>Shop {current.collectionName}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <Link
                to="/our-story"
                className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-wider font-semibold text-taupe-dark hover:text-cocoa transition-colors py-2 group"
              >
                <span>Full Atelier Story</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

          </div>

        </div>

        {/* Bottom Atelier Value Ribbons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16 sm:pt-20 border-t border-sand/70 mt-16 sm:mt-20">
          <div className="flex items-start space-x-3.5 p-4 bg-sand/20 rounded-sm border border-sand/50">
            <Leaf className="w-5 h-5 text-olive flex-shrink-0 mt-0.5" strokeWidth={1.5} />
            <div>
              <h4 className="font-serif text-base font-medium text-cocoa">Botanical Origin</h4>
              <p className="text-xs text-cocoa/70 font-light mt-1 leading-relaxed">
                Certified Lenzing beechwood modal & organic bamboo harvested for gentle environmental and skin impact.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3.5 p-4 bg-sand/20 rounded-sm border border-sand/50">
            <ShieldCheck className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" strokeWidth={1.5} />
            <div>
              <h4 className="font-serif text-base font-medium text-cocoa">Snag-Free Standard</h4>
              <p className="text-xs text-cocoa/70 font-light mt-1 leading-relaxed">
                Every magnetic clasp and coilless pin undergoes friction testing to guarantee zero snagging on delicate chiffons.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3.5 p-4 bg-sand/20 rounded-sm border border-sand/50">
            <HeartHandshake className="w-5 h-5 text-taupe flex-shrink-0 mt-0.5" strokeWidth={1.5} />
            <div>
              <h4 className="font-serif text-base font-medium text-cocoa">Zero-Tension Guarantee</h4>
              <p className="text-xs text-cocoa/70 font-light mt-1 leading-relaxed">
                Flatlock ergonomic contours designed to eliminate tension headaches and hairline irritation during long wear.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
