import React, { ChangeEvent, FC } from "react";
import { Container, Input, Button, ButtonContainer } from "./styled";

export enum TimeTypes {
  "minutes" = "minutes",
  "seconds" = "seconds",
}

interface Props {
  type: TimeTypes;
  onChange: (num: number) => void;
  value: number;
}

const noNegative = (value: number | string) =>
  Number(value) >= 0 ? Number(value) : 0;

const Counter: FC<Props> = (props) => {
  const handleChange = ({
    currentTarget: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    props.onChange(noNegative(value));
  };

  const handleClick = (value: number) => {
    props.onChange(noNegative(props.value) + value);
  };

  return (
    <Container>
      <Input
        type="number"
        id={props.type}
        title={props.type}
        onChange={handleChange}
        value={props.value}
      />
      <ButtonContainer>
        <Button id="increase" name="increase" onClick={() => handleClick(1)}>
          +
        </Button>
        <Button id="decrease" onClick={() => handleClick(-1)}>
          -
        </Button>
      </ButtonContainer>
    </Container>
  );
};
export default Counter;
