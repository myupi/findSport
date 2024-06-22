import styled from "styled-components";

export const BorderTextWrap = styled.div`
  && {
    width: 100%;
    display: flex;
    aling-items: center;
    justify-content: center;
    position: relative;
  }
`;
interface IBorderProps {
  width?: string;
}

export const Border = styled.div<IBorderProps>`
  width: ${(props) => (props.width ? props.width : "80%")};
  height: 1px;
  border-top: 0.6px solid #01001f;
`;

export const TextH5 = styled.h5`
  && {
    position: absolute;
    font-size: 12px;
    font-weight: 600;
    display: inline-block;
    background: white;
    padding: 0 16px;
    top: 0;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
`;
