import React from 'react';
import okLogo from './ok.svg';
import twLogo from './tw.svg';
import vkLogo from './vk.svg';
import fbLogo from './fb.svg';
import heartImg from './heart.svg';
import * as Css from './styles';

const socials = [
  { key: 'vk', brandColor: '#45668E', img: vkLogo },
  { key: 'ok', brandColor: '#EB722E', img: okLogo },
  { key: 'fb', brandColor: '#3B5998', img: fbLogo },
  { key: 'tw', brandColor: '#00ACED', img: twLogo }
];

const SocialList = ({
  tiker,
  handleStopAnimation,
  handleClickSocial,
  handleRunTiker
}) => {
  return (
    <Css.SocialListWrapper>
      {socials.map((social, index) => (
        <Css.SocialButton
          key={social.key}
          onClick={handleClickSocial}
          onMouseLeave={handleRunTiker}
          onMouseEnter={handleStopAnimation}
          bg={social.brandColor}
          tiker={tiker === index}
        >
          <Css.SocialIcon src={social.img} />
          <Css.SocialIconLike src={heartImg} />
        </Css.SocialButton>
      ))}
    </Css.SocialListWrapper>
  );
};

export default SocialList;
