import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { map, uniqueId } from "lodash";
import { levels } from "../../Config/globalConstants";

const SectionRoutes = () => {
  const location = useLocation();
  const [routes, setRoutes] = useState([]);
  const [currentLevel, setCurrentLevel] = useState([]);
  const [buttonName, setButtonName] = useState();
  const [sections, setSections] = useState([]);

  const handleMenu = (e) => {
    const name = e.target.name;
    setButtonName(name);
  };

  useEffect(() => {
    const level = location?.state?.level;
    const routes = map(levels[level], ({ name }) => (
      <button
        key={uniqueId()}
        className={`px-5 border-rounded-t rounded-t z-10  ${
          name === buttonName
            ? "bg-white border border-b-0 border-neutral-300 text-neutral-700"
            : "text-neutral-500"
        }`}
        onClick={handleMenu}
        name={name}
      >
        {name}
      </button>
    ));
    setRoutes(routes);
    setCurrentLevel(levels[level]);
  }, [location, buttonName]);

  useEffect(() => {
    setSections(currentLevel[0]?.sections);
    setButtonName(currentLevel[0]?.name);
  }, [currentLevel]);

  useEffect(() => {}, [buttonName]);

  return (
    <div className="my-7">
      <div className="px-3 border-neutral-300">{routes}</div>
      <div className="w-full bg-white  p-4 shadow">
        {map(sections, ({ name, description, image }) => (
          <div
            key={uniqueId()}
            className="mb-3 border-b border-neutral-300 px-2"
          >
            <h3 className="font-amazonbold py-2 text-blue-400">{name}</h3>
            <code className="text-neutral-600">{description}</code>
            {image && <img src={image} alt={name} className="w-full" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionRoutes;
