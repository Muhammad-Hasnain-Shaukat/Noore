import { CartItem } from '../types/cart';
import { STORE_CONFIG } from '../config/store';
import { formatPrice } from '../config/currency';

export interface WhatsAppOrderDetails {
  messageText: string;
  whatsappUrl: string | null;
  isConfigured: boolean;
}

export function buildWhatsAppOrderMessage(items: CartItem[], subtotal: number): string {
  const lineItemsText = items
    .map((item, index) => {
      const variantParts = [item.selectedColor];
      if (item.selectedSize) {
        variantParts.push(`Size ${item.selectedSize}`);
      }
      const variantStr = variantParts.join(' / ');
      const lineTotal = formatPrice(item.unitPrice * item.quantity);
      return `${index + 1}. *${item.product.name}*\n   Option: ${variantStr}\n   Qty: ${item.quantity} × ${formatPrice(item.unitPrice)} = ${lineTotal}`;
    })
    .join('\n\n');

  const formattedSubtotal = formatPrice(subtotal);

  return [
    `Salam Noore Team,`,
    ``,
    `I would like to place an order request for the following items:`,
    ``,
    lineItemsText,
    ``,
    `--------------------------------`,
    `*Merchandise Subtotal:* ${formattedSubtotal}`,
    `*(Shipping will be calculated based on destination)*`,
    `--------------------------------`,
    ``,
    `Please confirm item availability, domestic delivery charges, and payment instructions.`,
    ``,
    `Thank you!`,
  ].join('\n');
}

export function generateWhatsAppOrderDetails(items: CartItem[], subtotal: number): WhatsAppOrderDetails {
  const messageText = buildWhatsAppOrderMessage(items, subtotal);
  const isConfigured = Boolean(STORE_CONFIG.whatsapp.isConfigured && STORE_CONFIG.whatsapp.number);

  if (!isConfigured) {
    return {
      messageText,
      whatsappUrl: null,
      isConfigured: false,
    };
  }

  const encodedMessage = encodeURIComponent(messageText);
  const whatsappUrl = `https://wa.me/${STORE_CONFIG.whatsapp.number}?text=${encodedMessage}`;

  return {
    messageText,
    whatsappUrl,
    isConfigured: true,
  };
}

export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator?.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    const successful = document.execCommand('copy');
    document.body.removeChild(textArea);
    return successful;
  } catch (err) {
    console.error('Failed to copy order details to clipboard:', err);
    return false;
  }
}
