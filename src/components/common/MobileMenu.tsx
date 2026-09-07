import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { X, Heart, MessageCircle, ArrowRight } from 'lucide-react';
import { useUIStore } from '../../store/useUIStore';
import { useWishlistStore } from '../../store/useWishlistStore';
import { STORE_CONFIG } from '../../config/store';

export const MobileMenu: React.FC = () => {
  const { isMobileMenuOpen, closeMobileMenu } = useUIStore();
  const wishlistCount = useWishlistStore((state) => state.items.length);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        closeMobileMenu();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen, closeMobileMenu]);

  // Lock body scroll when open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  if (!isMobileMenuOpen) return null;

  const categories = [
    { name: 'New Arrivals', href: '/collections/new-arrivals', badge: 'New' },
    { name: 'Hijabs', href: '/collections/hijabs' },
    { name: 'Abayas', href: '/collections/abayas' },
    { name: 'Inner Caps', href: '/collections/inner-caps' },
    { name: 'Accessories', href: '/collections/accessories' },
    { name: 'All Products', href: '/products' },
  ];

  const secondaryLinks = [
    { name: 'Our Story', href: '/our-story' },
    { name: 'Abaya Size Guide', href: '/size-guide' },
    { name: 'Hijab Care Guide', href: '/care-guide' },
    { name: 'Shipping & Delivery', href: '/shipping' },
    { name: 'Returns & Exchanges', href: '/returns' },
    { name: 'Contact Concierge', href: '/contact' },
  ];

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-cocoa/40 backdrop-blur-sm transition-opacity"
        onClick={closeMobileMenu}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <div className="relative w-full max-w-xs bg-ivory text-cocoa h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-left duration-300">
        {/* Drawer Header */}
        <div className="p-4 border-b border-sand/60 flex items-center justify-between">
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="inline-flex items-center"
            aria-label="Noore Home"
          >
            <img
              src="/assets/noore-logo.png"
              alt="Noore Modest Fashion"
              className="h-9 sm:h-10 w-auto object-contain"
            />
          </Link>
          <button
            type="button"
            onClick={closeMobileMenu}
            className="p-2 text-cocoa/70 hover:text-cocoa tap-target-44 flex items-center justify-center rounded-sm focus:outline-none focus:ring-1 focus:ring-taupe"
            aria-label="Close navigation menu"
          >
            <X className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>

        {/* Scrollable Navigation Content */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-8">
          {/* Main Categories */}
          <div>
            <p className="text-[11px] uppercase tracking-widest text-taupe font-semibold mb-3">
              Collections
            </p>
            <ul className="space-y-3">
              {categories.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.href}
                    onClick={closeMobileMenu}
                    className={({ isActive }) =>
                      `flex items-center justify-between py-2 text-base font-medium tracking-wide transition-colors ${
                        isActive ? 'text-cocoa font-semibold' : 'text-cocoa/80 hover:text-cocoa'
                      }`
                    }
                  >
                    <span>{item.name}</span>
                    {item.badge ? (
                      <span className="text-[10px] uppercase tracking-wider bg-sand px-2 py-0.5 rounded-full text-cocoa font-medium">
                        {item.badge}
                      </span>
                    ) : (
                      <ArrowRight className="w-4 h-4 text-taupe/60" strokeWidth={1.5} />
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Wishlist Link inside Mobile Menu */}
          <div className="pt-2 border-t border-sand/40">
            <Link
              to="/wishlist"
              onClick={closeMobileMenu}
              className="flex items-center justify-between py-2.5 text-base font-medium text-cocoa/90 hover:text-cocoa"
            >
              <div className="flex items-center space-x-3">
                <Heart className="w-4 h-4 text-taupe" strokeWidth={1.5} />
                <span>Saved Wishlist</span>
              </div>
              {wishlistCount > 0 && (
                <span className="bg-taupe text-ivory text-xs px-2 py-0.5 rounded-full font-medium">
                  {wishlistCount}
                </span>
              )}
            </Link>
          </div>

          {/* Secondary Links */}
          <div className="pt-2 border-t border-sand/40">
            <p className="text-[11px] uppercase tracking-widest text-taupe font-semibold mb-3">
              Boutique & Care
            </p>
            <ul className="space-y-2.5 text-sm text-cocoa/75">
              <li>
                <button
                  type="button"
                  onClick={() => {
                    closeMobileMenu();
                    useUIStore.getState().openHijabGuide();
                  }}
                  className="w-full text-left py-1 text-cocoa font-medium hover:text-taupe transition-colors flex items-center justify-between"
                >
                  <span>Hijab Draping Guide</span>
                  <span className="text-[10px] bg-sand px-1.5 py-0.5 rounded-xs font-normal">Styles</span>
                </button>
              </li>
              {secondaryLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    onClick={closeMobileMenu}
                    className="block py-1 hover:text-cocoa transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Concierge Assistance */}
          <div className="p-4 bg-sand/30 rounded-sm border border-sand/60">
            <p className="text-xs uppercase tracking-wider text-taupe font-semibold mb-1">
              Need Styling Advice?
            </p>
            <p className="text-xs text-cocoa/80 mb-3 leading-relaxed">
              Connect with our boutique stylists on WhatsApp for color matching and size guidance.
            </p>
            {STORE_CONFIG.whatsapp.isConfigured && (
              <a
                href={`https://wa.me/${STORE_CONFIG.whatsapp.number}?text=${encodeURIComponent(
                  'Salam Noore Concierge, I would like assistance with modest styling.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs font-semibold text-cocoa hover:text-taupe transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-olive" />
                <span>Chat with Stylist</span>
              </a>
            )}
          </div>
        </div>

        {/* Footer info in drawer */}
        <div className="p-4 border-t border-sand/60 text-xs text-cocoa/60 flex items-center justify-between">
          <span>Currency: {STORE_CONFIG.currency.code} ({STORE_CONFIG.currency.symbol})</span>
          <span>{STORE_CONFIG.name} Boutique</span>
        </div>
      </div>
    </div>
  );
};
