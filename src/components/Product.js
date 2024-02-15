import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineLabelImportant } from "react-icons/md";

const Product = () => {
  return (
    <div className="w-full relative group">
      <div className="max-w-80 max-h-80 relative overflow-y-hidden ">
        <div>
          <img
            className="w-full h-full"
            src="https://orebishopping.reactbd.com/static/media/newArrFour.b8a5fda6839f2f0b1eaa.webp"
          />
        </div>
        <div className="absolute top-6 left-8">
          <div className="bg-[#262626] w-[92px] h-[35px] text-white flex justify-center items-center text-base font-semibold hover:bg-black duration-300 cursor-pointer">
            New
          </div>
        </div>
        <div className="w-full h-32 absolute bg-white -bottom-[130px] group-hover:bottom-0 duration-700">
          <ul className="w-full h-full flex flex-col items-end justify-center gap-2 font-titleFont px-2 border-l border-r">
            <li className="text-[#767676] hover:text-[#262626] text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-[#262626] flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full">
              Add to Cart
              <span>
                <FaShoppingCart />
              </span>
            </li>
            <li className="text-[#767676] hover:text-[#262626] text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-[#262626] flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full">
              View Details
              <span className="text-lg">
                <MdOutlineLabelImportant />
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-80 py-6 flex flex-col gap-1 border-[1px] border-t-0 px-4">
        <div className="flex items-center justify-between font-titleFont">
          <h2 className="text-lg text-[#262626] font-bold">PRO</h2>
          <p className="text-[#767676] text-[14px]">$20</p>
        </div>
        <div>
          <p className="text-[#767676] text-[14px]">Gray</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
