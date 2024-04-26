import styled from "styled-components";

export const StyledSelect = styled.select`
  && {
    padding: 8px 16px;
    border: 0;
    background: white;
    box-shadow: 0px 6px 32px 0px #aabbc647;
    font-size: 16px;
  }
`;

export const StyledButton = styled.button<{ right?: number }>`
  && {
    padding: 8px 16px;
    border: 0;
    background: white;
    box-shadow: 0px 6px 32px 0px #aabbc647;
    font-size: 16px;
    & > svg {
      transform: rotate(${({ right }) => !!right && 180}deg);
    }
  }
`;
