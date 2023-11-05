import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="main-flex-container">
      <div className="navbar">
        <p>YOUTUBE</p>
        <input className="searchBar" placeholder="  Search..." type="text" />
        <button className="signInButton">Sign In</button>
      </div>

      <div className="page">
        <div className="sidebar">
          <ul>
            <li>Home</li>
            <li>Shorts</li>
            <li>Subscriptions</li>
            <li>You</li>
            <li>History</li>
          </ul>
        </div>

        <div className="main">
          <img src="../src/assets/Thumbnail.webp" alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
