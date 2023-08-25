import React from "react";
import { UseFormReturn, Controller } from "react-hook-form";

import { Input } from "./Input";
import { Checkbox } from "./Checkbox";

interface SecondStepProps {
  form: UseFormReturn<SecondStepFormValues, unknown, undefined>;
  onClose: () => void;
  onSubmit: (data: SecondStepFormValues) => void;
}

export interface SecondStepFormValues {
  vehicle_model: string;
  vehicle_number: string;
  doc_type: string;
  doc_serial: string;
  doc_number: string;
  doc_data: string;
  start: Date;
  finish: Date;
  print: boolean;
}

export const SecondStep: React.FC<SecondStepProps> = ({
  form,
  onSubmit,
  onClose,
}) => {
  const { register, handleSubmit, control } = form;

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
        <div className="grid grid-cols-2 gap-4">
          <Input
            {...register("vehicle_model", { required: true })}
            label="Модель авто"
          />
          <Input
            {...register("vehicle_number", { required: true })}
            label="Гос. номер авто"
          />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <Input
            {...register("doc_type", { required: true })}
            label="Вид документа"
          />
          <Controller
            control={control}
            name="doc_serial"
            rules={{ required: true }}
            render={({ field }) => {
              return (
                <Input
                  value={field.value}
                  onChange={handleNumberChange(field.onChange)}
                  label="Серия документа"
                />
              );
            }}
          />
          <Controller
            control={control}
            name="doc_number"
            rules={{ required: true }}
            render={({ field }) => {
              return (
                <Input
                  value={field.value}
                  onChange={handleNumberChange(field.onChange)}
                  label="Номер"
                />
              );
            }}
          />
        </div>
        <Input
          {...register("doc_data", { required: true })}
          label="Водительское удостоверение "
        />
        <div className="grid grid-cols-2 gap-4">
          <Input
            {...register("start", { required: true })}
            type="date"
            label="Дата начала страхования"
          />
          <Input
            {...register("finish", { required: true })}
            type="date"
            label="Дата окончания страхования"
          />
        </div>
        <Checkbox {...register("print")} label="Поставить печать" />
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
          Создать полис
        </button>
      </div>
    </form>
  );
};
