const AppItem = (props) => {
  const { appDetails } = props;
  const { appName, imageUrl } = appDetails;

  return (
    <li className="flex flex-col items-center list-none bg-[#ffffff] rounded-[12px] pt-[16px] ml-[5px] mr-[5px] mb-[10px] w-[45%] max-w-[128px] md:max-w-[198px] md:pt-[24px] md:ml-[10px] md:pr-[10px] md:mb-[20px]">
      <img
        src={imageUrl}
        alt={appName}
        className="w-[70px] h-[70px] md:w-[102px] md:h-[102px]"
      />
      <p className="text-[#1e293b] text-[16px] md:text-[24px]">{appName}</p>
    </li>
  );
};

export default AppItem;
