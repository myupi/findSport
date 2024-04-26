import styled from "styled-components";

export const ContactImage = styled.div`
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

export const ContactButton = styled.button<{ width?: boolean }>`
  && {
    ${({ width }) => (width ? "width: 100%;" : "")}
    padding: 8px 10px;
    background: #01001f;
    color: white;
    border-radius: 6px;
    font-weight: 700;
  }
`;

export const DropDown = styled.div`
  && {
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: flex-end;
    & > div > div > div > div > div {
      width: 100%;
    }
  }
`;

export const DropBox = styled.div`
  && {
    position: absolute;
    color: white;
    bottom: -53px;
    width: 90%;
    right: 5%;
    background: red;
    border-radius: 6px;
    border-top-right-radius: 0;
    padding: 6px 12px;

    &::after {
      content: "";
      position: absolute;
      right: 0px;
      top: -10px;
      border: 7.5px solid transparent;
      border-bottom: 7.5px solid red;
      border-right: 7.5px solid red;
    }
  }
`;
