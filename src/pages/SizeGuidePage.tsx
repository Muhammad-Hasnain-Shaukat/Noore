import React, { useEffect } from 'react';
import { Ruler, HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const SizeGuidePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Abaya Size & Hijab Dimensions Guide | Noore';
    window.scrollTo(0, 0);
  }, []);

  const abayaSizes = [
    { size: '50', heightFt: "5'0\" – 5'1\"", heightCm: '152 – 155 cm', lengthIn: '50"', bustIn: '42"', sleeveIn: '26"' },
    { size: '52', heightFt: "5'2\" – 5'3\"", heightCm: '157 – 160 cm', lengthIn: '52"', bustIn: '44"', sleeveIn: '27"' },
    { size: '54', heightFt: "5'4\" – 5'5\"", heightCm: '162 – 165 cm', lengthIn: '54"', bustIn: '46"', sleeveIn: '28"' },
    { size: '56', heightFt: "5'6\" – 5'7\"", heightCm: '167 – 170 cm', lengthIn: '56"', bustIn: '48"', sleeveIn: '29"' },
    { size: '58', heightFt: "5'8\" – 5'10\"", heightCm: '172 – 178 cm', lengthIn: '58"', bustIn: '50"', sleeveIn: '30"' },
  ];

  return (
    <div className="flex-1 bg-ivory py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <p className="text-xs uppercase tracking-[0.2em] text-taupe font-semibold">
            Measurements & Fit
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-cocoa">
            Abaya Sizing & Scarf Dimensions
          </h1>
          <p className="text-sm text-cocoa/70 font-light max-w-lg mx-auto leading-relaxed">
            Find your ideal length for graceful coverage, whether you wear flats or heels.
          </p>
        </div>

        {/* Abaya Measurements Table */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-2xl font-medium text-cocoa flex items-center space-x-2">
              <Ruler className="w-5 h-5 text-taupe" />
              <span>Abaya Sizing Chart</span>
            </h2>
            <span className="text-xs text-taupe font-light">Garment dimensions in inches</span>
          </div>

          <div className="overflow-x-auto border border-sand rounded-sm bg-sand/15">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-sand/50 border-b border-sand text-cocoa font-semibold uppercase tracking-wider text-[11px]">
                  <th className="py-3.5 px-4">Size</th>
                  <th className="py-3.5 px-4">Recommended Height</th>
                  <th className="py-3.5 px-4">Garment Length</th>
                  <th className="py-3.5 px-4">Bust (Circumference)</th>
                  <th className="py-3.5 px-4">Sleeve Length</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sand/50 bg-ivory">
                {abayaSizes.map((row) => (
                  <tr key={row.size} className="hover:bg-sand/10 transition-colors">
                    <td className="py-3.5 px-4 font-semibold text-cocoa">Size {row.size}</td>
                    <td className="py-3.5 px-4 text-cocoa/80">{row.heightFt} ({row.heightCm})</td>
                    <td className="py-3.5 px-4 font-medium text-cocoa">{row.lengthIn}</td>
                    <td className="py-3.5 px-4 text-cocoa/80">{row.bustIn}</td>
                    <td className="py-3.5 px-4 text-cocoa/80">{row.sleeveIn}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-sand/25 border border-sand/70 rounded-sm text-xs text-cocoa/80 flex items-start space-x-2.5">
            <HelpCircle className="w-4 h-4 text-taupe shrink-0 mt-0.5" />
            <p>
              <strong>Note on Fit:</strong> Sizing numbers (e.g., 52, 54, 56) represent the actual
              garment length in inches from the highest point of the shoulder straight to the hem. If
              you plan to wear 2+ inch heels, select one size up.
            </p>
          </div>
        </div>

        {/* Hijab Dimensions Comparison */}
        <div className="space-y-4 pt-4 border-t border-sand">
          <h2 className="font-serif text-2xl font-medium text-cocoa">
            Hijab Dimensions & Coverage Types
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="bg-sand/20 border border-sand p-5 rounded-sm space-y-2">
              <h3 className="font-serif text-lg font-medium text-cocoa">Maxi Length</h3>
              <p className="text-xs font-semibold text-taupe">195 cm × 75 cm</p>
              <p className="text-xs text-cocoa/75 leading-relaxed font-light">
                Our signature cut for Everyday Modal. Ample fabric allowing layered draping and
                complete chest and back coverage.
              </p>
            </div>

            <div className="bg-sand/20 border border-sand p-5 rounded-sm space-y-2">
              <h3 className="font-serif text-lg font-medium text-cocoa">Standard Length</h3>
              <p className="text-xs font-semibold text-taupe">180 cm × 70 cm</p>
              <p className="text-xs text-cocoa/75 leading-relaxed font-light">
                Used for Essential Chiffon and Jersey Comfort. Minimalist, neat, and non-bulky for
                everyday routines.
              </p>
            </div>

            <div className="bg-sand/20 border border-sand p-5 rounded-sm space-y-2">
              <h3 className="font-serif text-lg font-medium text-cocoa">Occasion Satin</h3>
              <p className="text-xs font-semibold text-taupe">185 cm × 70 cm</p>
              <p className="text-xs text-cocoa/75 leading-relaxed font-light">
                Tailored with hand-rolled hems for fluid event draping with minimal bunching around the
                collar.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-8 border-t border-sand">
          <Link
            to="/collections/abayas"
            className="inline-flex items-center space-x-2 px-8 py-3.5 bg-cocoa text-ivory text-xs uppercase tracking-widest font-semibold hover:bg-cocoa-light transition-colors rounded-sm shadow-subtle"
          >
            <span>Explore The Abaya Edit</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </div>
  );
};
