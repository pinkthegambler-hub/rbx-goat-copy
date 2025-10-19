import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1a1625]/95 transition-all ease-in-out duration-500">
      <div className="h-8 w-8 animate-spin rounded-full border-[3px] border-solid border-white/20 border-t-white" />
    </div>
  );
};

export default LoadingSpinner;