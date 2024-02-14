import React from "react";
import Sidebar from "../layout/auth/Sidebar";
import TopNav from "../layout/auth/TopNav";
import IssueStock from "./Issued/IssueStock";
import EmployeeSearch from "../components/EmployeeSearch";
import IssuedStock from "../components/IssuedStock";

const Departments = () => {
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
            Issue Stock
          </button>
          <IssueStock onClose={handleOnClose} visible={myModal} />
        </div>

        <IssuedStock />
      </div>
    </div>
  );
};

export default Departments;
