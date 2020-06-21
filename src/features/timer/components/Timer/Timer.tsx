import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  resetTimer,
  selectTime,
  selectTimerRunning,
  startTimer,
  stopTimer,
  updateTime,
} from "../../timerSlice";
import moment from "moment";
import Counter from "../Counter";
import { TimeTypes } from "../Counter/counter";
import { Button, ButtonContainer, Container, TimerContainer } from "./styled";

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
    <Container>
      <TimerContainer>
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
      </TimerContainer>
      <ButtonContainer>
        <Button onClick={handleStart}>Start!</Button>
        <Button onClick={() => dispatch(stopTimer())}>Stop!</Button>
        <Button onClick={() => dispatch(resetTimer())}>Reset!</Button>
      </ButtonContainer>
    </Container>
  );
};

export default Timer;
