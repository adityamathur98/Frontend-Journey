import { IoMdClose } from "react-icons/io";
import ReactPlayer from "react-player";
import Popup from "reactjs-popup";

import "reactjs-popup/dist/index.css";

const MovieItem = (props) => {
  const { movieDetails } = props;
  const { thumbnailUrl, videoUrl } = movieDetails;

  return (
    <div>
      <Popup
        modal
        trigger={
          <img
            src={thumbnailUrl}
            alt="thumbnail"
            className="w-[215px] h-[150px] rounded-[8px] cursor-pointer md:w-[254px] md:h-[170px]"
          />
        }
        className="bg-[#ffffff] w-[750px] h-[460px] rounded-[16px]">
        {(close) => (
          <div className="flex flex-col justify-center items-center h-[100%]">
            <button
              onClick={() => close()}
              className="self-end bg-transparent w-[28px] h-[28px] border-none mt-[18px] mr-[18px] outline-none cursor-pointer">
              <IoMdClose size={20} color="#231f20" />
            </button>
            <div className="mt-[12px] mx-[48px] mb-[48px]">
              <ReactPlayer url={videoUrl} controls />
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
};

export default MovieItem;
