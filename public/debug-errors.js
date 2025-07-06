// Debug script to catch and log client-side errors
(function() {
  if (typeof window !== 'undefined') {
    // Catch unhandled errors
    window.addEventListener('error', function(event) {
      console.error('🚨 Unhandled Error:', {
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        error: event.error,
        stack: event.error?.stack
      });
      
      // Check for common issues
      if (event.message.includes('document is not defined')) {
        console.error('💡 Fix: Add typeof window !== "undefined" check before using document');
      }
      if (event.message.includes('window is not defined')) {
        console.error('💡 Fix: Add typeof window !== "undefined" check before using window');
      }
      if (event.message.includes('Cannot read properties of undefined')) {
        console.error('💡 Fix: Check for null/undefined values before accessing properties');
      }
    });

    // Catch unhandled promise rejections
    window.addEventListener('unhandledrejection', function(event) {
      console.error('🚨 Unhandled Promise Rejection:', {
        reason: event.reason,
        promise: event.promise
      });
    });

    // Log when the script loads
    console.log('🔍 Debug error handler loaded');
  }
})();
