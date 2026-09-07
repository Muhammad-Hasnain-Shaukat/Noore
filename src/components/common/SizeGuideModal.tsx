import React, { useEffect } from 'react';
import { X, Ruler, HelpCircle } from 'lucide-react';
import { useUIStore } from '../../store/useUIStore';

export const SizeGuideModal: React.FC = () => {
  const { isSizeGuideOpen, closeSizeGuide } = useUIStore();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isSizeGuideOpen) {
        closeSizeGuide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSizeGuideOpen, closeSizeGuide]);

  useEffect(() => {
    if (isSizeGuideOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isSizeGuideOpen]);

  if (!isSizeGuideOpen) return null;

  const abayaSizes = [
    { size: '50', heightFt: "5'0\" – 5'1\"", heightCm: '152 – 155 cm', lengthIn: '50"', bustIn: '42"', sleeveIn: '26"' },
    { size: '52', heightFt: "5'2\" – 5'3\"", heightCm: '157 – 160 cm', lengthIn: '52"', bustIn: '44"', sleeveIn: '27"' },
    { size: '54', heightFt: "5'4\" – 5'5\"", heightCm: '162 – 165 cm', lengthIn: '54"', bustIn: '46"', sleeveIn: '28"' },
    { size: '56', heightFt: "5'6\" – 5'7\"", heightCm: '167 – 170 cm', lengthIn: '56"', bustIn: '48"', sleeveIn: '29"' },
    { size: '58', heightFt: "5'8\" – 5'10\"", heightCm: '172 – 178 cm', lengthIn: '58"', bustIn: '50"', sleeveIn: '30"' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-cocoa/50 backdrop-blur-sm transition-opacity"
        onClick={closeSizeGuide}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-ivory text-cocoa rounded-sm shadow-elevated border border-sand z-10 my-8 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="px-6 py-5 border-b border-sand flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Ruler className="w-5 h-5 text-taupe" strokeWidth={1.5} />
            <h2 className="font-serif text-2xl font-medium tracking-wide">
              Abaya Size & Length Guide
            </h2>
          </div>
          <button
            type="button"
            onClick={closeSizeGuide}
            className="p-2 -mr-2 text-cocoa/60 hover:text-cocoa tap-target-44 flex items-center justify-center rounded-sm focus:outline-none focus:ring-1 focus:ring-taupe"
            aria-label="Close size guide"
          >
            <X className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto text-sm">
          {/* Notice: Sample measurements note */}
          <div className="flex items-start space-x-3 p-3.5 bg-sand/30 border border-sand/70 rounded-sm text-xs text-cocoa/80">
            <HelpCircle className="w-4 h-4 text-taupe shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-cocoa mb-0.5">Sample Fit Measurements</p>
              <p>
                Abaya sizing is designated by the garment length from the highest shoulder point
                straight down to the hem. If you intend to wear heels or prefer a trailing silhouette,
                we recommend sizing up one length.
              </p>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto border border-sand rounded-sm">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-sand/40 border-b border-sand text-cocoa font-semibold uppercase tracking-wider text-[11px]">
                  <th className="py-3 px-3.5">Abaya Size</th>
                  <th className="py-3 px-3.5">Recommended Height</th>
                  <th className="py-3 px-3.5">Length (Inches)</th>
                  <th className="py-3 px-3.5">Bust (Circumference)</th>
                  <th className="py-3 px-3.5">Sleeve (From Neck)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sand/50">
                {abayaSizes.map((row) => (
                  <tr key={row.size} className="hover:bg-sand/15 transition-colors">
                    <td className="py-3 px-3.5 font-semibold text-cocoa">Size {row.size}</td>
                    <td className="py-3 px-3.5 text-cocoa/80">{row.heightFt} ({row.heightCm})</td>
                    <td className="py-3 px-3.5 text-cocoa/90 font-medium">{row.lengthIn}</td>
                    <td className="py-3 px-3.5 text-cocoa/80">{row.bustIn}</td>
                    <td className="py-3 px-3.5 text-cocoa/80">{row.sleeveIn}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* How to Measure Instructions */}
          <div className="space-y-3">
            <h3 className="font-serif text-lg font-medium text-cocoa">How to Measure</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs leading-relaxed text-cocoa/80">
              <div className="p-3.5 bg-sand/20 border border-sand/50 rounded-sm">
                <p className="font-semibold text-cocoa mb-1">1. Garment Length</p>
                <p>
                  Place measuring tape at the top of your shoulder (where the collarbone meets the neck)
                  and measure straight down to where you want the hem to fall (typically ankle bone).
                </p>
              </div>
              <div className="p-3.5 bg-sand/20 border border-sand/50 rounded-sm">
                <p className="font-semibold text-cocoa mb-1">2. Bust & Chest</p>
                <p>
                  Wrap the measuring tape comfortably around the fullest part of your bust. Our abayas
                  are designed with 6–8 inches of generous modest ease.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-sand bg-sand/20 flex items-center justify-between">
          <span className="text-xs text-taupe font-light">Custom length adjustments available via WhatsApp</span>
          <button
            type="button"
            onClick={closeSizeGuide}
            className="px-4 py-2 bg-cocoa text-ivory text-xs uppercase tracking-wider font-semibold hover:bg-cocoa-light transition-colors rounded-sm"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
