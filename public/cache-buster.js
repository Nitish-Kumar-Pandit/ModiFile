// Cache busting for development
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  // Disable all caching in development
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then(function(registrations) {
      for(let registration of registrations) {
        registration.unregister();
      }
    });
  }

  // Clear all storage
  try {
    localStorage.clear();
    sessionStorage.clear();
    
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

  // Add cache busting to all requests
  const originalFetch = window.fetch;
  window.fetch = function(...args) {
    if (args[0] && typeof args[0] === 'string') {
      const url = new URL(args[0], window.location.origin);
      url.searchParams.set('_cb', Date.now());
      args[0] = url.toString();
    }
    return originalFetch.apply(this, args);
  };

  // Force reload on focus if in development
  let lastReload = Date.now();
  window.addEventListener('focus', () => {
    if (Date.now() - lastReload > 5000) { // Only reload if 5+ seconds since last reload
      lastReload = Date.now();
      window.location.reload();
    }
  });
}
