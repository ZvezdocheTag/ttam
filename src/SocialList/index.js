import React from 'react';
import heartImg from './heart.svg';
import * as Css from './styles';
import socials from '../utils/socials';

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
    if (this.props.disable) {
      clearInterval(this.timer);
    }
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
    const { handleClickSocial, disable } = this.props;
    return (
      <Css.SocialListWrapper>
        {socials.map((social, index) => (
          <Css.SocialButton
            key={social.key}
            onClick={handleClickSocial(social.shareLink)}
            onMouseLeave={this.runTiker}
            onMouseEnter={this.stopTiker}
            bg={social.brandColor}
            disabled={disable}
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
