import { Input } from "./input";
import { Textarea } from "./textarea";
import Select from "react-select";
import { UploadButton } from "./upload-button";

export type Option = { label: string | number; value: string | number };

type Props = {
  type: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | Option[]
  ) => void;
  required: boolean;
  placeholder?: string;
  name: string;
  label: string;
  options?: Option[];
  accept?: string;
  value?: string | number | Option[];
};

export const FormBuilder = ({
  type,
  onChange,
  required,
  placeholder,
  name,
  label,
  options,
  accept = "*",
}: Props) => {
  switch (type) {
    case "textarea":
      return (
        <div className="w-full">
          <label htmlFor={name} className="block text-sm font-medium mb-1">
            {label}
          </label>
          <Textarea
            onChange={onChange}
            required={required}
            placeholder={placeholder}
            name={name}
          />
        </div>
      );

    case "file":
      return (
        <div className="w-full">
          <label htmlFor={name} className="block text-sm font-medium mb-1">
            {label}
          </label>
          <UploadButton onChange={onChange} accept={accept} name={name} />
        </div>
      );

    case "multiselect":
      return (
        <div className="w-full">
          <label htmlFor={name} className="block text-sm font-medium mb-1">
            {label}
          </label>
          <Select
            isMulti
            name={name}
            options={options}
            placeholder={placeholder}
            onChange={(option) => onChange(option as Option[])}
          />
        </div>
      );

    default:
      return (
        <div className="w-full">
          <label htmlFor={name} className="block text-sm font-medium mb-1">
            {label}
          </label>
          <Input
            onChange={onChange}
            required={required}
            placeholder={placeholder}
            name={name}
          />
        </div>
      );
  }
};
