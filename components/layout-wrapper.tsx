"use client";

import { ReactNode } from "react";

interface LayoutWrapperProps {
  children: ReactNode;
  className?: string;
}

export default function LayoutWrapper({ children, className = "" }: LayoutWrapperProps) {
  return (
    <main className={`pt-16 min-h-screen ${className}`}>
      {children}
    </main>
  );
}
