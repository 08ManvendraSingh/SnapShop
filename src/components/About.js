import React from "react";

const About = () => {
  return (
    <div className="max-w-container mx-auto px-4">
      <div className="pb-10">
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">Orebi</span>{" "}
          is one of the world's leading ecommerce brands and is internationally
          recognized for celebrating the essence of classic Worldwide cool
          looking style.
        </h1>
        <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default About;