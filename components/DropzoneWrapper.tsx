'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import LoadingSpinner from './LoadingSpinner';

// Dynamically import the SimpleDropzone component with no SSR for now
const SimpleDropzone = dynamic(() => import('./SimpleDropzone'), {
  ssr: false,
  loading: () => <LoadingSpinner />
});

export default function DropzoneWrapper() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <SimpleDropzone />
    </Suspense>
  );
}
