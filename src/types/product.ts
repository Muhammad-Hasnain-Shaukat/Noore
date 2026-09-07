export type ProductCategory = 'hijabs' | 'abayas' | 'inner-caps' | 'accessories';

export type FabricType = 'Modal' | 'Chiffon' | 'Jersey' | 'Satin' | 'Linen Blend' | 'Bamboo' | 'Metal/Brass' | 'Nidha Crepe' | 'Medina Silk';

export type ColorFamily = 'neutrals' | 'earth-tones' | 'pastels' | 'dark-shades';

export type OpacityLevel = '100% Fully Opaque' | 'Semi-Opaque (Requires Inner Cap)' | 'Semi-Opaque (Opaque When Folded)';

export type AbayaCut = 'Emirati Cut (Straight)' | 'Farasha (Butterfly Wingspan)' | 'Bisht / Kimono' | 'Classic A-Line Closed';

export interface ProductColor {
  name: string;
  hex: string;
  inStock?: boolean;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  price: number; // Integer minor units in PKR
  compareAtPrice?: number;
  category: ProductCategory;
  fabric?: FabricType;
  colorFamily: ColorFamily;
  colors: ProductColor[];
  availableSizes?: string[]; // e.g. ['50', '52', '54', '56', '58']
  dimensions?: string; // e.g. '195 cm × 75 cm'
  opacity?: OpacityLevel;
  abayaCut?: AbayaCut;
  drapingDifficulty?: 'Beginner (Pin-Free)' | 'Easy Everyday' | 'Occasion Styling';
  images: string[];
  description: string;
  details: string[];
  careInstructions: string[];
  fitAndSizing?: string;
  inStock: boolean;
  isNew?: boolean;
  isBestseller?: boolean;
  featured?: boolean;
  createdAt: string;
}

export interface CategoryInfo {
  id: ProductCategory;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  heroImage: string;
  galleryImages?: string[];
}

export interface FabricInfo {
  id: string;
  name: FabricType;
  subtitle: string;
  feel: string;
  drape: string;
  styling: string;
  image: string;
  recommendedFor: string;
  opacity: string;
}
