import React from "react";
import Sidebar from "../layout/auth/Sidebar";
import TopNav from "../layout/auth/TopNav";
import EmployeeSearch from "../components/EmployeeSearch";
import ExpiredProducts from "../components/ExpiredProducts";

const Daily = () => {
  return (
    <div className="flex flex-row">
      <div className="w-72">
        <Sidebar />
      </div>
      <div className="w-full flex flex-col">
        <TopNav title="Issued Stock" />

        <EmployeeSearch />
        
        <ExpiredProducts />
      </div>
    </div>
  );
};

export default Daily;
