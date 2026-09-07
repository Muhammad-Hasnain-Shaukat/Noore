import React, { useEffect } from 'react';
import { X, Sparkles, ShieldCheck, Check } from 'lucide-react';

interface HijabGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HijabGuideModal: React.FC<HijabGuideModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const drapingStyles = [
    {
      title: '1. The Casual Shoulder Toss',
      bestFor: 'Everyday Modal & Medina Silk',
      difficulty: 'Beginner',
      steps: [
        'Place the scarf with one end short (at chest level) and one long end.',
        'Wrap the long end loosely around the front of your neck and toss it cleanly over the opposite shoulder.',
        'No pins required; the natural grip of Lenzing modal holds its drape.',
      ],
    },
    {
      title: '2. The Magnet-Secured Clean Jawline',
      bestFor: 'Georgette Chiffon & Occasion Satin',
      difficulty: 'Intermediate',
      steps: [
        'Secure hair with a Noore Bamboo Criss-Cross Inner Cap.',
        'Fold 2 inches along the front border to create a structured forehead framing.',
        'Bring both edges together snugly underneath your chin and lock with a Noore N52 Matte Magnet Pair.',
        'Drape remaining length over shoulders for fluid movement with zero needle holes.',
      ],
    },
    {
      title: '3. Full Modest Chest Coverage Wrap',
      bestFor: 'Maxi Modal (195 × 75 cm)',
      difficulty: 'Easy Everyday',
      steps: [
        'Center the scarf evenly on your crown.',
        'Cross both sides under the chin and bring the right tail across to the left shoulder and pin gently.',
        'Spread the wide 75 cm fabric width across your chest to create soft, modest pleated coverage.',
      ],
    },
    {
      title: '4. The Pin-Free Active Wrap',
      bestFor: 'Turkish Bamboo Jersey',
      difficulty: 'Zero Pins',
      steps: [
        'Drape one third over the head, leaving one side longer.',
        'Simply pull the longer side across your collarbone and let gravity do the rest.',
        'Our 4-way stretch jersey will not slip during commuting, workouts, or busy days.',
      ],
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-cocoa/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Dialog */}
      <div className="relative w-full max-w-2xl bg-ivory text-cocoa rounded-sm shadow-elevated border border-sand z-10 my-8 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="px-6 py-5 border-b border-sand flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-taupe" strokeWidth={1.5} />
            <h2 className="font-serif text-2xl font-medium tracking-wide">
              Hijab Draping & Modesty Guide
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 -mr-2 text-cocoa/60 hover:text-cocoa tap-target-44 flex items-center justify-center rounded-sm focus:outline-none"
            aria-label="Close guide"
          >
            <X className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>

        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto text-sm">
          {/* Intro Notice */}
          <div className="p-3.5 bg-sand/30 border border-sand/70 rounded-sm text-xs text-cocoa/80 flex items-start space-x-2.5">
            <ShieldCheck className="w-4 h-4 text-olive shrink-0 mt-0.5" />
            <p>
              Each Noore scarf is measured to provide generous coverage and tension-free comfort.
              Pairing transparent chiffons with our bamboo under-caps guarantees 100% modest opacity.
            </p>
          </div>

          {/* Draping Styles Cards */}
          <div className="space-y-4">
            {drapingStyles.map((style, idx) => (
              <div key={idx} className="p-4 bg-sand/20 border border-sand/60 rounded-sm space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-base font-medium text-cocoa">{style.title}</h3>
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-olive bg-olive/10 px-2 py-0.5 rounded-xs">
                    {style.difficulty}
                  </span>
                </div>
                <p className="text-xs text-taupe font-medium">Recommended for: {style.bestFor}</p>
                <ol className="space-y-1 text-xs text-cocoa/80 pt-1">
                  {style.steps.map((step, sIdx) => (
                    <li key={sIdx} className="flex items-start space-x-2">
                      <span className="text-taupe font-semibold shrink-0">•</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>

        <div className="px-6 py-4 border-t border-sand bg-sand/20 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 bg-cocoa text-ivory text-xs uppercase tracking-wider font-semibold hover:bg-cocoa-light transition-colors rounded-sm"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
