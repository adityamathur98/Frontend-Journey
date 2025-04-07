import Slider from "react-slick";

import PlanetItem from "../PlanetItem";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PlanetsSlider = (props) => {
  const { planetsList } = props;

  return (
    <div
      className="relative w-full overflow-hidden min-h-screen p-[40px] md:p-[80px] flex flex-col justify-start"
      style={{
        backgroundImage:
          "url('https://assets.ccbp.in/frontend/react-js/planets-app/planets-bg-img.png')",
        backgroundSize: "cover",
      }}>
      <h1 className="text-center text-[#05acff] font-Roboto text-[35px] font-[700] leading-[1.2] md:text-[48px] md:mb-[64px]">
        PLANETS
      </h1>
      <Slider
        dots={true}
        infinite={true}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}>
        {planetsList.map((eachPlanet) => (
          <PlanetItem key={eachPlanet.id} planetDetails={eachPlanet} />
        ))}
      </Slider>
    </div>
  );
};

export default PlanetsSlider;
