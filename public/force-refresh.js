// Force refresh utility for development
(function() {
  'use strict';
  
  // Only run in development
  if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
    return;
  }

  // Add keyboard shortcut for force refresh (Ctrl+Shift+F5)
  document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.shiftKey && e.key === 'F5') {
      e.preventDefault();
      forceRefresh();
    }
  });

  function forceRefresh() {
    console.log('🔄 Force refreshing application...');
    
    // Clear all caches
    if ('caches' in window) {
      caches.keys().then(function(names) {
        return Promise.all(
          names.map(function(name) {
            console.log('🗑️ Deleting cache:', name);
            return caches.delete(name);
          })
        );
      }).then(function() {
        // Clear storage
        try {
          localStorage.clear();
          sessionStorage.clear();
          console.log('🗑️ Cleared local storage');
        } catch (e) {
          console.warn('Could not clear storage:', e);
        }
        
        // Unregister service workers
        if ('serviceWorker' in navigator) {
          navigator.serviceWorker.getRegistrations().then(function(registrations) {
            return Promise.all(
              registrations.map(function(registration) {
                console.log('🗑️ Unregistering service worker');
                return registration.unregister();
              })
            );
          }).then(function() {
            // Force reload
            console.log('🔄 Reloading page...');
            window.location.reload(true);
          });
        } else {
          window.location.reload(true);
        }
      });
    } else {
      window.location.reload(true);
    }
  }

  // DEV indicator removed - keeping only keyboard shortcut functionality
  
  console.log('🔧 Development mode active. Use Ctrl+Shift+F5 to force refresh.');
})();
