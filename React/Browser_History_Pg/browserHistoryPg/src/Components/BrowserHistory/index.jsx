import React, { useState } from "react";

import HistoryItem from "../HistoryItem";

import "./index.css";

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: "07:45 PM",
    logoUrl: "https://assets.ccbp.in/frontend/react-js/instagram-img.png",
    title: "Instagram",
    domainUrl: "instagram.com",
  },
  {
    id: 1,
    timeAccessed: "05:45 PM",
    logoUrl: "https://assets.ccbp.in/frontend/react-js/twitter-img.png",
    title: "Twitter. It’s what’s happening / Twitter",
    domainUrl: "twitter.com",
  },
  {
    id: 2,
    timeAccessed: "04:35 PM",
    logoUrl: "https://assets.ccbp.in/frontend/react-js/facebook-img.png",
    title: "Facebook – log in or sign up",
    domainUrl: "facebook.com",
  },
  {
    id: 3,
    timeAccessed: "04:25 PM",
    logoUrl: "https://assets.ccbp.in/frontend/react-js/linkedin-img.png",
    title: "LinkedIn: Log In or Sign Up",
    domainUrl: "linkedin.com",
  },
  {
    id: 4,
    timeAccessed: "04:00 PM",
    logoUrl: "https://assets.ccbp.in/frontend/react-js/hashnode-img.png",
    title: "Hashnode: Everything you need to start blogging as a developer!",
    domainUrl: "hashnode.com",
  },
  {
    id: 5,
    timeAccessed: "03:25 PM",
    logoUrl: "https://assets.ccbp.in/frontend/react-js/github-img.png",
    title: "GitHub: Where the world builds software · GitHub",
    domainUrl: "github.com",
  },

  {
    id: 6,
    timeAccessed: "02:45 PM",
    logoUrl: "https://assets.ccbp.in/frontend/react-js/react-img.png",
    title: "React – A JavaScript library for building user interfaces",
    domainUrl: "reactjs.org",
  },
  {
    id: 7,
    timeAccessed: "01:25 PM",
    logoUrl: "https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png",
    title: "Stack Overflow - Where Developers Learn, Share, & Build Careers",
    domainUrl: "stackoverflow.com",
  },

  {
    id: 8,
    timeAccessed: "09:25 AM",
    logoUrl: "https://assets.ccbp.in/frontend/react-js/gmail-img.png",
    title: "Gmail",
    domainUrl: "mail.google.com",
  },
  {
    id: 9,
    timeAccessed: "09:00 AM",
    logoUrl: "https://assets.ccbp.in/frontend/react-js/google-img.png",
    title: "Google",
    domainUrl: "google.com",
  },
];

const BrowserHistory = () => {
  const [searchInput, setSearchInput] = useState("");
  const [historyList, setList] = useState(initialHistoryList);

  const onChangeSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  const handleDelete = (id) => {
    setList(historyList.filter((eachValue) => eachValue.id !== id));
  };

  const filterHistory = historyList.filter((eachHistory) =>
    eachHistory.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  const renderListPg = () => {
    return (
      <ul className="list-none p-0">
        {filterHistory.map((eachHistory) => (
          <HistoryItem
            key={eachHistory.id}
            historyDetails={eachHistory}
            onDelete={handleDelete}
          />
        ))}
      </ul>
    );
  };

  const renderNoHistoryPg = () => {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <p className="text-[#64748b] text-2xl">There is no history to show</p>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#ffffff]">
      <div className="flex justify-between items-center bg-[#3367d6] px-12 py-4">
        <img
          src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
          alt="app logo"
          className="h-[28px] md:h-[34px]"
        />
        <div className="flex h-[28px] md:h-[34px]">
          <div className="flex items-center justify-center w-[48px] bg-[#2850a7]">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="w-[16px] h-[16px]"
            />
          </div>
          <input
            type="search"
            value={searchInput}
            placeholder="Search History"
            className="w-full sm:w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px] h-full bg-[#2850a7] text-white px-4 outline-none placeholder:text-[#94a3b8] ml-[2px]"
            onChange={onChangeSearchInput}
          />
        </div>
      </div>
      <div className="max-w-[90%] mx-auto mt-8 bg-red">
        {filterHistory.length > 0 ? renderListPg() : renderNoHistoryPg()}
      </div>
    </div>
  );
};

export default BrowserHistory;
