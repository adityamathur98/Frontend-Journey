const ThumbnailItem = (props) => {
  const { itemDetails, isActive, onChangeImage } = props;
  const { id, thumbnailUrl, thumbnailAltText } = itemDetails;

  const onClickImg = () => {
    onChangeImage(id);
  };

  const activeImgClassName = isActive ? "opacity-100" : "";

  return (
    <li className="mr-[16px] mb-[16px]">
      <button
        type="button"
        className="bg-transparent border-none p-0 outline-none cursor-pointer"
        onClick={onClickImg}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`w-[60px] h-[60px] opacity-50 ${activeImgClassName}`}
        />
      </button>
    </li>
  );
};

export default ThumbnailItem;
