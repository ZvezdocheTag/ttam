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

class SocialList extends React.PureComponent {
  state = {
    tiker: 0
  };

  componentDidMount() {
    this.runTiker();
  }

  stopTiker = () => {
    clearInterval(this.timer);
  };

  runTiker = () => {
    this.timer = setInterval(() => {
      this.setState(prev => ({
        tiker: prev.tiker + 1
      }));
    }, 2000);
  };

  componentDidUpdate() {
    if (this.state.tiker === 3) {
      setTimeout(() => {
        this.setState({
          tiker: 0
        });
      }, 2000);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { handleClickSocial } = this.props;
    return (
      <Css.SocialListWrapper>
        {socials.map((social, index) => (
          <Css.SocialButton
            key={social.key}
            onClick={handleClickSocial}
            onMouseLeave={this.runTiker}
            onMouseEnter={this.stopTiker}
            bg={social.brandColor}
            tiker={this.state.tiker === index}
          >
            <Css.SocialIcon src={social.img} />
            <Css.SocialIconLike src={heartImg} />
          </Css.SocialButton>
        ))}
      </Css.SocialListWrapper>
    );
  }
}

export default SocialList;
