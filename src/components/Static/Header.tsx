import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const onToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="bg-[#0d1e5a]">
      <div className=" h-20 text-white flex items-center justify-between max-w-[1240px] mx-auto px-4 z-10">
        <h1 className="w-full text-3xl font-bold text-white ">Peter.</h1>
        <ul className="flex hidden">
          <li className="p-4">Home</li>
          <li className="p-4">About</li>
        </ul>
        <div onClick={onToggle}>
          {!toggle ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
      </div>{" "}
      <ul
        className={
          !toggle
            ? "fixed left-0, top-20 w-[40%] border-r border-r-gray-900 h-full text-white pt-8 uppercase bg-[#0d1e5a] ease-in-out duration-300 "
            : "fixed left-[-100%]"
        }
      >
        <li className="p-4 border-b border-b-gray-700   ">Home</li>
        <li className="p-4 border-b border-b-gray-700  ">About</li>
      </ul>
    </div>
  );
};

export default Header;
