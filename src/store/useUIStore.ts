import { create } from 'zustand';

interface UIState {
  isCartOpen: boolean;
  isMobileMenuOpen: boolean;
  isSearchOpen: boolean;
  isSizeGuideOpen: boolean;
  isHijabGuideOpen: boolean;
  toastMessage: string | null;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  openMobileMenu: () => void;
  closeMobileMenu: () => void;
  openSearch: () => void;
  closeSearch: () => void;
  openSizeGuide: () => void;
  closeSizeGuide: () => void;
  openHijabGuide: () => void;
  closeHijabGuide: () => void;
  showToast: (message: string) => void;
  clearToast: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  isCartOpen: false,
  isMobileMenuOpen: false,
  isSearchOpen: false,
  isSizeGuideOpen: false,
  isHijabGuideOpen: false,
  toastMessage: null,

  openCart: () => set({ isCartOpen: true }),
  closeCart: () => set({ isCartOpen: false }),
  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),

  openMobileMenu: () => set({ isMobileMenuOpen: true }),
  closeMobileMenu: () => set({ isMobileMenuOpen: false }),

  openSearch: () => set({ isSearchOpen: true }),
  closeSearch: () => set({ isSearchOpen: false }),

  openSizeGuide: () => set({ isSizeGuideOpen: true }),
  closeSizeGuide: () => set({ isSizeGuideOpen: false }),

  openHijabGuide: () => set({ isHijabGuideOpen: true }),
  closeHijabGuide: () => set({ isHijabGuideOpen: false }),

  showToast: (message: string) => {
    set({ toastMessage: message });
    setTimeout(() => {
      set({ toastMessage: null });
    }, 3200);
  },
  clearToast: () => set({ toastMessage: null }),
}));
