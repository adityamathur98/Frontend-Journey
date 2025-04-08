import { useContext } from "react";
import ConfigurationContext from "../../context/ConfigurationContext";

const ConfigurationController = () => {
  const {
    showContent,
    showLeftNavbar,
    showRightNavbar,
    onToggleShowContent,
    onToggleShowLeftNavbar,
    onToggleShowRightNavbar,
  } = useContext(ConfigurationContext);

  const onChangeContent = () => {
    onToggleShowContent();
  };

  const onChangeLeftNavbar = () => {
    onToggleShowLeftNavbar();
  };

  const onChangeRightNavbar = () => {
    onToggleShowRightNavbar();
  };

  return (
    <div className="flex flex-col justify-center items-center bg-[#475569]">
      <div className="flex flex-col justify-center items-start w-[80%] max-w-[550px] md:max-w-[1140px]">
        <h1 className="text-[#ffffff] font-roboto text-[32px] font-[600] md:text-[48px]">
          Layout
        </h1>
        <div className="flex flex-col">
          <div className="flex items-center mb-[20px]">
            <input
              type="checkbox"
              id="content"
              checked={showContent}
              onChange={onChangeContent}
            />
            <label
              className="text-[#ffffff] font-roboto text-[14px] font-[600] ml-[12px]"
              htmlFor="content">
              Content
            </label>
          </div>
          <div className="flex items-center mb-[20px]">
            <input
              type="checkbox"
              id="leftNavbar"
              checked={showLeftNavbar}
              onChange={onChangeLeftNavbar}
            />
            <label
              className="text-[#ffffff] font-roboto text-[14px] font-[600] ml-[12px]"
              htmlFor="leftNavbar">
              Left Navbar
            </label>
          </div>
          <div className="flex items-center mb-[20px]">
            <input
              type="checkbox"
              id="rightNavbar"
              checked={showRightNavbar}
              onChange={onChangeRightNavbar}
            />
            <label
              className="text-[#ffffff] font-roboto text-[14px] font-[600] ml-[12px]"
              htmlFor="rightNavbar">
              Right Navbar
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfigurationController;
