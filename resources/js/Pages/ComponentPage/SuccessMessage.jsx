import React, { useState, useEffect } from 'react';

const SuccessMessage = ({children}) => {
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-6 py-4 rounded-lg shadow-lg transition-opacity duration-300 ${
        showMessage ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="flex items-center">
        <svg
          className="w-6 h-6 mr-2 animate-spin"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
        <span>{children}</span>
      </div>
    </div>
  );
};

export default SuccessMessage;
