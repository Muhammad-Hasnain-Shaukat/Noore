import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Minus, Plus, Trash2, MessageCircle, Copy, ArrowRight, ShoppingBag } from 'lucide-react';
import { useCartStore } from '../../store/useCartStore';
import { useUIStore } from '../../store/useUIStore';
import { formatPrice } from '../../config/currency';
import { STORE_CONFIG } from '../../config/store';
import { generateWhatsAppOrderDetails, copyToClipboard } from '../../utils/whatsapp';

export const CartDrawer: React.FC = () => {
  const { isCartOpen, closeCart, showToast } = useUIStore();
  const { items, updateQuantity, removeItem, getSubtotal, getItemCount } = useCartStore();

  const subtotal = getSubtotal();
  const itemCount = getItemCount();

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isCartOpen) {
        closeCart();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCartOpen, closeCart]);

  // Prevent background scroll
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isCartOpen]);

  if (!isCartOpen) return null;

  const orderDetails = generateWhatsAppOrderDetails(items, subtotal);

  const handleWhatsAppClick = () => {
    if (orderDetails.whatsappUrl) {
      window.open(orderDetails.whatsappUrl, '_blank', 'noopener,noreferrer');
      showToast('Opening WhatsApp with your order request...');
    } else {
      handleCopyDetails();
    }
  };

  const handleCopyDetails = async () => {
    const success = await copyToClipboard(orderDetails.messageText);
    if (success) {
      showToast('Order details copied to clipboard!');
    } else {
      showToast('Unable to copy automatically. Please try again.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-cocoa/50 backdrop-blur-sm transition-opacity"
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Slide-out Drawer Panel */}
      <div className="relative w-full max-w-md bg-ivory text-cocoa h-full shadow-drawer flex flex-col z-10 animate-in slide-in-from-right duration-300">
        {/* Drawer Header */}
        <div className="px-6 py-5 border-b border-sand flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h2 className="font-serif text-2xl font-medium tracking-wide">
              Shopping Bag
            </h2>
            <span className="text-xs text-taupe font-medium">({itemCount})</span>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="p-2 -mr-2 text-cocoa/70 hover:text-cocoa tap-target-44 flex items-center justify-center rounded-sm focus:outline-none focus:ring-1 focus:ring-taupe"
            aria-label="Close shopping bag"
          >
            <X className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>

        {/* Drawer Body */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-sand/50 flex items-center justify-center mb-4 text-taupe">
              <ShoppingBag className="w-8 h-8" strokeWidth={1.5} />
            </div>
            <h3 className="font-serif text-xl font-medium mb-2">Your bag is empty</h3>
            <p className="text-sm text-cocoa/70 max-w-xs mb-6">
              Explore our thoughtful modest essentials and find your favorite shade.
            </p>
            <button
              type="button"
              onClick={closeCart}
              className="px-6 py-3 bg-cocoa text-ivory text-xs uppercase tracking-widest font-semibold hover:bg-cocoa-light transition-colors"
            >
              Discover Collection
            </button>
          </div>
        ) : (
          <>
            {/* Scrollable Item List */}
            <div className="flex-1 overflow-y-auto px-6 py-4 divide-y divide-sand/50">
              {items.map((item) => (
                <div key={item.id} className="py-4 flex space-x-4">
                  {/* Thumbnail */}
                  <Link
                    to={`/product/${item.product.slug}`}
                    onClick={closeCart}
                    className="w-20 h-24 bg-sand/30 shrink-0 overflow-hidden rounded-sm border border-sand/60"
                  >
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                    />
                  </Link>

                  {/* Item Details */}
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between">
                        <Link
                          to={`/product/${item.product.slug}`}
                          onClick={closeCart}
                          className="font-medium text-sm text-cocoa hover:text-taupe transition-colors line-clamp-1"
                        >
                          {item.product.name}
                        </Link>
                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="p-1 -mr-1 text-cocoa/40 hover:text-cocoa/80 transition-colors"
                          aria-label={`Remove ${item.product.name} from bag`}
                        >
                          <Trash2 className="w-4 h-4" strokeWidth={1.5} />
                        </button>
                      </div>

                      {/* Variant Badges */}
                      <div className="flex items-center space-x-2 mt-1 text-xs text-taupe">
                        <span className="flex items-center space-x-1.5">
                          <span
                            className="w-2.5 h-2.5 rounded-full border border-sand"
                            style={{ backgroundColor: item.selectedColorHex }}
                          />
                          <span>{item.selectedColor}</span>
                        </span>
                        {item.selectedSize && (
                          <>
                            <span>•</span>
                            <span>Size {item.selectedSize}</span>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Quantity and Price */}
                    <div className="flex items-center justify-between mt-3 pt-2">
                      <div className="flex items-center border border-sand rounded-sm bg-sand/20">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 text-cocoa hover:bg-sand/60 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-2.5 text-xs font-semibold select-none min-w-[24px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 text-cocoa hover:bg-sand/60 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="text-right">
                        <p className="text-sm font-semibold text-cocoa">
                          {formatPrice(item.unitPrice * item.quantity)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary & WhatsApp Flow */}
            <div className="p-6 border-t border-sand bg-sand/20 space-y-4">
              {/* Subtotal breakdown */}
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between text-cocoa/80">
                  <span>Merchandise Subtotal</span>
                  <span className="font-medium text-cocoa">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-xs text-taupe">
                  <span>Domestic Delivery</span>
                  <span>Calculated via WhatsApp</span>
                </div>
              </div>

              {/* Explanatory note */}
              <p className="text-[11px] text-cocoa/70 bg-sand/40 p-2.5 rounded-sm border border-sand/60 leading-relaxed">
                ℹ️ <strong>{STORE_CONFIG.ordering.confirmationNote}</strong> Delivery charges and items
                are verified directly with our concierge team.
              </p>

              {/* Primary Action: Request on WhatsApp */}
              <button
                type="button"
                onClick={handleWhatsAppClick}
                className="w-full py-3.5 bg-cocoa text-ivory text-xs uppercase tracking-widest font-semibold hover:bg-cocoa-light transition-all duration-200 flex items-center justify-center space-x-2 shadow-sm active:scale-[0.99] tap-target-44"
              >
                <MessageCircle className="w-4 h-4 text-olive-light" />
                <span>Request Order on WhatsApp</span>
              </button>

              {/* Secondary Actions */}
              <div className="flex items-center justify-between text-xs pt-1">
                <button
                  type="button"
                  onClick={handleCopyDetails}
                  className="text-taupe hover:text-cocoa flex items-center space-x-1.5 transition-colors py-1"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy order details</span>
                </button>

                <Link
                  to="/bag"
                  onClick={closeCart}
                  className="text-cocoa font-medium hover:text-taupe flex items-center space-x-1 transition-colors py-1"
                >
                  <span>View full bag</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
