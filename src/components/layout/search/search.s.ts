import styled from "styled-components";

export const SearchWrap = styled.div`
  && {
    width: 100%;
    min-height: 50px;
    & > div > div {
      padding: 6px;
      box-shadow: 0px 4px 64px 0px #34334c0f;
      & > div {
        position: relative;
        padding: 0 6px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;

export const SearchIcons = styled.div`
  && {
    position: absolute;
    left: 6px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const SearchInput = styled.input`
  && {
    min-height: 50px;
    width: 100%;
    padding: 0 30px;
    &::placeholder {
      color: #b6c3ca;
    }
  }
`;

export const SearchButton = styled.button`
  && {
    width: 100%;
    height: 50px;
    background: #5f5cf1;
    color: white;
    border-radius: 6px;
    font-weight: 700;
  }
`;
