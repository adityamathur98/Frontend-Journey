const NavBar = (props) => {
  const { currentScore, isGameInProgress, topScore } = props;

  return (
    <nav className="flex justify-center bg-[#ffffff33] p-[8px]">
      <div className="flex justify-between w-[80%] max-w-[1000px]">
        <div className="flex items-center">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            className="w-[24px] md:w-[48px]"
            alt="emoji logo"
          />
          <h1 className="text-[#ffffff] font-roboto text-[16px] font-[800] md:text-[24px]">
            Emoji Game
          </h1>
        </div>
        {isGameInProgress && (
          <div className="flex">
            <p className="text-[#ffffff] font-roboto text-[16px] font-[500] ml-[16px] md:text-[24px] md:ml-[32px]">
              Score: {currentScore}
            </p>
            <p className="text-[#ffffff] font-roboto text-[16px] font-[500] ml-[16px] md:text-[24px] md:ml-[32px]">
              Top Score: {topScore}
            </p>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
