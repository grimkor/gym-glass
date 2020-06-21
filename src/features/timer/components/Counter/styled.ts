import styled from "styled-components";
import { spacing } from "../../../../constants/styles";

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  &:first-child {
    margin-right: ${spacing(1)}px;
  }
  &:last-child {
    margin-left: ${spacing(1)}px;
  }
`;

export const Input = styled.input`
  flex: 1;
  text-align: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: ${spacing(2)}px 0;
`;

export const Button = styled.button`
  margin: 0 ${spacing(1)}px;
  padding: ${spacing(1)}px ${spacing(2)}px;
`;
