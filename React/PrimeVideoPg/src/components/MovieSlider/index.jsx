import Slider from "react-slick";

import MovieItem from "../MovieItem";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MovieSlider = (props) => {
  const { moviesList } = props;

  const setting = {
    dots: false,
    slidesToScroll: 1,
    slidesToShow: 4,
  };

  return (
    <Slider {...setting}>
      {moviesList.map((eachMovie) => (
        <MovieItem key={eachMovie.id} movieDetails={eachMovie} />
      ))}
    </Slider>
  );
};

export default MovieSlider;
