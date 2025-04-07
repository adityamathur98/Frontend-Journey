const Home = () => (
  <div className="grow-1 flex items-center justify-center mt-[6px]">
    <img
      className="w-[80%] max-w-[468px] md:hidden"
      src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
      alt="home"
    />
    <img
      className="w-[100%] max-w-[1110px] hidden sm:block"
      src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
      alt="home"
    />
  </div>
);

export default Home;
