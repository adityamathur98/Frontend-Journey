import React, { useState } from "react";

import DenominationItem from "../DenominationItem";

import "./index.css";

const CashWithdrawal = (props) => {
  const [amount, setAmount] = useState(2000);

  const { denominationsList } = props;
  const name = "Ashish Jalani";
  const initial = name.slice(0, 1);

  const onDeductBalance = (value) => {
    setAmount(Math.max(amount - value, 0));
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-[#150b3e] w-[100%] rounded-[16px] pt-[24px] pl-[18px] pb-[8px] pr-[18px] max-w-[350px] md:w-[50%] md:pt-[48px] md:pl-[36px] md:pb-[16px] md:pr-[36px] md:w-[422px]">
        <div className="flex items-center">
          <div className="flex justify-center items-center bg-[#c7d2fe] h-[48px] w-[48] rounded-[24px] md:h-[64px] md:w-[64px] md:rounded-[32px]">
            <p className="text-[#7c3aed] text-[14px]">{initial}</p>
          </div>
          <p className="text-[#d4d2db] text-[16px] ml-[12px] md:text-[20px]">
            {name}
          </p>
        </div>
        <div className="flex justify-between mt-[24px]">
          <p className="text-[#585076] text-[16px] font-[500] mt-[4px] md:text[20px] md:mt-[8px]">
            Your Balance
          </p>
          <p className="text-[#d4d2db] text-[24px] font-[500] m-0 md:text-[32px]">
            {amount} <br />
            <span className="text-[#585076] text-[12px] font-[500]">
              In Rupees
            </span>
          </p>
        </div>
        <p className="text-[#d4d2db] text-[20px] font-[500] mt-[16px] md:text-[24px] md:mt-[24px]">
          Withdrew
        </p>
        <p className="text-[#585076] text-[12px] font-[500] mb-[12px] md:text-[16px] md:mb-[24px] mt-[8px]">
          CHOOSE SUM (IN RUPEES)
        </p>
        <ul className="pl-0 flex flex-wrap justify-center">
          {denominationsList.map((eachItem) => (
            <DenominationItem
              key={eachItem.id}
              denominationDetails={eachItem}
              deductAmountBalance={onDeductBalance}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CashWithdrawal;
