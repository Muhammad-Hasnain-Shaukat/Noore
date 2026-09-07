import React, { useEffect } from 'react';
import { Droplets, Wind, Sun, ShieldAlert } from 'lucide-react';

export const CareGuidePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Hijab & Modest Fabric Care Guide | Noore';
    window.scrollTo(0, 0);
  }, []);

  const generalTips = [
    {
      icon: Droplets,
      title: 'Gentle Cleansing',
      description: 'Always opt for mild liquid detergents formulated for delicates or woolens. Avoid harsh bleach or heavily fragranced powders.',
    },
    {
      icon: Wind,
      title: 'Air Dry Flat in Shade',
      description: 'Direct harsh sunlight can fade rich natural dyes and weaken fine fibers. Air dry scarves flat on clean towels in indirect light.',
    },
    {
      icon: Sun,
      title: 'Steam Over Iron',
      description: 'Handheld steamers are gentlest on natural modal and delicate chiffons. If using a flat iron, iron inside out on the lowest heat setting.',
    },
    {
      icon: ShieldAlert,
      title: 'Use Seamless Pins & Magnets',
      description: 'Avoid conventional coiled safety pins that catch warp threads. Our matte neodymium magnets eliminate needle punctures completely.',
    },
  ];

  return (
    <div className="flex-1 bg-ivory py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <p className="text-xs uppercase tracking-[0.2em] text-taupe font-semibold">
            Longevity & Care
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-cocoa">
            Hijab & Fabric Care Guide
          </h1>
          <p className="text-sm text-cocoa/70 font-light max-w-lg mx-auto leading-relaxed">
            Thoughtfully engineered modest textiles deserve gentle care to preserve their buttery drape,
            vibrant tones, and soft handfeel for years to come.
          </p>
        </div>

        {/* 4 General Principles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {generalTips.map((tip, idx) => {
            const Icon = tip.icon;
            return (
              <div key={idx} className="bg-sand/20 border border-sand p-5 rounded-sm space-y-2">
                <Icon className="w-5 h-5 text-taupe" strokeWidth={1.5} />
                <h3 className="font-serif text-base font-medium text-cocoa">{tip.title}</h3>
                <p className="text-xs text-cocoa/75 leading-relaxed font-light">{tip.description}</p>
              </div>
            );
          })}
        </div>

        {/* Fabric-by-Fabric Specifics */}
        <div className="space-y-6 pt-4">
          <h2 className="font-serif text-2xl font-medium text-cocoa text-center">
            Fabric-Specific Guidelines
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Modal */}
            <div className="bg-ivory border border-sand/80 p-6 rounded-sm space-y-3 shadow-subtle">
              <span className="text-xs font-semibold text-taupe uppercase tracking-wider">
                Botanic Modal
              </span>
              <h3 className="font-serif text-xl font-medium text-cocoa">Everyday Modal Hijabs</h3>
              <p className="text-xs text-cocoa/80 leading-relaxed font-light">
                Modal fibers are strongest when wet, but gentle handling keeps them cloud-soft. Hand
                wash in lukewarm water. Never wring or twist; press excess water between palms or rolled
                in a clean towel.
              </p>
              <p className="text-xs text-taupe font-medium">Ironing: Low steam on reverse side.</p>
            </div>

            {/* Chiffon */}
            <div className="bg-ivory border border-sand/80 p-6 rounded-sm space-y-3 shadow-subtle">
              <span className="text-xs font-semibold text-taupe uppercase tracking-wider">
                Georgette Chiffon
              </span>
              <h3 className="font-serif text-xl font-medium text-cocoa">Essential Chiffon Scarves</h3>
              <p className="text-xs text-cocoa/80 leading-relaxed font-light">
                Our high-density georgette resists creasing naturally. Machine wash cold on gentle
                cycle inside a mesh laundry bag. Remove immediately and hang to air dry to eliminate
                the need for ironing.
              </p>
              <p className="text-xs text-taupe font-medium">Ironing: Silk setting or gentle steam.</p>
            </div>

            {/* Jersey */}
            <div className="bg-ivory border border-sand/80 p-6 rounded-sm space-y-3 shadow-subtle">
              <span className="text-xs font-semibold text-taupe uppercase tracking-wider">
                4-Way Stretch Rayon
              </span>
              <h3 className="font-serif text-xl font-medium text-cocoa">Jersey Comfort Series</h3>
              <p className="text-xs text-cocoa/80 leading-relaxed font-light">
                Remarkably resilient and wrinkle-proof. Machine wash with like darks in cool water. Lay
                flat to dry to prevent stretching at the hems. Zero ironing required.
              </p>
              <p className="text-xs text-taupe font-medium">Ironing: Rarely needed.</p>
            </div>

            {/* Satin */}
            <div className="bg-ivory border border-sand/80 p-6 rounded-sm space-y-3 shadow-subtle">
              <span className="text-xs font-semibold text-taupe uppercase tracking-wider">
                Liquid Silk-Crepe Satin
              </span>
              <h3 className="font-serif text-xl font-medium text-cocoa">Occasion Satin Hijabs</h3>
              <p className="text-xs text-cocoa/80 leading-relaxed font-light">
                Delicate hand wash in cold water using specialized silk soap. Do not soak for more than
                5 minutes. Dry in shaded breeze. Keep away from rough surfaces and only secure with
                neodymium magnets.
              </p>
              <p className="text-xs text-taupe font-medium">Ironing: Strictly lowest heat with pressing cloth.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
