import styled from "styled-components";

export const SimilarWrap = styled.div`
  && {
    width: 100%;
    & > div {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }
`;

export const AllProductLink = styled.div`
  && {
    position: relative;

    &::before {
      position: absolute;
      top: -25%;
      left: -15%;
      content: "";
      width: 38px;
      height: 38px;
      border-radius: 50%;
      box-shadow: 0px 4px 12px 0px #01001f0d;
    }
  }
`;
