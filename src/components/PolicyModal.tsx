import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as Dialog from "@radix-ui/react-dialog";
import useSWRMutation from "swr/mutation";
import axios from "axios";

import { FirstStep, FirstStepFormValues } from "./FirstStep";
import { SecondStep, SecondStepFormValues } from "./SecondStep";
import { LastStep } from "./LastStep";
import { CreatePolicyResponse } from "types";
import { usePolicyModal } from "store/useModals";

type RequestData = FirstStepFormValues &
  Omit<SecondStepFormValues, "print"> & { print: number };

export const PolicyModal: React.FC = () => {
  const { isOpen, setIsOpen } = usePolicyModal();

  const { trigger, data } = useSWRMutation(
    "/api/method/policy/createFull",
    (
      url,
      {
        arg: data,
      }: {
        arg: RequestData;
      }
    ) => axios.post<CreatePolicyResponse>(url, data).then((res) => res.data)
  );

  const [step, setStep] = useState(0);
  const [firstStepFormData, setFirstStepFormData] =
    useState<FirstStepFormValues | null>(null);

  const firstStepForm = useForm<FirstStepFormValues>({
    defaultValues: {
      prize: "0",
      cFlat: "",
      cIndex: "",
    },
  });
  const secondStepForm = useForm<SecondStepFormValues>({
    defaultValues: {
      doc_serial: "",
      doc_number: "",
    },
  });

  const handleSubmitFirstStep = (data: FirstStepFormValues) => {
    setFirstStepFormData(data);
    setStep(1);
  };

  const handleSubmitSecondStep = async (data: SecondStepFormValues) => {
    await trigger({
      ...firstStepFormData,
      ...data,
      print: Number(data.print),
    } as RequestData);

    setStep(2);
  };

  const getStepContent = (step: number) => {
    if (step === 0) {
      return (
        <FirstStep
          form={firstStepForm}
          onClose={() => handleOpenChange(false)}
          onSubmit={handleSubmitFirstStep}
        />
      );
    }

    if (step === 1) {
      return (
        <SecondStep
          form={secondStepForm}
          onClose={() => handleOpenChange(false)}
          onSubmit={handleSubmitSecondStep}
        />
      );
    }

    return <LastStep imageSrc={data?.returnedUrl ?? ""} />;
  };

  const getStepNumber = () => {
    if (step === 2) return 2;

    return step + 1;
  };

  const handleOpenChange = (open: boolean) => {
    if (open === false) {
      firstStepForm.reset();
      secondStepForm.reset();
      setStep(0);
    }

    setIsOpen(open);
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={handleOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black bg-opacity-80 backdrop-blur-sm data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] overflow-auto max-h-[85vh] w-[90vw] max-w-[700px] translate-x-[-50%] translate-y-[-50%] rounded-2xl bg-white shadow-[-40px_40px_80px_-8px_rgba(145,158,171,0.24)] focus:outline-none">
          <Dialog.Title className="text-text-primary p-6 text-lg font-bold mb-6">
            Создать полис {getStepNumber()}/2
          </Dialog.Title>

          {getStepContent(step)}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
