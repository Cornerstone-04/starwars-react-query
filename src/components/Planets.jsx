import React from "react";
import { useQuery } from "react-query";
import Planet from "./Planet";

const fetchPlanets = async () => {
  try {
    const res = await fetch("http://swapi.dev/api/planets");

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const Planets = () => {
  const { data, status } = useQuery("planets", fetchPlanets);

  return (
    <div>
      <h2>Planets</h2>
      {status === "loading" && <div>Loading data</div>}
      {status === "error" && <div>Error fetching data</div>}
      {status === "success" && (
        <div>
          {data.results.map((planet) => (
            <Planet planet={planet} key={planet.name} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Planets;
