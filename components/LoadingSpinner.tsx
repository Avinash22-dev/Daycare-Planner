
import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-slate-900 bg-opacity-50 flex flex-col items-center justify-center z-50 backdrop-blur-sm">
      <div className="w-16 h-16 border-4 border-teal-300 border-t-teal-600 rounded-full animate-spin"></div>
      <p className="text-white text-lg mt-4 font-semibold">Crafting the perfect day...</p>
    </div>
  );
};

export default LoadingSpinner;
