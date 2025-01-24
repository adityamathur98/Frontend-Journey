import React, { useState } from "react";

import DestinationItem from "../DestinationItem";

import "./index.css";

const DestinationSearch = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const { destinationsList } = props;

  const onChangeSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const searchResult = destinationsList.filter((eachDestination) =>
    eachDestination.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center w-[100%] max-w-[1140px] md:items-start">
        <h1 className="text-center text-[#252627] font-roboto text-[40px] font-[700] mt-[48px] ml-[15px] mb-[32px] md:mt-[96px]">
          Destination Search
        </h1>
        <div className="flex bg-[#f1f5f9] border-gray-300 rounded-lg pt-[8px] pl-[16px] pr-[16px] pb-[8px] ml-[15px] shadow-sm">
          <input
            type="search"
            className="border-none bg-[#f1f5f9] text-[14px] font-[500] outline-none placeholder-[#0f172a]-400 sm:w-[300px]"
            onChange={onChangeSearch}
            value={searchValue}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search-icon"
            className="h-[20px] w-[20px]"
          />
        </div>
        <ul className="flex justify-center flex-wrap pl-0 mt-[48px]">
          {searchResult.map((eachDestination) => (
            <DestinationItem
              key={destinationsList.id}
              destinationDetails={eachDestination}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DestinationSearch;
