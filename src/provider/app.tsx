"use client";

import React from "react";
import { QueryClientProvider } from "react-query";

import { queryClient } from "@/lib/react-query";

type AppProviderProps = {
  children: React.ReactNode;
};

function AppProviders({ children }: AppProviderProps) {
  return (
    <React.Suspense fallback="">
      <QueryClientProvider client={queryClient}>
        {/* {isDev() && <ReactQueryDevtools />} */}
        {children}
      </QueryClientProvider>
    </React.Suspense>
  );
}

export default AppProviders;
