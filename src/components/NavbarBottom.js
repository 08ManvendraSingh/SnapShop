import React, { useEffect, useState } from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavbarBottom = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestions] = useState([]);

  const cartCount = useSelector((store) => store?.cart?.items);
  const { data } = useSelector((store) => store?.product);

  useEffect(() => {
    const filterData = data[0]?.products.filter((x) =>
      x?.title?.toLowerCase()?.includes(searchQuery?.toLowerCase())
    );
    setSuggestions(filterData);
  }, [searchQuery]);

  return (
    <div className="w-full px-4 bg-[#F5F5F3] relative">
      <div className="max-w-container mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full px-4 pb-4 lg:pb-0 h-full lg:h-24">
          <div className="relative w-full lg:w-[600px] h-[50px] text-base text-[#262626] bg-white flex items-center gap-2 justify-between px-6 rounded-xl">
            <input
              onChange={(e) => setSearchQuery(e.target.value)}
              value={searchQuery}
              className="flex-1 h-full outline-none placeholder:text-[#C4C4C4] placeholder:text-[14px]"
              type="text"
              placeholder="Search your products here"
            />
            <FaSearch className="w-5 h-5" />
            {searchQuery != "" && (
              <div
                className={`w-full mx-auto h-96 bg-white top-16 absolute left-0 z-50 overflow-y-scroll shadow-2xl scrollbar-hide cursor-pointer`}
              >
                {suggestion &&
                  suggestion.map((x) => (
                    <Link
                      to={"/product/" + x?.id}
                      key={x?.id}
                      onClick={() => setSearchQuery("")}
                    >
                      <div className="max-w-[600px] h-28 bg-gray-100 mb-3 flex items-center gap-3">
                        <img
                          className="w-24"
                          src={x?.images[0]}
                          alt="productImg"
                        />
                        <div className="flex flex-col gap-1">
                          <p className="font-semibold text-lg">{x?.title}</p>
                          <p className="text-xs">{x?.description}</p>
                          <p className="text-sm">
                            Price:
                            <span className="text-[#262626] font-semibold">
                              ₹ {x?.price}
                            </span>
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            )}
          </div>
          <div className="flex gap-4 mt-2 lg:mt-0 items-center pr-6 cursor-pointer relative">
            <div className="relative">
              <Link to="/cart">
                <FaShoppingCart />
              </Link>
              <span className="absolute font-titleFont top-3 -right-2 text-xs w-4 h-4 flex items-center justify-center rounded-full bg-[#262626] text-white">
                {cartCount.length > 0 ? cartCount.length : 0}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarBottom;
