import React from "react";

export const Textarea = ({
  name,
  value,
  onChange,
  required,
  placeholder,
}: {
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  required?: boolean;
}) => {
  return (
    <textarea
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full p-2 text-sm bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-600 focus:border-transparent transition duration-200 ease-in-out"
      rows={6}
      placeholder={placeholder}
      required={required}
    />
  );
};
