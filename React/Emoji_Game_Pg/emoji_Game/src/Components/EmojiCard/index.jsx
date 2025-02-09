const EmojiCard = (props) => {
  const { emojiDetails, clickEmoji } = props;
  const { id, emojiName, emojiUrl } = emojiDetails;

  const onClickEmoji = () => {
    clickEmoji(id);
  };

  return (
    <li className="w-[32%] list-none mt-[8px] mb-[8px] md:w-[24%] ">
      <button
        type="button"
        onClick={onClickEmoji}
        class="bg-[#ffffff33] cursor-pointer outline-none w-full h-[100px] border-[3px] border-[#ffffff30] rounded-[24px] md:h-[200px] flex justify-center items-center">
        <img src={emojiUrl} alt={emojiName} className="w-[50px] md:w-[100px]" />
      </button>
    </li>
  );
};

export default EmojiCard;
