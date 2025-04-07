const About = () => (
  <div className="grow-1 flex items-center justify-center mt-[6px]">
    <img
      className="w-[80%] max-w-[468px] md:hidden"
      src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
      alt="about"
    />
    <img
      className="w-[100%] max-w-[1110px] hidden sm:block"
      src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
      alt="about"
    />
  </div>
);

export default About;
