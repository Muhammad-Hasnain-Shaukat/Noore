import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Minus, Plus, MessageCircle, Copy, ArrowRight, ShoppingBag, Shield, Truck } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';
import { useUIStore } from '../store/useUIStore';
import { formatPrice } from '../config/currency';
import { STORE_CONFIG } from '../config/store';
import { generateWhatsAppOrderDetails, copyToClipboard } from '../utils/whatsapp';

export const BagPage: React.FC = () => {
  const { items, updateQuantity, removeItem, getSubtotal, getItemCount } = useCartStore();
  const { showToast } = useUIStore();

  useEffect(() => {
    document.title = 'Shopping Bag | Noore';
    window.scrollTo(0, 0);
  }, []);

  const subtotal = getSubtotal();
  const itemCount = getItemCount();
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
      showToast('Unable to copy automatically.');
    }
  };

  return (
    <div className="flex-1 bg-ivory py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-cocoa tracking-tight mb-2">
          Your Shopping Bag
        </h1>
        <p className="text-xs sm:text-sm text-taupe font-light mb-8">
          Review your selected modest essentials and request an order via WhatsApp.
        </p>

        {items.length === 0 ? (
          <div className="py-20 text-center bg-sand/15 rounded-sm border border-sand p-8 max-w-lg mx-auto">
            <div className="w-16 h-16 rounded-full bg-sand/50 flex items-center justify-center mx-auto mb-4 text-taupe">
              <ShoppingBag className="w-8 h-8" strokeWidth={1.5} />
            </div>
            <h2 className="font-serif text-2xl font-medium text-cocoa mb-2">
              Your bag is currently empty
            </h2>
            <p className="text-xs sm:text-sm text-cocoa/70 mb-6 font-light">
              Explore our boutique collection of everyday botanic modals, chiffons, and tailored abayas.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center space-x-2 px-7 py-3 bg-cocoa text-ivory text-xs uppercase tracking-widest font-semibold hover:bg-cocoa-light transition-colors rounded-sm"
            >
              <span>Explore Collection</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left Items Column (spans 8 cols) */}
            <div className="lg:col-span-8 bg-ivory rounded-sm border border-sand/70 p-6 shadow-subtle">
              <div className="flex items-center justify-between pb-4 border-b border-sand">
                <span className="text-xs uppercase tracking-wider text-taupe font-semibold">
                  Items in Bag ({itemCount})
                </span>
                <span className="text-xs text-taupe">Unit Price</span>
              </div>

              <div className="divide-y divide-sand/50">
                {items.map((item) => (
                  <div key={item.id} className="py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    {/* Image & Title */}
                    <div className="flex items-center space-x-4 flex-1 min-w-0">
                      <Link
                        to={`/product/${item.product.slug}`}
                        className="w-20 h-26 sm:w-24 sm:h-32 bg-sand/30 shrink-0 overflow-hidden rounded-sm border border-sand"
                      >
                        <img
                          src={item.product.images[0]}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </Link>

                      <div className="min-w-0 flex-1">
                        <p className="text-[11px] uppercase tracking-wider text-taupe font-medium">
                          {item.product.fabric || item.product.category}
                        </p>
                        <Link
                          to={`/product/${item.product.slug}`}
                          className="font-serif text-base sm:text-lg font-medium text-cocoa hover:text-taupe transition-colors block truncate"
                        >
                          {item.product.name}
                        </Link>

                        {/* Variant Chips */}
                        <div className="flex items-center space-x-2 mt-1.5 text-xs text-taupe">
                          <span className="flex items-center space-x-1.5">
                            <span
                              className="w-3 h-3 rounded-full border border-sand"
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

                        {/* Remove Action */}
                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="text-xs text-cocoa/40 hover:text-cocoa/80 flex items-center space-x-1 mt-3 transition-colors"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          <span>Remove</span>
                        </button>
                      </div>
                    </div>

                    {/* Quantity & Line Total */}
                    <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-4">
                      <div className="flex items-center border border-sand rounded-sm bg-sand/20">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1.5 text-cocoa hover:bg-sand/60 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-xs font-semibold select-none min-w-[28px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1.5 text-cocoa hover:bg-sand/60 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="text-right">
                        <p className="text-base font-semibold text-cocoa">
                          {formatPrice(item.unitPrice * item.quantity)}
                        </p>
                        <p className="text-[11px] text-taupe">
                          ({formatPrice(item.unitPrice)} each)
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Summary Column (spans 4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-sand/20 rounded-sm border border-sand p-6 shadow-subtle space-y-5">
                <h2 className="font-serif text-xl font-medium text-cocoa pb-3 border-b border-sand">
                  Order Summary
                </h2>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between text-cocoa/80">
                    <span>Merchandise Subtotal</span>
                    <span className="font-semibold text-cocoa">{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-xs text-taupe">
                    <span>Delivery Charges</span>
                    <span>Confirmed on WhatsApp</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-sand">
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="font-semibold text-base text-cocoa">Total to Request</span>
                    <span className="font-semibold text-xl text-cocoa">{formatPrice(subtotal)}</span>
                  </div>
                  <p className="text-[11px] text-taupe font-light">
                    *Excludes city delivery charges, confirmed prior to dispatch.
                  </p>
                </div>

                {/* WhatsApp Order Instructions */}
                <div className="p-3.5 bg-sand/50 rounded-sm border border-sand text-xs text-cocoa/80 leading-relaxed space-y-2">
                  <p className="font-semibold text-cocoa">
                    {STORE_CONFIG.ordering.confirmationNote}
                  </p>
                  <p>
                    When you click below, WhatsApp will open with a pre-filled list of your items.
                    Our boutique concierge will check live stock and coordinate delivery details.
                  </p>
                </div>

                {/* Primary WhatsApp Action */}
                <button
                  type="button"
                  onClick={handleWhatsAppClick}
                  className="w-full py-4 bg-cocoa text-ivory text-xs uppercase tracking-widest font-semibold hover:bg-cocoa-light transition-all rounded-sm flex items-center justify-center space-x-2 shadow-sm active:scale-[0.99] tap-target-44"
                >
                  <MessageCircle className="w-4 h-4 text-olive-light" />
                  <span>Request Order on WhatsApp</span>
                </button>

                {/* Fallback Copy Button */}
                <button
                  type="button"
                  onClick={handleCopyDetails}
                  className="w-full py-3 bg-ivory border border-sand text-cocoa text-xs uppercase tracking-wider font-semibold hover:bg-sand/30 transition-colors rounded-sm flex items-center justify-center space-x-2"
                >
                  <Copy className="w-3.5 h-3.5 text-taupe" />
                  <span>Copy Order Details</span>
                </button>
              </div>

              {/* Guarantees Box */}
              <div className="bg-ivory rounded-sm border border-sand/70 p-5 space-y-3 text-xs text-cocoa/70 font-light">
                <div className="flex items-center space-x-2.5">
                  <Truck className="w-4 h-4 text-taupe shrink-0" />
                  <span>Prompt domestic dispatch within 24–48 hours of WhatsApp confirmation.</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <Shield className="w-4 h-4 text-taupe shrink-0" />
                  <span>No payment requested until stock and courier details are agreed upon.</span>
                </div>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};
