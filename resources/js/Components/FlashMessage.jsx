import React, { useState, useEffect } from 'react';
import { usePage } from '@inertiajs/react';

const FlashMessage = () => {
  const { flash } = usePage().props;
  const [isVisible, setIsVisible] = useState(false);
  const [messages, setMessages] = useState({});

  useEffect(() => {
    // Vérifie s'il y a des messages flash
    const hasMessages = flash && (
      flash.success ||
      flash.error ||
      flash.warning ||
      flash.info
    );

    if (hasMessages) {
      setMessages(flash);
      setIsVisible(true);

      // Cache le message après 3 secondes
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [flash]);

  // Si pas de message à afficher, on ne rend rien
  if (!isVisible) return null;

  return (
    <div
      className={`fixed top-4 right-4 max-w-md z-50 transition-all duration-300 transform ${
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
      }`}
    >
      {messages.success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-2 flex items-start">
          <div className="flex-grow">{messages.success}</div>
          <button onClick={() => setIsVisible(false)} className="ml-4 text-green-700">
            &times;
          </button>
        </div>
      )}

      {messages.error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-2 flex items-start">
          <div className="flex-grow">{messages.error}</div>
          <button onClick={() => setIsVisible(false)} className="ml-4 text-red-700">
            &times;
          </button>
        </div>
      )}

      {messages.warning && (
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded mb-2 flex items-start">
          <div className="flex-grow">{messages.warning}</div>
          <button onClick={() => setIsVisible(false)} className="ml-4 text-yellow-700">
            &times;
          </button>
        </div>
      )}

      {messages.info && (
        <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded mb-2 flex items-start">
          <div className="flex-grow">{messages.info}</div>
          <button onClick={() => setIsVisible(false)} className="ml-4 text-blue-700">
            &times;
          </button>
        </div>
      )}
    </div>
  );
};

export default FlashMessage;
