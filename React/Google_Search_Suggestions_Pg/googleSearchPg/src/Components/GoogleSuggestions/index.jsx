import React, { useState } from "react";

import SuggestionItem from "../SuggestionItem";

import "./index.css";

const GoogleSuggestions = (props) => {
  const { suggestionsList } = props;
  const [searchInput, setSearchInput] = useState("");

  const updateSearchInput = (value) => {
    setSearchInput(value);
  };

  const onChangeSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  const searchResult = suggestionsList.filter((eachSuggestion) =>
    eachSuggestion.suggestion.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center mt-[125px] md:mt-[250px]">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          className="w-[150px] h-[150px] md:w-[432px] md:h-[140px]"
          alt="google logo"
        />
        <div className="w-[300px] rounded-[12px] mt-[24px] shadow-custom p-4 rounded-md bg-white md:w-[600px] md:rounded-[20px] md:mt-[48px] border border-gray-300">
          <div className="flex items-center pt-[4px] pl-[8px] pb-[4px] pr-[8px] md:pl-[12px] md:pr-[12px]">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              className="w-[16px] h-[16px] md:w-[24px] md:h-[24px]"
              alt="search icon"
            />
            <input
              type="text"
              value={searchInput}
              placeholder="Search Google"
              className="text-[#64748b] text-[16px] w-[100%] h-[40px] rounded-none ml-[16px] outline-none"
              onChange={onChangeSearchInput}
            />
          </div>
          <ul className="pl-[12px] pr-[16px] pb-[12px] m-0 md:pl-[24px] md:pr-[32px] md:mb-[24px]">
            {searchResult.map((eachSuggestion) => (
              <SuggestionItem
                key={eachSuggestion.key}
                suggestionDetails={eachSuggestion}
                updateSearchInput={updateSearchInput}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GoogleSuggestions;
