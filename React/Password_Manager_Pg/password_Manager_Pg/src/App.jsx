import React, { useState } from "react";

import PasswordCard from "./Components/PasswordCard";

import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [websiteInput, setWebsiteInput] = useState("");
  const [usernameInput, setUsernameInput] = useState("");
  const [password, setPassword] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [passwordList, setPasswordList] = useState([]);
  const [isShowPassword, setIsShowPassword] = useState(false);

  const onChangeSearch = (e) => {
    setSearchInput(e.target.value);
  };

  const onChangeWebsite = (e) => {
    setWebsiteInput(e.target.value);
  };

  const onChangeUsername = (e) => {
    setUsernameInput(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const addContent = (e) => {
    e.preventDefault();
    const newObj = {
      id: uuidv4(),
      website: websiteInput,
      username: usernameInput,
      password,
    };

    setPasswordList((prevState) => [...prevState, newObj]);
    setWebsiteInput("");
    setUsernameInput("");
    setPassword("");
  };

  const deleteItem = (id) => {
    const filterdList = passwordList.filter((eachValue) => eachValue.id !== id);
    setPasswordList(filterdList);
  };

  const showPassword = (e) => {
    if (e.target.checked) {
      setIsShowPassword(true);
    } else {
      setIsShowPassword(false);
    }
  };

  const renderNoPasswordView = () => {
    return (
      <div className="flex flex-col justify-center items-center w-[100%]">
        <img
          src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
          alt="no passwords"
          className="w-[220px] h-[170px]"
        />
        <p className="text-[#ffffff] font-semibold text-[18px]">No Passwords</p>
      </div>
    );
  };

  const renderPasswordView = () => {
    return (
      <ul className="flex justify-start items-start flex-wrap w-[100%]">
        {filteredList.map((eachPassword) => (
          <PasswordCard
            key={eachPassword.id}
            passwordDetails={eachPassword}
            isShowPassword={isShowPassword}
            deleteItem={deleteItem}
          />
        ))}
      </ul>
    );
  };

  const filteredList = passwordList.filter((eachValue) =>
    eachValue.website.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center p-[20px] min-h-screen max-h-[100%] bg-[#c3caea] px-[100px]">
      <img
        src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
        alt="app logo"
        className="w-[150px] h-[45px] mb-[30px] self-start"
      />
      <div className="flex flex-col md:flex-row justify-between items-center w-[100%] min-h-[50vh] bg-[#5763a5] p-[40px] rounded-[5px] mb-[20px]">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
          alt="password manager"
          className="md:hidden w-[250px] md:w-[350px]"
        />
        <form
          className="bg-[#454f84] flex flex-col justify-start items-start w-[350px] h-auto text-[#f8fafc] rounded-[5px] p-[20px]"
          onSubmit={addContent}>
          <h1 className="text-[#f8fafc] text-[16px] font-normal mb-3">
            Add New Password
          </h1>
          <div className="flex justify-start items-center bg-[#f8fafc] w-full h-[35px] mb-[20px] rounded-[5px]">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
              alt="website"
              className="w-[14px] h-[14px] m-[10px]"
            />
            <input
              type="text"
              value={websiteInput}
              onChange={onChangeWebsite}
              placeholder="Enter Website"
              className="flex-1 bg-transparent outline-none border-0-2 text-[16px] text-black"
            />
          </div>

          <div className="flex justify-start items-center bg-[#f8f8afc] w-full h-[35px] mb-[20px] rounded-[5px] bg-white">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
              alt="username"
              className="w-[14px] h-[14px] m-[10px]"
            />
            <input
              type="text"
              value={usernameInput}
              onChange={onChangeUsername}
              placeholder="Enter Username"
              className="flex-1 bg-transparent outline-none border-0-2 text-[16px] text-black"
            />
          </div>

          <div className="flex justify-start items-center bg-[#f8f8afc] w-full h-[35px] mb-[20px] rounded-[5px] bg-white">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
              alt="password"
              className="w-[14px] h-[14px] m-[10px]"
            />
            <input
              type="text"
              value={password}
              onChange={onChangePassword}
              placeholder="Enter Password"
              className="flex-1 bg-transparent outline-none border-0-2 text-[16px] text-black"
            />
          </div>
          <button
            type="submit"
            className="self-end bg-[#0b69ff] text-white rounded-[5px] border-none outline-none w-[80px] h-[30px] p-[5px] text-[12px]">
            Add
          </button>
        </form>
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
          alt="password manager"
          className="sm:hidden md:block w-[25%] h-[100%]"
        />
      </div>
      <div className="flex flex-col justify-start bg-[#5763a5] p-[20px] mb-[20px] rounded-[6px] w-[100%] min-h-[50vh] max-h-[100%]">
        <div className="w-[100%] flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-[#f8f8fc] text-[15px] mr-[5px]">
              Your Password
            </h1>
            <p className="border border-[#9ba9eb] rounded-[10px] w-[20px] text-[10px] text-[#f8fafc] text-center">
              {filteredList.length}
            </p>
          </div>
          <div className="flex items-center bg-[#f8fafc] w-[205px] mb-[20px] rounded-[5px] h-[22px]">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              alt="search"
              className="w-[14px] h-[14px] m-[10px]"
            />
            <input
              type="search"
              value={searchInput}
              placeholder="Search"
              onChange={onChangeSearch}
              className="text-[#000000] bg-transparent outline-none border-none w-[100%]"
            />
          </div>
        </div>
        <hr className="bg-[#9ba9eb] h-[1px] w-[100%] border-none" />
        <div className="flex items-center self-end mt-3">
          <input
            type="checkbox"
            id="check"
            className="text-[#ffffff] w-[15px] h-[15px] mr-[10px] border-none outline-none"
            onChange={showPassword}
          />
          <label htmlFor="check" className="text-[#f8fafc] text-[14px]">
            Show Passwords
          </label>
        </div>
        {filteredList.length === 0
          ? renderNoPasswordView()
          : renderPasswordView()}
      </div>
    </div>
  );
};

export default App;
