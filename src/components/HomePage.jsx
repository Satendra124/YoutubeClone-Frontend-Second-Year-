import React from "react";
import VideoCard from "./VideoCard";
import SideBar from "./SideBar";

const HomePage = () => {
  return (
    <div className="main-flex-container">
      <div className="page">
        <SideBar />

        <div className="main">
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
