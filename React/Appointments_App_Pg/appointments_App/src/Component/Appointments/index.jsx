import React, { useState } from "react";

import { format } from "date-fns";

import AppointmentItem from "../AppointmentItem";

import { v4 as uuidv4 } from "uuid";

const Appointments = () => {
  const [titleInput, setTitleInput] = useState("");
  const [dateInput, setDateInput] = useState("");
  const [appointmentsList, setAppointmentsList] = useState([]);
  const [isFilterActive, setIsFilterActive] = useState(false);

  const onAddAppointment = (e) => {
    e.preventDefault();
    const formattedDate = dateInput
      ? format(new Date(dateInput), "dd MMMM yyyy EEEE")
      : "";
    const newAppointment = {
      id: uuidv4(),
      title: titleInput,
      dateInput: formattedDate,
      isStarred: false,
    };

    setAppointmentsList((prevState) => [...prevState, newAppointment]);
    setTitleInput("");
    setDateInput("");
  };

  const onChangeTitle = (e) => {
    setTitleInput(e.target.value);
  };

  const onChangeDate = (e) => {
    setDateInput(e.target.value);
  };

  const onFilter = () => {
    setIsFilterActive((prevState) => !prevState);
  };

  const toggleStar = (id) => {
    setAppointmentsList((prevState) =>
      prevState.map((eachAppointemt) =>
        eachAppointemt.id === id
          ? { ...eachAppointemt, isStarred: !eachAppointemt.isStarred }
          : eachAppointemt
      )
    );
  };

  const filteredAppointmentList = isFilterActive
    ? appointmentsList.filter((appointment) => appointment.isStarred)
    : appointmentsList;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-t from-[#9796f0] to-[#fbc7d4]">
      <div className="bg-[#ffffff] rounded-[12px] max-w-[1120px] w-[90%] flex flex-col md:flex-row md:justify-between items-center p-8 shadow-lg">
        <div className="flex flex-col justify-center items-center w-[86%] max-w-[972px]">
          <h1 className="text-[#171f46] font-roboto text-[22px] font-medium mt-0 mb-6 md:text-[32px] md:mb-12">
            Appointment
          </h1>
          <div className="flex justify-between w-[100%] mt-[64px]">
            <form
              onSubmit={onAddAppointment}
              className="flex flex-col w-[100%] md:w-[45%] md:max-w-[320px]">
              <label
                htmlFor="title"
                className="text-[#7e858e] text-[12px] font-[500] mb-[8px]">
                Title
              </label>
              <input
                type="text"
                id="title"
                value={titleInput}
                onChange={onChangeTitle}
                placeholder="Title"
                className="text-[#131415] font-roboto text-xs border border-[#7e858e] rounded h-10 px-4 py-2 mb-6 outline-none md:text-[14px]"
              />
              <label
                id="date"
                className="text-[#7e858e] text-[12px] font-[500] mb-[8px]">
                Date
              </label>
              <input
                type="date"
                id="date"
                value={dateInput}
                onChange={onChangeDate}
                className="text-[#131415] font-roboto text-xs border border-[#7e858e] rounded h-10 px-4 py-2 mb-6 outline-none md:text-[14px]"
              />
              <button
                type="submit"
                className="self-start bg-[#8b5cf6] text-[#ffffff] text-[12px] font-[500] border-none rounded-[8px] px-[16px] py-[8px] outline-none">
                Add
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointment"
              className="hidden md:block md:w-[45%] max-w-[400px]"
            />
          </div>
          <hr className="border border-[#b5b7c4] w-[100%] mt-[25px] mb-[32px]" />
          <div className="flex justify-between items-center self-stretch md:px-[12px]">
            <h1 className="text-[#171f46] text-[20px] font-[500] m-0 md:text-[24px]">
              Appointemnts
            </h1>
            <button
              type="button"
              onClick={onFilter}
              className="font-roboto text-[12px] font-semibold rounded-[25px] px-4 py-1 outline-none text-[#9897f0] bg-[#ffffff] border-2 border-[#9897f0] cursor-pointer">
              Starred
            </button>
          </div>
          <ul className="flex flex-col w-[100%] p-0 mt-[24px] md:flex-row flex-wrap">
            {filteredAppointmentList.map((eachAppointemt) => (
              <AppointmentItem
                key={eachAppointemt.id}
                appointmentDetails={eachAppointemt}
                toggleStar={toggleStar}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
