import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { Formik } from "formik";
import { Form } from "react-router-dom";
import issueStockAction from "./IssueStockAction/IssueStockAction";

const IssueStock = ({ product, visible, onClose }) => {
  const dispatch = useDispatch();


  const { issueStock, error, isLoading } = useSelector(
    (state) => state.issueStocks
  );

  const validationSchema = Yup.object().shape({
    productcode: Yup.string().required("Product code is a required field"),
    productname: Yup.string().required("Product name is a required field"),

    quantity: Yup.number().required("Quantity is a required field"),
    description: Yup.string().required(
      "Product description is a required field"
    ),
    cost: Yup.string().required("Cost price is a required field"),
    // supplier: Yup.string().required("Supplier is a required field"),
    expiryDate: Yup.date().required("Expiry date is a required field"),
  });
  const initialValues = {
    productcode: product ? product.productcode : "",
    productname: product ? product.productname : "",
    categorys: product ? product.categorys : "",
    quantity: product ? product.quantity : "",
    description: product ? product.description : "",
    cost: product ? product.cost : "",
    // supplier: product ? product.supplier : "",
    expiryDate: product ? product.expiryDate : "",
  };

  React.useEffect(() => {}, [issueStock]);

  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };
  const closeIt = () => {
    onClose();
  };
  if (!visible) return null;

  const handleSubmit = async (values) => {
    try {
      dispatch(issueStockAction(values));
     
      if (!error) {
        closeIt();
      } else {
        console.error("Failed to issue product");
      }
    } catch (error) {
      console.error("Failed to issue product", error);
    }
  };

  return (
    <div className="">
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={(values) => handleSubmit(values)}
      >
        {() => (
          <div
            id="container"
            onClick={handleOnClose}
            className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center z-50"
          >
            <div className="bg-white w-[30%] rounded min-h-auto overflow-y-auto">
              <Form className="pr-4 pl-4 pt-1 pb-2">
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
                <h1 className="text-center p-2 font-bold mb-6">Issued</h1>
                <div className=" space-y-3">
                  <input
                    type="text"
                    name="productcode"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 "
                    placeholder="Product Code"
                  />
                  <input
                    type="text"
                    name="productname"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 "
                    placeholder="Product Name"
                  />
                  <div>
                    <select
                      id="designation"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 "
                    >
                      <option selected className="text-gray-300">
                        Category
                      </option>
                      <option value="">Fruit and Veg</option>
                      <option value="">Dry Stock</option>
                      <option value="">Frozen Stock</option>
                    </select>
                  </div>
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
                    placeholder="Issued To"
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
                      Issue
                    </button>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
};
export default IssueStock;
