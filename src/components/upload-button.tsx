import { ChangeEvent, useRef } from "react";
import { cn } from "../lib/utils";

export const UploadButton = ({
  accept,
  onChange,
  loading = false,
  name,
  onRemove,
  ...props
}: {
  accept: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  loading?: boolean;
  onRemove?: () => void;
  name: string;
}) => {
  const ref = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    if (ref.current) {
      ref.current.click();
    }
  };

  return (
    <div
      className={cn(
        "py-1.5 px-4 border border-dashed border-neutral-300 bg-white rounded-md h-[92px] flex flex-col items-center justify-center cursor-pointer w-full hover:bg-gray-50 transition-all duration-300",
        loading
          ? "bg-gray-100 border-gray-200 animate-pulse cursor-not-allowed hover:bg-gray-100"
          : ""
      )}
      onClick={handleClick}
    >
      <img
        src="/upload-image.svg"
        alt="Upload Image SVG"
        className="w-8 h-8 mb-1"
      />
      <p className="text-[#6D7785] text-[12px]">Attach an Image</p>
      <input
        type="file"
        className="hidden"
        accept={accept}
        onChange={onChange}
        name={name}
        ref={ref}
        {...props}
      />
    </div>
  );
};
