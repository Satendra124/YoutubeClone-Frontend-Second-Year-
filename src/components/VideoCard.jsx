import React from "react";

const VideoCard = () => {
  return (
    <div className="card">
      <img className="thumbnail" src="../src/assets/Thumbnail.webp" alt="" />

      <div className="card-body">
        <img className="channelImage" src="https://robohash.org/7" alt="" />

        <div className="card-text">
          <p>Title</p>
          <p>Channel Name</p>
          <p>200K 2 months ago</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
