// Simplified cache management for development
if (typeof window !== 'undefined') {
  // Only clear service workers in development
  if (process.env.NODE_ENV === 'development' && 'serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then(function(registrations) {
      for(let registration of registrations) {
        registration.unregister();
      }
    });
  }

  // Clear browser caches on page load in development
  if (process.env.NODE_ENV === 'development') {
    try {
      if ('caches' in window) {
        caches.keys().then(function(names) {
          for (let name of names) {
            caches.delete(name);
          }
        });
      }
    } catch (e) {
      console.log('Cache clearing failed:', e);
    }
  }
}
