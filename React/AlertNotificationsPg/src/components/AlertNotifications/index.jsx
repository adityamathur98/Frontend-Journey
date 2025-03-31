import Notification from "../Notification";

import { RiErrorWarningFill } from "react-icons/ri";
import { MdWarning } from "react-icons/md";
import { MdInfo } from "react-icons/md";
import { AiFillCheckCircle } from "react-icons/ai";

const AlertNotifications = () => {
  const renderSuccessNotification = () => {
    return (
      <Notification>
        <AiFillCheckCircle className="h-[70px] min-w-[30px] mr-[14px] text-[#2dca73]" />
        <div className="mt-[4px] ml-[10px] md:mt-0">
          <h1 className="font-roboto text-[20px] font-[600] leading-[1.5] md:text-[24px] text-[#2dca73]">
            Success
          </h1>
          <p className="text-[#64748b] font-Roboto text-[16px] font-[500] leading-[1.5] md:text-[20px]">
            You can access all the files in the folder
          </p>
        </div>
      </Notification>
    );
  };

  const renderErrorNotification = () => {
    return (
      <Notification>
        <RiErrorWarningFill className="h-[70px] min-w-[30px] mr-[14px] text-[#ff0b37]" />
        <div className="mt-[4px] ml-[10px] md:mt-0">
          <h1 className="font-roboto text-[20px] font-[600] leading-[1.5] md:text-[24px] text-[#ff0b37]">
            Error
          </h1>
          <p className="text-[#64748b] font-Roboto text-[16px] font-[500] leading-[1.5] md:text-[20px]">
            Sorry, you are not authorized to have access to delete the file
          </p>
        </div>
      </Notification>
    );
  };

  const renderWarningNotification = () => {
    return (
      <Notification>
        <MdWarning className="h-[70px] min-w-[30px] mr-[14px] text-[#ffb800]" />
        <div className="mt-[4px] ml-[10px] md:mt-0">
          <h1 className="font-roboto text-[20px] font-[600] leading-[1.5] md:text-[24px] text-[#ffb800]">
            Warning
          </h1>
          <p className="text-[#64748b] font-Roboto text-[16px] font-[500] leading-[1.5] md:text-[20px]">
            Viewers of this file can see comments and suggestions
          </p>
        </div>
      </Notification>
    );
  };

  const renderInfoNotification = () => {
    return (
      <Notification>
        <MdInfo className="h-[70px] min-w-[30px] mr-[14px] text-[#0f81e0]" />
        <div className="mt-[4px] ml-[10px] md:mt-0">
          <h1 className="font-roboto text-[20px] font-[600] leading-[1.5] md:text-[24px] text-[#0f81e0]">
            Info
          </h1>
          <p className="text-[#64748b] font-Roboto text-[16px] font-[500] leading-[1.5] md:text-[20px]">
            Anyone on the internet can view these files
          </p>
        </div>
      </Notification>
    );
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col justify-center items-center w-[80%] md:w-[85%] md:max-w-[1110px]">
        <h1 className="text-center text-[#0f172a] font-bold text-[24px] leading-[1.5] mt-[10px] mb-[10px] font-roboto md:text-[48px]">
          Alert Notifications
        </h1>
        {renderSuccessNotification()}
        {renderErrorNotification()}
        {renderWarningNotification()}
        {renderInfoNotification()}
      </div>
    </div>
  );
};

export default AlertNotifications;
