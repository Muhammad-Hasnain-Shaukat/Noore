import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem } from '../types/cart';
import { Product } from '../types/product';

interface CartState {
  items: CartItem[];
  addItem: (product: Product, colorName: string, colorHex: string, size?: string, quantity?: number) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  removeItem: (itemId: string) => void;
  clearCart: () => void;
  getSubtotal: () => number;
  getItemCount: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (product, colorName, colorHex, size, quantity = 1) => {
        const itemId = `${product.id}_${colorName.toLowerCase().replace(/\s+/g, '-')}_${size || 'standard'}`;
        const currentItems = get().items;
        const existingIndex = currentItems.findIndex((item) => item.id === itemId);

        if (existingIndex > -1) {
          const updated = [...currentItems];
          updated[existingIndex] = {
            ...updated[existingIndex],
            quantity: updated[existingIndex].quantity + quantity,
          };
          set({ items: updated });
        } else {
          const newItem: CartItem = {
            id: itemId,
            product,
            selectedColor: colorName,
            selectedColorHex: colorHex,
            selectedSize: size,
            quantity,
            unitPrice: product.price,
          };
          set({ items: [...currentItems, newItem] });
        }
      },

      updateQuantity: (itemId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(itemId);
          return;
        }
        set({
          items: get().items.map((item) =>
            item.id === itemId ? { ...item, quantity } : item
          ),
        });
      },

      removeItem: (itemId) => {
        set({
          items: get().items.filter((item) => item.id !== itemId),
        });
      },

      clearCart: () => {
        set({ items: [] });
      },

      getSubtotal: () => {
        return get().items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
      },

      getItemCount: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },
    }),
    {
      name: 'noore_cart_storage',
    }
  )
);
