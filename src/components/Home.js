import React, { useEffect } from "react";

import Slider from "react-slick";
import SamplePrevArrow from "./SamplePrevArrow";
import SampleNextArrow from "./SampleNextArrow";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../utils/productSlice";
import { Link } from "react-router-dom";
import { SALE_IMG1, SALE_IMG2, SALE_IMG3 } from "../utils/constants";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const { data, status } = useSelector((store) => store?.product);

  if (status === "loading") {
    <h2>Loading ....</h2>;
  }

  console.log(data);

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
    <div className="max-w-container mx-auto px-4">
      {/* sales */}
      <div className="py-20 flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-10">
        <div className="w-full md:w-2/3 lg:w-1/2 h-full">
          <img className="h-full w-full object-cover" src={SALE_IMG1} />
        </div>
        <div className="w-full md:w-2/3 lg:w-1/2 h-auto flex flex-col gap-4 lg:gap-10">
          <div className="h-1/2 w-full">
            <img className="h-full w-full object-cover" src={SALE_IMG2} />
          </div>
          <div className="h-1/2 w-full">
            <img className="h-full w-full object-cover" src={SALE_IMG3} />
          </div>
        </div>
      </div>

      {/* new arrival */}
      <div className="w-full pb-16">
        <div className="text-3xl font-semibold pb-6">New Arrivals</div>
        <Slider {...settings}>
          {data[0]?.products?.slice(0, 4)?.map((x) => (
            <Link to="/shop" key={x?.id}>
              <Product info={x} />
            </Link>
          ))}
        </Slider>
      </div>

      {/* Our Bestsellers */}
      <div className="w-full pb-20">
        <div className="text-3xl font-semibold pb-6">Our Bestsellers</div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {data[0]?.products?.slice(0, 4)?.map((x) => (
            <Link to="/shop" key={x?.id}>
              <Product info={x} />
            </Link>
          ))}
        </div>
      </div>

      {/* Product of The year */}
      <div className="w-full h-80 mb-20 bg-[#f3f3f3] md:bg-transparent relative font-titleFont">
        <img
          className="w-full h-full object-cover hidden md:inline-block"
          src={data[0]?.products[5]?.thumbnail}
        />
        <div className="w-full md:w-2/3 xl:w-1/2 h-80 absolute px-4 md:px-0 top-0 right-0 flex flex-col items-start gap-6 justify-center">
          <h1 className="text-3xl font-semibold text-[#262626]">
            Product of The year
          </h1>
          <p className="text-base font-normal text-[#262626] max-w-[600px] mr-4">
            {data[0]?.products[5]?.description}
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
          {data[0]?.products?.slice(5, 9)?.map((x) => (
            <Link to="/shop" key={x?.id}>
              <Product info={x} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
