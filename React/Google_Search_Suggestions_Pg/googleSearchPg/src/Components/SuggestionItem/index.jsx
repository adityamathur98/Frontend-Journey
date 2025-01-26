const SuggestionItem = (props) => {
  const { suggestionDetails, updateSearchInput } = props;
  const { suggestion } = suggestionDetails;

  const onClickSuggestion = () => {
    updateSearchInput(suggestion);
  };

  return (
    <li className="flex justify-between mt-[16px] list-none">
      <p className="text-[#475569] text-[16px] m-0 md:text-[20px]">
        {suggestion}
      </p>
      <button
        type="button"
        className="bg-transparent rounded-0 outline-none cursor-pointer"
        onClick={onClickSuggestion}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="w-[16px] h-[16px] md:w-[24px] md:h-[24px]"
        />
      </button>
    </li>
  );
};

export default SuggestionItem;
