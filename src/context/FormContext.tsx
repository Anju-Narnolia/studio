// context/FormContext.tsx
"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type Field = {
  id: string;
  type: "text" | "email" | "select" | "FullName" | "Date" | "Textarea" | "Calendar";
  label: string;
  placeholder?: string;
  required?: boolean;
  fields?: Array<{
    id: string;
    label: string;
    placeholder: string;
    required: boolean;
  }>;
};

type Theme = {
  textColor: string;
  bgColor: string;
  secColor: string;
  borderColor: string;
  buttonColor: string;
  buttonHoverColor: string;
  focusRingColor: string;
  font: string;
  fontSize: string;
};

type FormContextType = {
  fields: Field[];
  setFields: (f: Field[]) => void;
  theme: Theme;
  setTheme: (t: Theme) => void;
  mode: "edit" | "preview";
  setMode: (m: "edit" | "preview") => void;
};

const FormContext = createContext<FormContextType | null>(null);
export const useFormContext = () => useContext(FormContext)!;

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [fields, setFields] = useState<Field[]>([]);
  const [theme, setTheme] = useState<Theme>({
    textColor: "text-gray-700",
    bgColor: "bg-gray-50",
    secColor: "bg-gray-100",
    borderColor: "border-gray-300",
    buttonColor: "bg-gray-500",
    buttonHoverColor: "hover:bg-gray-600",
    focusRingColor: "focus:ring-gray-500",
    font: "font-sans",
    fontSize: "text-base",
  });
  const [mode, setMode] = useState<"edit" | "preview">("edit");

  return (
    <FormContext.Provider value={{ fields, setFields, theme, setTheme, mode, setMode }}>
      {children}
    </FormContext.Provider>
  );
};

// Predefined themes with complete Tailwind classes
export const themes: Record<string, Theme> = {
  blue: {
    textColor: "text-blue-700",
    bgColor: "bg-blue-50",
    secColor: "bg-blue-100",
    borderColor: "border-blue-300",
    buttonColor: "bg-blue-500",
    buttonHoverColor: "hover:bg-blue-600",
    focusRingColor: "focus:ring-blue-500",
    font: "font-sans",
    fontSize: "text-base"
  },
  red: {
    textColor: "text-red-700",
    bgColor: "bg-red-50",
    secColor: "bg-red-100",
    borderColor: "border-red-300",
    buttonColor: "bg-red-500",
    buttonHoverColor: "hover:bg-red-600",
    focusRingColor: "focus:ring-red-500",
    font: "font-serif",
    fontSize: "text-lg"
  },
  green: {
    textColor: "text-green-700",
    bgColor: "bg-green-50",
    secColor: "bg-green-100",
    borderColor: "border-green-300",
    buttonColor: "bg-green-500",
    buttonHoverColor: "hover:bg-green-600",
    focusRingColor: "focus:ring-green-500",
    font: "font-mono",
    fontSize: "text-sm"
  },
  purple: {
    textColor: "text-purple-700",
    bgColor: "bg-purple-50",
    secColor: "bg-purple-100",
    borderColor: "border-purple-300",
    buttonColor: "bg-purple-500",
    buttonHoverColor: "hover:bg-purple-600",
    focusRingColor: "focus:ring-purple-500",
    font: "font-sans",
    fontSize: "text-base"
  },
  orange: {
    textColor: "text-orange-700",
    bgColor: "bg-orange-50",
    secColor: "bg-orange-100",
    borderColor: "border-orange-300",
    buttonColor: "bg-orange-500",
    buttonHoverColor: "hover:bg-orange-600",
    focusRingColor: "focus:ring-orange-500",
    font: "font-serif",
    fontSize: "text-lg"
  },
  teal: {
    textColor: "text-teal-700",
    bgColor: "bg-teal-50",
    secColor: "bg-teal-100",
    borderColor: "border-teal-300",
    buttonColor: "bg-teal-500",
    buttonHoverColor: "hover:bg-teal-600",
    focusRingColor: "focus:ring-teal-500",
    font: "font-mono",
    fontSize: "text-base"
  },
  pink: {
    textColor: "text-pink-700",
    bgColor: "bg-pink-50",
    secColor: "bg-pink-100",
    borderColor: "border-pink-300",
    buttonColor: "bg-pink-500",
    buttonHoverColor: "hover:bg-pink-600",
    focusRingColor: "focus:ring-pink-500",
    font: "font-sans",
    fontSize: "text-lg"
  },
  indigo: {
    textColor: "text-indigo-700",
    bgColor: "bg-indigo-50",
    secColor: "bg-indigo-100",
    borderColor: "border-indigo-300",
    buttonColor: "bg-indigo-500",
    buttonHoverColor: "hover:bg-indigo-600",
    focusRingColor: "focus:ring-indigo-500",
    font: "font-serif",
    fontSize: "text-base"
  },
  gray: {
    textColor: "text-gray-700",
    bgColor: "bg-gray-50",
    secColor: "bg-gray-100",
    borderColor: "border-gray-300",
    buttonColor: "bg-gray-500",
    buttonHoverColor: "hover:bg-gray-600",
    focusRingColor: "focus:ring-gray-500",
    font: "font-sans",
    fontSize: "text-base"
  },
  emerald: {
    textColor: "text-emerald-700",
    bgColor: "bg-emerald-50",
    secColor: "bg-emerald-100",
    borderColor: "border-emerald-300",
    buttonColor: "bg-emerald-500",
    buttonHoverColor: "hover:bg-emerald-600",
    focusRingColor: "focus:ring-emerald-500",
    font: "font-mono",
    fontSize: "text-lg"
  }
};
