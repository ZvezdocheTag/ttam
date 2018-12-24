import React from 'react';
import SocialList from '../SocialList';
import * as Css from './styles';
import Checkbox from './Checkbox';
import FormSubmitted from '../FormSubmitted/index';
import { connect } from 'react-redux';
import {
  changeEmailAction,
  initSocialSharing,
  submitForm
} from '../modules/form';

function objectToGetParams(object) {
  return (
    '?' +
    Object.keys(object)
      .filter(key => !!object[key])
      .map(key => `${key}=${encodeURIComponent(object[key])}`)
      .join('&')
  );
}

const Share = {
  vkontakte: function(purl, ptitle, pimg, text) {
    let url = 'http://vkontakte.ru/share.php?';
    url = url + 'url=' + encodeURIComponent(purl);
    url = url + '&title=' + encodeURIComponent(ptitle);
    url = url + '&description=' + encodeURIComponent(text);
    url = url + '&image=' + encodeURIComponent(pimg);
    url = url + '&noparse=true';

    Share.popup(url);
  },
  // odnoklassniki: function(purl, text) {
  // 	let url  = 'http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1';
  // 	let url += '&st.comments=' + encodeURIComponent(text);
  // 	let url += '&st._surl='    + encodeURIComponent(purl);
  // 	Share.popup(url);
  // },
  // facebook: function(purl, ptitle, pimg, text) {
  // 	let url  = 'http://www.facebook.com/sharer.php?s=100';
  // 	let url += '&p[title]='     + encodeURIComponent(ptitle);
  // 	let url += '&p[summary]='   + encodeURIComponent(text);
  // 	let url += '&p[url]='       + encodeURIComponent(purl);
  // 	let url += '&p[images][0]=' + encodeURIComponent(pimg);
  // 	Share.popup(url);
  // },
  // twitter: function(purl, ptitle) {
  // 	let url  = 'http://twitter.com/share?';
  // 	let url += 'text='      + encodeURIComponent(ptitle);
  // 	let url += '&url='      + encodeURIComponent(purl);
  // 	let url += '&counturl=' + encodeURIComponent(purl);
  // 	Share.popup(url);
  // },

  popup: function(url) {
    window.open(url, '', 'toolbar=0,status=0,width=626,height=436');
  }
};

class Form extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.myRef = React.createRef();
  }
  handleChangeEmail = e => {
    this.props.changeEmailAction(e.target.value);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.submitForm();
  };

  handleClickSocial = e => {
    e.preventDefault();
    this.props.initSocialSharing(e.target);
  };

  componentDidMount() {
    // console.log(window.VK.Share)
    // window.VK.Share.button(false,{type: "link_noicon"})
  }

  shareVK = e => {
    return Share.vkontakte(window.location.href, 'SAntara');
    // return window.VK.Share.click(0, e.target);
  };

  componentDidUpdate() {
    console.log(window.VK.Share);
  }

  render() {
    const { socialIsShared, emailIsValid, submitted } = this.props;
    const hreF = `https://vk.com/share.php${objectToGetParams({
      url: window.location.href
    })}`;

    if (socialIsShared && submitted) {
      return <FormSubmitted />;
    }

    return (
      <Css.FormWrapper onSubmit={this.handleSubmit}>
        <button onClick={this.shareVK} id="vk">
          Check share
        </button>
        <Css.Title>Чтобы выиграть путешествие</Css.Title>
        <Css.Fieldset disable={socialIsShared}>
          <Css.CheckboxWrapper active={socialIsShared}>
            <Checkbox />
          </Css.CheckboxWrapper>
          <Css.Label>Поделись с друзьями:</Css.Label>
          <SocialList handleClickSocial={this.handleClickSocial} />
        </Css.Fieldset>
        <Css.Fieldset disable={submitted}>
          <Css.CheckboxWrapper active={submitted}>
            <Checkbox />
          </Css.CheckboxWrapper>
          <Css.Label>Оставь почту:</Css.Label>
          <Css.Input onChange={this.handleChangeEmail} disabled={submitted} />
        </Css.Fieldset>
        <Css.SendButton
          type="submit"
          disabled={submitted ? true : !emailIsValid}
        >
          {' '}
          Отправить
        </Css.SendButton>
      </Css.FormWrapper>
    );
  }
}

const mapStateToProps = state => ({
  emailIsValid: state.form.email.isValid,
  socialIsShared: state.form.social.shared,
  submitted: state.form.submitted
});

export default connect(
  mapStateToProps,
  {
    changeEmailAction,
    initSocialSharing,
    submitForm
  }
)(Form);
