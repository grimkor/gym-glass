import { createContext, FC, useState } from "react";

interface TimerContext {
  running: boolean;
  endTime: number;
  duration: number;
  timer: number | undefined;
}

const initialState: TimerContext = {
  running: false,
  endTime: 0,
  duration: 1000 * 30,
  timer: undefined,
};

export const TimerContext = createContext<TimerContext>(initialState);

// const TimerProvider: FC = ({children}) => {
//   const [running, setRunning] = useState({});
//
//   return <TimerContext.Provider value={{
//
//   }} >{children}</TimerContext.Provider>
// }
//
// export TimerProvider;
