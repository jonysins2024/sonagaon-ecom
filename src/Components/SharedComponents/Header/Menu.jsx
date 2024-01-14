import React from "react";

const Menu = () => {
  return (
    <div>
      <ul className="flex items-center  gap-2">
        <li className="relative group">
          <span className="text-xl font-semibold text-white cursor-pointer">
            Cosmetics
          </span>
          {/* submenu  */}
          <div className="hidden absolute top-8 w-max bg-white  drop-shadow-md p-5 rounded-md group-hover:grid  group-hover:transition-all group-hover:duration-300 items-center grid-cols-4 gap-[20px] ">
            <div className="">
              <p className="text-xl font-semibold mb-1">shirt</p>
            </div>
            <div className="">
              <p className="text-xl font-semibold mb-1">shirt</p>
            </div>
            <div className="">
              <p className="text-xl font-semibold mb-1">shirt</p>
            </div>
            <div className="">
              <p className="text-xl font-semibold mb-1">shirt</p>
            </div>
          </div>
        </li>
        <li className="relative group">
          <span className="text-xl font-semibold text-white cursor-pointer">
            Cloths
          </span>
          {/* submenu  */}
          <div className="hidden absolute top-8 w-max bg-white  drop-shadow-md p-5 rounded-md group-hover:grid  group-hover:transition-all group-hover:duration-300 items-center grid-cols-4 gap-[20px] ">
            <div className="">
              <p className="text-xl font-semibold mb-1">shirt</p>
            </div>
            <div className="">
              <p className="text-xl font-semibold mb-1">shirt</p>
            </div>
            <div className="">
              <p className="text-xl font-semibold mb-1">shirt</p>
            </div>
            <div className="">
              <p className="text-xl font-semibold mb-1">shirt</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
