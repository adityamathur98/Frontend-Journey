import React, { useState } from "react";

import UserProfile from "./components/UserProfile/";

import "./App.css";

const initialUserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    name: "Esther Howard",
    role: "Software Developer",
  },
  {
    uniqueNo: 2,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png",
    name: "Floyd Miles",
    role: "Software Developer",
  },
  {
    uniqueNo: 3,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png",
    name: "Jacob Jones",
    role: "Software Developer",
  },
  {
    uniqueNo: 4,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/devon-lane-img.png",
    name: "Devon Lane",
    role: "Software Developer",
  },
];

const App = () => {
  const [searchInput, setSearchInput] = useState("");
  const [userDetailsList, setUserDetailsList] = useState(
    initialUserDetailsList
  );

  const onChangeSearchInput = (event) => {
    setSearchInput(event.target.value);
  };

  const searchResult = userDetailsList.filter((eachUser) =>
    eachUser.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  const onDeleteUser = (uniqueNo) => {
    const filterUsersData = userDetailsList.filter(
      (eachUser) => eachUser.uniqueNo !== uniqueNo
    );

    setUserDetailsList(filterUsersData);
  };

  return (
    <div className="app-container">
      <h1 className="title">Users List</h1>
      <input
        type="search"
        className="block m-8 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        onChange={onChangeSearchInput}
        value={searchInput}
      />
      <ul className="list-container">
        {searchResult.map((eachUser) => (
          <UserProfile
            userDetails={eachUser}
            deleteUser={onDeleteUser}
            key={eachUser.uniqueNo}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;
