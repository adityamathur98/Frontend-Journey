import React, { useState } from "react";

import ThumbnailItem from "../ThumbnailItem";

const imagesList = [
  {
    id: 0,
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/nature-mountain-with-pond-img.png",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/nature-mountain-with-pond-thumbnail-img.png",
    imageAltText: "nature mountain with pond",
    thumbnailAltText: "nature mountain with pond thumbnail",
  },
  {
    id: 1,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/nature-sunset-img.png",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/nature-sunset-thumbnail-img.png",
    imageAltText: "nature sunset",
    thumbnailAltText: "nature sunset thumbnail",
  },
  {
    id: 2,
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/nature-mountain-with-ocean-img.png",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/nature-mountain-with-ocean-thumbnail-img.png",
    imageAltText: "nature mountain with ocean",
    thumbnailAltText: "nature mountain with ocean thumbnail",
  },
  {
    id: 3,
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/nature-mountain-with-forest-img.png",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/nature-mountain-with-forest-thumbnail-img.png",
    imageAltText: "nature mountain with forest",
    thumbnailAltText: "nature mountain with forest thumbnail",
  },
  {
    id: 4,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/nature-leaves-img.png",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/nature-leaves-thumbnail-img.png",
    imageAltText: "nature leaves",
    thumbnailAltText: "nature leaves thumbnail",
  },
  {
    id: 5,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/nature-tree-img.png",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/nature-tree-thumbnail-img.png",
    imageAltText: "nature tree",
    thumbnailAltText: "nature tree thumbnail",
  },
  {
    id: 6,
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/nature-waterfall-img.png",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/nature-waterfall-thumbnail-img.png",
    imageAltText: "nature waterfall",
    thumbnailAltText: "nature waterfall thumbnail",
  },
  {
    id: 7,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/nature-river-img.png",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/nature-river-thumbnail-img.png",
    imageAltText: "nature river",
    thumbnailAltText: "nature river thumbnail",
  },
];

const GalleryApp = () => {
  const [activeThumbnailId, setActiveThumbnailId] = useState(imagesList[0].id);

  const { imageUrl, imageAltText } = imagesList[activeThumbnailId];

  const onChangeImg = (id) => {
    setActiveThumbnailId(id);
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-[85%] mt-[34px] mb-[34px] max-w-[1140px]">
        <img src={imageUrl} alt={imageAltText} className="rounded-[18px]" />
        <h1 className="text-[#1e293b] text-[24px] font-[500] mt-[24px]">
          Nature Photography
        </h1>
        <p className="text-[#64748b] font-[500] text-[16px] mt-[18px]">
          Nature Photography by Aditya
        </p>
        <ul className="flex flex-wrap list-none p-0 mt-[10px]">
          {imagesList.map((eachObj) => (
            <ThumbnailItem
              key={eachObj.id}
              itemDetails={eachObj}
              isActive={activeThumbnailId === eachObj.id}
              onChangeImage={onChangeImg}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GalleryApp;
