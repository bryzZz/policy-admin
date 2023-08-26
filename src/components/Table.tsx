import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import useSWR from "swr";
import axios from "axios";

import { RecordModal } from "./RecordModal";
import { ScanModal } from "./ScanModal";

import { ReactComponent as DocumentCopy } from "assets/icons/document-copy.svg";
import { ReactComponent as DocumentDownload } from "assets/icons/document-download.svg";
import { ReactComponent as Search } from "assets/icons/search.svg";
import { ReactComponent as Yes } from "assets/icons/yes.svg";
import { ReactComponent as No } from "assets/icons/no.svg";
import { ReactComponent as Document } from "assets/icons/Document.svg";
import { GetPolicyResponse } from "types";
import { usePolicyModal } from "store/useModals";

// const RUBFormat = new Intl.NumberFormat("en-US", {
//   minimumIntegerDigits: 2,
//   minimumFractionDigits: 2,
// });

export const Table: React.FC = () => {
  const { data } = useSWR("/api/method/getAllRows", (url) =>
    axios.post<GetPolicyResponse>(url).then((res) => res.data)
  );

  const [isRecordModalOpen, setIsRecordModalOpen] = useState(false);
  const [isScanModalOpen, setIsScanModalOpen] = useState(false);
  const setPolicyModalIsOpen = usePolicyModal((state) => state.setIsOpen);

  return (
    <div className="base-container">
      <div className="flex flex-wrap gap-4 mb-8">
        <div className="flex flex-wrap gap-4 mr-auto">
          <button
            className="flex items-center gap-2 py-3 px-[18px] bg-[#00AB55] rounded-lg shadow-[0px_8px_16px_0px_rgba(0,171,85,0.24)] text-[15px] leading-6 font-bold text-white"
            onClick={() => setIsRecordModalOpen(true)}
          >
            Добавить запись
            <DocumentCopy className="shrink-0" />
          </button>
          <button
            className="flex items-center gap-2 py-3 px-[18px] bg-[#C6C6C6] rounded-lg shadow-[0px_8px_16px_0px_rgba(183,183,183,0.32)] text-[15px] leading-6 font-bold text-white"
            onClick={() => setIsScanModalOpen(true)}
          >
            Загрузить скан
            <DocumentDownload className="shrink-0" />
          </button>
          <button
            className="flex md:hidden items-center gap-2 py-3 px-[18px] bg-black rounded-lg shadow-[0px_8px_16px_0px_rgba(0,0,0,0.24)] text-[15px] leading-6 font-bold text-white"
            onClick={() => setPolicyModalIsOpen(true)}
          >
            Создать полис <DocumentCopy className="shrink-0" />
          </button>
        </div>

        <label className="flex items-center gap-2 py-3 px-[14px] rounded-lg border border-[rgba(145,158,171,0.32)]">
          <Search />
          <input
            className="max-w-[170px] w-full outline-none border-none text-base placeholder:text-[#919EAB]"
            placeholder="Поиск..."
          />
        </label>
      </div>

      <div className="py-3 px-[10px] overflow-y-auto rounded-[20px] shadow-[15px_30px_-5px_rgba(145,158,171,0.12),0px_0px_2.5px_0px_rgba(145,158,171,0.20)]">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-[#F4F6F8]">
              <th className="md:p-5 p-2 text-left text-text-secondary font-semibold text-sm md:text-[17px] rounded-tl-lg rounded-bl-lg">
                ID номер
              </th>
              <th className="md:p-5 p-2 text-left text-text-secondary font-semibold text-sm md:text-[17px]">
                Номер полиса
              </th>
              <th className="md:p-5 p-2 text-left text-text-secondary font-semibold text-sm md:text-[17px]">
                Скан документа
              </th>
              <th className="md:p-5 p-2 text-left text-text-secondary font-semibold text-sm md:text-[17px]">
                Печать
              </th>
              <th className="md:p-5 p-2 text-left text-text-secondary font-semibold text-sm md:text-[17px]">
                Страховая премия
              </th>
              <th className="md:p-5 p-2 text-left text-text-secondary font-semibold text-sm md:text-[17px]">
                Расхождения ₽
              </th>
              <th className="rounded-tr-lg rounded-br-lg"></th>
            </tr>
          </thead>
          <tbody>
            {data &&
              Object.entries(data).map(
                ([
                  id,
                  { linkedTo, data, scan, print, price, minus, url_scan },
                ]) => (
                  <tr key={id}>
                    <td className="md:p-5 p-2 text-text-secondary font-semibold text-sm md:text-[17px]">
                      #{id}
                    </td>
                    <td className="md:p-5 p-2">
                      <div className="text-text-primary text-sm md:text-[17px] flex items-center gap-[2px]">
                        {linkedTo}
                        {data === "success" && <Yes />}
                        {data === "error" && <No />}
                      </div>
                    </td>
                    <td className="md:p-5 p-2">
                      {scan ? (
                        <p className="w-[54px] h-[27px] rounded-[7px] bg-[#54D62C] bg-opacity-[0.16] font-bold text-sm md:text-[15px] flex items-center justify-center text-[#229A16]">
                          Есть
                        </p>
                      ) : (
                        <p className="w-[54px] h-[27px] rounded-[7px] bg-[#FF4842] bg-opacity-[0.16] font-bold text-sm md:text-[15px] flex items-center justify-center text-[#B72136]">
                          Нет
                        </p>
                      )}
                    </td>
                    <td className="md:p-5 p-2">
                      {print ? (
                        <p className="w-[54px] h-[27px] rounded-[7px] bg-[#54D62C] bg-opacity-[0.16] font-bold text-[15px] flex items-center justify-center text-[#229A16]">
                          Есть
                        </p>
                      ) : (
                        <p className="w-[54px] h-[27px] rounded-[7px] bg-[#FF4842] bg-opacity-[0.16] font-bold text-[15px] flex items-center justify-center text-[#B72136]">
                          Нет
                        </p>
                      )}
                    </td>
                    <td className="md:p-5 p-2 text-text-primary text-sm md:text-[17px]">
                      {price} ₽
                    </td>
                    <td
                      className={twMerge(
                        "md:p-5 p-2 text-text-primary text-sm md:text-[17px]",
                        Number(minus) > 0 && "text-[#B72136]"
                      )}
                    >
                      {minus} ₽
                    </td>
                    <td>
                      <button
                        className="cursor-pointer"
                        onClick={() => window.open(url_scan, "_new")}
                      >
                        <Document />
                      </button>
                    </td>
                  </tr>
                )
              )}
          </tbody>
        </table>
      </div>

      <RecordModal
        isOpen={isRecordModalOpen}
        setIsOpen={setIsRecordModalOpen}
      />
      <ScanModal isOpen={isScanModalOpen} setIsOpen={setIsScanModalOpen} />
    </div>
  );
};
