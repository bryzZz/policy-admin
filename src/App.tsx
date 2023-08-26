import React from "react";

import { Header } from "components/Header";
import { Statistics } from "components/Statistics";
import { Table } from "components/Table";
import { PolicyModal } from "components/PolicyModal";

export const App: React.FC = () => {
  return (
    <div className="pt-7 pb-12">
      <Header />
      <Statistics />
      <Table />

      <PolicyModal />
    </div>
  );
};
