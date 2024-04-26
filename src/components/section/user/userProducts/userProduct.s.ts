import styled from "styled-components";

export const UserProductWrap = styled.div`
  && {
    width: 100%;
    margin-bottom: 56px;
    & > div {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }
`;

export const UserButton = styled.button <{ active?: number }>`
  && {
    padding: 8px 20px;
    cursor: pointer;
    border-radius: 6px;
    border: 1px solid #01001f;
    background: ${(props) => (!!props.active ? "#01001f" : "white")};
    color: ${(props) => (!!props.active ? "white" : "#01001f")};
    transition: 0.3s linear;
    &:hover {
      background: ${(props) => (!!!props.active ? "#01001f" : "white")};
      color: ${(props) => (!!!props.active ? "white" : "#01001f")};
      & > span {
        background: ${(props) => (!!props.active ? "#01001f" : "white")};
        color: ${(props) => (!!props.active ? "white" : "#01001f")};
      }
    }
    & > span {
      padding: 2px 10px;
      border-radius: 9px;
      background: ${(props) => (!!props.active ? "white" : "#01001f")};
      color: ${(props) => (!!props.active ? "#01001f" : "white")};
      transition: 0.3s linear;
    }
  }
`;
