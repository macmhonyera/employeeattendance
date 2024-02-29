import React from "react";
import { useDispatch } from "react-redux";

const ViewProduct = (props) => {
  const dispatch = useDispatch();

  const { product, isOpen, onClose } = props;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 h-full overflow-y-auto bg-blue-50 bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="flex items-end justify-center max-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all w-full max-w-3xl p-4">
          <div className="bg-[#4865b4] text-white px-4 py-2 mb-4 rounded-md">
            <h3 className="text-lg font-bold">Product Details</h3>
          </div>

          <div className="mb-2">
            <span className="font-semibold">Product Code:</span>{" "}
            <span className="text-blue-900">{product?.productcode}</span>
          </div>

          <div className="mb-2">
            <span className="font-semibold">Product Name:</span>{" "}
            <span className="text-blue-900">{product?.productname}</span>
          </div>

          <div className="mb-2">
            <span className="font-semibold">Description:</span>{" "}
            <span className="text-blue-900">{product?.description}</span>
          </div>

          <div className="mb-2">
            <span className="font-semibold">Cost:</span>{" "}
            <span className="text-blue-900">{product?.cost}</span>
          </div>

          <div className="mb-2">
            <span className="font-semibold">Quantity:</span>{" "}
            <span className="text-blue-900">{product?.quantity}</span>
          </div>

          <div className="mb-2">
            <span className="font-semibold">Status:</span>{" "}
            <span className="text-blue-900">{product?.status}</span>
          </div>

          <div className="mt-4 flex justify-end">
            <button
              onClick={onClose}
              type="button"
              className="px-4 py-2 uppercase text-sm font-bold bg-gray-200 text-[#4865b4] hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
