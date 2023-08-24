import React from "react";
import { useForm, Controller } from "react-hook-form";
import * as Dialog from "@radix-ui/react-dialog";

import { Input } from "./Input";
import { CurrencyInput } from "./CurrencyInput";
import { ImageInput } from "./ImageInput/ImageInput";

interface RecordModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface RecordModalFormValues {
  policyNumber: string;
  premium: string;
  image: File;
}

export const RecordModal: React.FC<RecordModalProps> = ({
  isOpen,
  setIsOpen,
}) => {
  const { register, handleSubmit, control } = useForm<RecordModalFormValues>({
    defaultValues: {
      premium: "0",
    },
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black bg-opacity-80 backdrop-blur-sm data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[700px] translate-x-[-50%] translate-y-[-50%] rounded-2xl bg-white shadow-[-40px_40px_80px_-8px_rgba(145,158,171,0.24)] focus:outline-none">
          <Dialog.Title className="text-text-primary p-6 text-lg font-bold mb-6">
            Добавить запись
          </Dialog.Title>

          <form onSubmit={onSubmit}>
            <div className="flex gap-6 flex-col mb-6 px-6">
              <Input {...register("policyNumber")} label="Номер полиса" />
              <Controller
                control={control}
                name="premium"
                render={({ field }) => (
                  <CurrencyInput
                    value={field.value}
                    onChange={field.onChange}
                    label="Страховая премия"
                  />
                )}
              />
              <Controller
                control={control}
                name="image"
                render={({ field }) => <ImageInput onChange={field.onChange} />}
              />
            </div>

            <div className="flex p-6 items-center justify-end gap-3 border-t border-[rgba(145,_158,_171,_0.24)]">
              <button
                className="px-4 py-2 border border-[rgba(145,_158,_171,_0.32)] rounded-lg text-sm font-bold text-text-primary"
                type="button"
                onClick={() => setIsOpen(false)}
              >
                Закрыть
              </button>
              <button
                className="px-4 py-2 rounded-lg text-sm font-bold text-white bg-[#00AB55] shadow-[0px_8px_16px_0px_rgba(0,171,85,0.24)]"
                type="submit"
              >
                Добавить запись
              </button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
