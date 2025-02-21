const ImageItem = (props) => {
  const { imageDetails, imageClick } = props;
  const { thumbnailUrl } = imageDetails;

  const onClickThumbnail = () => {
    imageClick(thumbnailUrl);
  };

  return (
    <li className="list-none">
      <button
        type="button"
        className="w-[86px] h-[86px] bg-transparent outline-none mr-[14px] mb-[14px] flex flex-col items-center justify-center"
        onClick={onClickThumbnail}>
        <img
          src={thumbnailUrl}
          alt="thumbnail"
          className="w-[86px] h-[86px] object-cover rounded-md"
        />
      </button>
    </li>
  );
};

export default ImageItem;
