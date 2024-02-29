import React from "react";
import { useDispatch, useSelector } from "react-redux";
import addProduct from "./ProductAction/AddProductAction";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import PageLoader from "../../components/Loader";
import getCategoryList from "../Category/CategoryAction/GetCategoryAction";
import FormikController from "../../components/Formik/FormikController";
import { useToasts } from "react-toast-notifications";
import editProductData from "./ProductAction/EditProductAction";

const ProductModal = ({ product, visible, onClose }) => {
  const { addToast } = useToasts();
  const dispatch = useDispatch();

  const { addProducts, error, isLoading } = useSelector(
    (state) => state.addProducts
  );
  const { editProducts } = useSelector((state) => state.editProduct);

  const { category } = useSelector((state) => state.categories);
  console.log("My category", category);
  const itemsCountPerPage = 5;
  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    dispatch(
      getCategoryList({
        page,
        perPage: itemsCountPerPage,
      })
    );
  }, [page]);

  let categorys =
    category && category.data
      ? category.data.map((categor) => {
          let obj = {
            key: categor.categoryname,
            value: categor.id,
          };
          return obj;
        })
      : [];

  console.log("Categories", categorys);

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

  React.useEffect(() => {}, [addProducts, editProducts]);

  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };
  const closeIt = () => {
    onClose();
  };
  if (!visible) return null;

  const handleSubmit = async (values) => {
    try {
      dispatch(addProduct(values));
      addToast("Product added successfully", { appearance: "success" });
      closeIt();
    } catch (error) {
      addToast("Failed to add product", { appearance: "error" });
    }
  };

  const updateProduct = async (values) => {
    try {
      values.productcode = product.productcode;
      dispatch(editProductData(values));
      addToast("Product updated successfully", { appearance: "success" });
      closeIt();
    } catch (error) {
      addToast("Failed to update product");
    }
  };

  return (
    <div>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={(values) =>
          product ? updateProduct(values) : handleSubmit(values)
        }
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
                <h1 className="text-center p-2 font-bold mb-6">
                  {product ? "Update Products" : "Add Products"}
                </h1>
                {error && (
                  <div className="px-2">
                    <div
                      className=" border mb-3 text-center font-medium border-red-200 text-red-700 px-4 py-3 rounded relative"
                      role="alert"
                    >
                      <span className="block sm:inline">
                        {error.response.data.message}
                      </span>
                      <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                        {/* <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg> */}
                      </span>
                    </div>
                  </div>
                )}
                <div className=" space-y-3">
                  <div>
                    <Field
                      type="text"
                      name="productcode"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 "
                      placeholder="Product Code"
                    />
                  </div>
                  <ErrorMessage
                    name="productcode"
                    component="div"
                    className="text-red-500 text-xm italic"
                  />
                  <div>
                    <Field
                      type="text"
                      name="productname"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 "
                      placeholder="Product Name"
                    />
                  </div>
                  <ErrorMessage
                    name="productname"
                    component="div"
                    className="text-red-500 text-xm italic"
                  />
                  <div>
                    <Field
                      type="text"
                      name="description"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 "
                      placeholder="Description"
                    />
                  </div>
                  <ErrorMessage
                    name="description"
                    component="div"
                    className="text-red-500 text-xm italic"
                  />
                  <div>
                    <FormikController
                      control="select"
                      type="text"
                      name="categorys"
                      label="Category"
                      options={categorys}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 "
                    />
                  </div>

                  <ErrorMessage
                    name="categorys"
                    component="div"
                    className="text-red-500 text-xm italic"
                  />
                  <div>
                    <Field
                      type="text"
                      name="quantity"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 "
                      placeholder="Quantity"
                    />
                  </div>
                  <ErrorMessage
                    name="quantity"
                    component="div"
                    className="text-red-500 text-xm italic"
                  />
                  <div>
                    <Field
                      type="text"
                      name="cost"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 "
                      placeholder="Cost"
                    />
                  </div>
                  <ErrorMessage
                    name="cost"
                    component="div"
                    className="text-red-500 text-xm italic"
                  />
                  {/* <div>
                    <Field
                      type="text"
                      name="supplier"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 "
                      placeholder="Supplier"
                    />
                  </div>
                  <ErrorMessage
                    name="supplier"
                    component="div"
                    className="text-red-500 text-xm italic"
                  /> */}
                  <div>
                    <Field
                      type="text"
                      name="expiryDate"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 "
                      placeholder="Expiry Date"
                    />
                  </div>
                  <ErrorMessage
                    name="expiryDate"
                    component="div"
                    className="text-red-500 text-xm italic"
                  />
                  <div className="pl-40">
                    {isLoading ? (
                      <PageLoader />
                    ) : (
                      <div>
                        <button
                          type="submit"
                          className="w-[100%] justify-end text-white bg-[#17486f] hover:bg-[#0a215f] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center"
                        >
                          {product ? "Edit" : "Save"}
                        </button>
                      </div>
                    )}
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

export default ProductModal;
