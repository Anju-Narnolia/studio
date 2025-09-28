// components/FormPreview.tsx
"use client";
import { useFormContext } from "@/context/FormContext";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { useState } from "react";

export default function FormPreview() {
  const { fields, theme } = useFormContext();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    for (let field of fields) {
      if (field.required && !formData.get(field.id)) {
        alert(`${field.label} is required`);
        return;
      }
    }

    setSubmitted(true);
  };

  if (submitted) return <p className="text-green-600">✅ Form Submitted!</p>;

  // Now we can use theme classes directly since they're complete Tailwind classes

  return (
    <div className={`${theme.textColor} ${theme.bgColor} ${theme.borderColor} ${theme.font} ${theme.fontSize} flex flex-col items-center w-full min-h-screen p-5`}> 
      <ThemeSwitcher />
    
    <form onSubmit={handleSubmit} className={`${theme.borderColor} border-2 ${theme.secColor} ${theme.font} ${theme.fontSize} p-6 mt-5 w-2/3 rounded-lg shadow-lg`}>
      {fields.map(f => (
        <div key={f.id} className="mb-4">
          {f.type === "FullName" ? (
            <div className="space-y-2">
              <label className="block text-md font-bold">
                {f.label}
                {f.required && <span className="text-red-500 ml-1">*</span>}
              </label>
              <div className="flex gap-3">
                <div className="flex-1">
                  <label className="block text-md  mb-1">First Name</label>
                    <input
                      id={`${f.id}-firstname`}
                      name={`${f.id}-firstname`}
                      type="text"
                      placeholder="Enter first name"
                      className={`border ${theme.borderColor} p-2 w-full rounded-md focus:ring-2 ${theme.focusRingColor} focus:border-transparent`}
                    />
                </div>
                <div className="flex-1">
                  <label className="block text-md  mb-1">Last Name</label>
                  <input
                    id={`${f.id}-lastname`}
                    name={`${f.id}-lastname`}
                    type="text"
                    placeholder="Enter last name"
                    className={`border ${theme.borderColor} p-2 w-full rounded-md focus:ring-2 ${theme.focusRingColor} focus:border-transparent`}
                  />
                </div>
              </div>
            </div>
          ) : (
            <>
              <label className="block text-md font-medium mb-1">
                {f.label}
                {f.required && <span className="text-red-500 ml-1">*</span>}
              </label>
              {f.type === "Textarea" ? (
                <textarea
                  id={f.id}
                  name={f.id}
                  placeholder={f.placeholder}
                  className={`border ${theme.borderColor} p-2 w-full rounded-md focus:ring-2 ${theme.focusRingColor} focus:border-transparent`}
                  rows={3}
                />
              ) : (
                <input
                  id={f.id}
                  name={f.id}
                  type={f.type === "Calendar" ? "month" : f.type === "Date" ? "date" : f.type}
                  placeholder={f.placeholder}
                  className={`border ${theme.borderColor} p-2 w-full rounded-md focus:ring-2 ${theme.focusRingColor} focus:border-transparent`}
                />
              )}
            </>
          )}
        </div>
      ))}
      <button type="submit" className={`${theme.buttonColor} ${theme.buttonHoverColor} text-white px-4 py-2 rounded transition-colors bg-blue-500` }>
        Submit
      </button>
    </form>
    </div>
  );
}
