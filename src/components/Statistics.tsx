import React from "react";
import useSWR from "swr";
import axios from "axios";

import { ReactComponent as Chart } from "assets/icons/Chart.svg";
import { ReactComponent as Up } from "assets/icons/up.svg";
import { ReactComponent as Down } from "assets/icons/down.svg";
import { GetStatsResponse } from "types";

export const Statistics: React.FC = () => {
  const { data } = useSWR("/api/method/getStats", (url) =>
    axios.post<GetStatsResponse>(url).then((res) => res.data)
  );

  return (
    <div className="base-container grid grid-cols-[repeat(auto-fit,minmax(330px,1fr))] gap-7 mb-20">
      {data && (
        <>
          <div className="p-7 rounded-[20px] flex items-center justify-between shadow-[0px_15px_30px_-5px_rgba(145,_158,_171,_0.12),0px_0px_2px_0px_rgba(145,_158,_171,_0.20)]">
            <div className="text-text-primary">
              <h4 className="font-semibold text-lg mb-5">
                Всего записей в базе
              </h4>
              <p className="flex items-center gap-2 font-semibold text-lg mb-3">
                {data.block1.negative ? <Down /> : <Up />}+{data.block1.percent}
                %
              </p>
              <p className="font-bold text-[40px]">{data.block1.data}</p>
            </div>
            <Chart className="text-[#00AB55]" />
          </div>
          <div className="p-7 rounded-[20px] flex items-center justify-between shadow-[0px_15px_30px_-5px_rgba(145,_158,_171,_0.12),0px_0px_2px_0px_rgba(145,_158,_171,_0.20)]">
            <div className="text-text-primary">
              <h4 className="font-semibold text-lg mb-5">
                Сумма страховых премий
              </h4>
              <p className="flex items-center gap-2 font-semibold text-lg mb-3">
                {data.block2.negative ? <Down /> : <Up />}+{data.block2.percent}
                %
              </p>
              <p className="font-bold text-[40px]">{data.block2.data}</p>
            </div>
            <Chart className="text-[#2D99FF]" />
          </div>
          <div className="p-7 rounded-[20px] flex items-center justify-between shadow-[0px_15px_30px_-5px_rgba(145,_158,_171,_0.12),0px_0px_2px_0px_rgba(145,_158,_171,_0.20)]">
            <div className="text-text-primary">
              <h4 className="font-semibold text-lg mb-5">Полисов без скана</h4>
              <p className="flex items-center gap-2 font-semibold text-lg mb-3">
                {data.block3.negative ? <Down /> : <Up />}+{data.block3.percent}
                %
              </p>
              <p className="font-bold text-[40px]">{data.block3.data}</p>
            </div>
            <Chart className="text-[#FF6C40]" />
          </div>
          <div className="p-7 rounded-[20px] flex items-center justify-between shadow-[0px_15px_30px_-5px_rgba(145,_158,_171,_0.12),0px_0px_2px_0px_rgba(145,_158,_171,_0.20)]">
            <div className="text-text-primary">
              <h4 className="font-semibold text-lg mb-5">Полисов со сканом </h4>
              <p className="flex items-center gap-2 font-semibold text-lg mb-3">
                {data.block4.negative ? <Down /> : <Up />}+{data.block3.percent}
                %
              </p>
              <p className="font-bold text-[40px]">{data.block4.data}</p>
            </div>
            <Chart className="text-[#00AB55]" />
          </div>
          <div className="p-7 rounded-[20px] flex items-center justify-between shadow-[0px_15px_30px_-5px_rgba(145,_158,_171,_0.12),0px_0px_2px_0px_rgba(145,_158,_171,_0.20)]">
            <div className="text-text-primary">
              <h4 className="font-semibold text-lg mb-5">Записи с печатями </h4>
              <p className="flex items-center gap-2 font-semibold text-lg mb-3">
                {data.block5.negative ? <Down /> : <Up />}+{data.block5.percent}
                %
              </p>
              <p className="font-bold text-[40px]">{data.block5.data}</p>
            </div>
            <Chart className="text-[#2D99FF]" />
          </div>
          <div className="p-7 rounded-[20px] flex items-center justify-between shadow-[0px_15px_30px_-5px_rgba(145,_158,_171,_0.12),0px_0px_2px_0px_rgba(145,_158,_171,_0.20)]">
            <div className="text-text-primary">
              <h4 className="font-semibold text-lg mb-5">
                Записи без печатями{" "}
              </h4>
              <p className="flex items-center gap-2 font-semibold text-lg mb-3">
                {data.block6.negative ? <Down /> : <Up />}+{data.block6.percent}
                %
              </p>
              <p className="font-bold text-[40px]">{data.block6.data}</p>
            </div>
            <Chart className="text-[#FF6C40]" />
          </div>
        </>
      )}
    </div>
  );
};
