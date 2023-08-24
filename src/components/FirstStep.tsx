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
  policyNumber: string;
  premium: string;
  fullName: string;
  address: string;
  apartmentNumber: string;
  index: string;
  identificationNumber: string;
}

export const FirstStep: React.FC<FirstStepProps> = ({
  form,
  onSubmit,
  onClose,
}) => {
  const { register, control, handleSubmit } = form;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex gap-6 flex-col mb-6 px-6">
        <div className="grid grid-cols-2 gap-4">
          <Input
            {...register("policyNumber", { required: true })}
            label="Номер полиса"
          />
          <Controller
            control={control}
            name="premium"
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

        <Input {...register("fullName", { required: true })} label="ФИО" />

        <div className="grid grid-cols-3 gap-4">
          <Input {...register("address", { required: true })} label="Адрес" />
          <Input
            {...register("apartmentNumber", { required: true })}
            label="КВ"
          />
          <Input {...register("index", { required: true })} label="Индекс" />
        </div>

        <Input
          {...register("identificationNumber", { required: true })}
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
