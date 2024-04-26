import styled from "styled-components";

export const IssuesWrap = styled.div`
  && {
    width: 100%;
    position: relative;
    z-index: 20;
    & > div {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 30px;
    }
  }
`;

export const Background = styled.div`
  && {
    position: absolute;
    width: 120%;
    height: 80%;
    top: 0;
    right: -10%;
    z-index: 1;
    & img {
      object-fit: cover;
    }
  }
`;

export const IssuesItemIcon = styled.div`
  && {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    & > div {
      width: 100%;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    & > h6 {
      width: 75%;
    }
  }
`;

export const IssuesProblem = styled.div`
  && {
    width: 100%;
    background: linear-gradient(270deg, #5f5cf1 0%, #01001f 78.33%);
    border-radius: 8px;
    padding: 64px 100px;
    position: relative;
    & > .circles {
      position: absolute;
      height: 100%;
      width: 25%;
      background: url("/images/circles.png");
      background-size: cover;
      background-repeat: no-repeat;
      right: 0;
      bottom: 0;
    }
    @media(max-width: 768px){
      padding: 64px 30px;
    }
  }
`;

export const OtherAvatar = styled.div`
  && {
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const AvatarGroup = styled.div`
  && {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Avatar = styled.div`
  && {
    position: relative;
    transition: 0.2s;
    &:not(:first-child) {
      margin-left: -0.75rem;
    }
    &:hover {
      z-index: 1;
      transform: translateY(-0.5rem);
    }
    & img {
      width: 3rem;
      height: 3rem;
      display: block;
      object-fit: cover;
      border-radius: 50%;
      border: 3px solid #fff;
      box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.1);
    }
  }
`;

export const RegisterButton = styled.button`
  && {
    position: relative;
    border: 1px solid white;
    color: white;
    border-radius: 32px;
    padding: 24px 48px;
    z-index: 100;
    font-size: 16px;
    transition: 0.3s linear;
    font-weight: 600;
    &:hover {
      color: black;
      background: white;
    }
  }
`;
