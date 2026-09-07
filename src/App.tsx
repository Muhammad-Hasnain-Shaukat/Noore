import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { CartDrawer } from './components/common/CartDrawer';
import { MobileMenu } from './components/common/MobileMenu';
import { SearchModal } from './components/common/SearchModal';
import { SizeGuideModal } from './components/common/SizeGuideModal';
import { HijabGuideModal } from './components/common/HijabGuideModal';
import { Toast } from './components/common/Toast';
import { useUIStore } from './store/useUIStore';

// Pages
import { HomePage } from './pages/HomePage';
import { CollectionPage } from './pages/CollectionPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { BagPage } from './pages/BagPage';
import { WishlistPage } from './pages/WishlistPage';
import { SearchPage } from './pages/SearchPage';
import { OurStoryPage } from './pages/OurStoryPage';
import { ContactPage } from './pages/ContactPage';
import { ShippingPage } from './pages/ShippingPage';
import { ReturnsPage } from './pages/ReturnsPage';
import { CareGuidePage } from './pages/CareGuidePage';
import { SizeGuidePage } from './pages/SizeGuidePage';
import { NotFoundPage } from './pages/NotFoundPage';

// Scroll to top helper on navigation
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

export function App() {
  const isHijabGuideOpen = useUIStore((state) => state.isHijabGuideOpen);
  const closeHijabGuide = useUIStore((state) => state.closeHijabGuide);

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-ivory text-cocoa selection:bg-sand selection:text-cocoa">
        {/* Global Sticky Header */}
        <Header />

        {/* Dynamic Route Pages */}
        <div className="flex-1 flex flex-col">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<CollectionPage />} />
            <Route path="/collections/:categoryId" element={<CollectionPage />} />
            <Route path="/product/:slug" element={<ProductDetailPage />} />
            <Route path="/bag" element={<BagPage />} />
            <Route path="/wishlist" element={<WishlistPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/our-story" element={<OurStoryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/shipping" element={<ShippingPage />} />
            <Route path="/returns" element={<ReturnsPage />} />
            <Route path="/care-guide" element={<CareGuidePage />} />
            <Route path="/size-guide" element={<SizeGuidePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>

        {/* Global Footer */}
        <Footer />

        {/* Global Modals, Drawers & Toast Feedback */}
        <CartDrawer />
        <MobileMenu />
        <SearchModal />
        <SizeGuideModal />
        <HijabGuideModal isOpen={isHijabGuideOpen} onClose={closeHijabGuide} />
        <Toast />
      </div>
    </Router>
  );
}

export default App;
