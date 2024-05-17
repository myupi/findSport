import styled from "styled-components";

export const NavbarWrap = styled.nav`
  && {
    width: 100%;
    background: #01001f;
    padding: 12px 0;
    & > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

export const LogoLink = styled.div`
  && {
    display: flex;
    align-items: center;
    gap: 12px;
    h5 {
      font-size: 28px;
      display: none;
      @media (min-width: 380px) {
        display: block;
      }
      @media (min-width: 768px) {
        display: none;
      }
      @media (min-width: 915px) {
        display: block;
      }
    }
  }
`;

export const ChangeLanguage = styled.select`
  && {
    width: 80px;
    border: 0;
    background: transparent;
    color: white;
    text-align: center;
    font-size: 16px;
    -webkit-appearance: none;
    -moz-appearance: none;
    &::-ms-expand {
      display: none;
    }
    &:focus {
      outline: 0;
    }
    & > option {
      color: black;
    }
  }
`;

