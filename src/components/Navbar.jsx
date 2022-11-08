import React from "react";

const Navbar = ({ setPage }) => {
  return (
    <nav>
      <button className="nav_btn" onClick={() => setPage("planets")}>
        Planets
      </button>
      <button className="nav_btn" onClick={() => setPage("people")}>
        People
      </button>
    </nav>
  );
};

export default Navbar;
