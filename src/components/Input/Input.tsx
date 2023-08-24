import { ComponentProps, forwardRef, useId } from "react";

import "./style.css";

interface InputProps extends ComponentProps<"input"> {
  label: string;
  error?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error = false, ...props }, ref) => {
    const id = useId();

    return (
      <div className={`form-input${error ? " error" : ""}`}>
        <input ref={ref} id={id} placeholder={label} {...props} />
        <label htmlFor={id}>{label}</label>
      </div>
    );
  }
);
