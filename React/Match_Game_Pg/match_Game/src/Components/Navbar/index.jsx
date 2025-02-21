import "./index.css";

const Navbar = (props) => {
  const { score, time } = props;

  return (
    <nav className="w-full h-[70px] flex items-center justify-between bg-[#2c0e3a] !px-4">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="w-[130px] h-[30px]"
      />
      <ul className="flex items-center list-none gap-x-5 !px-5">
        <li className="text-white text-[12px] mr-[5px] flex items-center gap-2">
          Score :
          <span className="text-[#fec653] text-[18px] mr-[20px]"> {score}</span>
        </li>
        <li className="flex items-center gap-2">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="w-[22px] h-[22px] mr-[5px]"
          />
          <p className="text-[#fec653] text-[18px] mr-[20px]">: {time}</p>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
