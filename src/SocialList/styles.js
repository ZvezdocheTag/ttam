import styled, { keyframes } from 'styled-components';

export const breath = keyframes`
0% {
  transform: scale(1);
}

50% {
  transform: scale(1.1);
}

100% {
  transform: scale(1);
}
`;

export const SocialIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: opacity 0.2s ease-in-out;
`;
export const SocialIconLike = styled(SocialIcon)`
  opacity: 0;
`;
export const SocialButton = styled.button`
  width: 53px;
  height: 53px;
  background: ${props => props.bg || '#45668E'};
  border-radius: 50%;
  border: none;
  outline: none;
  padding: 0;
  position: relative;
  animation: ${breath} 2s linear infinite;
  animation-play-state: ${props => (props.tiker ? 'running' : 'paused')};
  /* animation-fill-mode: forwards; */

  &:hover ${SocialIcon} {
    opacity: 0;
  }
  &:hover ${SocialIconLike} {
    opacity: 1;
  }
`;

export const SocialListWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  &:hover ${SocialButton} {
    animation-play-state: paused;
  }
`;
