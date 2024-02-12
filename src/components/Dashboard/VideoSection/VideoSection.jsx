import React from "react";
import "./VideoSection.scss";
import ReactPlayer from "react-player";

const VideoSection = () => {
  return (
    <div className="video-section">
      <div className="video-container">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=0tTz14-bz7k"
          width="100%"
          height="400px"
          controls={true}
        />
      </div>
    </div>
  );
};

export default VideoSection;
