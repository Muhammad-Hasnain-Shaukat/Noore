import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Page Not Found | Noore';
  }, []);

  return (
    <div className="flex-1 bg-ivory flex items-center justify-center py-20 px-4">
      <div className="max-w-md text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-sand/50 text-taupe flex items-center justify-center mx-auto">
          <Compass className="w-8 h-8" strokeWidth={1.5} />
        </div>

        <div className="space-y-2">
          <p className="text-xs uppercase tracking-widest text-taupe font-semibold">
            Error 404
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl font-medium text-cocoa">
            Piece Not Found
          </h1>
          <p className="text-sm text-cocoa/70 font-light leading-relaxed">
            The page or modest item you are seeking may have moved or is no longer part of our current
            catalog edit.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto px-6 py-3 bg-cocoa text-ivory text-xs uppercase tracking-widest font-semibold hover:bg-cocoa-light transition-colors rounded-sm text-center"
          >
            Return Home
          </Link>
          <Link
            to="/products"
            className="w-full sm:w-auto px-6 py-3 bg-ivory border border-sand text-cocoa text-xs uppercase tracking-widest font-semibold hover:bg-sand/30 transition-colors rounded-sm text-center flex items-center justify-center space-x-1.5"
          >
            <span>Browse Catalog</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
