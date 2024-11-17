import React from "react";

const LeftContent = () => {
  return (
    <div className="left-content-container">
      <video
        src="src/layoutComponents/video/vidd.mp4"
        width="1000"
        height="800"
        autoPlay
        loop
        muted
        title="Local Video"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default LeftContent;
