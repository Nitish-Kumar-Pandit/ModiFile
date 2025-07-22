"use client";

import { useEffect } from 'react';

export default function ServiceWorkerRegistration() {
  useEffect(() => {
    // Enhanced browser environment check
    if (typeof window === 'undefined' || typeof navigator === 'undefined') {
      return;
    }

    // Check if service workers are supported
    if ('serviceWorker' in navigator) {
      // Wait for the page to load before registering
      if (document.readyState === 'loading') {
        window.addEventListener('load', registerServiceWorker);
      } else {
        registerServiceWorker();
      }
    }

    function registerServiceWorker() {
      navigator.serviceWorker
        .register('/sw.js', {
          scope: '/',
          updateViaCache: 'none'
        })
        .then((registration) => {
          console.log('SW registered successfully:', registration.scope);
          
          // Handle updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  console.log('New service worker available');
                }
              });
            }
          });
        })
        .catch((error) => {
          console.log('SW registration failed:', error);
        });
    }

    // Cleanup function
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('load', registerServiceWorker);
      }
    };
  }, []);

  return null;
}
