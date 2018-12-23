import React from 'react';
import styled, { keyframes } from 'styled-components';
import okLogo from './ok.svg';
import twLogo from './tw.svg';
import vkLogo from './vk.svg';
import fbLogo from './fb.svg';
import heartImg from './heart.svg';

const breath = keyframes`
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

const SocialIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: opacity 0.2s ease-in-out;
`;
const SocialIconLike = styled(SocialIcon)`
  opacity: 0;
`;
const SocialButton = styled.button`
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

const SocialListWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  &:hover ${SocialButton} {
    animation-play-state: paused;
  }
`;

const socials = [
  { key: 'vk', brandColor: '#45668E', img: vkLogo },
  { key: 'ok', brandColor: '#EB722E', img: okLogo },
  { key: 'fb', brandColor: '#3B5998', img: fbLogo },
  { key: 'tw', brandColor: '#00ACED', img: twLogo }
];

const SocialList = ({ tiker, handleStopAnimation, handleRunTiker }) => {
  console.log(tiker);
  return (
    <SocialListWrapper>
      {socials.map((social, index) => (
        <SocialButton
          key={social.key}
          onMouseLeave={handleRunTiker}
          onMouseEnter={handleStopAnimation}
          bg={social.brandColor}
          tiker={tiker === index}
        >
          <SocialIcon src={social.img} />
          <SocialIconLike src={heartImg} />
        </SocialButton>
      ))}
    </SocialListWrapper>
  );
};

export default SocialList;
