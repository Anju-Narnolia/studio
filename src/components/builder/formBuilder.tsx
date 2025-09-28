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

  // Function to duplicate a field
  const duplicateField = (id: string) => {
    const fieldToDuplicate = fields.find(f => f.id === id);
    if (fieldToDuplicate) {
      const newField = {
        ...fieldToDuplicate,
        id: uuid(),
        label: `${fieldToDuplicate.label} (Copy)`,
        fields: fieldToDuplicate.fields?.map(subField => ({
          ...subField,
          id: uuid()
        }))
      };
      const fieldIndex = fields.findIndex(f => f.id === id);
      const newFields = [...fields];
      newFields.splice(fieldIndex + 1, 0, newField);
      setFields(newFields);
    }
  };

  // Function to delete a field
  const deleteField = (id: string) => {
    setFields(fields.filter(f => f.id !== id));
  };

  // Function to move field up
  const moveFieldUp = (id: string) => {
    const fieldIndex = fields.findIndex(f => f.id === id);
    if (fieldIndex > 0) {
      const newFields = [...fields];
      [newFields[fieldIndex - 1], newFields[fieldIndex]] = [newFields[fieldIndex], newFields[fieldIndex - 1]];
      setFields(newFields);
    }
  };

  // Function to move field down
  const moveFieldDown = (id: string) => {
    const fieldIndex = fields.findIndex(f => f.id === id);
    if (fieldIndex < fields.length - 1) {
      const newFields = [...fields];
      [newFields[fieldIndex], newFields[fieldIndex + 1]] = [newFields[fieldIndex + 1], newFields[fieldIndex]];
      setFields(newFields);
    }
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
        {fields.map((field, index) => (
          <div key={field.id} className="border p-4 rounded bg-gray-100 w-[700] relative group">
            {/* Field Controls */}
            <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                onClick={() => moveFieldUp(field.id)}
                disabled={index === 0}
                className="p-1 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
                title="Move Up"
              >
                ↑
              </button>
              <button
                onClick={() => moveFieldDown(field.id)}
                disabled={index === fields.length - 1}
                className="p-1 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
                title="Move Down"
              >
                ↓
              </button>
              <button
                onClick={() => duplicateField(field.id)}
                className="p-1 bg-green-500 text-white rounded hover:bg-green-600"
                title="Duplicate"
              >
                ⧉
              </button>
              <button
                onClick={() => deleteField(field.id)}
                className="p-1 bg-red-500 text-white rounded hover:bg-red-600"
                title="Delete"
              >
                ×
              </button>
            </div>

            {/* Field Type Badge */}
            <div className="absolute top-2 left-2">
              <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">
                {field.type}
              </span>
            </div>

            {/* Field Content */}
            <div className="mt-6">
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
              {/* Field Properties Editor */}
              <div className="mt-4 space-y-2">
            
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={`required-${field.id}`}
                    checked={field.required || false}
                    onChange={(e) => updateField(field.id, "required", e.target.checked)}
                    className="rounded"
                  />
                  <label htmlFor={`required-${field.id}`} className="text-sm font-medium">
                    Required field
                  </label>
                </div>
              </div>
            </div>
          </div>
        ))}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded"> Submit</button>
      </div >
    </>
  );
}
