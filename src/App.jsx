import React from "react";
import { useState } from "react";
import { Navbar, People, Planets } from "./components";

const App = () => {
  const [page, setPage] = useState("planets");

  return (
    <>
      <div className="w-full max-w-app m-auto flex flex-col gap-4">
        <h1 className="text-yel text-4xl sm:text-6xl tracking-widest mt-10">
          Star Wars Info
        </h1>
        <Navbar setPage={setPage} />
        <div className="text-left">
          {page === "planets" ? <Planets /> : <People />}
        </div>
      </div>
      {/*  */}
    </>
  );
};

export default App;
