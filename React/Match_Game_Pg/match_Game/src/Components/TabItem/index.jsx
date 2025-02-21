const TabItem = (props) => {
  const { tabDetails, setTabId, isActive } = props;
  const { tabId, displayText } = tabDetails;

  const activeTabClassName = isActive
    ? "bg-yellow-500 text-black font-bold border-2 border-yellow-500 shadow-md"
    : "bg-gray-700 text-white hover:bg-gray-500";

  const onClickChange = () => {
    setTabId(tabId);
  };

  return (
    <li>
      <button
        type="button"
        className={`px-6 py-3 mx-2 rounded-lg transition-all cursor-pointer ${activeTabClassName}`}
        onClick={onClickChange}>
        {displayText}
      </button>
    </li>
  );
};

export default TabItem;
