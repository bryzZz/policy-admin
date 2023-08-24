import React from "react";
import AutosizeInput from "react-input-autosize";

import "./style.css";

interface CurrencyInputProps {
  value: string;
  onChange: (value: string) => void;
  label: string;
  error?: boolean;
}

export const CurrencyInput: React.FC<CurrencyInputProps> = ({
  label,
  error = false,
  value,
  onChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isNaN(Number(e.target.value))) return;

    if (e.target.value[0] === "0") return onChange(e.target.value.slice(1));

    onChange(e.target.value || "0");
  };

  return (
    <div className={`Currency-input${error ? " error" : ""}`}>
      <label>
        <AutosizeInput value={value} onChange={handleChange} maxLength={20} />

        <span className="label">{label}</span>
        <span className="select-none"> ₽</span>
      </label>
    </div>
  );
};
