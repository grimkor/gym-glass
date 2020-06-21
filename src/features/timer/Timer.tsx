import React, { ChangeEvent, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  resetTimer,
  selectTime,
  selectTimerRunning,
  startTimer,
  stopTimer,
  updateTime,
} from "./timerSlice";
import moment from "moment";

enum TimeTypes {
  "minutes" = "minutes",
  "seconds" = "seconds",
}

const Timer: FC = () => {
  const dispatch = useDispatch();
  const timerRunning = useSelector(selectTimerRunning);
  const time = useSelector(selectTime);

  const handleStart = () => {
    if (!timerRunning) {
      dispatch(startTimer(time));
    }
  };

  const handleUpdate = (type: TimeTypes) => (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    if (!timerRunning) {
      const duration = moment.duration(time);
      dispatch(
        updateTime(
          moment
            .duration({
              minutes: duration.minutes(),
              seconds: duration.seconds(),
              [type]: e.target.value,
            })
            .asMilliseconds()
        )
      );
    }
  };

  console.log();
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <span>timer is running: {timerRunning ? "RUNNING" : "STOPPED"}</span>
      <span>remaining time: {time}</span>
      <input
        value={moment.duration(time).minutes()}
        onChange={handleUpdate(TimeTypes.minutes)}
      />
      <input
        value={moment.duration(time).seconds()}
        onChange={handleUpdate(TimeTypes.seconds)}
      />
      <button onClick={handleStart}>Start!</button>
      <button onClick={() => dispatch(stopTimer())}>Stop!</button>
      <button onClick={() => dispatch(resetTimer())}>Reset!</button>
    </div>
  );
};

export default Timer;
