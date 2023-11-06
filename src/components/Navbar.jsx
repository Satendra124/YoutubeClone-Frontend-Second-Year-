import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <p>YOUTUBE</p>
      <input className="searchBar" placeholder="  Search..." type="text" />
      <button className="signInButton">Sign In</button>
    </div>
  );
};

export default Navbar;
