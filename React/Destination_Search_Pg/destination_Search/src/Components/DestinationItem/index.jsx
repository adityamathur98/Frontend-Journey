import "./index.css";

const DestinationItem = (props) => {
  const { destinationDetails } = props;
  const { name, imgUrl } = destinationDetails;

  return (
    <li className="list-none w-[235px] ml-[15px] mr-[15px] mb-[32px]">
      <img src={imgUrl} alt={name} className="w-[235px] h-[175px]" />
      <p className="text-[#000000] font-roboto text-[16px] text-[20px]">
        {name}
      </p>
    </li>
  );
};

export default DestinationItem;
