const PasswordCard = (props) => {
  const { passwordDetails, isShowPassword, deleteItem } = props;
  const { id, website, username, password } = passwordDetails;
  const initialValue = username[0];

  const deletePassword = () => {
    deleteItem(id);
  };

  return (
    <li className="flex justify-start items-center border bg-transparent w-[200px] h-[85px]border-2 border-[#9ba9eb] rounded-[5px] p-[10px] mb-[15px] mr-[15px]">
      <p className="text-white font-[16px] bg-amber-500 w-[35px] text-center rounded-[25px] p-[8px] mr-[10px]">
        {initialValue}
      </p>
      <div className="flex flex-col justify-center items-center h-[100%] text-[#f8fafc]">
        <p className="text-[#ffffff] text-[12px] m-[2px]">{website}</p>
        <p className="text-[#ffffff] text-[12px] m-[2px]">{username}</p>
        {isShowPassword ? (
          <p className="text-[#ffffff] text-[12px] m-[2px]">{password}</p>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="w-[80px] h-[10px] ml-[2px] mt-[8px]"
          />
        )}
      </div>
      <button
        type="button"
        className="bg-transparent border-none w-[20px] h-[20px] outline-none ml-auto"
        data-testid="delete"
        onClick={deletePassword}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="w-[20px] h-[20px] cursor-pointer"
        />
      </button>
    </li>
  );
};

export default PasswordCard;
