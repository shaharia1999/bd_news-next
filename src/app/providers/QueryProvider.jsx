// providers/QueryProvider.tsx
'use client';

import React from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '../lib/queryClient';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
// import { queryClient } from '@/app/lib/queryClient';
export function QueryProvider( {children }) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
}