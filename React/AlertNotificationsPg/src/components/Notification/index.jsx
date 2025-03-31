import { AiOutlineClose } from "react-icons/ai"; // Example icon

const Notification = (props) => {
  const { children } = props;
  return (
    <div className="flex justify-between items-center w-[100%] max-w-[600px] border border-[#e5e5e5] rounded-[5px] mb-[20px] py-[8px] pl-[22px] pr-[16px] md:py-[12px] md:px-[20px]">
      <div className="flex">{children}</div>
      <AiOutlineClose className="text-[#475569] h-[70px] min-w-[25px] mx-[10px]" />
    </div>
  );
};

export default Notification;
