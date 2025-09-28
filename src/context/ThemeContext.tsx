"use client";

import { createContext, useContext, useState, ReactNode } from "react";

// 🎨 Define theme type
export type Theme = {
  color: string;     // Tailwind text / background color classes
  font: string;      // Font family class
  fontSize: string;  // Font size class
};

// 🎨 Predefined themes
export const themes: Record<string, Theme> = {
  blue: {
    color: "text-blue-600",
    font: "font-sans",
    fontSize: "text-base",
  },
  red: {
    color: "text-red-600",
    font: "font-serif",
    fontSize: "text-lg",
  },
  green: {
    color: "text-green-600",
    font: "font-mono",
    fontSize: "text-sm",
  },
};

// 🎨 ThemeContext type
type ThemeContextType = {
  theme: Theme;
  setTheme: (t: Theme) => void;
};

// Create context
const ThemeContext = createContext<ThemeContextType | null>(null);

// Hook for easier usage
export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
};

// Provider component
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(themes.blue); // default theme = blue

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
