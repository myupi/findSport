import styled from "styled-components";

export const SectionWrap = styled.div`
  && {
    width: 100%;
    & > div {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }
`;

export const SectionPersonImage = styled.div`
  && {
    width: 34px;
    height: 34px;
    border-radius: 6px;
    & > img {
      width: 100%;
      height: 100%;
      border-radius: 6px;
      object-fit: cover;
    }
  }
`;
