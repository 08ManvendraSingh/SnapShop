import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineLabelImportant } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addItems } from "../utils/cartSlice";
import { Link } from "react-router-dom";
import { useState } from "react";

const Product = ({ info }) => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store?.cart?.items);
  const [val,setVal] = useState()
  console.log(products);

  const AddProduct =(info)=>{

    dispatch(addItems(info))

    setVal(info.id)

  }

  var a = products.filter((x)=> x.sku)

  console.log('val',val)


  return (
    <div className="w-full relative group">
      <div className="max-w-80 max-h-80 relative overflow-y-hidden ">
        <div className="">
          <img className="w-full h-[220px]" src={info?.images[0]} />
        </div>
        <div className="absolute top-6 left-8">
          <div className="bg-[#262626] w-[92px] h-[35px] text-white flex justify-center items-center text-base font-semibold hover:bg-black duration-300 cursor-pointer">
            ⭐ {info?.rating}
          </div>
        </div>
        <div className="w-full h-32 absolute bg-white -bottom-[130px] group-hover:bottom-0 duration-700">
          <ul className="w-full h-full flex flex-col items-end justify-center gap-2 font-titleFont px-2 border-l border-r">
            <li
            onClick={()=> AddProduct(info)}
              // onClick={() =>  dispatch(addItems(info))}
              className="text-[#767676] hover:text-[#262626] text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-[#262626] flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
            >
              {/* {products.filter((x)=>x.id == info.id)?'1':'Add to cart'} */}
              {console.log('aaa',a)}
              {val == info.id ? '1' : 'Add to cart' }
              <span>
                <FaShoppingCart />
              </span>
            </li>
            <Link to={"/shop/" + info?.id}>
              <li className="text-[#767676] hover:text-[#262626] text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-[#262626] flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full">
                View Details
                <span className="text-lg">
                  <MdOutlineLabelImportant />
                </span>
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="max-w-80 py-6 flex flex-col gap-1 border-[1px] border-t-0 px-4">
        <div className="flex items-center justify-between font-titleFont">
          <h2 className="text-lg text-[#262626] font-bold">{info?.title}</h2>
          <p className="text-[#767676] text-[14px]">₹ {info?.price}</p>
        </div>
        <div>
          <p className="text-[#767676] text-[14px]">{info?.brand}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
