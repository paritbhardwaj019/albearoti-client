import React from "react";
import { Icons } from "./icons";
import { cn } from "../lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "outline";
  onClick?: () => void;
  loading?: boolean;
  type?: "button" | "submit" | "reset";
}

const VARIANT_STYLES = {
  default: "bg-indigo-600 text-white hover:bg-indigo-700",
  outline:
    "border border-gray-300 bg-white hover:bg-gray-100 transition-all duration-300",
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "default",
  className,
  onClick,
  loading = false,
  type = "button",
}) => {
  return (
    <button
      className={cn(
        "w-full rounded-md h-10 flex items-center justify-center py-2 px-4 text-sm",
        VARIANT_STYLES[variant],
        className,
        loading && "opacity-70 cursor-not-allowed"
      )}
      onClick={onClick}
      disabled={loading}
      type={type}
    >
      {loading ? <Icons.spinner className="animate-spin size-5" /> : children}
    </button>
  );
};
