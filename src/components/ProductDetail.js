import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addItems } from "../utils/cartSlice";

const ProductDetail = () => {
  const { pid } = useParams();

  const dispatch = useDispatch();
  const { data } = useSelector((store) => store?.product);

  const product = data[0]?.products.filter((x) => x?.id == pid);
  console.log(data, product);

  return (
    <div className="w-full mx-auto border-b-[1px] border-b-gray-300">
      <div className="max-w-container mx-auto px-4">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-4 h-full -mt-5 pb-10 bg-gray-100 p-4">
          <div className="h-full">
            <div>
              <h3 className="font-titleFont text-xl font-semibold mb-6 underline underline-offset-4 decoration-[1px]">
                Products Photos
              </h3>
              <div className="flex flex-col gap-2">
                {product[0]?.images.map((x) => (
                  <div
                    key={x?.id}
                    className="flex items-center gap-4 border-b-[1px] border-b-gray-300 py-2"
                  >
                    <div>
                      <img className="w-full" src={x} alt="img" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="h-full xl:col-span-2">
            <img
              className="w-full h-full object-cover"
              src={product[0]?.images[0]}
              alt="img"
            />
          </div>
          <div className="h-full w-full md:col-span-2 xl:col-span-3 xl:p-14 flex flex-col gap-6 justify-center">
            <div className="flex flex-col gap-5">
              <h2 className="text-4xl font-semibold">{product[0]?.title}</h2>
              <p className="text-xl font-semibold">₹ {product[0]?.price}</p>
              <p className="text-base text-gray-600">
                {product[0]?.description}
              </p>
              <p className="text-sm">Be the first to leave a review.</p>
              <p className="font-medium text-lg">
                <span className="font-normal">Brand:</span> {product[0]?.brand}
              </p>
              <button
                onClick={() => dispatch(addItems(product[0]))}
                className="w-full py-4 bg-[#262626] hover:bg-black duration-300 text-white text-lg font-titleFont"
              >
                Add to Cart
              </button>
              <p className="font-normal text-sm">
                <span className="text-base font-medium"> Categories:</span>
                {product[0]?.category}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
