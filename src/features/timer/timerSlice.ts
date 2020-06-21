import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../../app/store";

interface TimerState {
  running: boolean;
  time: number;
}

const initialState: TimerState = {
  running: false,
  time: 0,
};

let TIMER: number | undefined;

export const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    beginTimer: (state, action: PayloadAction<number | undefined>) => {
      state.running = true;
      state.time = action.payload ?? state.time;
    },
    updateTime: (state, action: PayloadAction<number>) => {
      state.time = action.payload;
      if (action.payload === 0) {
        state.running = false;
      }
    },
    stopTimer: (state) => {
      state.running = false;
      clearInterval(TIMER);
    },
    resetTimer: (state) => {
      state.time = initialState.time;
      state.running = initialState.running;
      clearInterval(TIMER);
    },
  },
});

export const startTimer = (duration: number): AppThunk => (dispatch) => {
  let remaining = duration;
  dispatch(beginTimer(remaining));
  TIMER = setInterval(() => {
    remaining = remaining - 1000;
    if (remaining > 0) {
      dispatch(updateTime(remaining));
    } else {
      clearInterval(TIMER);
      dispatch(updateTime(0));
    }
  }, 1000);
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
