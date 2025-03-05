const UserInfo = () => {
  return (
    <div className="flex flex-col items-center">
      <img
        src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
        alt="profile img"
        className="bg-[#ffffff] w-[100px] mt-[31px]"
      />
      <h2 className="font-bold text-[28px] text-[#12022f] mt-[20px] mb-[8px]">
        Wade Warren
      </h2>
      <p className="font-normal text-[14px] text-center text-[#616e7c]">
        Software developer at UK
      </p>
    </div>
  );
};

export default UserInfo;
