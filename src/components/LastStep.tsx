import React from "react";

import { Success } from "./Success";

interface LastStepProps {
  imageSrc: string;
}

export const LastStep: React.FC<LastStepProps> = ({ imageSrc }) => {
  return (
    <div className="LastStep">
      <Success />
      <div className="flex p-6 items-center justify-center gap-3 border-t border-[rgba(145,_158,_171,_0.24)]">
        <button
          className="px-4 py-2 rounded-lg text-sm font-bold text-white bg-[#00AB55] shadow-[0px_8px_16px_0px_rgba(0,171,85,0.24)]"
          type="button"
          onClick={() => window.open(imageSrc, "_new")}
        >
          Открыть полис
        </button>
      </div>
    </div>
  );
};
