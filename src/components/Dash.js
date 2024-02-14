import React from "react";
import { HiOutlineUserGroup } from "react-icons/hi";
import { MdAlarmOff } from "react-icons/md";
import { GiFrozenArrow } from "react-icons/gi";
import { TbWashDryDip } from "react-icons/tb";
import { BsPersonCheck, BsPersonFillExclamation } from "react-icons/bs";
import Barchar from "./Barchart";
import QuickNotes from "./QuickNotes";
import { useState } from "react";
import Table from "./Table";

const api = {
  key: "198238c506315ad6423d6a01f08cc1f6",
  base: "https://api.openweathermap.org/data/2.5/",
};

const Dash = () => {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  /*
    Search button is pressed. Make a fetch call to the Open Weather Map API.
  */
  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };

  return (
    <div>
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
