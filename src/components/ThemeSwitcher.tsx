// components/ThemeSelector.tsx
"use client";
import { useFormContext, themes } from "@/context/FormContext";

export default function ThemeSelector() {
  const { setTheme } = useFormContext();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTheme = e.target.value as keyof typeof themes;
    setTheme(themes[selectedTheme]);
  };

  return (
    <div className="mb-4">
      <label className="mr-2 font-medium">Choose Theme:</label>
      <select
        onChange={handleChange}
        className="border px-3 py-1 rounded"
        defaultValue="gray"
      >
        <option value="gray">⚫ Gray / Sans</option>
        <option value="blue">🔵 Blue / Sans</option>
        <option value="red">🔴 Red / Serif</option>
        <option value="green">🟢 Green / Mono</option>
        <option value="purple">🟣 Purple / Sans</option>
        <option value="orange">🟠 Orange / Serif</option>
        <option value="teal">🟦 Teal / Mono</option>
        <option value="pink">🌸 Pink / Sans</option>
        <option value="indigo">💙 Indigo / Serif</option>
        <option value="emerald">💚 Emerald / Mono</option>
      </select>
    </div>
  );
}
