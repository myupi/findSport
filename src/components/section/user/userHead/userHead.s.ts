import styled from "styled-components";

export const UserHeadWrap = styled.div`
  && {
    width: 100%;
    position: relative;
    & div:nth-child(2) {
      margin-top: -60px;
    }
  }
`;

export const UserImage = styled.div`
  && {
    width: 160px;
    height: 160px;
    border-radius: 50%;
    padding: 5px;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    & > img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
    }
  }
`;

export const UserBackground = styled.div`
  && {
    height: 240px;
    background-image: url("/images/Image.png");
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

export const UserBtn = styled.button<{ first?: number }>`
  && {
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border: 0;
    padding: 12px 20px;
    border-radius: 6px;
    transition: 0.3s linear;
    background: ${({ first }) => (!!first ? "#EFEFFE" : "#5F5CF1")};
    color: ${({ first }) => (!!first ? "#5F5CF1" : "white")};
    &:hover {
      opacity: 0.5;
    }
  }
`;
