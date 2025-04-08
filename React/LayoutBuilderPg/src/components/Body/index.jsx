import { useContext } from "react";
import ConfigurationContext from "../../context/ConfigurationContext";

const Body = () => {
  const { showContent, showLeftNavbar, showRightNavbar } =
    useContext(ConfigurationContext);

  return (
    <div className="flex flex-col items-center justify-center self-stretch md:flex-row md:justify-between md:h-[448px] md:mt-[8px] md:mb-[12px]">
      {showLeftNavbar && (
        <div className="flex flex-col justofy-center items-center self-stretch flex-wrap shrink-0 text-[#475569] bg-[#e2e8f0] h-[30%] p-[32px] mt-[2px] mb-[2px] md:justify-start md:items-start md:h-[100%] md:w-[30%] md:max-w-[250px] md:mx-[2px]">
          <h1 className="text-[#475569] text-center font-roboto font-[18px] font-[600] md:text-start md:text-[20px]">
            Left Navbar Menu
          </h1>
          <ul className="flex justify-center flex-wrap list-none m-0 p-0 md:flex-col">
            <li className="font-roboto text-[20px] m-[10px] md:text-[24px]">
              Item 1
            </li>
            <li className="font-roboto text-[20px] m-[10px] md:text-[24px]">
              Item 2
            </li>
            <li className="font-roboto text-[20px] m-[10px] md:text-[24px]">
              Item 3
            </li>
            <li className="font-roboto text-[20px] m-[10px] md:text-[24px]">
              Item 4
            </li>
          </ul>
        </div>
      )}
      {showContent && (
        <div className="flex flex-col flex-grow bg-[#f1f5f9] h-full p-8 mt-[6px] mb-[2px] md:mx-[2px]">
          <h1 className="text-[#475569] text-center md:text-left font-roboto text-[18px] md:text-[20px] font-semibold">
            Content
          </h1>
          <p className="text-[#475569] text-center text-[20px] m-0 md:text-left md:text-[24px] font-roboto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
      )}
      {showRightNavbar && (
        <div className="flex flex-col justify-center self-stretch flex-shrink-0 bg-[#e2e8f0] h-[30%] p-[32px] my-[2px] md:justify-start md:h-[100%] md:w-[30%] md:max-w-[250px] md:p-[32px] md:mx-[2px]">
          <h1 className="text-[#475569] text-center md:text-left font-roboto text-[18px] md:text-[20px] font-semibold">
            Right Navbar
          </h1>
          <div className="flex justify-center md:flex-col md:w-[100%]">
            <p className="flex justify-center items-center text-[#475569] font-roboto text-[20px] h-[150x] w-[180px] border border-[#64748b] m-[5px] md:text-[24px] md:w-[100%] md:mb-[10px] md:mr-0">
              Ad 1
            </p>
            <p className="flex justify-center items-center text-[#475569] font-roboto text-[20px] h-[150x] w-[180px] border border-[#64748b] m-[5px] md:text-[24px] md:w-[100%] md:mb-[10px] md:mr-0">
              Ad 2
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Body;
