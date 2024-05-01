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

export const Languages = styled.div`
  && {
    width: 100px;
    position: absolute;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: gray;
    gap: 2px;
    padding: 5px;
    bottom: -85px;
    border-radius: 5px 0 5px 5px;
  }
`;

export const LanguageButton = styled.button`
  && {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 10px;
    background: red;
    border-radius: 6px;
    gap: 2.5px;
    &:hover {
      opacity: 0.75;
    }
  }
`;
