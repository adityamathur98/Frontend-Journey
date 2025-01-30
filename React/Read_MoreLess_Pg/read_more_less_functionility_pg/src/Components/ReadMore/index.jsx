import React, { useState } from "react";

const ReadMore = (props) => {
  const [isReadMore, setReadMore] = useState(false);

  const { reactHooksDescription } = props;

  const description = isReadMore
    ? reactHooksDescription
    : reactHooksDescription.slice(0, 170);

  const buttonText = isReadMore ? "Read Less" : "Read More";

  const onClickReadMore = () => {
    setReadMore((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col items-center min-h-screen">
      <div className="flex flex-col items-center w-[80%] mt-[32px] mb-[32px] max-w-[550px] md:w-[95%] md:mt-[64px] md:mb-[64px]">
        <h1 className="text-[#1e293b] text-[24px] font-[500] m-0 leading-[1.33] md:text-[32px] md:leading-[1.5]">
          React Hooks
        </h1>
        <p className="text-center text-[#334155] text-[14px] mt-[12px] mb-[12px] leading-[1.33] md:text-[16px] md:mb-[16px] md:leading-[1.5]">
          Hooks are a new addition to React
        </p>
        <img
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
          className="w-[100%] mt-[12px] md:mt-[16px]"
        />
        <p className="text-[#334155] text-[14px] mt-[16px] mb-[8px] leading-[1.7] md:mb-[16px]">
          {description}
        </p>
        <button
          type="button"
          className="text-white font-medium text-[12px] 
                bg-[#1f81ff] border-none rounded-[6px] 
                mt-[8px] px-[16px] py-[8px] self-start cursor-pointer outline-none 
                leading-[1.33] 
                md:mt-[16px] md:self-center"
          onClick={onClickReadMore}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default ReadMore;
