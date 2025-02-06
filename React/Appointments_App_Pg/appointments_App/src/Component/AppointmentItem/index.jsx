const AppointmentItem = (props) => {
  const { appointmentDetails, toggleStar } = props;
  const { id, title, dateInput, isStarred } = appointmentDetails;

  const onClickToggle = () => {
    toggleStar(id);
  };

  const starImgUrl = isStarred
    ? "https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png"
    : "https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png";

  return (
    <li className="list-none border border-[#b5b7c4] rounded-[12px] p-[16px] mb-[16px] md:ml-[16px] md:mr-[16px] md:mb-[32px] md:min-w-[297px]">
      <div className="flex justify-between items-center w-[100%] mb-[16px]">
        <p className="text-[#171f46] text-[16px] font-[500] m-0 md:text-[18px]">
          {title}
        </p>
        <button
          type="button"
          data-testid="star"
          className="bg-transparent p-0 border-none outline-none cursor-pointer"
          onClick={onClickToggle}>
          <img
            src={starImgUrl}
            alt="star"
            className="w-[20px] h-[20px] bg-transparent self-center border-none outline-none md:w-[24px] md:h-[24px]"
          />
        </button>
      </div>
      <p className="text-[#7e858e] text-[12px] m-0 md:text-[16px]">
        {dateInput}
      </p>
    </li>
  );
};
export default AppointmentItem;
