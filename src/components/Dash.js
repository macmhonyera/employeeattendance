import React from "react";
import CountUp from "react-countup";
import { GiFrozenArrow } from "react-icons/gi";
import { TbWashDryDip } from "react-icons/tb";
import Barchar from "./Barchart";
import Table from "./Table";
import { useDispatch, useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import GetProductAction from "../pages/Product/ProductAction/GetProductAction";

const Dash = (props) => {

  const date =new Date();
  const hour =date.getHours();
  let greeting;

  if(hour<12){
    greeting="Good Morning";
  }else if(hour<18){
    greeting="Good Afternoon";
  }else{
    greeting="Good Evening";
  }

  const dispatch=useDispatch();
  const products = useSelector((state) => state.products);
  console.log("he Product count is",products.products.totalItemsCount)

  React.useEffect(()=>{
    dispatch(GetProductAction());
  },[])

  const decode=jwtDecode(sessionStorage.getItem('access_token'));

  return (
    <div>
       <div className="ml-4">
        <h4 className="text-xl font-normal text-orange-600">Hello {decode.username}!! </h4>
        <h2 className="text-2xl font-medium  mt-3 "> {greeting} </h2>
      </div>
      <div className="grid grid-cols-4 gap-10 md:p-8 lg:p-7">
        <div className="grid grid-cols-2 gap-4 border border-gray-900 rounded-md p-3 max-h-64">
          <h1 className="text-xl font-bold text-gray-900">RECEIVED</h1>
          <div></div>
          <div className="grid grid-cols-1 border border-gray-900 max-h-14 rounded-lg">
            <div className="flex items-center pl-4">
              <div className="w-9 h-9 rounded-sm mb-1 bg-gradient-to-br from-[#17171b] to-[#177cc9]">
                {/* <LuVegan className="w-6 h-6 ml-1.5 mt-1.5 fill-white" /> */}
              </div>
              <div className="relative flex flex-col items-center">
                <span class="ml-3">
                  <p className="text-md text-black  font-bold "><CountUp end={
                  products && products.products
                    ? products.products.totalItemsCount
                    : ""
                }/></p>
                  <p className="text-xs text-gray-700">Fruit and Veg</p>
                </span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 border border-gray-900 h-14 rounded-lg">
            <div className="flex items-center pl-4">
              <div className="w-9 h-9 rounded-sm mb-1 bg-gradient-to-br from-[#fd8a11] to-[#f8b02f]">
                <TbWashDryDip className="w-6 h-6 ml-1.5 mt-1.5 fill-white" />
              </div>
              <div className="relative flex flex-col items-center">
                <span class="ml-3">
                  <p className="text-md text-black  font-bold ">104</p>
                  <p className="text-xs text-gray-700">Dry Stock</p>
                </span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 border border-gray-900 h-14 rounded-lg">
            <div className="flex items-center pl-4">
              <div className="w-9 h-9 rounded-sm mb-1 bg-gradient-to-br from-[#fd8a11] to-[#f8b02f]">
                <GiFrozenArrow className="w-6 h-6 ml-1.5 mt-1.5 fill-white" />
              </div>
              <div className="relative flex flex-col items-center">
                <span class="ml-3">
                  <p className="text-md text-black  font-bold ">104</p>
                  <p className="text-xs text-gray-700">Frozen Stock</p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 border border-gray-900 rounded-md p-3 max-h-64">
          <h1 className="text-xl font-bold text-gray-900">RECEIVED</h1>
          <div></div>
          <div className="grid grid-cols-1 border border-gray-900 max-h-14 rounded-lg">
            <div className="flex items-center pl-4">
              <div className="w-9 h-9 rounded-sm mb-1 bg-gradient-to-br from-[#17171b] to-[#177cc9]">
                {/* <LuVegan className="w-6 h-6 ml-1.5 mt-1.5 fill-white" /> */}
              </div>
              <div className="relative flex flex-col items-center">
                <span class="ml-3">
                  <p className="text-md text-black  font-bold ">500</p>
                  <p className="text-xs text-gray-700">Fruit and Veg</p>
                </span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 border border-gray-900 h-14 rounded-lg">
            <div className="flex items-center pl-4">
              <div className="w-9 h-9 rounded-sm mb-1 bg-gradient-to-br from-[#fd8a11] to-[#f8b02f]">
                <TbWashDryDip className="w-6 h-6 ml-1.5 mt-1.5 fill-white" />
              </div>
              <div className="relative flex flex-col items-center">
                <span class="ml-3">
                  <p className="text-md text-black  font-bold ">104</p>
                  <p className="text-xs text-gray-700">Dry Stock</p>
                </span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 border border-gray-900 h-14 rounded-lg">
            <div className="flex items-center pl-4">
              <div className="w-9 h-9 rounded-sm mb-1 bg-gradient-to-br from-[#fd8a11] to-[#f8b02f]">
                <GiFrozenArrow className="w-6 h-6 ml-1.5 mt-1.5 fill-white" />
              </div>
              <div className="relative flex flex-col items-center">
                <span class="ml-3">
                  <p className="text-md text-black  font-bold ">104</p>
                  <p className="text-xs text-gray-700">Frozen Stock</p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 border border-red-600 rounded-md p-3 max-h-64">
          <h1 className="text-xl font-bold text-red-600">EXPIRED</h1>
          <div></div>
          <div className="grid grid-cols-1 border border-red-600 max-h-14 rounded-lg">
            <div className="flex items-center pl-4">
              <div className="w-9 h-9 rounded-sm mb-1 bg-gradient-to-br from-[#2c34af] to-[#177cc9]">
                {/* <LuVegan className="w-6 h-6 ml-1.5 mt-1.5 fill-white" /> */}
              </div>
              <div className="relative flex flex-col items-center">
                <span class="ml-3">
                  <p className="text-md text-black  font-bold ">500</p>
                  <p className="text-xs text-gray-700">Fruit and Veg</p>
                </span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 border border-red-600 h-14 rounded-lg">
            <div className="flex items-center pl-4">
              <div className="w-9 h-9 rounded-sm mb-1 bg-gradient-to-br from-[#fd8a11] to-[#f8b02f]">
                <TbWashDryDip className="w-6 h-6 ml-1.5 mt-1.5 fill-white" />
              </div>
              <div className="relative flex flex-col items-center">
                <span class="ml-3">
                  <p className="text-md text-black  font-bold ">104</p>
                  <p className="text-xs text-gray-700">Dry Stock</p>
                </span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 border border-red-600 h-14 rounded-lg">
            <div className="flex items-center pl-4">
              <div className="w-9 h-9 rounded-sm mb-1 bg-gradient-to-br from-[#fd8a11] to-[#f8b02f]">
                <GiFrozenArrow className="w-6 h-6 ml-1.5 mt-1.5 fill-white" />
              </div>
              <div className="relative flex flex-col items-center">
                <span class="ml-3">
                  <p className="text-md text-black  font-bold ">104</p>
                  <p className="text-xs text-gray-700">Frozen Stock</p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 border border-gray-900 rounded-md p-3 max-h-30">
          <h1>Total Cost of Inventory</h1>
          <div className="relative flex flex-col items-center">
            <span class="ml-3">
              <p className="text-md text-black  font-bold ">$</p>
              <p className="text-xs text-gray-700">12000</p>
            </span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 border rounded-lg p-2"></div>

      <div className="grid grid-cols-3 p-8 shadow shadow-gray-600">
        <div className="grid col-span-2 shadow-md">
          <h1 className="font-bold text-4xl">2024 Most Issued stock</h1>
          <Barchar />
        </div>
        <div className="shadow-md">
          <Table />
        </div>
      </div>
      copyright 
    </div>
  );
};

export default Dash;
