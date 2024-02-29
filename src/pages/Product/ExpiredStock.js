import React from "react";
import Sidebar from "../../layout/auth/Sidebar";
import TopNav from "../../layout/auth/TopNav";
import ExpiredProducts from "../../components/ExpiredProducts";
import ProductSearch from "../../components/ProductSearch";

const ExpiredStock = () => {
  return (
    <div className="flex flex-row">
      <div className="w-72">
        <Sidebar />
      </div>
      <div className="w-full flex flex-col">
        <TopNav title="Issued Stock" />

        <ProductSearch />
        
        <ExpiredProducts />
      </div>
    </div>
  );
};

export default ExpiredStock;
