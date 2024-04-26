import styled from "styled-components";

export const ClientWrap = styled.div`
  && {
    width: 100%;
    position: relative;
    z-index: 20;
    & > div {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 20px;
    }
  }
`;

export const RightImage = styled.div`
  && {
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    & img {
      width: 380px;
      position: relative;
      z-index: 20;
      height: 380px;
      border-radius: 500px 0px 500px 500px;
      object-fit: cover;
      @media (min-width: 1024px) {
        width: 300px;
        height: 300px;
      }
    }
    @media (max-width: 1024px) {
      justify-content: center;
    }
  }
`;

export const ImageDots = styled.div`
  && {
    position: absolute;
    z-index: 1;
    top: -15%;
    right: -10%;
    width: 196px;
    height: 155px;
  }
`;

export const ImageElipse = styled.div`
  && {
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
    width: 120px;
    height: 121px;
  }
`;

export const LeftImages = styled.div`
  && {
    width: 100%;
    height: 380px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
`;

export const PerImage = styled.div<{ index: number }>`
  && {
    position: absolute;
    margin-left: 150px;
    &:first-child {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      object-fit: cover;
      transform: translateX(-50%);
      & img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        object-fit: cover;
      }
    }
    &:not(:first-child) {
      transform: rotate(${(props) => props.index * 60}deg)
        translate(${(props) => 150 - props.index * 10}px);
      transform-origin: 0px;
      @media (max-width: 425px) {
        transform: rotate(${(props) => props.index * 60}deg)
          translate(${(props) => 125 - props.index * 10}px);
      }
      & img {
        width: ${(props) => 100 - props.index * 7}px;
        height: ${(props) => 100 - props.index * 7}px;
        border-radius: 50%;
        object-fit: cover;
        transform: rotate(${(props) => props.index * -60}deg);
      }
    }
    @media (max-width: 425px) {
      margin-left: 100px;
    }
  }
`;

export const ImagesCircle = styled.div`
  && {
    position: absolute;
    width: 184px;
    height: 185px;
    top: 50%;
    left: 10%;
    @media (max-width: 1024px) {
      left: 30%;
    }
  }
`;

export const SliderDots = styled.div<{ active?: number }>`
  && {
    cursor: pointer;
    transition: 0.3s linear;
    width: ${(props) => (!!props.active ? "36" : "16")}px;
    height: 16px;
    border-radius: 8px;
    background: ${(props) => (!!props.active ? "#5F5CF1" : "#aabbc647")};
  }
`;
