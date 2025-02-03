import React, { useState } from "react";

const countryAndCapitalsList = [
  {
    id: "NEW_DELHI",
    capitalDisplayText: "New Delhi",
    country: "India",
  },
  {
    id: "LONDON",
    capitalDisplayText: "London",
    country: "United Kingdom",
  },
  {
    id: "PARIS",
    capitalDisplayText: "Paris",
    country: "France",
  },
  {
    id: "KATHMANDU",
    capitalDisplayText: "Kathmandu",
    country: "Nepal",
  },
  {
    id: "HELSINKI",
    capitalDisplayText: "Helsinki",
    country: "Finland",
  },
];

const CapitalApp = () => {
  const [activeCapitalId, setActiveCapitalId] = useState(
    countryAndCapitalsList[0].id
  );

  const getCountry = () => {
    const activeCapitalAndCountry = countryAndCapitalsList.find(
      (eachCapital) => eachCapital.id === activeCapitalId
    );

    return activeCapitalAndCountry.country;
  };

  const onChangeCapital = (e) => {
    setActiveCapitalId(e.target.value);
  };

  const country = getCountry();

  return (
    <div className="flex justify-center items-center h-screen bg-[#93c5fd]">
      <div className="bg-[#f8fafc] rounded-[16px] w-[96%] p-[20px] max-w-[345px] md:pt-[44px] md:pl-[64px] md:pr-[64px] md:max-w-[520px]">
        <h1 className="text-[#1e293b] text-[24px] font-[500] md:text-[32px]">
          Countries And Capitals
        </h1>
        <div className="flex items-center">
          <select
            onChange={onChangeCapital}
            value={activeCapitalId}
            className="bg-[#f8fafc] font-roboto text-[12px] font-medium w-[100px] h-[40px] border border-[#cbd2d9] rounded-[4px] px-[8px] py-[4px] outline-none md:pt-[8px] md:pb-[8px] md:pl-[16px] md:w-[180px] md:text-[16px]">
            {countryAndCapitalsList.map((eachCapital) => (
              <option key={eachCapital.id} value={eachCapital.id}>
                {eachCapital.capitalDisplayText}
              </option>
            ))}
          </select>
          <p className="text-[#323f4b] text-[12px] font-[500] md:text-[14px]">
            is capital of which country?
          </p>
        </div>
        <p className="text-[#1e293b] text-[16px] font-[500] md:text-[24px] mt-[18px] ml-[6px]">
          {country}
        </p>
      </div>
    </div>
  );
};

export default CapitalApp;
