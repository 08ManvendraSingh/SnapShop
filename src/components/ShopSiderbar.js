import React, { useState } from "react";
import { BiCaretDown, BiCaretUp } from "react-icons/bi";
import { shopSideItems } from "../utils/constants";

const ItemsList = ({ info }) => {
  const [accordian, setAccordian] = useState(true);

  return (
    <div key={info?.id} className="w-full">
      <div
        onClick={() => setAccordian(!accordian)}
        className="flex items-center justify-between pb-5"
      >
        <h3 className="font-bold lg:text-xl text-primeColor">{info?.title}</h3>
        {accordian ? <BiCaretUp /> : <BiCaretDown />}
      </div>
      {accordian && (
        <div>
          <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
            {info?.items.map((a, i) => (
              <li
                key={i}
                className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center justify-between cursor-pointer"
              >
                {a}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const ShopSiderbar = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      {shopSideItems.map((x) => (
        <ItemsList key={x?.id} info={x} />
      ))}
    </div>
  );
};

export default ShopSiderbar;
