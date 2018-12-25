import React from 'react';
import * as Css from './styles';
import Checkbox from '../../components/Checkbox';
import SocialList from '../../components/SocialList';
import SubmittedScreen from '../../components/SubmittedScreen';
import { connect } from 'react-redux';
import {
  changeEmailAction,
  initSocialSharing,
  submitForm
} from '../../modules/form';

class Form extends React.PureComponent {
  state = {
    frameWindow: null
  };

  handleChangeEmail = e => {
    this.props.changeEmailAction(e.target.value);
  };

  handleSubmit = e => {
    e.preventDefault();
    const { email, submitForm, user, emailIsValid } = this.props;
    if (emailIsValid && user) {
      submitForm(email, user.user_id);
    }
  };

  componentDidMount() {
    window.addEventListener('focus', () => {
      if (this.state.frameWindow !== null && this.state.frameWindow.closed) {
        this.props.initSocialSharing(true, this.props.user.user_id);
      }
    });
  }

  handleClickSocial = shareFun => {
    return e => {
      e.preventDefault();
      shareFun(window.location.href, 'Aviasales candidate test').then(
        newWindow => {
          if (this.state.frameWindow === null) {
            this.setState({
              frameWindow: newWindow
            });
          }
        }
      );
    };
  };

  render() {
    const { socialIsShared, emailIsValid, email, submitted } = this.props;
    //TODO: to remove blink effect during the time when we recieve user info,
    // add loader or show Forms after loading end.

    if (submitted && socialIsShared) {
      return <SubmittedScreen />;
    }

    return (
      <Css.FormWrapper onSubmit={this.handleSubmit}>
        <Css.Title>Чтобы выиграть путешествие</Css.Title>
        <Css.Fieldset disable={socialIsShared}>
          <Css.Label>
            <Css.CheckboxWrapper active={socialIsShared}>
              <Checkbox />
            </Css.CheckboxWrapper>
            Поделись с друзьями:
          </Css.Label>
          <SocialList
            handleClickSocial={this.handleClickSocial}
            disable={socialIsShared}
          />
        </Css.Fieldset>
        <Css.Fieldset disable={submitted}>
          <Css.Label>
            <Css.CheckboxWrapper active={submitted}>
              <Checkbox />
            </Css.CheckboxWrapper>
            Оставь почту:
          </Css.Label>
          <Css.Input
            onChange={this.handleChangeEmail}
            value={email}
            disabled={submitted}
          />
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
  email: state.form.email.value,
  socialIsShared: state.form.social.shared,
  submitted: state.form.submitted,
  user: state.user.data
});

export default connect(
  mapStateToProps,
  {
    changeEmailAction,
    initSocialSharing,
    submitForm
  }
)(Form);
