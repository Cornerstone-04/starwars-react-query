import React from "react";
import { useQuery } from "react-query";
import Person from "./Person";

const fetchPeople = async () => {
  try {
    const res = await fetch("http://swapi.dev/api/people");

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const People = () => {
  const { data, status } = useQuery("people", fetchPeople);
  // console.log(data);

  return (
    <div>
      <h2>People</h2>
      {/* <p>{status}</p> */}

      {status === "loading" && <div>Loading data</div>}
      {status === "error" && <div>Error fetching data</div>}
      {status === "success" && (
        <div>
          {data.results.map((person) => (
            <Person person={person} key={person.name} />
          ))}
        </div>
      )}
    </div>
  );
};

export default People;
