"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
  children,
  ...props
}: Readonly<{ children: React.ReactNode; [key: string]: unknown }>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
