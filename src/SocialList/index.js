import React from 'react';
import okLogo from './ok.svg';
import twLogo from './tw.svg';
import vkLogo from './vk.svg';
import fbLogo from './fb.svg';
import heartImg from './heart.svg';
import * as Css from './styles';

const Share = {
  vk: function(purl, ptitle, pimg, text) {
    let url = 'http://vk.com/share.php?';
    url = url + 'url=' + encodeURIComponent(purl);
    url = url + '&title=' + encodeURIComponent(ptitle);
    url = url + '&noparse=true';

    Share.popup(url);
  },

  ok: function(purl, text) {
    let url = `https://connect.ok.ru/offer?url=${encodeURIComponent(purl)}`;
    Share.popup(url);
  },

  fb: function(purl, ptitle, pimg, text) {
    let url = 'http://www.facebook.com/sharer.php?s=100';
    url += '&p[title]=' + encodeURIComponent(ptitle);
    url += '&p[summary]=' + encodeURIComponent(text);
    url += '&p[url]=' + encodeURIComponent(purl);
    url += '&p[images][0]=' + encodeURIComponent(pimg);
    Share.popup(url);
  },

  tw: function(purl, ptitle) {
    let url = 'http://twitter.com/share?';
    url += 'text=' + encodeURIComponent(ptitle);
    url += '&url=' + encodeURIComponent(purl);
    url += '&counturl=' + encodeURIComponent(purl);
    Share.popup(url);
  },

  popup: function(url) {
    window.open(url, '', 'toolbar=0,status=0,width=626,height=436');
  }
};

const socials = [
  { key: 'vk', brandColor: '#45668E', img: vkLogo, shareLink: Share.vk },
  { key: 'ok', brandColor: '#EB722E', img: okLogo, shareLink: Share.ok },
  { key: 'fb', brandColor: '#3B5998', img: fbLogo, shareLink: Share.fb },
  { key: 'tw', brandColor: '#00ACED', img: twLogo, shareLink: Share.tw }
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
            onClick={handleClickSocial(social.shareLink)}
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
