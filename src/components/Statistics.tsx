import React from "react";

import { ReactComponent as Chart } from "assets/icons/Chart.svg";
import { ReactComponent as Up } from "assets/icons/up.svg";
import { ReactComponent as Down } from "assets/icons/down.svg";

export const Statistics: React.FC = () => {
  return (
    <div className="base-container grid grid-cols-3 gap-7 mb-20">
      <div className="p-7 rounded-[20px] flex items-center justify-between shadow-[0px_15px_30px_-5px_rgba(145,_158,_171,_0.12),0px_0px_2px_0px_rgba(145,_158,_171,_0.20)]">
        <div className="text-text-primary">
          <h4 className="font-semibold text-lg mb-5">Всего записей в базе</h4>
          <p className="flex items-center gap-2 font-semibold text-lg mb-3">
            <Up />
            +2.6%
          </p>
          <p className="font-bold text-[40px]">18,765</p>
        </div>
        <Chart className="text-[#00AB55]" />
      </div>
      <div className="p-7 rounded-[20px] flex items-center justify-between shadow-[0px_15px_30px_-5px_rgba(145,_158,_171,_0.12),0px_0px_2px_0px_rgba(145,_158,_171,_0.20)]">
        <div className="text-text-primary">
          <h4 className="font-semibold text-lg mb-5">Сумма страховых премий</h4>
          <p className="flex items-center gap-2 font-semibold text-lg mb-3">
            <Down />
            -0.06%
          </p>
          <p className="font-bold text-[40px]">4,876</p>
        </div>
        <Chart className="text-[#2D99FF]" />
      </div>
      <div className="p-7 rounded-[20px] flex items-center justify-between shadow-[0px_15px_30px_-5px_rgba(145,_158,_171,_0.12),0px_0px_2px_0px_rgba(145,_158,_171,_0.20)]">
        <div className="text-text-primary">
          <h4 className="font-semibold text-lg mb-5">Полисов без скана</h4>
          <p className="flex items-center gap-2 font-semibold text-lg mb-3">
            <Up />
            +8.6%
          </p>
          <p className="font-bold text-[40px]">678</p>
        </div>
        <Chart className="text-[#FF6C40]" />
      </div>
      <div className="p-7 rounded-[20px] flex items-center justify-between shadow-[0px_15px_30px_-5px_rgba(145,_158,_171,_0.12),0px_0px_2px_0px_rgba(145,_158,_171,_0.20)]">
        <div className="text-text-primary">
          <h4 className="font-semibold text-lg mb-5">Полисов со сканом </h4>
          <p className="flex items-center gap-2 font-semibold text-lg mb-3">
            <Up />
            +2.6%
          </p>
          <p className="font-bold text-[40px]">18,765</p>
        </div>
        <Chart className="text-[#00AB55]" />
      </div>
      <div className="p-7 rounded-[20px] flex items-center justify-between shadow-[0px_15px_30px_-5px_rgba(145,_158,_171,_0.12),0px_0px_2px_0px_rgba(145,_158,_171,_0.20)]">
        <div className="text-text-primary">
          <h4 className="font-semibold text-lg mb-5">Записи с печатями </h4>
          <p className="flex items-center gap-2 font-semibold text-lg mb-3">
            <Down />
            -0.06%
          </p>
          <p className="font-bold text-[40px]">4,876</p>
        </div>
        <Chart className="text-[#2D99FF]" />
      </div>
      <div className="p-7 rounded-[20px] flex items-center justify-between shadow-[0px_15px_30px_-5px_rgba(145,_158,_171,_0.12),0px_0px_2px_0px_rgba(145,_158,_171,_0.20)]">
        <div className="text-text-primary">
          <h4 className="font-semibold text-lg mb-5">Записи без печатями </h4>
          <p className="flex items-center gap-2 font-semibold text-lg mb-3">
            <Up />
            +8.6%
          </p>
          <p className="font-bold text-[40px]">678</p>
        </div>
        <Chart className="text-[#FF6C40]" />
      </div>
    </div>
  );
};
