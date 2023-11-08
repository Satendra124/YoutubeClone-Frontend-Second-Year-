import React from "react";
import { useNavigate } from "react-router-dom";

const VideoCard = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    //Redirect to videoPage
    navigate("/videos");
  };

  return (
    <div className="card" onClick={handleClick}>
      <img className="thumbnail" src="../src/assets/Thumbnail.webp" alt="" />

      <div className="card-body">
        <img className="channelImage" src="https://robohash.org/20" alt="" />

        <div className="card-text">
          <p className="title">Title</p>
          <p className="faded">Channel Name</p>
          <p className="faded">200K 2 months ago</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
