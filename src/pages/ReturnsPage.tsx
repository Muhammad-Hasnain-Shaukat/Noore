import React, { useEffect } from 'react';
import { RefreshCw, AlertCircle, CheckCircle2 } from 'lucide-react';
import { STORE_CONFIG } from '../config/store';

export const ReturnsPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Returns & Exchanges | Noore';
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
            Returns & Exchanges
          </h1>
          <p className="text-sm text-cocoa/70 font-light mt-2">
            We want you to feel entirely at ease with your Noore selections.
          </p>
        </div>

        <div className="space-y-6 text-sm text-cocoa/80 leading-relaxed font-light">
          {/* Exchange Terms */}
          <div className="p-5 bg-sand/20 border border-sand rounded-sm space-y-3">
            <h2 className="font-serif text-lg font-medium text-cocoa flex items-center space-x-2">
              <RefreshCw className="w-4 h-4 text-taupe" />
              <span>Exchange Policy</span>
            </h2>
            <p>{STORE_CONFIG.policies.returnsWindow}</p>
            <p>
              If an abaya length does not match your preference or you would like to exchange a hijab
              for a different shade, you may initiate an exchange within 7 days of parcel delivery.
            </p>
          </div>

          {/* Hygiene Conditions */}
          <div className="p-5 bg-sand/20 border border-sand rounded-sm space-y-3">
            <h2 className="font-serif text-lg font-medium text-cocoa flex items-center space-x-2">
              <AlertCircle className="w-4 h-4 text-taupe" />
              <span>Hygiene & Non-Exchangeable Items</span>
            </h2>
            <p>{STORE_CONFIG.policies.exchangeConditions}</p>
            <p>
              To safeguard personal health and hygiene standards, inner caps, under-scarves, and hair
              scrunchies cannot be exchanged once packaging seals are opened.
            </p>
          </div>

          {/* How to initiate */}
          <div className="p-5 bg-sand/20 border border-sand rounded-sm space-y-3">
            <h2 className="font-serif text-lg font-medium text-cocoa flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-olive" />
              <span>How to Initiate an Exchange</span>
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-xs sm:text-sm">
              <li>Message our WhatsApp concierge with your original order request and photo of the item tags.</li>
              <li>Our team will verify the replacement size or color is available in catalog inventory.</li>
              <li>Safely repackage the item into its protective pouch.</li>
              <li>A courier swap or return shipment will be coordinated with minimal hassle.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};
