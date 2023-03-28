import React from "react";
import { HiOutlineUserGroup } from "react-icons/hi";
import { MdAlarmOff } from "react-icons/md";
import { BsPersonCheck, BsPersonFillExclamation } from "react-icons/bs";
import Barchar from "./Barchart";
import QuickNotes from "./QuickNotes";

const Dash = () => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-10 p-8">
        <div className="bg-slate-50 h-40 flex items-center rounded-lg shadow-md shadow-gray-600">
          <div className="flex items-center justify-between space-x-8">
            <div className="relative flex flex-col items-center">
              <span class="ml-10">
                <p className="text-3xl text-black  font-bold ">10</p>
                <p className="text-xl text-gray-700">Total employees</p>
              </span>
            </div>
            <div className="w-14 h-14 rounded-sm mb-1 bg-gradient-to-br from-[#a98cb5] to-[#9094ce]">
              <HiOutlineUserGroup className="w-10 h-10 ml-1.5 mt-1.5 fill-white" />
            </div>
          </div>
        </div>
        <div className="bg-slate-50 h-40 flex items-center rounded-lg shadow-md shadow-gray-600">
          <div className="flex items-center justify-between space-x-8">
            <div className="relative flex flex-col items-center">
              <span class="ml-10">
                <p className="text-3xl text-black  font-bold ">6</p>
                <p className="text-xl text-gray-700">Present employees</p>
              </span>
            </div>
            <div className="w-14 h-14 rounded-sm mb-1 bg-gradient-to-br from-[#8a2caf] to-[#080d5d]">
              <BsPersonCheck className="w-10 h-10 ml-1.5 mt-1.5 fill-white" />
            </div>
          </div>
        </div>
        <div className="bg-slate-50 h-40 flex items-center rounded-lg shadow-md shadow-gray-600">
          <div className="flex items-center justify-between space-x-8">
            <div className="relative flex flex-col items-center">
              <span class="ml-10">
                <p className="text-3xl text-black  font-bold ">4</p>
                <p className="text-xl text-gray-700">Absent employees</p>
              </span>
            </div>
            <div className="w-14 h-14 rounded-sm mb-1 bg-gradient-to-br from-[#8a2caf] to-[#080d5d]">
              <MdAlarmOff className="w-10 h-10 ml-1.5 mt-1.5 fill-white" />
            </div>
          </div>
        </div>
        <div className="bg-slate-50 h-40 flex items-center rounded-lg shadow-md shadow-gray-600">
          <div className="flex items-center justify-between space-x-8">
            <div className="relative flex flex-col items-center">
              <span class="ml-10">
                <p className="text-3xl text-black  font-bold ">2</p>
                <p className="text-xl text-gray-700">On Leave Today</p>
              </span>
            </div>
            <div className="w-14 h-14 rounded-sm mb-1 bg-gradient-to-br from-[#8a2caf] to-[#080d5d]">
              <BsPersonFillExclamation className="w-10 h-10 ml-1.5 mt-1.5 fill-white" />
            </div>
          </div>
        </div>
      </div>
      <div className="h-10 bg-slate-500">

      </div>
      <div className="grid grid-cols-3 p-8 shadow shadow-gray-600">
        <div className="grid col-span-2 shadow-md">
          <h1 className="font-bold text-4xl">2023 Employee Attendance</h1>
          <Barchar />
        </div>
        <div className="shadow-md">
          <QuickNotes />
        </div>
      </div>
      <div className="bg-green-200">

      </div>
    </div>
  );
};

export default Dash;
