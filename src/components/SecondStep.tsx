import React from "react";
import { UseFormReturn } from "react-hook-form";

import { Input } from "./Input";
import { Checkbox } from "./Checkbox";

interface SecondStepProps {
  form: UseFormReturn<SecondStepFormValues, unknown, undefined>;
  onClose: () => void;
  onSubmit: (data: SecondStepFormValues) => void;
}

export interface SecondStepFormValues {
  carModel: string;
  carNumber: string;
  documentView: string;
  documentSeries: string;
  number: string;
  driverLicense: string;
  insuranceStartDate: Date;
  insuranceEndDate: Date;
  seal: boolean;
}

export const SecondStep: React.FC<SecondStepProps> = ({
  form,
  onSubmit,
  onClose,
}) => {
  const { register, handleSubmit } = form;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex gap-6 flex-col mb-6 px-6">
        <div className="grid grid-cols-2 gap-4">
          <Input
            {...register("carModel", { required: true })}
            label="Модель авто"
          />
          <Input
            {...register("carNumber", { required: true })}
            label="Гос. номер авто"
          />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <Input
            {...register("documentView", { required: true })}
            label="Вид документа"
          />
          <Input
            {...register("documentSeries", { required: true })}
            type="text"
            label="Серия документа"
          />
          <Input {...register("number", { required: true })} label="Номер" />
        </div>
        <Input
          {...register("driverLicense", { required: true })}
          label="Водительское удостоверение "
        />
        <div className="grid grid-cols-2 gap-4">
          <Input
            {...register("insuranceStartDate", { required: true })}
            type="date"
            label="Дата начала страхования"
          />
          <Input
            {...register("insuranceEndDate", { required: true })}
            type="date"
            label="Дата окончания страхования"
          />
        </div>
        <Checkbox {...register("seal")} label="Поставить печать" />
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
