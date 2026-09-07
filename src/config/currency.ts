import { STORE_CONFIG } from './store';

/**
 * Formats a raw price into the store's currency representation.
 * Handles integer calculations cleanly without floating point precision artifacts.
 */
export function formatPrice(amount: number): string {
  const formatted = new Intl.NumberFormat('en-PK', {
    maximumFractionDigits: STORE_CONFIG.currency.decimals,
    minimumFractionDigits: STORE_CONFIG.currency.decimals,
  }).format(amount);

  return `${STORE_CONFIG.currency.symbol} ${formatted}`;
}

export function formatPriceRange(min: number, max: number): string {
  if (min === max) return formatPrice(min);
  return `${formatPrice(min)} – ${formatPrice(max)}`;
}
