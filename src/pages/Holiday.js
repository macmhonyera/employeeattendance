import React from "react";
import Sidebar from "../layout/auth/Sidebar";
import TopNav from "../layout/auth/TopNav";

const Holiday = () => {
  return (
    <div className="flex flex-row">
      <div className="w-72">
        <Sidebar />
      </div>
      <div className="w-full flex flex-col">
        <TopNav title="Returned Stock" />
      </div>
    </div>
  );
};

export default Holiday;
