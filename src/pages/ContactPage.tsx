import React, { useEffect } from 'react';
import { Mail, MessageCircle, Clock, MapPin, ArrowUpRight } from 'lucide-react';
import { STORE_CONFIG } from '../config/store';

export const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Concierge Support | Noore';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex-1 bg-ivory py-12 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Title */}
        <div className="text-center space-y-3">
          <p className="text-xs uppercase tracking-[0.2em] text-taupe font-semibold">
            Get In Touch
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-cocoa">
            Boutique Concierge
          </h1>
          <p className="text-sm text-cocoa/70 font-light max-w-md mx-auto">
            Have questions regarding fabric drape, abaya length selection, or delivery timelines? Our
            team is here to assist you directly.
          </p>
        </div>

        {/* Direct Channels Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* WhatsApp Card */}
          {STORE_CONFIG.whatsapp.isConfigured && (
            <div className="bg-sand/25 border border-sand p-6 rounded-sm shadow-subtle flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-full bg-olive/15 text-olive flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <h2 className="font-serif text-xl font-medium text-cocoa">WhatsApp Concierge</h2>
                <p className="text-xs text-cocoa/75 leading-relaxed font-light">
                  For immediate order inquiries, sizing questions, and real-time fabric consultation.
                </p>
                <p className="text-sm font-semibold text-cocoa">
                  {STORE_CONFIG.whatsapp.displayNumber}
                </p>
              </div>

              <a
                href={`https://wa.me/${STORE_CONFIG.whatsapp.number}?text=${encodeURIComponent(
                  'Salam Noore Team, I have an inquiry regarding your collection.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-cocoa text-ivory text-xs uppercase tracking-wider font-semibold rounded-sm hover:bg-cocoa-light transition-colors flex items-center justify-center space-x-2 tap-target-44"
              >
                <span>Message on WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          )}

          {/* Email Card */}
          <div className="bg-sand/25 border border-sand p-6 rounded-sm shadow-subtle flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-taupe/15 text-taupe flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <h2 className="font-serif text-xl font-medium text-cocoa">Email Support</h2>
              <p className="text-xs text-cocoa/75 leading-relaxed font-light">
                For detailed order updates, collaborations, or bulk inquiries. We respond within one
                business day.
              </p>
              <p className="text-sm font-semibold text-cocoa">
                {STORE_CONFIG.contact.email}
              </p>
            </div>

            <a
              href={`mailto:${STORE_CONFIG.contact.email}`}
              className="w-full py-3 bg-ivory border border-cocoa text-cocoa text-xs uppercase tracking-wider font-semibold rounded-sm hover:bg-sand/40 transition-colors flex items-center justify-center space-x-2 tap-target-44"
            >
              <span>Send An Email</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Hours & Location Details */}
        <div className="bg-ivory border border-sand/70 p-6 rounded-sm grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-cocoa/80 font-light">
          <div className="flex items-start space-x-3">
            <Clock className="w-4 h-4 text-taupe shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-cocoa text-sm mb-1">Operating Hours</p>
              <p>{STORE_CONFIG.contact.hours}</p>
              <p className="text-[11px] text-taupe mt-1">Inquiries received outside hours are attended to the following morning.</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <MapPin className="w-4 h-4 text-taupe shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-cocoa text-sm mb-1">Studio Location</p>
              <p>{STORE_CONFIG.contact.locationCity}</p>
              <p className="text-[11px] text-taupe mt-1">Online boutique orders dispatched nationwide.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
