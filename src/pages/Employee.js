import React from "react";
import Sidebar from "../layout/auth/Sidebar";
import TopNav from "../layout/auth/TopNav";
import EmployeeData from "../components/EmployeeData";
import EmployeeSearch from "../components/EmployeeSearch";
import AddEmployee from "./Employee/AddEmployee";

const Employee = (props) => {
  const [showForm, setShowForm] = React.useState(false);
  const [myModal, setMyModal] = React.useState(false);
  const handleOnClose = () => setMyModal(false);

  const handleAddEmployeeClick = () => {
    setShowForm(!showForm);
  };

  const handleAddEmployee = (newEmployee) => {
    console.log("New employee added:", newEmployee);
    setShowForm(false);
  };

  return (
    <div className="flex flex-row">
      <div className="w-72">
        <Sidebar />
      </div>
      <div className="w-full flex flex-col">
        <TopNav title="Inventory" />

        <EmployeeSearch />
        <div className="flex mr-6 justify-end">
          <button
            className="rounded  border-fuchsia-800 shadow text-white bg-[#17486f] font-bold p-2"
            onClick={() => setMyModal(true)}
          >
            Add Product +
          </button>
          <AddEmployee
            onClose={handleOnClose}
            visible={myModal}
          />
        </div>

        <EmployeeData />
      </div>
    </div>
  );
};

export default Employee;
