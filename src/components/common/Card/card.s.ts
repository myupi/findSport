import styled from "styled-components";

export const StyledCard = styled.div`
  && {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    z-index: 100;
    position: relative;
    background: white;
    & img {
      border-radius: 10px 10px 0 0;
    }
  }
`;

export const LandmarkStyle = styled.span`
  && {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    align-self: stretch;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const HeartButton = styled.button`
  && {
    padding: 0;
    margin: 0;
    border: 0;
  }
`;
