import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface ProductAccordionProps {
  items: AccordionItem[];
}

export const ProductAccordion: React.FC<ProductAccordionProps> = ({ items }) => {
  const [openItems, setOpenItems] = useState<string[]>([items[0]?.id || '']);

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="border-t border-sand divide-y divide-sand/60">
      {items.map((item) => {
        const isOpen = openItems.includes(item.id);
        return (
          <div key={item.id} className="py-4">
            <button
              type="button"
              onClick={() => toggleItem(item.id)}
              className="w-full flex items-center justify-between text-left text-xs uppercase tracking-widest font-semibold text-cocoa hover:text-taupe transition-colors py-1"
              aria-expanded={isOpen}
            >
              <span>{item.title}</span>
              <ChevronDown
                className={`w-4 h-4 text-taupe transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            {isOpen && (
              <div className="pt-3 text-sm text-cocoa/80 font-light leading-relaxed animate-in fade-in duration-200">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
