import { v4 as uuidv4 } from "uuid";

import ContactItem from "./ContactItem";

import React, { useState } from "react";

import "./App.css";

const initialContactsList = [
  {
    id: uuidv4(),
    name: "Ram",
    mobileNo: 9999988888,
    isFavorite: false,
  },
  {
    id: uuidv4(),
    name: "Pavan",
    mobileNo: 8888866666,
    isFavorite: true,
  },
  {
    id: uuidv4(),
    name: "Nikhil",
    mobileNo: 9999955555,
    isFavorite: false,
  },
];

const App = () => {
  const [contactList, setContactList] = useState(initialContactsList);
  const [name, setName] = useState("");
  const [mobileNo, setMobileNo] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNumber = (e) => {
    setMobileNo(e.target.value);
  };

  const onSubmitAdd = (e) => {
    e.preventDefault();
    const newContact = {
      id: uuidv4(),
      name,
      mobileNo,
      isFavorite: false,
    };

    setContactList((prevState) => [...prevState, newContact]);
    setName("");
    setMobileNo("");
  };

  const toggleFavorite = (id) => {
    setContactList((prevState) =>
      prevState.map((eachContact) =>
        id === eachContact.id
          ? { ...eachContact, isFavorite: !eachContact.isFavorite }
          : eachContact
      )
    );
  };

  return (
    <div className="flex justify-center min-h-screen">
      <div className="w-[80%] max-w-[1140px]">
        <h1 className="text-[#1e293b] text-[32px] font-[500] mt-[96px] mb-[32px]">
          Contacts
        </h1>
        <form
          onSubmit={onSubmitAdd}
          className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            value={name}
            placeholder="Name"
            onChange={onChangeName}
            className="text-[#1e293b] font-roboto border border-[#d7dfe9] rounded-[2px] sm:w-[280px] h-[48px] pl-4 mr-[15px] outline-none mb-[10px] flex-grow max-w-[320px]"
          />
          <input
            type="text"
            value={mobileNo}
            placeholder="Mobile Number"
            onChange={onChangeNumber}
            className="text-[#1e293b] font-roboto border border-[#d7dfe9] rounded-[2px] sm:w-[280px] h-[48px] pl-4 mr-[15px] outline-none mb-[10px] flex-grow max-w-[320px]"
          />
          <button
            type="submit"
            className="bg-[#0ea5e9] text-white text-[14px] rounded-[6px] border-none px-6 py-3 outline-none cursor-pointer mb-[10px] max-w-[200px]">
            Add Contact
          </button>
        </form>
        <ul className="pl-0 mt-[48px]">
          <li className="flex bg-[#f1f5f9] list-none border border-[#cbd5e1]">
            <p className="text-[#334155] text-[16px] font-medium ml-8 w-[33%] border-r-0">
              Name
            </p>
            <hr className="m-0 border border-[#cbd5e1]" />
            <p className="text-[#334155] text-[16px] font-medium ml-8">
              Mobile Number
            </p>
          </li>
          {contactList.map((eachContact) => (
            <ContactItem
              key={eachContact.id}
              contactDetails={eachContact}
              toggleIsFavorite={toggleFavorite}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
