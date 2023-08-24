import React from "react";

import { ReactComponent as DocumentCopy } from "assets/icons/document-copy.svg";
import { ReactComponent as DocumentDownload } from "assets/icons/document-download.svg";
import { ReactComponent as Search } from "assets/icons/search.svg";
import { ReactComponent as Yes } from "assets/icons/yes.svg";
import { ReactComponent as No } from "assets/icons/no.svg";
import { ReactComponent as Document } from "assets/icons/Document.svg";
import { twMerge } from "tailwind-merge";

const mockData = [
  {
    id: "7984",
    number: "ЕРН 8423239879",
    correct: true,
    hasScan: true,
    hasSeal: true,
    premium: "4900.40",
    discrepancies: 900,
  },
  {
    id: "7984",
    number: "ЕРН 8423239879",
    hasScan: false,
    hasSeal: false,
    premium: "4900.40",
    discrepancies: 900,
  },
  {
    id: "7984",
    number: "ЕРН 8423239879",
    correct: false,
    hasScan: true,
    hasSeal: true,
    premium: "00.00",
    discrepancies: 0,
  },
  {
    id: "7984",
    number: "ЕРН 8423239879",
    hasScan: false,
    hasSeal: false,
    premium: "4900.40",
    discrepancies: 900,
  },
  {
    id: "7984",
    number: "ЕРН 8423239879",
    correct: true,
    hasScan: true,
    hasSeal: true,
    premium: "00.00",
    discrepancies: 0,
  },
];

const RUBFormat = new Intl.NumberFormat("en-US", {
  minimumIntegerDigits: 2,
  minimumFractionDigits: 2,
});

export const Table: React.FC = () => {
  return (
    <div className="base-container">
      <div className="flex items-center gap-4 mb-8">
        <button className="flex items-center gap-2 py-3 px-[18px] bg-[#00AB55] rounded-lg shadow-[0px_8px_16px_0px_rgba(0,171,85,0.24)] text-[15px] leading-6 font-bold text-white">
          Добавить запись
          <DocumentCopy />
        </button>
        <button className="flex items-center gap-2 py-3 px-[18px] bg-[#C6C6C6] rounded-lg shadow-[0px_8px_16px_0px_rgba(183,183,183,0.32)] text-[15px] leading-6 font-bold text-white">
          Загрузить скан
          <DocumentDownload />
        </button>
        <label className="flex items-center gap-2 py-3 px-[14px] rounded-lg border border-[rgba(145,158,171,0.32)] ml-auto">
          <Search />
          <input
            className="max-w-[170px] w-full outline-none border-none text-base placeholder:text-[#919EAB]"
            placeholder="Поиск..."
          />
        </label>
      </div>

      <div className="py-3 px-[10px] rounded-[20px] shadow-[15px_30px_-5px_rgba(145,158,171,0.12),0px_0px_2.5px_0px_rgba(145,158,171,0.20)]">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-[#F4F6F8]">
              <th className="p-5 text-left text-text-secondary font-semibold text-[17px] rounded-tl-lg rounded-bl-lg">
                ID номер
              </th>
              <th className="p-5 text-left text-text-secondary font-semibold text-[17px]">
                Номер полиса
              </th>
              <th className="p-5 text-left text-text-secondary font-semibold text-[17px]">
                Скан документа
              </th>
              <th className="p-5 text-left text-text-secondary font-semibold text-[17px]">
                Печать
              </th>
              <th className="p-5 text-left text-text-secondary font-semibold text-[17px]">
                Страховая премия
              </th>
              <th className="p-5 text-left text-text-secondary font-semibold text-[17px]">
                Расхождения ₽
              </th>
              <th className="rounded-tr-lg rounded-br-lg"></th>
            </tr>
          </thead>
          <tbody>
            {mockData.map(
              ({
                id,
                number,
                correct,
                hasScan,
                hasSeal,
                premium,
                discrepancies,
              }) => (
                <tr key={id}>
                  <td className="p-5 text-text-secondary font-semibold text-[17px]">
                    #{id}
                  </td>
                  <td className="p-5 text-text-primary text-[17px] flex items-center gap-[2px]">
                    {number}
                    {correct === true && <Yes />}
                    {correct === false && <No />}
                  </td>
                  <td className="p-5">
                    {hasScan ? (
                      <p className="w-[54px] h-[27px] rounded-[7px] bg-[#54D62C] bg-opacity-[0.16] font-bold text-[15px] flex items-center justify-center text-[#229A16]">
                        Есть
                      </p>
                    ) : (
                      <p className="w-[54px] h-[27px] rounded-[7px] bg-[#FF4842] bg-opacity-[0.16] font-bold text-[15px] flex items-center justify-center text-[#B72136]">
                        Нет
                      </p>
                    )}
                  </td>
                  <td className="p-5">
                    {hasSeal ? (
                      <p className="w-[54px] h-[27px] rounded-[7px] bg-[#54D62C] bg-opacity-[0.16] font-bold text-[15px] flex items-center justify-center text-[#229A16]">
                        Есть
                      </p>
                    ) : (
                      <p className="w-[54px] h-[27px] rounded-[7px] bg-[#FF4842] bg-opacity-[0.16] font-bold text-[15px] flex items-center justify-center text-[#B72136]">
                        Нет
                      </p>
                    )}
                  </td>
                  <td className="p-5 text-text-primary text-[17px]">
                    {premium} ₽
                  </td>
                  <td
                    className={twMerge(
                      "p-5 text-text-primary text-[17px]",
                      discrepancies > 0 && "text-[#B72136]"
                    )}
                  >
                    {RUBFormat.format(discrepancies)} ₽
                  </td>
                  <td>
                    <button>
                      <Document />
                    </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
