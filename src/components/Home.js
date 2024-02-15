import React, { useEffect } from "react";

import Slider from "react-slick";
import SamplePrevArrow from "./SamplePrevArrow";
import SampleNextArrow from "./SampleNextArrow";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../utils/productSlice";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const products = useSelector((store) => store?.product?.data);
  console.log(products);

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
            <Product />
          </div>
        </Slider>
      </div>

      {/* Our Bestsellers */}
      <div className="w-full pb-20">
        <div className="text-3xl font-semibold pb-6">Our Bestsellers</div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
          <div className="px-2">
            <Product />
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
            <Product />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
