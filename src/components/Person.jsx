import React from "react";

const Person = ({ person }) => {
  return (
    <div className="card">
      <h3 className="text-yel my-2.5 mx-0">{person.name}</h3>
      <p className="my-1.5 mx-0 text-text">Gender - {person.gender}</p>
      <p className="my-1.5 mx-0 text-text">Birth year - {person.birth_year}</p>
    </div>
  );
};

export default Person;
