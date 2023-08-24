import React from "react";

import { ReactComponent as Yes } from "assets/icons/success.svg";

export const Success: React.FC = () => {
  return (
    <div className="grid place-items-center">
      <div className="grid place-items-center">
        <Yes />

        <p className="text-lg font-bold">Готово</p>
      </div>
    </div>
  );
};
