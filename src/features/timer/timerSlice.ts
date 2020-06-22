import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../../app/store";
import TimerController from "./components/Timer/TimerController";
import { expiring, expired } from "./components/Timer/countdown";
import moment from "moment";

const Timer = new TimerController();

interface TimerState {
  running: boolean;
  time: number;
}

const initialState: TimerState = {
  running: false,
  time: 0,
};

const timeToStringFormat = (time: number) => moment.utc(time).format("mm:ss");
const timeHasExpired = (time: number) => timeToStringFormat(time) === "00:00";

const playSound = (time: number) => {
  const expiringSound = ["00:03", "00:02", "00:01"];
  const formatted = timeToStringFormat(time);
  if (expiringSound.includes(formatted)) {
    expiring.play();
  }
};

export const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    beginTimer: (state, action: PayloadAction<number>) => {
      state.running = true;
      state.time = action.payload;
    },
    updateTime: (state, action: PayloadAction<number>) => {
      if (state.running) {
        playSound(action.payload);
      }
      state.time = action.payload;
      if (timeHasExpired(action.payload)) {
        expired.play();
        state.running = false;
      }
    },
    stopTimer: (state) => {
      state.running = false;
      Timer.stop();
    },
    resetTimer: (state) => {
      state.time = initialState.time;
      state.running = initialState.running;
      Timer.stop();
    },
  },
});

export const startTimer = (duration: number): AppThunk => (dispatch) => {
  dispatch(beginTimer(duration));

  Timer.start(duration, (remaining) => {
    if (!timeHasExpired(remaining)) {
      dispatch(updateTime(remaining));
    } else {
      Timer.stop();
      dispatch(updateTime(0));
    }
  });
};

export const selectTime = (state: RootState) => state.timer.time;

export const selectTimerRunning = (state: RootState) => state.timer.running;

export const {
  resetTimer,
  updateTime,
  stopTimer,
  beginTimer,
} = timerSlice.actions;

export default timerSlice.reducer;
