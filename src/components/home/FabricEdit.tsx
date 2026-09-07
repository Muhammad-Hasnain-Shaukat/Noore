import React from 'react';
import { Link } from 'react-router-dom';
import { FABRICS } from '../../data/fabrics';
import { ArrowRight } from 'lucide-react';

export const FabricEdit: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-sand/20 border-t border-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs uppercase tracking-widest text-taupe font-semibold mb-1">
            Tactile Knowledge
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-cocoa mb-3">
            The Fabric Edit
          </h2>
          <p className="text-sm text-cocoa/70 font-light leading-relaxed">
            Every fabric in our collection is chosen for specific sensory properties: breathability,
            gentle grip, fluid weight, and facial framing.
          </p>
        </div>

        {/* Fabric Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FABRICS.map((fabric) => (
            <div
              key={fabric.id}
              className="bg-ivory rounded-sm border border-sand/70 overflow-hidden shadow-subtle flex flex-col justify-between group hover:border-taupe/60 transition-all duration-300"
            >
              <div>
                {/* Texture Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-sand/40">
                  <img
                    src={fabric.image}
                    alt={`${fabric.name} fabric close-up texture`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-ivory/95 px-2.5 py-1 text-xs font-serif font-semibold text-cocoa rounded-sm shadow-subtle">
                    {fabric.name}
                  </div>
                </div>

                {/* Information */}
                <div className="p-5 space-y-3">
                  <p className="text-xs font-semibold text-taupe uppercase tracking-wider">
                    {fabric.subtitle}
                  </p>

                  <div className="space-y-2 text-xs text-cocoa/80 leading-relaxed font-light">
                    <div>
                      <strong className="font-semibold text-cocoa">Feel: </strong>
                      {fabric.feel}
                    </div>
                    <div>
                      <strong className="font-semibold text-cocoa">Drape: </strong>
                      {fabric.drape}
                    </div>
                    <div>
                      <strong className="font-semibold text-cocoa">Styling: </strong>
                      {fabric.styling}
                    </div>
                  </div>
                </div>
              </div>

              {/* Link to Filtered Collection */}
              <div className="p-5 pt-0">
                <Link
                  to={`/collections/hijabs?fabric=${fabric.name}`}
                  className="w-full py-2.5 bg-sand/30 hover:bg-sand text-cocoa text-xs uppercase tracking-wider font-semibold rounded-sm transition-colors flex items-center justify-center space-x-1.5 border border-sand"
                >
                  <span>Shop {fabric.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-taupe" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
