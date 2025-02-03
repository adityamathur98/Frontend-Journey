import React, { useState } from "react";

const ReviewsCarousel = (props) => {
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);

  const { reviewsList } = props;

  const onClickLeftArrow = () => {
    if (activeReviewIndex > 0) {
      setActiveReviewIndex((prevState) => prevState - 1);
    }
  };

  const onClickRightArrow = () => {
    if (activeReviewIndex < reviewsList.length - 1) {
      setActiveReviewIndex((prevState) => prevState + 1);
    }
  };

  const renderActiveReview = (review) => {
    const { imgUrl, username, companyName, description } = review;

    return (
      <div className="flex flex-col items-center min-h-[300px]">
        <img src={imgUrl} alt={username} />
        <p className="text-[#ffffff] text-[18px] font-[700]">{username}</p>
        <p className="text-[#171f46] text-[14px]">{companyName}</p>
        <p className="text-center text-[#171f46] text-[16px]">{description}</p>
      </div>
    );
  };

  const currentReviewDetailObj = reviewsList[activeReviewIndex];

  return (
    <div className="flex flex-col items-center bg-[url('https://assets.ccbp.in/frontend/react-js/reviews-bg.png')] bg-cover bg-center h-screen">
      <h1 className="text-[#ffffff] text-[40px] font-[500] mt-[64px] md:text-[48px] md:mt-[150px]">
        Reviews
      </h1>
      <div className="flex items-center w-[85%] md:w-[45%] md:min-w-[622px]">
        <button
          type="button"
          onClick={onClickLeftArrow}
          data-testid="leftArrow"
          className="bg-transparent border-none cursor-pointer outline-none">
          <img
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            alt="left arrow"
          />
        </button>
        {renderActiveReview(currentReviewDetailObj)}
        <button
          type="button"
          data-testid="rightArrow"
          onClick={onClickRightArrow}
          className="bg-transparent border-none cursor-pointer outline-none">
          <img
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            alt="right arrow"
          />
        </button>
      </div>
    </div>
  );
};

export default ReviewsCarousel;
