import React, { FC } from "react";
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
import Counter from "./components/Counter";
import { TimeTypes } from "./components/Counter/counter";

const Timer: FC = () => {
  const dispatch = useDispatch();
  const timerRunning = useSelector(selectTimerRunning);
  const time = useSelector(selectTime);

  const handleStart = () => {
    if (!timerRunning) {
      dispatch(startTimer(time));
    }
  };

  const handleUpdate = (type: TimeTypes) => (value: number) => {
    if (!timerRunning) {
      const duration = moment.duration(time);
      dispatch(
        updateTime(
          moment
            .duration({
              minutes: duration.minutes(),
              seconds: duration.seconds(),
              [type]: value,
            })
            .asMilliseconds()
        )
      );
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Counter
        type={TimeTypes.minutes}
        value={moment.duration(time).minutes()}
        onChange={handleUpdate(TimeTypes.minutes)}
      />
      <Counter
        type={TimeTypes.seconds}
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
