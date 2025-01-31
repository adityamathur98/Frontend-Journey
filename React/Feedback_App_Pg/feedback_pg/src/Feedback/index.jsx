import React, { useEffect, useState } from "react";

const Feedback = (props) => {
  const [isFeedbackSelected, setFeedbackSelection] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const { resources } = props;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const onChangeSelect = () => {
    setFeedbackSelection(true);
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  const Shimmer = () => (
    <div className="flex flex-col items-center">
      <div className="w-[80%] h-[20px] bg-gray-300 animate-pulse rounded-md mb-4"></div>
      <div className="flex space-x-4">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="w-[60px] h-[60px] bg-gray-300 animate-pulse rounded-full"></div>
        ))}
      </div>
    </div>
  );

  const renderFeedbackuestion = () => {
    if (isLoading) return <Shimmer />;

    const { emojis } = resources;
    return (
      <div className="flex flex-col">
        <h1 className="text-[#0f172a] text-[18px] font-[500] md:text-[32px]">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="flex justify-around list-none mt-32px p-0">
          {emojis.map((emoji) => (
            <li key={emoji.id}>
              <button
                type="button"
                className="border-none bg-[#ffffff] cursor-pointer outline-none mt-5"
                onClick={onChangeSelect}>
                <img
                  src={emoji.imageUrl}
                  alt={emoji.name}
                  className="w-[45px] h-[45px] mb-[16px] md:w-[70px] md:h-[70px] mb-0"
                />
                <br />
                <span className="text-[#1e293b] text-[16px] md:text-[12px]">
                  {emoji.name}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const renderThankYouScreen = () => {
    if (isLoading) return <Shimmer />;

    const { loveEmojiUrl } = resources;

    return (
      <div className="flex flex-col justify-center items-center">
        <img
          src={loveEmojiUrl}
          alt="love emoji"
          className="w-[60px] h-[54px]"
        />
        <h1 className="text-[#0f172a] text-[24px] font-[500]">Thank You!</h1>
        <p className="text-[#0f172a] text-[16px] font-[300]">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    );
  };

  return (
    <div className="flex justify-center items-center bg-gradient-to-r from-[#ffeeee] to-[#ffc0bb] h-screen">
      <div className="bg-[#ffffff] w-[80%] rounded-[12px] max-w-[606px] p-[2px] md:p-[32px] lg:p-[64px]">
        {isFeedbackSelected ? renderThankYouScreen() : renderFeedbackuestion()}
      </div>
    </div>
  );
};

export default Feedback;
