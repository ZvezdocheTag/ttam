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

class Form extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      frameWindow: null,
      closedFrameWindow: false
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

  componentDidMount() {
    window.addEventListener('focus', () => {
      if (this.state.frameWindow !== null && this.state.frameWindow.closed) {
        this.props.initSocialSharing();
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
    const { socialIsShared, emailIsValid, submitted } = this.props;
    console.log(socialIsShared && submitted);
    if (socialIsShared && submitted) {
      return <FormSubmitted />;
    }

    return (
      <Css.FormWrapper onSubmit={this.handleSubmit}>
        <Css.Title>Чтобы выиграть путешествие</Css.Title>
        <Css.Fieldset disable={socialIsShared}>
          <Css.CheckboxWrapper active={socialIsShared}>
            <Checkbox />
          </Css.CheckboxWrapper>
          <Css.Label>Поделись с друзьями:</Css.Label>
          <SocialList
            handleClickSocial={this.handleClickSocial}
            disable={socialIsShared}
          />
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
