import styled from "styled-components";

export const OfferWrap = styled.div`
  && {
    width: 100%;

    && > div {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }
`;

export const OfferItemImage = styled.div`
  && {
    width: 158px;
    height: 158px;
    border-radius: 50%;
    box-shadow: 0px 4px 64px 0px #34334c0f;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
      width: 100px;
      height: 100px;
      box-shadow: 0px 4px 32px 0px #34334c0f;
    }
  }
`;

export const OfferSlider = styled.div`
  && {
    display: none;
    @media (max-width: 768px) {
      width: 100%;
      display: block;
      padding: 0 30px;
    }
  }
`;

export const Offers = styled.div`
  && {
    display: block;
    width: 100%;
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

