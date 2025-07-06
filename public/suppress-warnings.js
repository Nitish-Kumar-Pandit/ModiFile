// Suppress React 19 ref warnings from third-party libraries
(function() {
  if (typeof window !== 'undefined') {
    const originalWarn = console.warn;
    const originalError = console.error;
    
    console.warn = function(...args) {
      const message = args[0];
      if (typeof message === 'string' && 
          (message.includes('Accessing element.ref was removed in React 19') ||
           message.includes('forwardRef render functions accept exactly two parameters') ||
           message.includes('Warning: ReactDOM.render is no longer supported') ||
           message.includes('Warning: Function components cannot be given refs'))) {
        return; // Suppress these specific warnings
      }
      return originalWarn.apply(console, args);
    };

    console.error = function(...args) {
      const message = args[0];
      if (typeof message === 'string' && 
          (message.includes('Hydration failed because the server rendered HTML') ||
           message.includes('There was an error while hydrating') ||
           message.includes('Text content does not match server-rendered HTML'))) {
        // Log hydration errors but don't show them as errors
        console.log('Hydration warning (suppressed):', message);
        return;
      }
      return originalError.apply(console, args);
    };
  }
})();
