import React from "react";
import SuggestionCard from "./SuggestionCard";
import { AiOutlineLike, AiFillLike, AiOutlineDislike } from "react-icons/ai";
import { PiShareFatDuotone } from "react-icons/pi";
import { HiDownload } from "react-icons/hi";

const VideoPage = () => {
  return (
    <div className="videoPage">
      <div className="videoItem">
        <iframe
          className="iframe-video"
          src="https://www.youtube.com/embed/iSo9l950QLo?si=qdWCRT_ALWXx-8x_"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>

        <div className="description">
          <div className="mixed-group">
            <img
              className="channelImage"
              src="https://robohash.org/20"
              alt=""
            />
            <div className="channelText">
              <p className="title">Channel Name</p>
              <p className="faded">293K</p>
            </div>
            <button className="subscribe-button">Subscribe</button>
          </div>

          <div className="button-group">
            <button className="pill">
              <AiOutlineLike size={20} /> | <AiOutlineDislike size={20} />
            </button>
            <button className="pill">
              <PiShareFatDuotone size={20} /> Share
            </button>
            <button className="download-pill">
              <HiDownload size={20} /> Download
            </button>
          </div>
        </div>

        <br />

        <div className="description-text">
          <p className="title">92K views 5 months ago</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
      </div>

      <div className="suggestionBar">
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
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
