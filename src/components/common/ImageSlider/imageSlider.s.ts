import styled from "styled-components";

export const DotsDiv = styled.div`
  && {
    position: absolute;
    width: 100%;
    bottom: 20px;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }
`;

export const SlideDots = styled.div<{ active?: number }>`
  && {
    width: 16px;
    height: 16px;
    border: 1px solid white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;

    ${(props) =>
      !!props.active &&
      `&::before {
      content: "";
      width: 50%;
      height: 50%;
      border-radius: 50%;
      background: white;
      position: absolute;
    }`}
  }
`;
