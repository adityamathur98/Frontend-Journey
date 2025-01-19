import "./index.css";

const CardItem = (props) => {
  const { cardDetails } = props;
  const { title, description, imgUrl, className } = cardDetails;

  return (
    <li
      className={`${className} card-item bg-[#ffffff] rounded-[20px] pl-[24px] pr-[24px] pt-[32px] pb-[32px] ml-[24px] mr-[24px] mb-[48px]`}>
      <h1 className="heading text-[18px] font-medium">{title}</h1>
      <p className="description text-[14px]">{description}</p>
      <div className="flex justify-end">
        <img src={imgUrl} alt={title} className="w-[80px] h-[80px]" />
      </div>
    </li>
  );
};

export default CardItem;
