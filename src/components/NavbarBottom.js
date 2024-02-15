import React from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

const NavbarBottom = () => {
  return (
    <div className="w-full bg-[#F5F5F3] relative">
      <div className="max-w-container mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full px-4 pb-4 lg:pb-0 h-full lg:h-24">
          <div className="relative w-full lg:w-[600px] h-[50px] text-base text-primeColor bg-white flex items-center gap-2 justify-between px-6 rounded-xl">
            <input
              className="flex-1 h-full outline-none placeholder:text-[#C4C4C4] placeholder:text-[14px]"
              type="text"
              placeholder="Search your products here"
            />
            <FaSearch className="w-5 h-5" />
            {/* <div
              className={`w-full mx-auto h-96 bg-white top-16 absolute left-0 z-50 overflow-y-scroll shadow-2xl scrollbar-hide cursor-pointer`}
            >
              <div className="max-w-[600px] h-28 bg-gray-100 mb-3 flex items-center gap-3">
                <img className="w-24" src="" alt="productImg" />
                <div className="flex flex-col gap-1">
                  <p className="font-semibold text-lg">productName</p>
                  <p className="text-xs">desc</p>
                  <p className="text-sm">
                    Price:
                    <span className="text-primeColor font-semibold">$10</span>
                  </p>
                </div>
              </div>
            </div> */}
          </div>
          <div className="flex gap-4 mt-2 lg:mt-0 items-center pr-6 cursor-pointer relative">
            <div className="relative">
              <FaShoppingCart />
              <span className="absolute font-titleFont top-3 -right-2 text-xs w-4 h-4 flex items-center justify-center rounded-full bg-primeColor text-white">
                0
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarBottom;
