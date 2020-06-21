import React, { ChangeEvent, FC } from "react";

export enum TimeTypes {
  "minutes" = "minutes",
  "seconds" = "seconds",
}

interface Props {
  type: TimeTypes;
  onChange: (num: number) => void;
  value: number;
}

const Counter: FC<Props> = (props) => {
  const handleChange = ({
    currentTarget: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    const val = Number(value) >= 0 ? Number(value) : 0;
    props.onChange(val);
  };

  return (
    <input
      type="number"
      id={props.type}
      title={props.type}
      onChange={handleChange}
      value={props.value}
    />
  );
};
export default Counter;
