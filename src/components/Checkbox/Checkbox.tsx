import { ComponentProps, forwardRef } from "react";

import { ReactComponent as Check } from "assets/icons/check.svg";

import "./style.css";

interface CheckboxProps extends ComponentProps<"input"> {
  label: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, ...props }, ref) => {
    return (
      <div>
        <label className="group flex cursor-pointer select-none items-center gap-3 text-sm text-text-primary">
          <input
            ref={ref}
            type="checkbox"
            {...props}
            className="checkbox-input absolute opacity-0"
          />
          <div className="flex items-center justify-center border border-[#D3D4DD] p-1 transition-all group-hover:border-text-primary h-[18px] w-[18px] rounded">
            <Check className="hidden" />
          </div>
          {label}
        </label>
      </div>
    );
  }
);
