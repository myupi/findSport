import styled from "styled-components";

export const LayoutWrap = styled.div<{path: string}>`
  && {
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    gap: ${props => props.path == "/user" ? 0 : 56}px;
    & > main {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 56px;
    }
  }
`;
