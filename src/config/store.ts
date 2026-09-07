export interface StoreConfig {
  name: string;
  tagline: string;
  announcement: string;
  whatsapp: {
    number: string; // E.164 format without '+' or spaces, e.g., '923001234567'
    displayNumber: string; // e.g., '+92 300 1234567'
    isConfigured: boolean;
  };
  contact: {
    email: string;
    hours: string;
    locationCity: string;
    instagramHandle: string;
    instagramUrl: string;
  };
  currency: {
    code: string;
    symbol: string;
    decimals: number;
    exchangeRateMultiplier: number;
  };
  ordering: {
    instructions: string;
    confirmationNote: string;
    disclaimer: string;
  };
  policies: {
    shippingTimeline: string;
    standardShippingNote: string;
    returnsWindow: string;
    exchangeConditions: string;
  };
}

export const STORE_CONFIG: StoreConfig = {
  name: "Noore",
  tagline: "Modesty, beautifully expressed.",
  announcement: "Discover everyday essentials and occasion pieces crafted for effortless modesty.",
  whatsapp: {
    number: "923001234567", // Store WhatsApp number (replace with verified business number prior to launch)
    displayNumber: "+92 300 123 4567",
    isConfigured: true,
  },
  contact: {
    email: "concierge@noore.com",
    hours: "Monday – Saturday, 10:00 AM – 7:00 PM PKT",
    locationCity: "Lahore, Pakistan",
    instagramHandle: "@noore.official",
    instagramUrl: "https://instagram.com",
  },
  currency: {
    code: "PKR",
    symbol: "Rs.",
    decimals: 0,
    exchangeRateMultiplier: 1,
  },
  ordering: {
    instructions: "Your order request will be sent directly to our WhatsApp concierge team. We will confirm item availability, discuss local delivery options, and provide your finalized total.",
    confirmationNote: "Your order is confirmed after our team replies on WhatsApp.",
    disclaimer: "Catalog inventory is manually curated. Stock is confirmed directly by our team upon request.",
  },
  policies: {
    shippingTimeline: "Standard domestic delivery takes 2 to 4 business days. Express same-day courier dispatch is available in select cities upon WhatsApp confirmation.",
    standardShippingNote: "Standard domestic courier rates apply and will be confirmed on WhatsApp based on your delivery address.",
    returnsWindow: "Exchanges are welcomed within 7 days of delivery for unworn, unwashed items in original branded packaging with hygiene tags intact.",
    exchangeConditions: "Inner caps, pins, and magnets are final sale for hygiene considerations unless received damaged.",
  },
};
