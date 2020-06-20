import React, { FC, useEffect, useState } from "react";
import moment from "moment";
import { TIME_FORMAT } from "../../constants/format";

const clockInterval = 1000;

const Clock: FC = () => {
  const [time, setTime] = useState<number>(moment().valueOf());

  useEffect(() => {
    const update = () => {
      setTime((time) => time + clockInterval);
    };
    const interval = setInterval(update, clockInterval);
    return () => clearInterval(interval);
  }, []);

  return <span data-testid="clock">{moment(time).format(TIME_FORMAT)}</span>;
};

export default Clock;
