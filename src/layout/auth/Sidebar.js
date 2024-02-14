import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../components/Logo";
import { RxDashboard } from "react-icons/rx";
import {MdOutlinePeopleAlt, MdEventAvailable, MdOutlineHolidayVillage, MdOutlineLogout} from "react-icons/md";
import {FcLeave} from "react-icons/fc";
import {FaDailymotion} from "react-icons/fa"
import {RiBuilding4Fill} from "react-icons/ri"

const Sidebar = () => {
  return (
    <div className="sticky top-0 left-0 h-screen w-full flex flex-col bg-[#ef7035] shadow-lg">
      <div className="p-3 pl-5 bg-slate-50">
        <Logo />
      </div>
      <hr className="shadow"></hr>
      <div className="overflow-y-auto py-2 px-3 mt-2">
        <nav>
          <ul className="space-y-5 text-white ml-3">
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center p-2 text-base font-medium rounded-lg text-white bg-[#002046]"
                    : "flex items-center p-2 text-base font-medium rounded-lg"
                }
              >
                <RxDashboard className="mr-2" /> Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/inventory"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center p-2 text-base font-medium rounded-lg text-white bg-[#002046]"
                    : "flex items-center p-2 text-base font-medium rounded-lg"
                }
              >
                <MdOutlinePeopleAlt className="mr-2" /> Inventory
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/issued"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center p-2 text-base font-medium rounded-lg text-white bg-[#002046]"
                    : "flex items-center p-2 text-base font-medium rounded-lg"
                }
              >
                <RiBuilding4Fill className="mr-2" /> Issued
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/received"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center p-2 text-base font-medium rounded-lg text-white bg-[#002046]"
                    : "flex items-center p-2 text-base font-medium rounded-lg"
                }
              >
                <MdEventAvailable className="mr-2" /> Received
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/supplier"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center p-2 text-base font-medium rounded-lg text-white bg-[#002046]"
                    : "flex items-center p-2 text-base font-medium rounded-lg"
                }
              >
                <FcLeave className="mr-2" /> Suppliers
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/returns"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center p-2 text-base font-medium rounded-lg text-white bg-[#002046]"
                    : "flex items-center p-2 text-base font-medium rounded-lg"
                }
              >
                <MdOutlineHolidayVillage className="mr-2" /> Returned Stock
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/expired"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center p-2 text-base font-medium rounded-lg text-white bg-[#002046]"
                    : "flex items-center p-2 text-base font-medium rounded-lg"
                }
              >
                <FaDailymotion className="mr-2" /> Expired Stock
              </NavLink>
            </li>
            <li className="pt-5">
              <NavLink
                to="/logout"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center p-2 text-base font-medium rounded-lg text-white"
                    : "flex items-center p-2 text-base font-medium rounded-lg"
                }
              >
                <MdOutlineLogout className="mr-2" /> Logout
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
