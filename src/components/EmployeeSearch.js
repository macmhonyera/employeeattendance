import React from "react";

const EmployeeSearch = () => {
  return (
    <div className="flex w-full justify-between">
      <div className="grid grid-cols-4 gap-4 w-full p-5">
        <div>
          <input
            type="text"
            id="employee_id"
            placeholder="Employee Id"
            className="bg-gray-50 border border-gray-300 rounded-lg w-full p-2"
          />
        </div>
        <div>
          <input
            type="text"
            id="employee_name"
            placeholder="Employee Name"
            className="bg-gray-50 border border-gray-300 rounded-lg w-full p-2"
          />
        </div>
        <div>
          <select
            id="designation"
            className="bg-gray-50 border border-gray-300 rounded-lg block w-full p-3"
          >
            <option selected className="text-gray-300">Designation</option>
            <option value="">Sales</option>
            <option value="">Marketing</option>
            <option value="">Web design</option>
            <option value="">Support</option>
          </select>
        </div>
        <div>
          <button
            type="submit"
            className="bg-[#ad4577] border border-gray-300 rounded-lg w-full p-2 text-white font-bold text-xl"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeSearch;
