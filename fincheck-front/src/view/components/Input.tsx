import { CrossCircledIcon } from "@radix-ui/react-icons";
import { ComponentProps, forwardRef } from "react";
import cn from "../../utils/cn";

interface InputProps extends ComponentProps<"input"> {
  name: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, name, placeholder, error, className, ...props }, ref) => {
    const inputId = id ?? name;
    return (
      <div className="relative">
        <input
          ref={ref}
          name={name}
          id={inputId}
          {...props}
          className={cn("w-full bg-white rounded-lg border border-gray-500 px-3 h-[52px] text-gray-800 peer pt-4 placeholder-shown:pt-0 focus:border-gray-800 transition-all", error && "!border-red-900", className)}
          placeholder=" "
        />
        <label
          htmlFor={inputId}
          className="absolute left-[13px] top-2pointer-events-none text-gray-700 peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 transition-all"
        >
          {placeholder}
        </label>
        {error && <span className="text-red-900 text-xs flex gap-2 items-center mt-2"><CrossCircledIcon/> {error}</span>}
      </div>
    );
  }
);
export default Input;
Input.displayName = 'Input'