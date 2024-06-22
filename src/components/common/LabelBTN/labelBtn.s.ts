import styled from "styled-components";

export const VisibleEye = styled.div`
  && {
    cursor: pointer;
    position: absolute;
    right: 15px;
    bottom: 5px;
    &:active {
      opacity: 0.5;
    }
  }
`;
