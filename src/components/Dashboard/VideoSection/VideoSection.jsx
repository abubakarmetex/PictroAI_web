import React from "react";
import "./VideoSection.scss";
import ReactPlayer from "react-player";

const VideoSection = () => {
  return (
    <div className="video-section">
      <div className="video-container">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=sY8vQh76UdQ"
          width="100%"
          height="400px"
          controls={true}
        />
      </div>
    </div>
  );
};

export default VideoSection;
