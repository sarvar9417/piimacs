import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { map, uniqueId } from "lodash";
import { levels } from "../../Config/globalConstants";

const SectionRoutes = () => {
  const location = useLocation();
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    const level = location?.state?.level;
    const routes = map(levels[level], ({ to, name }) => (
      <Link to={to} key={uniqueId()}>
        {name}
      </Link>
    ));
    setRoutes(routes);
  }, []);
  return (
    <div className="my-7">
      <div>{routes}</div>
    </div>
  );
};

export default SectionRoutes;
