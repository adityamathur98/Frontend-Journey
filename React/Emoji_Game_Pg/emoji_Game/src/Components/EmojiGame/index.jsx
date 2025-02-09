import React, { useState } from "react";

import NavBar from "../NavBar";
import EmojiCard from "../EmojiCard";
import WinOrLoseCard from "../WinOrLoseCard";

const EmojiGame = (props) => {
  const [clickedEmojiList, setClickedEmojiList] = useState([]);
  const [topScore, setTopScore] = useState(0);
  const [isGameInProgress, setIsGameInProgress] = useState(true);

  const { emojisList } = props;

  const finishGameAndSetTopScore = (currentScore) => {
    let newTopScore = topScore;

    if (currentScore > topScore) {
      newTopScore = currentScore;
    }

    setTopScore(currentScore);
    setIsGameInProgress(false);
  };

  const clickEmoji = (id) => {
    const isEmojiPresent = clickedEmojiList.includes(id);
    const clickedEmojisLength = clickedEmojiList.length;

    if (isEmojiPresent) {
      finishGameAndSetTopScore(clickedEmojisLength);
    } else {
      if (emojisList.length === clickedEmojisLength) {
        finishGameAndSetTopScore(emojisList.length);
      }
      setClickedEmojiList((prevState) => [...prevState, id]);
    }
  };

  const getShuffledEmojiList = () => {
    return emojisList.sort(() => Math.random() - 0.5);
  };

  const renderEmojiList = () => {
    const shuffledEmojiList = getShuffledEmojiList();

    return (
      <ul className="flex flex-between flex-wrap w-[80%] m-auto p-0 max-w-[1000px]">
        {shuffledEmojiList.map((eachEmoji) => (
          <EmojiCard
            key={shuffledEmojiList.id}
            emojiDetails={eachEmoji}
            clickEmoji={clickEmoji}
          />
        ))}
      </ul>
    );
  };

  const resetGame = () => {
    setClickedEmojiList([]);
    setIsGameInProgress(true);
  };

  const renderScoreCard = () => {
    const isWon = clickedEmojiList.length === emojisList.length;

    return (
      <WinOrLoseCard
        isWon={isWon}
        onClickPlayAgain={resetGame}
        score={clickedEmojiList.length}
      />
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#9796f0] to-[#fbc7d4]">
      <NavBar
        currentScore={clickedEmojiList.length}
        isGameInProgress={isGameInProgress}
        topScore={topScore}
      />
      <div className="flex flex-col items-center flex-1">
        {isGameInProgress ? renderEmojiList() : renderScoreCard()}
      </div>
    </div>
  );
};

export default EmojiGame;
