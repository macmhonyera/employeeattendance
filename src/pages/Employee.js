import React from "react";
import Sidebar from "../layout/auth/Sidebar";
import TopNav from "../layout/auth/TopNav";
import EmployeeData from "../components/EmployeeData";
import EmployeeSearch from "../components/EmployeeSearch";

const Employee = () => {
  return (
    <div className="flex flex-row">
      <div className="w-72">
        <Sidebar />
      </div>
      <div className="w-full flex flex-col">
        <TopNav title="Employees" />

        <EmployeeSearch />

        <EmployeeData />
      </div>
    </div>
  );
};

export default Employee;
