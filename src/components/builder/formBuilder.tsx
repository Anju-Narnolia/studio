"use client";

import { useFormContext } from "@/context/FormContext";
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import { v4 as uuid } from "uuid";

export default function FormEditor() {
  const { fields, setFields } = useFormContext();

  // Function to add a new field
  const addField = (type: string) => {
    let newField: any = { id: uuid(), type };

    switch (type) {
      case "FullName":
        newField = {
          ...newField,
          label: "Full Name",
          fields: [
            { id: uuid(), label: "First Name", placeholder: "Enter first name", required: true },
            { id: uuid(), label: "Last Name", placeholder: "Enter last name", required: true },
          ],
        };
        break;
      case "Date":
        newField = { ...newField, label: "Date", placeholder: "", required: true };
        break;
      case "Textarea":
        newField = {
          ...newField,
          label: "Address",
          placeholder: "Enter your address",
          required: false,
        };
        break;
      case "Calendar":
        newField = { ...newField, label: "Calendar", placeholder: "", required: false };
        break;
    }

    setFields([...fields, newField]);
  };

  // Function to update a field's properties
  const updateField = (id: string, key: string, value: any) => {
    setFields(fields.map(f => (f.id === id ? { ...f, [key]: value } : f)));
  };

  return (
    <>
      <div className="flex min-h-screen gap-4">
        {/* Sidebar */}
        <Sidebar className="bg-slate-200">
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel className="text-3xl font-bold my-6">Form Elements</SidebarGroupLabel>
              <div className="flex flex-col gap-2 mt-2">
                <button
                  onClick={() => addField("FullName")}
                  className="w-full text-left px-3 py-2 bg-white border rounded hover:bg-gray-100"
                >
                  Full Name
                </button>
                <button
                  onClick={() => addField("Calendar")}
                  className="w-full text-left px-3 py-2 bg-white border rounded hover:bg-gray-100"
                >
                  Calendar
                </button>
                <button
                  onClick={() => addField("Textarea")}
                  className="w-full text-left px-3 py-2 bg-white border rounded hover:bg-gray-100"
                >
                  Address
                </button>
                <button
                  onClick={() => addField("Date")}
                  className="w-full text-left px-3 py-2 bg-white border rounded hover:bg-gray-100"
                >
                  Date Picker
                </button>
              </div>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
      </div>

      {/* Form Canvas */}
      <div className="flex-1 p-4 space-y-4 ">
        {fields.map((field) => (
          <div key={field.id} className="border p-4 rounded bg-gray-100 w-[700]">
              {/* <label className="block font-semibold mb-2">{field.label}</label> */}
              {field.type === "FullName" && (
                <div className="flex gap-3">
                  <div className="flex-1 flex flex-col">
                    <label className="text-sm font-medium mb-1">First Name</label>
                    <input
                      type="text"
                      placeholder="Enter first name"
                      className="border p-2 w-full rounded"
                    />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <label className="text-sm font-medium mb-1">Last Name</label>
                    <input
                      type="text"
                      placeholder="Enter last name"
                      className="border p-2 w-full rounded"
                    />
                  </div>
                </div>
              )}

              {field.type === "Textarea" && (
                <textarea
                  placeholder={field.placeholder}
                  className="border p-2 w-full rounded"
                />
              )}

              {field.type === "Calendar" && (
                <input type="month" className="border p-2 w-full rounded" />
              )}

              {field.type === "Date" && (
                <input type="date" className="border p-2 w-full rounded" />
              )}
              {field.type !== "FullName" && (
                <input
                  value={field.label}
                  onChange={(e) => updateField(field.id, "label", e.target.value)}
                  placeholder="Edit label"
                  className="border p-1 w-full mt-3 rounded"
                />
              )}
          </div>
        ))}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded"> Submit</button>
      </div >
    </>
  );
}
