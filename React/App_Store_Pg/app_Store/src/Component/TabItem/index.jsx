const TabItem = (props) => {
  const { tabDetails, isActive, setActiveTab } = props;
  const { tabId, displayText } = tabDetails;

  const activeTabClassname = isActive
    ? "text-[#2563eb] border-b-2 border-[#2563eb]"
    : "";

  const onChangeClick = () => {
    setActiveTab(tabId);
  };

  return (
    <li className="list-none">
      <button
        type="button"
        onClick={onChangeClick}
        className={`${activeTabClassname} text-[#7b8794] text-[14px] font-medium border-b-2 border-[#dfe2e5] border-transparent px-[16px] pb-[4px] bg-transparent outline-none cursor-pointer md:text-[16px] md:pl-[26px] md:pr-[26px] md:pb-[8px]`}>
        {displayText}
      </button>
    </li>
  );
};

export default TabItem;
