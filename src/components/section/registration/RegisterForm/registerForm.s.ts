import styled from "styled-components";

export const RegisterFormWrap = styled.div`
  && {
    width: 100%;
    padding: 20px 0;
  }
`;

export const Form = styled.form`
  && {
    border: 1px solid black;
    padding: 10px 20px;
    border-radius: 10px;
  }
`;

export const RegisterInput = styled.input`
  && {
    padding: 5px 10px;
    border: 1px solid black;
    border-radius: 10px;
  }
`;

export const SubmitBtn = styled.button`
  && {
    background: yellow;
    width: 100%;
    padding: 5px 10px;
    border-radius: 10px;
    &:hover {
      opacity: 0.5;
    }
  }
`;
