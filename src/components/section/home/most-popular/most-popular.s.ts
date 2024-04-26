import styled from "styled-components";

export const MostPopularWrap = styled.div`
  && {
    width: 100%;
    position: relative;
    z-index: 200;
    && > div {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }
`;

export const ButtonAllPosts = styled.div`
  && {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 20;
    & a {
      position: relative;
      z-index: 30;
    }
    & a::before {
      content: "";
      position: absolute;
      top: -50%;
      left: -20%;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: #5f5cf1;
      z-index: 30;
    }
    & a h6 {
      z-index: 30;
      position: relative;
    }
  }
`;
