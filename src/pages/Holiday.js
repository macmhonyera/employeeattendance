import React from "react";
import Sidebar from "../layout/auth/Sidebar";
import TopNav from "../layout/auth/TopNav";
import EmployeeSearch from "../components/EmployeeSearch";
import ReturnedStockModal from "./ReturnedStock.js/ReturnedStockModal";
import ReturnedGoodsTable from "../components/ReturnedGoodsTable";

const Holiday = () => {
  const [myModal, setMyModal] = React.useState(false);
  const handleOnClose = () => setMyModal(false);

  return (
    <div className="flex flex-row">
      <div className="w-72">
        <Sidebar />
      </div>
      <div className="w-full flex flex-col">
        <TopNav title="Issued Stock" />

        <EmployeeSearch />
        <div className="flex mr-6 justify-end">
          <button
            className="rounded  border-fuchsia-800 shadow text-white bg-[#17486f] font-bold p-2"
            onClick={() => setMyModal(true)}
          >
            Returned Goods
          </button>
          <ReturnedStockModal onClose={handleOnClose} visible={myModal} />
        </div>

        <ReturnedGoodsTable />
      </div>
    </div>
  );
};

export default Holiday;
