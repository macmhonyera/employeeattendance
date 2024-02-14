import React from "react";

const SuppliersTable = () => {
  return (
    <>
      <table class="w-full text-sm text-left text-gray-900 mt-4">
        <thead class="text-xs text-[#4865b4] uppercase bg-gray-200 ">
          <tr>
            <th scope="col" class="py-3 px-9">
              #
            </th>
            <th scope="col" class="py-3 px-9">
              Supplier Name
            </th>
            <th scope="col" class="py-3 px-9">
              Phone Number
            </th>
            <th scope="col" class="py-3 px-9">
              Address
            </th>
          </tr>
        </thead>

        <tbody>
          <tr className="bg-white border-b items-center dark:border-gray-700 hover:bg-primary dark:hover:bg-gray-600">
            <td className="py-3 px-9">1</td>
            <td className="py-3 px-9">Gain Wholesalers</td>
            <td className="py-3 px-9">0776438323</td>
            <td className="py-3 px-9">10 Conald Rd, Graniteside</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default SuppliersTable;
