import React from "react";
import { mainMenu } from "../../Config/globalConstants";
import { Link } from "react-router-dom";
import { map, uniqueId } from "lodash";
const Main = () => {
  const menu = map(mainMenu, ({ to, image, name, level }) => (
    <Link
      key={uniqueId()}
      to={to}
      state={{ level }}
      className="text-neutral-500 text-center w-[10rem] flex flex-col justify-center items-center text-cyan-500"
    >
      <img
        src={image}
        alt={name}
        className="w-[8rem] h-[8rem] border border-200"
      />
      {name}
    </Link>
  ));

  return (
    <div className="w-full bg-white border my-10 border-neutral-300 p-4">
      <div className="flex justify-evenly">{menu}</div>
    </div>
  );
};

export default Main;
