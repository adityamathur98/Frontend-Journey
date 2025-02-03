import React, { useState } from "react";

import TabItem from "../TabItem";
import AppItem from "../AppItem";

const SEARCH_ICON_URL =
  "https://assets.ccbp.in/frontend/react-js/app-store/app-store-search-img.png";

const tabsList = [
  { tabId: "SOCIAL", displayText: "Social" },
  { tabId: "GAMES", displayText: "Games" },
  { tabId: "NEWS", displayText: "News" },
  { tabId: "FOOD", displayText: "Food" },
];

const appsList = [
  {
    appId: 0,
    appName: "Facebook",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/social-facebook.png",
    category: "SOCIAL",
  },
  {
    appId: 1,
    appName: "Messenger",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/social-messenger.png",
    category: "SOCIAL",
  },
  {
    appId: 2,
    appName: "WhatsApp",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/social-whatsapp.png",
    category: "SOCIAL",
  },
  {
    appId: 3,
    appName: "Instagram",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/social-instagram.png",
    category: "SOCIAL",
  },
  {
    appId: 4,
    appName: "Snapchat",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/social-snapchat.png",
    category: "SOCIAL",
  },
  {
    appId: 5,
    appName: "Twitter",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/social-twitter.png",
    category: "SOCIAL",
  },
  {
    appId: 6,
    appName: "Pinterest",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/social-pinterest.png",
    category: "SOCIAL",
  },
  {
    appId: 7,
    appName: "WeChat",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/social-wechat.png",
    category: "SOCIAL",
  },
  {
    appId: 8,
    appName: "LinkedIn",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/social-linkedin.png",
    category: "SOCIAL",
  },
  {
    appId: 9,
    appName: "Telegram",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/social-telegram.png",
    category: "SOCIAL",
  },
  {
    appId: 10,
    appName: "Subway Surfers",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/games-subway-surfers.png",
    category: "GAMES",
  },
  {
    appId: 11,
    appName: "Crossy Road",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/games-crossy-road.png",
    category: "GAMES",
  },
  {
    appId: 12,
    appName: "Super Chef",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/games-super-chef.png",
    category: "GAMES",
  },
  {
    appId: 13,
    appName: "Angry Birds",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/games-angry-birds.png",
    category: "GAMES",
  },
  {
    appId: 14,
    appName: "Hill Climb 2",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/games-hill-climb-2.png",
    category: "GAMES",
  },
  {
    appId: 15,
    appName: "Temple Run",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/games-temple-run.png",
    category: "GAMES",
  },
  {
    appId: 16,
    appName: "Dr. Driving",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/games-dr-driving.png",
    category: "GAMES",
  },
  {
    appId: 17,
    appName: "Smurfs Bubble",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/games-smurfs-bubble.png",
    category: "GAMES",
  },
  {
    appId: 18,
    appName: "Grade Learning",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/games-grade-learning.png",
    category: "GAMES",
  },
  {
    appId: 19,
    appName: "My Talking Tom",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/games-my-talking-tom.png",
    category: "GAMES",
  },
  {
    appId: 20,
    appName: "Inshorts",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/news-inshorts.png",
    category: "NEWS",
  },
  {
    appId: 21,
    appName: "Way2News",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/news-way2news.png",
    category: "NEWS",
  },
  {
    appId: 22,
    appName: "Google News",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/news-google-news.png",
    category: "NEWS",
  },
  {
    appId: 23,
    appName: "Flipboard",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/news-flipboard.png",
    category: "NEWS",
  },
  {
    appId: 24,
    appName: "SmartNews",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/news-smart-news.png",
    category: "NEWS",
  },
  {
    appId: 25,
    appName: "BBC News",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/news-bbc-news.png",
    category: "NEWS",
  },
  {
    appId: 26,
    appName: "CNN News",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/news-cnn-news.png",
    category: "NEWS",
  },
  {
    appId: 27,
    appName: "Daily Wire",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/news-daily-wire.png",
    category: "NEWS",
  },
  {
    appId: 28,
    appName: "AP News",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/news-ap-news.png",
    category: "NEWS",
  },
  {
    appId: 29,
    appName: "News Break",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/news-news-break.png",
    category: "NEWS",
  },
  {
    appId: 30,
    appName: "Zomato",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/food-zomato.png",
    category: "FOOD",
  },
  {
    appId: 31,
    appName: "Swiggy",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/food-swiggy.png",
    category: "FOOD",
  },
  {
    appId: 32,
    appName: "Domino's Pizza",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/food-dominos.png",
    category: "FOOD",
  },
  {
    appId: 33,
    appName: "All in One",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/food-all-in-one.png",
    category: "FOOD",
  },
  {
    appId: 34,
    appName: "Instacart",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/food-insta-cart.png",
    category: "FOOD",
  },
  {
    appId: 35,
    appName: "Saucey",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/food-saucey.png",
    category: "FOOD",
  },
  {
    appId: 36,
    appName: "Waitr",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/food-waitr.png",
    category: "FOOD",
  },
  {
    appId: 37,
    appName: "Grubhub",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/food-grubhub.png",
    category: "FOOD",
  },
  {
    appId: 38,
    appName: "Mercato",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/app-store/food-mercato.png",
    category: "FOOD",
  },
  {
    appId: 39,
    appName: "DOT",
    imageUrl: "https://assets.ccbp.in/frontend/react-js/app-store/food-dot.png",
    category: "FOOD",
  },
];

const AppStore = () => {
  const [activeTabId, setActiveTabId] = useState(tabsList[0].tabId);
  const [searchInput, setSearchInput] = useState("");

  const setActiveTab = (id) => {
    setActiveTabId(id);
  };

  const onChangeInput = (e) => {
    setSearchInput(e.target.value);
  };

  const searchResult = appsList.filter((eachApp) =>
    eachApp.appName.toLowerCase().includes(searchInput.toLowerCase())
  );

  const filterAppList = searchResult.filter(
    (eachApp) => eachApp.category === activeTabId
  );

  return (
    <div className="flex justify-center bg-gradient-to-b from-[#fff1eb] to-[#ace0f9] min-h-screen">
      <div className="flex flex-col items-center w-[85%] max-w-[1110px]">
        <h1 className="text-[#1e293b] text-[40px] mt-[64px] mb-[48px] md:text-[48px] md:mt-[96px]">
          App Store
        </h1>
        <div className="flex items-center h-[40px] bg-transparent w-[100%] max-w-[250px] md:max-w-[480px] rounded-[4px] border border-[#7b8794] pl-[16px] pt-[8px] pb-[8px] pr-[16px]">
          <input
            type="text"
            value={searchInput}
            placeholder="Search"
            onChange={onChangeInput}
            className="text-[16px] font-[500] border-none outline-none bg-transparent flex-grow"
          />
          <img
            src={SEARCH_ICON_URL}
            alt="search icon"
            className="w-[24px] h-[24px]"
          />
        </div>
        <ul className="flex pl-0 mt-[32px] md:mt-[48px]">
          {tabsList.map((eachTab) => (
            <TabItem
              key={eachTab.tabId}
              tabDetails={eachTab}
              isActive={activeTabId === eachTab.tabId}
              setActiveTab={setActiveTab}
            />
          ))}
        </ul>
        <ul className="flex flex-wrap justify-center w-[100%] pl-0">
          {filterAppList.map((eachApp) => (
            <AppItem key={eachApp.appId} appDetails={eachApp} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AppStore;
