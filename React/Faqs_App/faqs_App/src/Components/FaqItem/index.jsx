import React, { useState } from "react";

const FaqItem = (props) => {
  const [isActive, setIsActive] = useState(false);

  const { faqDetails } = props;
  const { questionText, answerText } = faqDetails;

  const renderAnswer = () => {
    if (isActive) {
      return (
        <div>
          <hr className="border border-[#e4e7eb]" />
          <p className="text-[#9aa5b1] font-roboto md:text-[16px] sm:text-[12px]">
            {answerText}
          </p>
        </div>
      );
    }
    return null;
  };

  const renderActiveImage = () => {
    const image = isActive
      ? "https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
      : "https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png";
    const altText = isActive ? "minus" : "plus";

    return (
      <button
        type="button"
        className="bg-transparent border-none outline-none cursor-pointer"
        onClick={() => setIsActive((prevState) => !prevState)}>
        <img src={image} alt={altText} className="w-[15px] h-[15px]" />
      </button>
    );
  };

  return (
    <li className="w-[100%] border border-[#d7dae6] rounded-[16px] mb-[24px] p-[16px]">
      <div className="flex justify-between items-center">
        <h2 className="text-[#52606d] font-roboto text-[12px] md:text-[24px] font-[500] ">
          {questionText}
        </h2>
        {renderActiveImage()}
      </div>
      {renderAnswer()}
    </li>
  );
};

export default FaqItem;
