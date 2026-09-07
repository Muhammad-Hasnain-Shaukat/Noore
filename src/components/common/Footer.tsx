import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Mail, MapPin, Clock } from 'lucide-react';
import { STORE_CONFIG } from '../../config/store';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-cocoa text-ivory/90 pt-16 pb-12 border-t border-cocoa-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block" aria-label="Noore Home">
              <img
                src="/assets/noore-logo-light.png"
                alt="Noore Modest Fashion"
                className="h-12 w-auto object-contain mb-1"
              />
            </Link>
            <p className="font-serif italic text-taupe-light text-base tracking-wide">
              “{STORE_CONFIG.tagline}”
            </p>
            <p className="text-sm text-ivory/70 max-w-md leading-relaxed font-light">
              Crafted for those who appreciate understated elegance. We design enduring modest
              silhouettes from tactile, breathable fabrics created for daily devotion and joyful occasions.
            </p>

            {/* Social & WhatsApp direct link */}
            <div className="pt-2 flex items-center space-x-4">
              {STORE_CONFIG.whatsapp.isConfigured && (
                <a
                  href={`https://wa.me/${STORE_CONFIG.whatsapp.number}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contact Noore on WhatsApp"
                  className="w-9 h-9 rounded-full bg-cocoa-light border border-taupe/30 flex items-center justify-center text-ivory hover:bg-olive hover:border-olive transition-colors tap-target-44"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              )}
              {STORE_CONFIG.contact.instagramUrl && (
                <a
                  href={STORE_CONFIG.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Noore on Instagram"
                  className="w-9 h-9 rounded-full bg-cocoa-light border border-taupe/30 flex items-center justify-center text-ivory hover:bg-taupe hover:border-taupe transition-colors tap-target-44"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Collections Column */}
          <div className="space-y-4">
            <h2 className="text-xs uppercase tracking-widest text-gold-light font-semibold">
              Collections
            </h2>
            <ul className="space-y-2.5 text-sm font-light text-ivory/80">
              <li>
                <Link to="/collections/new-arrivals" className="hover:text-gold-light transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/collections/hijabs" className="hover:text-gold-light transition-colors">
                  Hijabs
                </Link>
              </li>
              <li>
                <Link to="/collections/abayas" className="hover:text-gold-light transition-colors">
                  Abayas
                </Link>
              </li>
              <li>
                <Link to="/collections/inner-caps" className="hover:text-gold-light transition-colors">
                  Inner Caps
                </Link>
              </li>
              <li>
                <Link to="/collections/accessories" className="hover:text-gold-light transition-colors">
                  Accessories
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-gold-light transition-colors">
                  All Essentials
                </Link>
              </li>
            </ul>
          </div>

          {/* Boutique Guides Column */}
          <div className="space-y-4">
            <h2 className="text-xs uppercase tracking-widest text-gold-light font-semibold">
              Guides & Care
            </h2>
            <ul className="space-y-2.5 text-sm font-light text-ivory/80">
              <li>
                <Link to="/size-guide" className="hover:text-gold-light transition-colors">
                  Abaya Size Guide
                </Link>
              </li>
              <li>
                <Link to="/care-guide" className="hover:text-gold-light transition-colors">
                  Hijab Care Guide
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="hover:text-gold-light transition-colors">
                  Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link to="/returns" className="hover:text-gold-light transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link to="/our-story" className="hover:text-gold-light transition-colors">
                  Our Story & Values
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gold-light transition-colors">
                  Concierge Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Concierge & Store Details */}
          <div className="space-y-4">
            <h2 className="text-xs uppercase tracking-widest text-gold-light font-semibold">
              Concierge
            </h2>
            <div className="space-y-3 text-xs text-ivory/70 font-light">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-taupe-light shrink-0 mt-0.5" />
                <span>{STORE_CONFIG.contact.locationCity}</span>
              </div>
              <div className="flex items-start space-x-2.5">
                <Clock className="w-4 h-4 text-taupe-light shrink-0 mt-0.5" />
                <span>{STORE_CONFIG.contact.hours}</span>
              </div>
              <div className="flex items-start space-x-2.5">
                <Mail className="w-4 h-4 text-taupe-light shrink-0 mt-0.5" />
                <a
                  href={`mailto:${STORE_CONFIG.contact.email}`}
                  className="hover:text-ivory transition-colors"
                >
                  {STORE_CONFIG.contact.email}
                </a>
              </div>
              {STORE_CONFIG.whatsapp.isConfigured && (
                <div className="flex items-start space-x-2.5">
                  <MessageCircle className="w-4 h-4 text-olive shrink-0 mt-0.5" />
                  <a
                    href={`https://wa.me/${STORE_CONFIG.whatsapp.number}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-ivory transition-colors"
                  >
                    WhatsApp: {STORE_CONFIG.whatsapp.displayNumber}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-cocoa-light/40 flex flex-col sm:flex-row items-center justify-between text-xs text-ivory/50 font-light space-y-4 sm:space-y-0">
          <p>© {new Date().getFullYear()} {STORE_CONFIG.name}. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <span>Prices displayed in {STORE_CONFIG.currency.code}</span>
            <Link to="/shipping" className="hover:text-ivory transition-colors">
              Delivery Terms
            </Link>
            <Link to="/returns" className="hover:text-ivory transition-colors">
              Exchange Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
