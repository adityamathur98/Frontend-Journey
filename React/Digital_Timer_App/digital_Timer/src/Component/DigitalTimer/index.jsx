import React, { useState, useEffect, useRef, useCallback } from "react";
import "./index.css";

const initialState = {
  isTimerRunning: false,
  timeElapsedInSeconds: 0,
  timerLimitInMinutes: 25,
};

const DigitalTimer = () => {
  const [isTimerRunning, setIsTimerRunning] = useState(
    initialState.isTimerRunning
  );
  const [timeElapsedInSeconds, setTimeElapsedInSeconds] = useState(
    initialState.timeElapsedInSeconds
  );
  const [timerLimitInMinutes, setTimerLimitInMinutes] = useState(
    initialState.timerLimitInMinutes
  );

  const intervalIdRef = useRef(null);

  // useCallback for functions that are dependencies of useEffect
  const clearTimeInterval = useCallback(() => {
    clearInterval(intervalIdRef.current);
  }, []);

  const onDecreaseTimerLimitInMinutes = () => {
    if (timerLimitInMinutes > 1 && !isTimerRunning) {
      // Prevent change while running
      setTimerLimitInMinutes((prevState) => prevState - 1);
      if (timeElapsedInSeconds > timerLimitInMinutes * 60) {
        setTimeElapsedInSeconds(timerLimitInMinutes * 60);
      }
    }
  };

  const onIncreaseTimerLimitInMinutes = () => {
    if (!isTimerRunning) {
      // Prevent change while running
      setTimerLimitInMinutes((prevState) => prevState + 1);
    }
  };

  const onResetTimer = () => {
    clearTimeInterval();
    setIsTimerRunning(initialState.isTimerRunning);
    setTimeElapsedInSeconds(initialState.timeElapsedInSeconds);
    setTimerLimitInMinutes(initialState.timerLimitInMinutes);
  };

  const incrementTimeElapsedInSeconds = () => {
    if (timeElapsedInSeconds === timerLimitInMinutes * 60) {
      clearTimeInterval();
      setIsTimerRunning(false);
    } else {
      setTimeElapsedInSeconds((prevState) => prevState + 1);
    }
  };

  const onStartOrPauseTimer = () => {
    const isTimerCompleted = timeElapsedInSeconds === timerLimitInMinutes * 60;

    if (isTimerCompleted) {
      setTimeElapsedInSeconds(0);
    }

    if (isTimerRunning) {
      clearTimeInterval();
    } else {
      intervalIdRef.current = setInterval(incrementTimeElapsedInSeconds, 1000);
    }
    setIsTimerRunning((prevState) => !prevState);
  };

  useEffect(() => {
    if (isTimerRunning) {
      intervalIdRef.current = setInterval(incrementTimeElapsedInSeconds, 1000);
    } else {
      clearTimeInterval();
    }

    return () => clearTimeInterval(); // Cleanup function
  }, [
    isTimerRunning,
    clearTimeInterval,
    timerLimitInMinutes,
    timeElapsedInSeconds,
  ]); // Dependencies

  const getElapsedSecondsInTimeFormat = () => {
    const totalRemainingSeconds =
      timerLimitInMinutes * 60 - timeElapsedInSeconds;
    const minutes = Math.floor(totalRemainingSeconds / 60);
    const seconds = Math.floor(totalRemainingSeconds % 60);
    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`;
    const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`;

    return `${stringifiedMinutes}:${stringifiedSeconds}`;
  };

  const labelText = isTimerRunning ? "Running" : "Paused";

  const renderTimerController = () => {
    const startOrPauseImageUrl = isTimerRunning
      ? "https://assets.ccbp.in/frontend/react-js/pause-icon-img.png"
      : "https://assets.ccbp.in/frontend/react-js/play-icon-img.png";
    const startOrPauseAltText = isTimerRunning ? "pause icon" : "play icon";

    return (
      <div className="timer-controller-container">
        <button
          className="timer-controller-btn"
          onClick={onStartOrPauseTimer}
          type="button">
          <img
            alt={startOrPauseAltText}
            className="timer-controller-icon"
            src={startOrPauseImageUrl}
          />
          <p className="timer-controller-label">
            {isTimerRunning ? "Pause" : "Start"}
          </p>
        </button>
        <button
          className="timer-controller-btn"
          onClick={onResetTimer}
          type="button">
          <img
            alt="reset icon"
            className="timer-controller-icon"
            src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
          />
          <p className="timer-controller-label">Reset</p>
        </button>
      </div>
    );
  };

  const renderTimerLimitController = () => {
    const isButtonsDisabled = timeElapsedInSeconds > 0;

    return (
      <div className="timer-limit-controller-container">
        <p className="limit-label">Set Timer limit</p>
        <div className="timer-limit-controller">
          <button
            className="limit-controller-button"
            disabled={isButtonsDisabled}
            onClick={onDecreaseTimerLimitInMinutes}
            type="button">
            -
          </button>
          <div className="limit-label-and-value-container">
            <p className="limit-value">{timerLimitInMinutes}</p>
          </div>
          <button
            className="limit-controller-button"
            disabled={isButtonsDisabled}
            onClick={onIncreaseTimerLimitInMinutes}
            type="button">
            +
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="app-container">
      <h1 className="heading">Digital Timer</h1>
      <div className="digital-timer-container">
        <div className="timer-display-container">
          <div className="elapsed-time-container">
            <h1 className="elapsed-time">{getElapsedSecondsInTimeFormat()}</h1>
            <p className="timer-state">{labelText}</p>
          </div>
        </div>
        <div className="controls-container">
          {renderTimerController()}
          {renderTimerLimitController()}
        </div>
      </div>
    </div>
  );
};

export default DigitalTimer;
