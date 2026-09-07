import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '../types/product';

interface WishlistState {
  items: Product[];
  toggleWishlist: (product: Product) => void;
  isInWishlist: (productId: string) => boolean;
  removeFromWishlist: (productId: string) => void;
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      items: [],

      toggleWishlist: (product) => {
        const items = get().items;
        const exists = items.some((p) => p.id === product.id);
        if (exists) {
          set({ items: items.filter((p) => p.id !== product.id) });
        } else {
          set({ items: [...items, product] });
        }
      },

      isInWishlist: (productId) => {
        return get().items.some((p) => p.id === productId);
      },

      removeFromWishlist: (productId) => {
        set({ items: get().items.filter((p) => p.id !== productId) });
      },
    }),
    {
      name: 'noore_wishlist_storage',
    }
  )
);
