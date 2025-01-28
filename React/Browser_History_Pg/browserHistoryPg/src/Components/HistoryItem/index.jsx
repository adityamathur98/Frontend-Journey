const HistoryItem = (props) => {
  const { historyDetails, onDelete } = props;
  const { id, timeAccessed, logoUrl, title, domainUrl } = historyDetails;

  const deleteHistory = () => {
    onDelete(id);
  };

  return (
    <li className="flex items-center py-4 px-2">
      <p className="w-32 text-[#475569] text-base">{timeAccessed}</p>
      <div className="flex items-center flex-1">
        <img src={logoUrl} alt="domain logo" className="w-8 h-8 mr-4" />
        <div className="flex items-center flex-1 gap-4">
          <p className="text-[#475569] text-base mb-1">{title}</p>
          <p className="text-[#64748b] text-sm">{domainUrl}</p>
        </div>
        <button
          type="button"
          className="bg-transparent border-0 cursor-pointer"
          testid="delete"
          onClick={deleteHistory}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="w-6 h-6"
          />
        </button>
      </div>
    </li>
  );
};

export default HistoryItem;
