import React from "react";
import Sidebar from "../layout/auth/Sidebar";
import TopNav from "../layout/auth/TopNav";
import EmployeeSearch from "../components/EmployeeSearch";
import SuppliersModal from "./Suppliers/SuppliersModal";
import SuppliersTable from "../components/SuppliersTable";

const Leave = () => {
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
            Add Supplier
          </button>
          <SuppliersModal onClose={handleOnClose} visible={myModal} />
        </div>

        <SuppliersTable />
      </div>
    </div>
  );
};

export default Leave;
