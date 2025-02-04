const ContactItem = (props) => {
  const { contactDetails, toggleIsFavorite } = props;

  const { id, name, mobileNo, isFavorite } = contactDetails;

  const onClickToggle = () => {
    toggleIsFavorite(id);
  };

  const imgSrc = isFavorite
    ? "https://assets.ccbp.in/frontend/react-js/star-filled-img.png"
    : "https://assets.ccbp.in/frontend/react-js/star-outline-img.png";

  return (
    <li className="flex list-none border border-t-0 border-[#cbd5e1]">
      <div className="text-[#1e293b] text-[32px] flex items-center w-[33%]">
        <p>{name}</p>
      </div>
      <hr className="m-0 border border-[#334155] h-[1px]" />
      <div className="text-[#1e293b] text-[32px] flex items-center w-[33%] flex-grow">
        <p className="flex-grow">{mobileNo}</p>
        <button
          type="button"
          onClick={onClickToggle}
          className="bg-transparent outline-none border-none cursor-pointer">
          <img src={imgSrc} alt={name} />
        </button>
      </div>
    </li>
  );
};

export default ContactItem;
