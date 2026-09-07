import { Product } from './product';

export interface CartItem {
  id: string; // Unique combination of productId + colorName + size
  product: Product;
  selectedColor: string;
  selectedColorHex: string;
  selectedSize?: string;
  quantity: number;
  unitPrice: number;
}

export interface WishlistItem {
  product: Product;
  addedAt: string;
}

export interface OrderRequestPayload {
  items: {
    productName: string;
    variantSummary: string;
    quantity: number;
    price: number;
    subtotal: number;
  }[];
  subtotal: number;
  currency: string;
  formattedSubtotal: string;
}
