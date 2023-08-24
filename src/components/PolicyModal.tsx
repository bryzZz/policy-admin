import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as Dialog from "@radix-ui/react-dialog";

import { FirstStep, FirstStepFormValues } from "./FirstStep";
import { SecondStep, SecondStepFormValues } from "./SecondStep";

interface PolicyModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({
  isOpen,
  setIsOpen,
}) => {
  const [step, setStep] = useState(0);
  const [firstStepFormData, setFirstStepFormData] =
    useState<FirstStepFormValues | null>(null);

  const firstStepForm = useForm<FirstStepFormValues>({
    defaultValues: {
      premium: "0",
    },
  });
  const secondStepForm = useForm<SecondStepFormValues>();

  const handleSubmitFirstStep = (data: FirstStepFormValues) => {
    setFirstStepFormData(data);
    setStep(1);
  };

  const handleSubmitSecondStep = (data: SecondStepFormValues) => {
    console.log({ ...firstStepFormData, ...data });
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black bg-opacity-80 backdrop-blur-sm data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[700px] translate-x-[-50%] translate-y-[-50%] rounded-2xl bg-white shadow-[-40px_40px_80px_-8px_rgba(145,158,171,0.24)] focus:outline-none">
          <Dialog.Title className="text-text-primary p-6 text-lg font-bold mb-6">
            Создать полис {step + 1}/2
          </Dialog.Title>

          {step === 0 ? (
            <FirstStep
              form={firstStepForm}
              onClose={() => setIsOpen(false)}
              onSubmit={handleSubmitFirstStep}
            />
          ) : (
            <SecondStep
              form={secondStepForm}
              onClose={() => setIsOpen(false)}
              onSubmit={handleSubmitSecondStep}
            />
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
