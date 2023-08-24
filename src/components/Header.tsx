import React from "react";

import { ReactComponent as DocumentCopy } from "assets/icons/document-copy.svg";
import Avatar from "assets/images/Avatar.png";

export const Header: React.FC = () => {
  return (
    <header className="base-container flex justify-between items-center mb-12">
      <div className="py-4 px-5 flex gap-4">
        <img
          className="rounded-full object-cover w-10 aspect-square"
          src={Avatar}
        />
        <div>
          <p className="font-semibold text-sm text-text-primary">Александр</p>
          <p className="text-text-secondary text-sm">Администратор</p>
        </div>
      </div>

      <button className="flex items-center gap-2 py-3 px-[18px] bg-black rounded-lg shadow-[0px_8px_16px_0px_rgba(0,0,0,0.24)] text-[15px] leading-6 font-bold text-white">
        Создать полис <DocumentCopy />
      </button>
    </header>
  );
};
