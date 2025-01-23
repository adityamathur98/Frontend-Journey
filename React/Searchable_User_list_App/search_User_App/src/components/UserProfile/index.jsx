import "./index.css";

const UserProfile = (props) => {
  const { userDetails, deleteUser } = props;
  const { imageUrl, name, role, uniqueNo } = userDetails;

  const onDelete = () => {
    deleteUser(uniqueNo);
  };

  return (
    <li className="user-card-container">
      <img src={imageUrl} className="profile-pic" alt="profile-pic" />
      <div className="user-details-container">
        <h1 className="user-name"> {name} </h1>
        <p className="user-designation"> {role} </p>
      </div>
      <button
        type="button"
        class="text-[30px] font-medium font-roboto text-[#594d6d] py-1.5 px-3 ml-3 bg-transparent border-none rounded-md hover:cursor-pointer"
        onClick={onDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cross-img.png"
          alt="cross"
          className="w-[15px] h-[15px]"
        />
      </button>
    </li>
  );
};

export default UserProfile;
