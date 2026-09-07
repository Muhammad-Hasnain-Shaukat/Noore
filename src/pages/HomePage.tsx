import React, { useEffect } from 'react';
import { Hero } from '../components/home/Hero';
import { CategoryTiles } from '../components/home/CategoryTiles';
import { CuratedBestsellers } from '../components/home/CuratedBestsellers';
import { FabricEdit } from '../components/home/FabricEdit';
import { FeaturedAbaya } from '../components/home/FeaturedAbaya';
import { ShopByShade } from '../components/home/ShopByShade';
import { BrandStorySnippet } from '../components/home/BrandStorySnippet';
import { StyleInspiration } from '../components/home/StyleInspiration';

export const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Noore | Modesty, beautifully expressed';
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="flex-1">
      {/* 1. Hero with editorial split composition & ambient loop */}
      <Hero />

      {/* 2. Shop by Category tiles (4 items, 2-col mobile) */}
      <CategoryTiles />

      {/* 3. Manually curated bestsellers */}
      <CuratedBestsellers />

      {/* 4. Fabric Edit (Modal, Chiffon, Jersey, Satin) */}
      <FabricEdit />

      {/* 5. Asymmetric Featured Abaya section */}
      <FeaturedAbaya />

      {/* 6. Shop by Shade accessible swatches */}
      <ShopByShade />

      {/* 7. Brand Story Snippet */}
      <BrandStorySnippet />

      {/* 8. Style Inspiration lookbook */}
      <StyleInspiration />
    </main>
  );
};
