import React from 'react';
import { CheckCircle, X } from 'lucide-react';
import { useUIStore } from '../../store/useUIStore';

export const Toast: React.FC = () => {
  const { toastMessage, clearToast } = useUIStore();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center space-x-2.5 bg-cocoa text-ivory text-xs sm:text-sm px-4 py-3 rounded-sm shadow-elevated border border-taupe/40 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <CheckCircle className="w-4 h-4 text-olive-light shrink-0" />
      <span className="font-medium tracking-wide">{toastMessage}</span>
      <button
        type="button"
        onClick={clearToast}
        className="ml-2 text-ivory/60 hover:text-ivory"
        aria-label="Dismiss notification"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
