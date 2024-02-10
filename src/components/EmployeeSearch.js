import React from "react";

const EmployeeSearch = () => {
  return (
    <div className="flex w-full justify-between">
      <div className="grid grid-cols-4 gap-4 w-full p-5">
        <div>
          <input
            type="text"
            id="product_code"
            placeholder="Product Code"
            className="bg-gray-50 border border-gray-300 rounded-lg w-full p-2"
          />
        </div>
        <div>
          <input
            type="text"
            id="procuct_name"
            placeholder="Product Name"
            className="bg-gray-50 border border-gray-300 rounded-lg w-full p-2"
          />
        </div>
        <div>
          <select
            id="designation"
            className="bg-gray-50 border border-gray-300 rounded-lg block w-full p-3"
          >
            <option selected className="text-gray-300">
              Category
            </option>
            <option value="">Fruit and Veg</option>
            <option value="">Dry Stock</option>
            <option value="">Frozen Stock</option>
          </select>
        </div>
        <div>
          <button
            type="submit"
            className="bg-[#17486f] border border-gray-300 rounded-lg w-full p-2 text-white font-bold text-xl"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeSearch;
