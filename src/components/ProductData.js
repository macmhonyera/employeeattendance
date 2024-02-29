import React, { useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import { useDispatch, useSelector } from "react-redux";
import GetProductAction from "../pages/Product/ProductAction/GetProductAction";
import PageLoader from "./Loader";
import ViewSingleProduct from "../pages/Product/ViewSingleProduct";
import ViewProduct from "../pages/Product/ViewProduct";
import ProductModal from "../pages/Product/AddProduct";
import EditProduct from "../pages/Product/ProductSlice/EditProduct";

const ProductData = (product, props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [myModal, setMyModal] = React.useState(false);
  const handleOnClose = () => setMyModal(false);


  const dispatch = useDispatch();
  const { products, isLoading } = useSelector((state) => state.products);
  

  const [page, setPage] = useState(1);
  const perPage = 10;

  const handlePageChange = (pagenumber) => {
    setPage(pagenumber);
  };

  useEffect(() => {
    dispatch(GetProductAction({ page, perPage }));
  }, [page, perPage]);

  let content = isLoading ? (
    <PageLoader />
  ) : (
    products &&
    products.data && (
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
              Description
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
            <th
              scope="col"
              class="py-3 px-9 items-center text-center text-orange-500"
            >
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {products && products?.data && products.data.length > 0 ? (
            products?.data.map((product, index) => (
              <tr
                key={product.id}
                className="bg-white border-b items-center dark:border-gray-700 hover:bg-primary"
              >
                <td className="py-3 px-9">{index + 1}</td>
                <td className="py-3 px-9">{product.productcode}</td>
                <td className="py-3 px-9">{product.productname}</td>
                <td className="py-3 px-9">{product.description}</td>
                <td className="py-3 px-9">{parseFloat(product.quantity)}</td>
                <td className="py-3 px-9">{product.category.categoryname}</td>
                <td className="py-3 px-9">
                  {typeof product.createdAt === "string"
                    ? new Date(product.createdAt).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                      })
                    : product.createdAt.toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                      })}
                </td>
                <td className="py-3 px-9">{product.status}</td>
                <td className="py-3 px-9">
                  {!isNaN(parseFloat(product.cost.replace(/[^0-9.-]/g, "")))
                    ? parseFloat(product.cost.replace(/[^0-9.-]/g, ""))
                    : "Invalid value"}
                </td>
                <td className="py-3 px-9">
                  {!isNaN(product.quantity) &&
                  !isNaN(parseFloat(product.cost.replace(/[^0-9.-]/g, "")))
                    ? parseFloat(product.quantity) *
                      parseFloat(product.cost.replace(/[^0-9.-]/g, ""))
                    : "Invalid values"}
                </td>
                <td className="flex items-center justify-between gap-3 py-3 px-6">
                  <ViewSingleProduct
                    product={product}
                    onViewClick={(product) => {
                      setSelectedProduct(product);
                      setIsModalOpen(true);
                    }}
                  />
                  {/* <button
                    // onClick={() => handleEdit(products.id)}
                    className="flex items-center space-x-4 w-full h-8 bg-gray-200 text-gray-800 border  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    Edit
                  </button> */}
                  <EditProduct
                    product={product}
                    onViewClick={(product) => {
                      setSelectedProduct(product);
                      setIsModalOpen(true);
                    }}
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td
                colSpan="9"
                className="text-center px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap border rounded bg-red-100"
              >
                No Data Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    )
  );
  return (
    <div className="w-auto relative shadow-md sm:rounded-lg h-auto ml-7">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        {content}
        <ViewProduct
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          product={selectedProduct}
        />
      </div>
      <div>
        {products &&
          products.data &&
          products.data.length > 0 &&
          !isLoading && (
            <div className="flex justify-end">
              <Pagination
                activePage={page}
                itemsCountPerPage={perPage}
                totalItemsCount={products.totalItemsCount}
                pageRangeDisplayed={10}
                onChange={handlePageChange}
                itemClass="px-2 py-1 rounded-sm border border-gray-300 mr-2 block inline pt-1 bg-gray-50"
                linkClass="text-gray-500 hover:text-gray-700"
              />
            </div>
          )}
      </div>
    </div>
  );
};

export default ProductData;
