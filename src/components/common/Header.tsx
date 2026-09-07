import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Heart, Menu } from 'lucide-react';
import { useCartStore } from '../../store/useCartStore';
import { useWishlistStore } from '../../store/useWishlistStore';
import { useUIStore } from '../../store/useUIStore';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const cartItemCount = useCartStore((state) => state.getItemCount());
  const wishlistCount = useWishlistStore((state) => state.items.length);
  const { openCart, openMobileMenu, openSearch } = useUIStore();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'New Arrivals', href: '/collections/new-arrivals' },
    { name: 'Hijabs', href: '/collections/hijabs' },
    { name: 'Abayas', href: '/collections/abayas' },
    { name: 'Inner Caps', href: '/collections/inner-caps' },
    { name: 'Accessories', href: '/collections/accessories' },
    { name: 'Our Story', href: '/our-story' },
  ];

  // When on Homepage before scrolling: header is transparent above the hero video
  const isTransparentOverVideo = isHomePage && !isScrolled;

  // Active logo source: light ivory over dark video background, deep cocoa over light surfaces
  const logoSrc = isTransparentOverVideo
    ? '/assets/noore-logo-light.png'
    : '/assets/noore-logo.png';

  return (
    <header
      className={`transition-all duration-300 z-30 ${
        isTransparentOverVideo
          ? 'lg:absolute lg:top-0 lg:inset-x-0 lg:bg-transparent lg:border-transparent text-ivory py-2 sm:py-3 lg:py-3.5'
          : isScrolled
          ? 'sticky top-0 bg-ivory/95 backdrop-blur-md border-b border-sand shadow-subtle text-cocoa py-2 sm:py-2.5 lg:py-2.5'
          : 'sticky top-0 bg-ivory border-b border-sand/40 text-cocoa py-2 sm:py-2.5 lg:py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between min-h-[36px]">
          
          {/* ================================================================= */}
          {/* MOBILE ONLY (Left: Hamburger menu) */}
          {/* ================================================================= */}
          <div className="flex items-center lg:hidden z-10">
            <button
              type="button"
              onClick={openMobileMenu}
              className={`p-1.5 -ml-1.5 transition-colors focus:outline-none tap-target-44 flex items-center justify-center ${
                isTransparentOverVideo ? 'text-cocoa sm:text-ivory' : 'text-cocoa hover:text-taupe'
              }`}
              aria-label="Open navigation menu"
            >
              <Menu className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>

          {/* ================================================================= */}
          {/* PC ONLY (Left: Official Brand Logo moved to the left for PC only) */}
          {/* ================================================================= */}
          <div className="hidden lg:flex items-center">
            <Link
              to="/"
              className="inline-flex items-center group focus:outline-none py-0.5"
              aria-label="Noore Home"
            >
              <img
                src={logoSrc}
                alt="Noore Modest Fashion"
                className="h-10 lg:h-11 w-auto object-contain transition-transform duration-200 group-hover:scale-105 drop-shadow-xs"
              />
            </Link>
          </div>

          {/* ================================================================= */}
          {/* MOBILE ONLY (Center: Official Brand Logo optically centered) */}
          {/* ================================================================= */}
          <div className="lg:hidden absolute left-1/2 top-1/2 -translate-x-[calc(50%+10px)] -translate-y-1/2 flex items-center justify-center pointer-events-auto">
            <Link
              to="/"
              className="inline-flex items-center justify-center focus:outline-none"
              aria-label="Noore Home"
            >
              <img
                src="/assets/noore-logo.png"
                alt="Noore Modest Fashion"
                className="h-11 sm:h-12 w-auto object-contain drop-shadow-xs"
              />
            </Link>
          </div>

          {/* ================================================================= */}
          {/* PC ONLY (Center: Navigation Links) */}
          {/* ================================================================= */}
          <nav className="hidden lg:flex items-center space-x-7 xl:space-x-8 text-xs uppercase tracking-widest font-medium">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) =>
                  `transition-colors duration-200 relative py-1 drop-shadow-xs ${
                    isTransparentOverVideo
                      ? isActive
                        ? 'text-ivory font-semibold'
                        : 'text-ivory/90 hover:text-gold-light'
                      : isActive
                      ? 'text-cocoa font-semibold'
                      : 'text-cocoa/80 hover:text-taupe'
                  }`
                }
              >
                {link.name}
                {location.pathname === link.href && (
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[1.5px] ${
                      isTransparentOverVideo ? 'bg-ivory' : 'bg-cocoa'
                    } animate-in fade-in duration-200`}
                  />
                )}
              </NavLink>
            ))}
          </nav>

          {/* ================================================================= */}
          {/* RIGHT (Both PC & Mobile: Search, Wishlist, Bag Actions) */}
          {/* ================================================================= */}
          <div className="flex items-center space-x-1 sm:space-x-3 z-10">
            {/* Search Trigger */}
            <button
              type="button"
              onClick={openSearch}
              className={`p-1.5 sm:p-2 transition-colors tap-target-44 flex items-center justify-center ${
                isTransparentOverVideo
                  ? 'text-cocoa sm:text-ivory hover:text-gold-light'
                  : 'text-cocoa hover:text-taupe'
              }`}
              aria-label="Search catalog"
            >
              <Search className="w-5 h-5" strokeWidth={1.5} />
            </button>

            {/* Wishlist Link (Desktop & Tablet) */}
            <Link
              to="/wishlist"
              className={`hidden sm:flex relative p-2 transition-colors tap-target-44 items-center justify-center ${
                isTransparentOverVideo
                  ? 'text-ivory hover:text-gold-light'
                  : 'text-cocoa hover:text-taupe'
              }`}
              aria-label={`Wishlist with ${wishlistCount} items`}
            >
              <Heart className="w-5 h-5" strokeWidth={1.5} />
              {wishlistCount > 0 && (
                <span className="absolute top-1.5 right-1.5 min-w-[16px] h-4 px-1 bg-gold text-cocoa font-semibold text-[10px] rounded-full flex items-center justify-center leading-none">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Bag Drawer Trigger */}
            <button
              type="button"
              onClick={openCart}
              className={`relative p-1.5 sm:p-2 -mr-1.5 sm:-mr-2 transition-colors tap-target-44 flex items-center justify-center ${
                isTransparentOverVideo
                  ? 'text-cocoa sm:text-ivory hover:text-gold-light'
                  : 'text-cocoa hover:text-taupe'
              }`}
              aria-label={`Shopping bag with ${cartItemCount} items`}
            >
              <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
              {cartItemCount > 0 && (
                <span
                  className={`absolute top-1 right-1 min-w-[15px] h-3.5 px-1 font-semibold text-[9px] rounded-full flex items-center justify-center leading-none shadow-sm ${
                    isTransparentOverVideo
                      ? 'bg-ivory text-cocoa'
                      : 'bg-cocoa text-ivory'
                  }`}
                >
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};
