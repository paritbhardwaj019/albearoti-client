import { HTMLAttributes, ChangeEvent } from "react";
import { cn } from "../lib/utils";

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  type?: "email" | "number" | "text" | "password";
  value?: string | number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  name?: string;
  required?: boolean;
}

export const Input = ({
  className,
  value,
  onChange,
  type = "text",
  placeholder,
  name,
  required = false,
  ...props
}: InputProps) => {
  return (
    <input
      type={type}
      className={cn(
        "h-10 w-full border border-gray-200 bg-white rounded-lg p-2 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-600 transition-all duration-300 ease-in-out ",
        className
      )}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      name={name}
      {...props}
    />
  );
};
