import React from "react";

const Planet = ({ planet }) => {
  return (
    <div className="card">
      <h3 className="text-yel my-2.5 mx-0">{planet.name}</h3>
      <p className="my-1.5 mx-0 text-text">Population - {planet.population}</p>
      <p className="my-1.5 mx-0 text-text">Terrain - {planet.terrain}</p>
    </div>
  );
};

export default Planet;
