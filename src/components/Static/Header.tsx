import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const onToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="w-full bg-[#000269] text-white h-24 ">
      <div className="flex items-center h-full max-w-[1240px] justify-between mx-auto ">
        <div className="uppercase font-bold text-3xl">Logo.</div>
        <div className="hidden md:flex ">
          <div className="px-4 hover:cursor-pointer">
            <Link to="/">Home</Link>
          </div>
          <div className="px-4 hover:cursor-pointer">
            <Link to="/about">About</Link>
          </div>
          <div className="px-4 hover:cursor-pointer">Product</div>
        </div>

        <div onClick={onToggle} className="block md:hidden">
          {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
        </div>

        <div
          className={
            !toggle
              ? "fixed left-[-100%] ease-in-out duration-300 "
              : "fixed left-0 top-0 uppercase font-bold mt-20 w-[40%] border-r border-r-gray-900 h-full bg-[#000269] block md:hidden"
          }
        >
          <div className="px-4 hover:cursor-pointer p-4 border-b border-b-gray-600">
            Home
          </div>
          <div className="px-4 hover:cursor-pointer p-4 border-b border-b-gray-600">
            About
          </div>
          <div className="px-4 hover:cursor-pointer p-4 border-b border-b-gray-600">
            Product
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
