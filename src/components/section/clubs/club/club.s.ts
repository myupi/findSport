import styled from "styled-components";

export const ClubWrap = styled.div`
  && {
    width: 100%;
    & > div {
      display: flex;
      flex-direction: column;
      gap: 20;
    }
  }
`;

export const DefaultBtn = styled.div`
  && {
    background: inherit;
    border: 0;
    padding: 0;
    margin: 0;
    cursor: pointer;
  }
`;
