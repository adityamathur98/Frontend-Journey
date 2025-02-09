const LOSE_IMAGE = "https://assets.ccbp.in/frontend/react-js/lose-game-img.png";
const WON_IMAGE = "https://assets.ccbp.in/frontend/react-js/won-game-img.png";

const WinOrLoseCard = (props) => {
  const { isWon, onClickPlayAgain, score } = props;

  const imageUrl = isWon ? WON_IMAGE : LOSE_IMAGE;
  const gameStatus = isWon ? "You Won" : "You Lose";
  const scoreLabel = isWon ? "Best Score" : "Score";

  return (
    <div className="flex flex-col justify-between bg-[#ffffff33] w-[85%] border-3 border-[#ffffff30] rounded-[24px] m-auto p-[16px] md:w-[80%] md:p-[32px] lg:flex-row lg:w-[70%] xl:w-[60%]">
      <div className="flex flex-col justify-center items-center order-1 md:order-0">
        <h1 className="text-[#ffffff] font-roboto text-[32px] font-[800] md:text-[64px]">
          {gameStatus}
        </h1>
        <p className="text-center text-[#ffffff] font-roboto text-[18px] font-[800] m-0 md:text-[36px]">
          {scoreLabel}
        </p>
        <p className="text-center text-[#6a59ff] font-roboto text-[32px] font-[800] m-0 md:text-[48px]">
          {score}/12
        </p>
        <button
          type="button"
          onClick={onClickPlayAgain}
          class="text-[#3d3d3d] bg-[#ffce27] font-['Roboto'] text-[16px] font-bold border-none rounded-[20px] m-[16px] py-[16px] px-[24px] cursor-pointer outline-none">
          Play Again
        </button>
      </div>
      <div className="flex justify-center order-0">
        <img
          src={imageUrl}
          alt="won and lose"
          class="w-[150px] h-[200px] md:w-[350px] md:h-[450px]"
        />
      </div>
    </div>
  );
};

export default WinOrLoseCard;
