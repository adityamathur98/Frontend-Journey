import { AiFillCalendar } from "react-icons/ai";

const ProjectTimelineCard = (props) => {
  const { projectDetails } = props;
  const { imageUrl, projectTitle, description, projectUrl, duration } =
    projectDetails;

  return (
    <div className="w-[100%] h-[100%] mt-[7px] mb-[7px]">
      <img src={imageUrl} className="w-[100%] h-[100%]" alt="project" />
      <div className="flex flex-col justify-between items-start md:flex-row md:items-center">
        <h1 className="text-[#171f46] font-Roboto text-[20px] font-[700] leading-[1.3] m-0 md:text-[24px]">
          {projectTitle}
        </h1>
        <div className="flex justify-center items-center">
          <AiFillCalendar color="#171f46" />
          <p className="text-[#171f6] font-Roboto text-[12px] font-[600] leading-[1.2] ml-[4px] md:text-[14px]">
            {duration}
          </p>
        </div>
      </div>
      <p className="text-[#1e293b] font-Roboto font-[12px] leading-[1.5] mt-0 md:text-[16px]">
        {description}
      </p>
      <a
        className="text-center text-[#0967d2] font-Roboto text-[14px] font-[600] leading-[1.2] no-underline mt-[5px] md:text-[18px]"
        href={projectUrl}>
        Visit
      </a>
    </div>
  );
};

export default ProjectTimelineCard;
