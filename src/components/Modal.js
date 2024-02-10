import React from "react";
import { MdCancel } from "react-icons/md";
import {BsThreeDots} from 'react-icons/bs'

function MyModal({ visible, onClose }) {
  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };
  const closeIt = () => {
    onClose();
  };
  if (!visible) return null;

  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 top-16  flex justify-end z-50" style={{ transform: "translateX(-260px)" }}
    >
      <div className="bg-gray-200 w-[15%] rounded">
        <div className="pr-4 pl-4 pt-1 pb-2">
          <div class="relative">
          </div>
          <div className="flex items-center justify-between shadow-lg p-2 mt-1 bg-gray-300 rounded-sm">
          <h2 className="text-start text-md font-bold">Notifications</h2>
          <BsThreeDots/>
          </div>

          <div className="flex items-center justify-between mt-2">
          <h2 className="text-start text-md font-bold">New</h2>
          <button className="text-blue-700">See all</button>
          </div>
        
          <div className="flex flex-col items-center space-y-4">
            
            <div className="w-[100%]">Macmillan</div>

            <div className="mt-4">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyModal;
