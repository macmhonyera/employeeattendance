import React from "react";
import Sidebar from "../../layout/auth/Sidebar";
import TopNav from "../../layout/auth/TopNav";
import ProductSearch from "../../components/ProductSearch";
import ProductModal from "./AddProduct";
import ProductData from "../../components/ProductData"

const Product = (props) => {
  const [myModal, setMyModal] = React.useState(false);
  const handleOnClose = () => setMyModal(false);

  return (
    <div className="flex flex-row">
      <div className="w-72">
        <Sidebar />
      </div>
      <div className="w-full flex flex-col">
        <TopNav title="Inventory" />

        <ProductSearch />
        <div className="flex mr-6 justify-end">
        
          <button
            onClick={() => setMyModal(true)}
            type="button"
            className={
              props.product
                ? "rounded  border-fuchsia-800 shadow text-white bg-[#17486f] font-bold p-2"
                : "rounded  border-fuchsia-800 shadow text-white bg-[#17486f] font-bold p-2"
            }
          >
            {props.product ? "Edit" : "+ Add Product"}
          </button>
          <ProductModal
            product={props.product}
            onClose={handleOnClose}
            visible={myModal}
          />
        </div>

        <ProductData />
      </div>
    </div>
  );
};

export default Product;
