import styled from "styled-components";

export const AllItemsWrap = styled.div`
  && {
    width: 100%;

    & > div {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }
`;

export const ItemsSelect = styled.select`
  && {
    padding: 16px;
    width: 100%;
    border: 1px solid #e7eff4;
    background: #fdfdfd;
    color: #b6c3ca;
    -webkit-appearance: none;
    -moz-appearance: none;
    border-radius: 6px;
    appearance: none;
    transition: 0.3s linear;
    &:focus {
      outline: 0;
      border: 1px solid black;
    }
  }
  
`;

export const ItemsInputWrap = styled.div`
  && {
    height: 49px;
    padding: 16px;
    width: 100%;
    border: 1px solid #e7eff4;
    background: #fdfdfd;
    color: black;
    border-radius: 6px;
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;

export const ItemsInput = styled.input`
  && {
    width: 45%;
    border: 0;
    background: #fdfdfd;
    color: black;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    &:focus {
      outline: 0;
      border: 0;
    }
  }
`;
