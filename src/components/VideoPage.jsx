import React from "react";
import SuggestionCard from "./SuggestionCard";

const VideoPage = () => {
  return (
    <div className="videoPage">
      <div className="videoItem">
        <iframe
          className="iframe-video"
          src="https://www.youtube.com/embed/YSWMbwQuWAY?si=6TUM8avZEwODgzeT"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <div className="suggestionBar">
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
      </div>
    </div>
  );
};

export default VideoPage;
