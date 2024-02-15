import React from "react";
import { BiCaretDown } from "react-icons/bi";
import { brands, colors, items, priceList } from "../utils/constants";
import { ImPlus } from "react-icons/im";

const ShopSiderbar = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      <div className="w-full">
        <div className="flex items-center justify-between pb-5">
          <h3 className="font-bold lg:text-xl text-primeColor">New</h3>
          <BiCaretDown />
        </div>
        <div>
          <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
            {items.map((x, i) => (
              <li
                key={x?.id}
                className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center justify-between"
              >
                {x?.title}
                {x?.icons && (
                  <span className="text-[10px] lg:text-xs cursor-pointer text-gray-400 hover:text-primeColor duration-300">
                    <ImPlus />
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <div className="cursor-pointer">
          <div className="flex items-center justify-between pb-5">
            <h3 className="font-bold lg:text-xl text-primeColor">New</h3>
            <BiCaretDown />
          </div>
        </div>
        <div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
            {colors.map((x) => (
              <li
                key={x?.id}
                className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center gap-2"
              >
                <span
                  style={{ background: x?.base }}
                  className={`w-3 h-3 bg-gray-500 rounded-full`}
                ></span>
                {x?.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <div className="cursor-pointer">
          <div className="flex items-center justify-between pb-5">
            <h3 className="font-bold lg:text-xl text-primeColor">New</h3>
            <BiCaretDown />
          </div>
        </div>
        <div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
            {brands.map((x) => (
              <li
                key={x?.id}
                className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center gap-2 hover:text-primeColor hover:border-gray-400 duration-300"
              >
                {x?.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="cursor-pointer">
        <div className="flex items-center justify-between pb-5">
          <h3 className="font-bold lg:text-xl text-primeColor">New</h3>
          <BiCaretDown />
        </div>
        <div className="font-titleFont">
          <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
            {priceList.map((x) => (
              <li
                key={x?.id}
                className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center gap-2 hover:text-primeColor hover:border-gray-400 duration-300"
              >
                ${x?.priceOne.toFixed(2)} - ${x?.priceTwo.toFixed(2)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ShopSiderbar;
