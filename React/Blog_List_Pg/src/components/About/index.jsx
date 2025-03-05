const About = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh]">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-blog-img.png"
        alt="about"
        className="w-[150px]"
      />
      <h1 className="font-[500] text-[#6d396b] text-[24px] min-lg:text-[48px]">
        About
      </h1>
      <p className="text-[20px] text-center text-[#555555]">
        I love to create! I am a front-end web developer
      </p>
    </div>
  );
};

export default About;
