import React from 'react'

const ReceivedStockTable = () => {
    return (
        <>
          <table class="w-full text-sm text-left text-gray-900 mt-4">
            <thead class="text-xs text-[#4865b4] uppercase bg-gray-200 ">
              <tr>
                <th scope="col" class="py-3 px-9">
                  #
                </th>
                <th scope="col" class="py-3 px-9">
                  Product Code
                </th>
                <th scope="col" class="py-3 px-9">
                  Product Name
                </th>
                <th scope="col" class="py-3 px-9">
                  Quantity
                </th>
                <th scope="col" class="py-3 px-9">
                  Category
                </th>
                <th scope="col" class="py-3 px-9">
                  Received Date
                </th>
                <th scope="col" class="py-3 px-9">
                  Status
                </th>
                <th scope="col" class="py-3 px-9">
                  Cost Price
                </th>
                <th scope="col" class="py-3 px-9">
                  Total Price
                </th>
              </tr>
            </thead>
    
            <tbody>
              <tr className="bg-white border-b items-center dark:border-gray-700 hover:bg-primary dark:hover:bg-gray-600">
                <td className="py-3 px-9">1</td>
                <td className="py-3 px-9">A0001</td>
                <td className="py-3 px-9">Mariana Rice 2kg</td>
                <td className="py-3 px-9">50</td>
                <td className="py-3 px-9">Dry Stock</td>
                <td className="py-3 px-9">10/02/2024</td>
                <td className="py-3 px-9">In Stock</td>
                <td className="py-3 px-9">19.50</td>
                <td className="py-3 px-9">450</td>
              </tr>
            </tbody>
          </table>
        </>
      );
}

export default ReceivedStockTable