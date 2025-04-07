import { AiFillClockCircle } from "react-icons/ai";

const CourseTimelineCard = (props) => {
  const { courseDetails } = props;
  const { courseTitle, description, duration, tagsList } = courseDetails;

  return (
    <>
      <div className="flex flex-col justify-between items-start w-[100%] md:flex-row md:items-center">
        <h1 className="text-[#171f46] font-Roboto text-[16px] font-[700] leading-[1.3] m-0 md:text-[24px]">
          {courseTitle}
        </h1>
        <div className="flex justify-center items-center">
          <AiFillClockCircle text="#171f46" />
          <p className="text-[#171f46] font-Roboto text-[12px] font-[600] leading-[1.2] ml-[4px] md:text-[14px]">
            {duration}
          </p>
        </div>
      </div>
      <p className="text-[#1e293b] font-Roboto text-[12px] leading-[1.5] mt-0 md:text-[16px]">
        {description}
      </p>
      <ul className="flex flex-wrap items-center p-0 m-0">
        {tagsList.map((eachTag) => (
          <li className="list-none">
            <p className="text-[#25262c] bg-[#e2e8f0] font-roboto text-[10px] font-medium rounded px-2 py-1 mb-2 mr-2 leading-[1.6] md:text-[12px] md:font-semibold">
              {eachTag.name}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CourseTimelineCard;
