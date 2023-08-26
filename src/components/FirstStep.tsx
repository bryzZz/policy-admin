import React from "react";
import { Controller, UseFormReturn } from "react-hook-form";

import { Input } from "./Input";
import { CurrencyInput } from "./CurrencyInput";

interface FirstStepProps {
  form: UseFormReturn<FirstStepFormValues, unknown, undefined>;
  onClose: () => void;
  onSubmit: (data: FirstStepFormValues) => void;
}

export interface FirstStepFormValues {
  pNumber: string;
  prize: string;
  fcs: string;
  cAddress: string;
  cFlat: string;
  cIndex: string;
  vehicle_id: string;
}

export const FirstStep: React.FC<FirstStepProps> = ({
  form,
  onSubmit,
  onClose,
}) => {
  const { register, control, handleSubmit } = form;

  const handleNumberChange =
    (onChange: (value: string) => void) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (isNaN(Number(e.target.value))) return;
      if (
        e.target.value.includes(".") &&
        e.target.value.split(".")[1].length > 2
      )
        return;

      onChange(e.target.value);
    };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex gap-6 flex-col mb-6 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            {...register("pNumber", { required: true })}
            label="Номер полиса"
          />
          <Controller
            control={control}
            name="prize"
            rules={{ required: true }}
            render={({ field }) => (
              <CurrencyInput
                value={field.value}
                onChange={field.onChange}
                label="Страховая премия"
              />
            )}
          />
        </div>

        <Input {...register("fcs", { required: true })} label="ФИО" />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Input {...register("cAddress", { required: true })} label="Адрес" />
          <Controller
            control={control}
            name="cFlat"
            rules={{ required: true }}
            render={({ field }) => {
              return (
                <Input
                  value={field.value}
                  onChange={handleNumberChange(field.onChange)}
                  label="КВ"
                />
              );
            }}
          />
          <Controller
            control={control}
            name="cIndex"
            rules={{ required: true }}
            render={({ field }) => {
              return (
                <Input
                  value={field.value}
                  onChange={handleNumberChange(field.onChange)}
                  label="Индекс"
                />
              );
            }}
          />
        </div>

        <Input
          {...register("vehicle_id", { required: true })}
          label="Идентифиционный номер транспортного средства"
        />
      </div>

      <div className="flex p-6 items-center justify-end gap-3 border-t border-[rgba(145,_158,_171,_0.24)]">
        <button
          className="px-4 py-2 border border-[rgba(145,_158,_171,_0.32)] rounded-lg text-sm font-bold text-text-primary"
          type="button"
          onClick={onClose}
        >
          Закрыть
        </button>
        <button
          className="px-4 py-2 rounded-lg text-sm font-bold text-white bg-[#00AB55] shadow-[0px_8px_16px_0px_rgba(0,171,85,0.24)]"
          type="submit"
        >
          Далее
        </button>
      </div>
    </form>
  );
};
