import { Chrono } from "react-chrono";

import ProjectTimelineCard from "../ProjectTimelineCard";
import CourseTimelineCard from "../CourseTimelineCard";

const TimelineView = (props) => {
  const { timelineItemsList } = props;

  const renderTimelineCard = (item) => {
    if (item.categoryId === "PROJECT") {
      return <ProjectTimelineCard key={item.id} projectDetails={item} />;
    }
    return <CourseTimelineCard key={item.id} courseDetails={item} />;
  };

  return (
    <div className="flex justify-around items-center min-h-screen">
      <div className="flex flex-col justify-center items-center max-w-[1110px] h-screen">
        <div className="flex flex-col items-center mb-[30px]">
          <h1 className="text-center text-[#171f46] font-Roboto font-[500] text-[18px] leading-[2.7] m-0 md:text-[20px]">
            MY JOURNEY OF <br />
            <span className="text-[#2b237c] font-Roboto font-[500] text-[24px] m-0 md:text-[30px]">
              React 4.0
            </span>
          </h1>
        </div>
        <Chrono
          theme={{ secondary: "white" }}
          items={timelineItemsList}
          mode="VERTICAL_ALTERNATING">
          {timelineItemsList.map((eachItem) => renderTimelineCard(eachItem))}
        </Chrono>
      </div>
    </div>
  );
};

export default TimelineView;
