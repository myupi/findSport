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

export const ChangeLanguage = styled.div`
  && {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    cursor: pointer;
    position: relative;
  }
`;

export const Languages = styled.div`
  && {
    width: 100%;
    position: absolute;
    bottom: -50px;
    left: 0;
    height: 50px;
    background: red;
    border-radius: 5px 0 5px 5px;
  }
`;
