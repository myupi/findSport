import styled, { keyframes } from "styled-components";

export const StyledSkeletonCard = styled.div`
  && {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
`;

const shineAnimation = keyframes`
  to {
    background-position: right -40px top 0;
  }
`;

export const StyledSkeletonImage = styled.div`
  width: 100%;
  height: 200px;
  background-color: #e2e5e7;
  background-image: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0)
  );
  border-radius: 10px 10px 0 0;
  background-size: 40px 100%;
  background-repeat: no-repeat;
  background-position: left -40px top 0;
  animation: ${shineAnimation} 1.5s ease-in-out infinite;
`;

export const StyledSkeletonTitle = styled.div`
  width: 100%;
  height: 20px;
  background-color: #e2e5e7;
  background-image: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0)
  );
  border-radius: 5px;
  background-size: 40px 100%;
  background-repeat: no-repeat;
  background-position: left -40px top 0;
  animation: ${shineAnimation} 1.5s ease-in-out infinite;
`;

