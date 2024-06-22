import styled from "styled-components";

export const StyledTextArea = styled.textarea`
  width: 100%;
  height: auto;
  min-height: 272px;
  padding: 10px;
  background: #fdfdfd;
  border: 1px solid #e0e3e7;
  border-radius: 6px;
  font-size: 16px;
  resize: none;
  transition: border-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol";
  &:focus {
    box-shadow: rgba(25, 118, 210, 0.25) 0 0 0 0.2rem;
    border-color: #1976d2;
  }
`;
