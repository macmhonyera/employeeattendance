import React from "react";

const ProductModal = ({ visible, onClose }) => {
  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };
  const closeIt = () => {
    onClose();
  };
  if (!visible) return null;

  return (
    <div className="">
      <div
        id="container"
        onClick={handleOnClose}
        className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center z-50"
      >
        <div className="bg-white w-[30%] rounded min-h-auto overflow-y-auto">
          <form className="pr-4 pl-4 pt-1 pb-2">
            <div className="relative overflow-y-auto">
              <div className="absolute top-0 right-0">
                <button
                  onClick={closeIt}
                  className="absolute text-red-700 -inset-0"
                >
                  X
                </button>
              </div>
            </div>
            <h1 className="text-center p-2 font-bold mb-6">Add Products</h1>
            <div className=" space-y-3">
              <input
                type="text"
                name="product code"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 "
                placeholder="Product Code"
              />
              <input
                type="text"
                name="product name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 "
                placeholder="Product Name"
              />
              <input
                type="text"
                name="product category"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 "
                placeholder="Category"
              />
              <input
                type="text"
                name="quantity"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 "
                placeholder="Quantity"
              />
              <input
                type="text"
                name="quantity"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 "
                placeholder="Cost"
              />
              <input
                type="text"
                name="quantity"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 "
                placeholder="Supplier"
              />
              <input
                type="text"
                name="quantity"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 "
                placeholder="Expiry Date"
              />
              <div>
                <button
                  type="submit"
                  className="w-[100%] flex justify-end mt-10 text-white bg-[#15244d] hover:bg-[#0a215f] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
