// app/page.tsx
"use client";
import { useFormContext, FormProvider } from "@/context/FormContext";
import FormEditor from "@/components/builder/formBuilder";
import FormPreview from "@/components/builder/previewer";
import { SidebarProvider } from "@/components/ui/sidebar";

function Content() {
  const { mode, setMode } = useFormContext();

  return (
    <div className="min-h-screen">
      <div className="bg-slate-200">
        <div className="px-6 py-2 max-w-xl mx-auto ">
          <div className="flex justify-between p-2 rounded-md">
            <button onClick={() => setMode("edit")} className={`${mode === "edit" ? "font-bold bg-blue-500 text-white px-4 py-2 rounded" : " border border-gray-300 px-4 py-2 rounded bg-white"}`}>
              Edit Mode
            </button>
            <button onClick={() => setMode("preview")} className={`${mode === "preview" ? "font-bold bg-blue-500 text-white px-4 py-2 rounded" : " border border-gray-300 px-4 py-2 rounded bg-white"}`}>
              Preview Mode
            </button>
          </div>
        </div>
      </div>
      <div className=" max-w-5xl mx-auto ">
        <div className="mt-6">
          <SidebarProvider>
            {mode === "edit" ?
              <FormEditor />
              : <FormPreview />}
              </SidebarProvider>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <FormProvider>
      <Content />
    </FormProvider>
  );
}
