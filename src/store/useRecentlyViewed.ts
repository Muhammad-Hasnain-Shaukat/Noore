import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '../types/product';

interface RecentlyViewedState {
  items: Product[];
  addRecentlyViewed: (product: Product) => void;
}

export const useRecentlyViewed = create<RecentlyViewedState>()(
  persist(
    (set, get) => ({
      items: [],
      addRecentlyViewed: (product) => {
        const current = get().items.filter((p) => p.id !== product.id);
        set({ items: [product, ...current].slice(0, 6) });
      },
    }),
    {
      name: 'noore_recently_viewed_storage',
    }
  )
);
