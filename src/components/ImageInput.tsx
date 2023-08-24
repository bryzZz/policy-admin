import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { twMerge } from "tailwind-merge";

import { ReactComponent as DirectInbox } from "assets/icons/direct-inbox.svg";
import { ReactComponent as Yes } from "assets/icons/yes.svg";

interface ImageInputProps {
  onChange: (file: File) => void;
}

export const ImageInput: React.FC<ImageInputProps> = ({ onChange }) => {
  const onDrop = useCallback(
    (droppedFiles: File[]) => {
      onChange(droppedFiles[0]);
    },
    [onChange]
  );

  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({
      onDrop,
      accept: { "image/*": [] },
      multiple: false,
    });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />

      <div
        className={twMerge(
          "w-full flex items-center justify-center rounded-2xl p-5 flex-col bg-[#FCFCFC] border border-dashed border-[#D9D9D9]",
          isDragActive && "border-[#BFBFBF]"
        )}
      >
        {acceptedFiles.length ? (
          <div className="grid place-items-center">
            <Yes />
            <p className="text-lg font-bold">Готово</p>
          </div>
        ) : (
          <>
            <DirectInbox width={67} height={67} className="mb-[6px]" />
            <p className="text-center font-bold text-[#919EAB] leading-4 max-w-[170px] mb-[18px]">
              Перетащите файлы в эту область
            </p>
            <button className="px-3 py-2 text-sm font-bold bg-[#BFBFBF] rounded-lg shadow-[0px_8px_16px_0px_rgba(104,104,104,0.24)] text-white">
              Выбрать файл
            </button>
          </>
        )}
      </div>
    </div>
  );
};
