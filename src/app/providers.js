"use client";

import ThemeProvider from "../components/ThemeProvider";

export function Providers({ children }) {
  return (
    <ThemeProvider>
      <main className="min-h-screen bg-white dark:bg-gray-900">{children}</main>
    </ThemeProvider>
  );
}
