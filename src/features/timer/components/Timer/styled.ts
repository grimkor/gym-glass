import styled from "styled-components";
import { spacing } from "../../../../constants/styles";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
`;

export const TimerContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: ${spacing(2)}px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin: ${spacing(2)}px;
  justify-content: center;
`;

export const Button = styled.button`
  padding: ${spacing(1)}px;
  margin: 0 ${spacing(1)}px;
`;
