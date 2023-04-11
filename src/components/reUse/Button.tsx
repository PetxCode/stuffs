import React from "react";
import { iButton } from "../../types/interface";

const Button: React.FC<iButton> = ({ title }) => {
  return (
    <div>
      <button className="bg-[darkorange] px-4 py-2 rounded font-bold text-[18px] my-4  hover:cursor-pointer hover:scale-50">
        {title}
      </button>
    </div>
  );
};

export default Button;
