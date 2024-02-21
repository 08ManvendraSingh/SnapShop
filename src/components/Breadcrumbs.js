import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const { pathname } = useLocation();
  const pathnames = pathname.split("/").filter((x) => x);
  let breadcrumbsPath = "";

  return (
    <div className="w-full py-10 xl:py-10 flex flex-col gap-3 px-4">
      {pathnames.length > 0 && (
        <h1 className="text-5xl capitalize text-[#262626] font-titleFont font-bold">
          {pathnames}
        </h1>
      )}
      <p className="text-sm font-normal text-[#6D6D6D] capitalize flex items-center">
        {pathnames.length > 0 && <Link to="/">Home </Link>}
        {pathnames.map((x, i) => {
          breadcrumbsPath += `/${x}`;
          const isLast = i === pathnames.length - 1;

          return isLast ? (
            <span className="capitalize font-semibold text-[#262626]">
              / {x}
            </span>
          ) : (
            <span className="capitalize font-semibold text-[#262626]">
              / <Link to={breadcrumbsPath}> {x}</Link>
            </span>
          );
        })}
      </p>
    </div>
  );
};

export default Breadcrumbs;
