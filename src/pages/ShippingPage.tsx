import React, { useEffect } from 'react';
import { Truck, Clock, ShieldCheck } from 'lucide-react';
import { STORE_CONFIG } from '../config/store';

export const ShippingPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Shipping & Delivery | Noore';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex-1 bg-ivory py-12 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-taupe font-semibold mb-1">
            Store Policies
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl font-medium text-cocoa">
            Shipping & Delivery
          </h1>
          <p className="text-sm text-cocoa/70 font-light mt-2">
            Clear guidelines on order processing, courier handling, and delivery expectations.
          </p>
        </div>

        <div className="space-y-6 text-sm text-cocoa/80 leading-relaxed font-light">
          {/* Section 1 */}
          <div className="p-5 bg-sand/20 border border-sand rounded-sm space-y-2">
            <h2 className="font-serif text-lg font-medium text-cocoa flex items-center space-x-2">
              <Clock className="w-4 h-4 text-taupe" />
              <span>Processing & Dispatch Timeline</span>
            </h2>
            <p>
              {STORE_CONFIG.policies.shippingTimeline}
            </p>
            <p>
              Orders requested via WhatsApp are verified for stock availability immediately. Once
              confirmed with you, your items are carefully inspected, wrapped in branded tissue, and
              handed over to our partner courier within 24 to 48 hours.
            </p>
          </div>

          {/* Section 2 */}
          <div className="p-5 bg-sand/20 border border-sand rounded-sm space-y-2">
            <h2 className="font-serif text-lg font-medium text-cocoa flex items-center space-x-2">
              <Truck className="w-4 h-4 text-taupe" />
              <span>Domestic Courier Charges</span>
            </h2>
            <p>
              {STORE_CONFIG.policies.standardShippingNote}
            </p>
            <p>
              Because delivery charges vary slightly by destination city and package weight, our
              concierge calculates the exact courier rate for your address during WhatsApp
              coordination. No unexpected surprises or unlisted fees.
            </p>
          </div>

          {/* Section 3 */}
          <div className="p-5 bg-sand/20 border border-sand rounded-sm space-y-2">
            <h2 className="font-serif text-lg font-medium text-cocoa flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-taupe" />
              <span>Packaging & Inspection</span>
            </h2>
            <p>
              Every hijab and abaya undergoes a thorough quality control check prior to packing.
              Delicate fabrics like modal, silk-satin, and lightweight chiffons are sealed in protective
              dust bags to ensure they arrive in pristine, snag-free condition.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
