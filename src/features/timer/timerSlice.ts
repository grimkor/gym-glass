import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../../app/store";
import TimerController from "./components/Timer/TimerController";

interface TimerState {
  running: boolean;
  time: number;
}

const initialState: TimerState = {
  running: false,
  time: 0,
};

const Timer = new TimerController();

export const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    beginTimer: (state, action: PayloadAction<number>) => {
      state.running = true;
      state.time = action.payload;
    },
    updateTime: (state, action: PayloadAction<number>) => {
      state.time = action.payload;
      if (action.payload === 0) {
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
    if (remaining > 0) {
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
