import { ComponentProps } from "react";

interface InputProps extends ComponentProps<"input"> {
  name: string;
}

export default function Input({ id, name, placeholder, ...props }: InputProps) {
  const inputId = id ?? name;
  return (
    <div className="relative">
      <input
        name={name}
        id={inputId}
        {...props}
        className="w-full bg-white rounded-lg border border-gray-500 px-3 h-[52px] text-gray-800 peer pt-4 placeholder-shown:pt-0 focus:border-gray-800 transition-all"
        placeholder=" "
      />
      <label
        htmlFor={inputId}
        className="absolute left-[13px] top-2pointer-events-none text-gray-700 peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 transition-all"
      >
        {placeholder}
      </label>
    </div>
  );
}
