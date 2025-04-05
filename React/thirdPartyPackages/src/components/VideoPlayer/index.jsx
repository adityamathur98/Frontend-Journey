import React from "react";

import ReactPlayer from "react-player";

const VideoPlayer = () => (
  <div className="mt-auto max-w-[640px] flex flex-col items-center justify-center">
    <h1 className="text-[#256faf]">Video Player</h1>
    <div className="w-[640px] h-[360px]">
      <ReactPlayer url="https://youtu.be/YE7VzlLtp-4" controls />
    </div>
  </div>
);

export default VideoPlayer;
