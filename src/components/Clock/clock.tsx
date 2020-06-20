import React, { FC, useEffect, useState } from "react";
import moment from "moment";
import { TIME_FORMAT } from "../../constants/format";

const Clock: FC = () => {
  const [time, setTime] = useState<number>(moment().valueOf());

  useEffect(() => {
    const update = () => {
      setTime((time) => time + 1000);
    };
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span data-testid="clock-time">{moment(time).format(TIME_FORMAT)}</span>
  );
};

export default Clock;
