import React from "react";

const Table = () => {
  return (
    <>
      <h2 className="text-2xl font-bold text-center mb-2">Products About to Expire</h2>
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-[#4865b4] uppercase bg-gray-200 dark:bg-[#17486f] dark:text-gray-100">
          <tr>
            <th scope="col" class="py-3 px-9">
              Product name
            </th>
            <th scope="col" class="py-3 px-9">
              Quantity
            </th>
            <th scope="col" class="py-3 px-9">
              Status
            </th>
          </tr>
        </thead>

        <tbody>
          <tr className="bg-white border-b dark:bg-[#10324f] dark:border-gray-700 hover:bg-primary dark:hover:bg-gray-600">
            <th
              scope="row"
              className="px-8 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
            >
              Mariana Rice 2kg
            </th>
            <td className="px-6 py-4">12</td>
            <td className="px-6 py-4">Good</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Table;
