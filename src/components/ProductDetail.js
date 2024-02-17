import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { pid } = useParams();
  console.log(pid);

  return (
    <div className="w-full mx-auto border-b-[1px] border-b-gray-300">
      <div className="max-w-container mx-auto px-4">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-4 h-full -mt-5 xl:-mt-8 pb-10 bg-gray-100 p-4">
          <div className="h-full">{/* <ProductsOnSale /> */}</div>
          {/* <div className="h-full xl:col-span-2">
            <img
              className="w-full h-full object-cover"
              src={productInfo.img}
              alt="img"
            />
          </div>
          <div className="h-full w-full md:col-span-2 xl:col-span-3 xl:p-14 flex flex-col gap-6 justify-center">
            <div className="flex flex-col gap-5">
              <h2 className="text-4xl font-semibold">
                {productInfo.productName}
              </h2>
              <p className="text-xl font-semibold">${productInfo.price}</p>
              <p className="text-base text-gray-600">{productInfo.des}</p>
              <p className="text-sm">Be the first to leave a review.</p>
              <p className="font-medium text-lg">
                <span className="font-normal">Colors:</span> {productInfo.color}
              </p>
              <button
                onClick={() =>
                  dispatch(
                    addToCart({
                      _id: productInfo.id,
                      name: productInfo.productName,
                      quantity: 1,
                      image: productInfo.img,
                      badge: productInfo.badge,
                      price: productInfo.price,
                      colors: productInfo.color,
                    })
                  )
                }
                className="w-full py-4 bg-primeColor hover:bg-black duration-300 text-white text-lg font-titleFont"
              >
                Add to Cart
              </button>
              <p className="font-normal text-sm">
                <span className="text-base font-medium"> Categories:</span>{" "}
                Spring collection, Streetwear, Women Tags: featured SKU: N/A
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
