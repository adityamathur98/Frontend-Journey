const EventItem = (props) => {
  const { eventDetails, setActiveEventId } = props;
  const { id, imageUrl, name, location } = eventDetails;

  const onClickEvent = () => {
    setActiveEventId(id);
  };

  return (
    <li className="w-[90%] list-none mr-[24px] mb-[32px]">
      <button
        type="button"
        className="bg-transparent border-none p-0 outline-none cursor-pointer"
        onClick={onClickEvent}>
        <img
          src={imageUrl}
          alt="event"
          className="w-[100%] border-2 border-[#2ddf4b] max-w-[460px]"
        />
      </button>
      <p className="text-[#f8fafc] text-[24px] font-[500] leading-[1.2] m-0 mt-[12px]">
        {name}
      </p>
      <p className="text-[#f8fafc] text-[16px] leading-[24px] m-0 mt-[4px]">
        {location}
      </p>
    </li>
  );
};

export default EventItem;
