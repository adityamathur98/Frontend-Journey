import MovieSlider from "../MovieSlider";

const PrimeVideo = (props) => {
  const { moviesList } = props;

  const actionMovies = moviesList.filter(
    (eachMovie) => eachMovie.categoryId === "ACTION"
  );

  const comedyMovies = moviesList.filter(
    (eachMovie) => eachMovie.categoryId === "COMEDY"
  );

  console.log(comedyMovies);

  return (
    <div className="bg-[#000000] pb-[32px] min-h-screen">
      <img
        className="w-[100%]"
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
      />
      <div className="w-[90%] m-auto mb-[32px] md:max-w-[1110px]">
        <h1 className="text-[#ffffff] text-[20px] font-roboto font-[600] leading-[1.3] mt-[32px] mb-[25px] md:text-[32px]">
          Action Movies
        </h1>
        <MovieSlider moviesList={actionMovies} />
        <h1 className="text-[#ffffff] text-[20px] font-roboto font-[600] leading-[1.3] mt-[32px] mb-[25px] md:text-[32px]">
          Comedy Movies
        </h1>
        <MovieSlider moviesList={comedyMovies} />
      </div>
    </div>
  );
};

export default PrimeVideo;
