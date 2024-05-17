import styled from "styled-components";

export const CustomMap = styled.div`
  && {
    width: 100%;
    & > div {
      width: 100% !important;
      height: 240px !important;
    }
    @media (min-width: 768px) {
      & > div {
        height: 120px !important;
      }
    }
  }
`;
