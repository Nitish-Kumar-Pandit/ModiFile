'use client';

import { useEffect, useState } from 'react';

interface ClientWrapperProps {
  children: React.ReactNode;
}

export default function ClientWrapper({ children }: ClientWrapperProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Suppress React 19 ref warnings from third-party libraries
    const originalWarn = console.warn;
    console.warn = function(...args) {
      const message = args[0];
      if (typeof message === 'string' && 
          (message.includes('Accessing element.ref was removed in React 19') ||
           message.includes('forwardRef render functions accept exactly two parameters'))) {
        return; // Suppress these specific warnings
      }
      return originalWarn.apply(console, args);
    };

    return () => {
      console.warn = originalWarn;
    };
  }, []);

  if (!isClient) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return <>{children}</>;
}
