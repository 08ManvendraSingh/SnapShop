import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineLabelImportant } from "react-icons/md";

import Slider from "react-slick";
import SamplePrevArrow from "./SamplePrevArrow";
import SampleNextArrow from "./SampleNextArrow";

const Home = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <>
      {/* sales */}
      <div className="py-20 flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-10">
        <div className="w-full md:w-2/3 lg:w-1/2 h-full">
          <img
            className="h-full w-full object-cover"
            src="https://orebishopping.reactbd.com/static/media/saleImgOne.5fd9a91421b8b3d52f04.webp"
          />
        </div>
        <div className="w-full md:w-2/3 lg:w-1/2 h-auto flex flex-col gap-4 lg:gap-10">
          <div className="h-1/2 w-full">
            <img
              className="h-full w-full object-cover"
              src="https://orebishopping.reactbd.com/static/media/saleImgTwo.ecb733524e878406c281.webp"
            />
          </div>
          <div className="h-1/2 w-full">
            <img
              className="h-full w-full object-cover"
              src="https://orebishopping.reactbd.com/static/media/saleImgThree.7f55d28e41e547163b6c.webp"
            />
          </div>
        </div>
      </div>

      {/* new arrival */}
      <div className="w-full pb-16">
        <div className="text-3xl font-semibold pb-6">New Arrivals</div>
        <Slider {...settings}>
          <div className="px-2">
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
          </div>

          <div className="px-2">
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
          </div>

          <div className="px-2">
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
          </div>

          <div className="px-2">
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
          </div>
        </Slider>
      </div>

      {/* Our Bestsellers */}
      <div className="w-full pb-20">
        <div className="text-3xl font-semibold pb-6">Our Bestsellers</div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
          <div className="px-2">
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
          </div>
          <div className="px-2">
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
          </div>
          <div className="px-2">
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
          </div>
          <div className="px-2">
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
          </div>
          <div className="px-2">
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
          </div>
        </div>
      </div>

      {/* Product of The year */}
      <div className="w-full h-80 mb-20 bg-[#f3f3f3] md:bg-transparent relative font-titleFont">
        <img
          className="w-full h-full object-cover hidden md:inline-block"
          src="https://orebishopping.reactbd.com/static/media/productOfTheYear.2c30f10b51873bab4630.webp"
        />
        <div className="w-full md:w-2/3 xl:w-1/2 h-80 absolute px-4 md:px-0 top-0 right-0 flex flex-col items-start gap-6 justify-center">
          <h1 className="text-3xl font-semibold text-[#262626]">
            Product of The year
          </h1>
          <p className="text-base font-normal text-[#262626] max-w-[600px] mr-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
            cupiditate modi amet! Facilis, aperiam quaerat.
          </p>
          <button className="bg-[#262626] text-white text-lg font-bodyFont w-[185px] h-[50px] hover:bg-black duration-300 font-bold">
            Shop Now
          </button>
        </div>
      </div>

      {/* Special Offers  */}
      <div className="w-full pb-20">
        <div className="text-3xl font-semibold pb-6">Special Offers</div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
          <div className="px-2">
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
          </div>
          <div className="px-2">
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
          </div>
          <div className="px-2">
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
          </div>
          <div className="px-2">
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
          </div>
        </div>
      </div>

      {/* footer */}
    </>
  );
};

export default Home;
