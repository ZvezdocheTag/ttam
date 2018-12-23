import React, { Component } from 'react';
import SocialList from '../SocialList';
import * as Css from './styles';
import Checkbox from './Checkbox';
import FormSubmitted from '../FormSubmitted/index';

class Form extends Component {
  state = {
    tiker: 0,
    email: '',
    valid: false,
    shared: false,
    sended: false
  };

  handleClickSocial = e => {
    e.preventDefault();
    this.setState({
      shared: true
    });
  };
  componentDidMount() {
    this.runTiker();
  }

  stopAnimation = () => {
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

  handleChangeEmail = e => {
    var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (e.target.value.match(pattern) !== null) {
      this.setState({
        email: e.target.value,
        valid: true
      });
    } else {
      this.setState({
        valid: false
      });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      sended: true
    });
  };
  render() {
    const { shared, sended } = this.state;
    // console.log(this.state.valid);

    if (!shared && !sended) {
      return <FormSubmitted />;
    }
    return (
      <Css.FormWrapper onSubmit={this.handleSubmit}>
        <Css.Title>Чтобы выиграть путешествие</Css.Title>
        <Css.Fieldset disable={shared}>
          <Css.CheckboxWrapper active={shared}>
            <Checkbox />
          </Css.CheckboxWrapper>
          <Css.Label>Поделись с друзьями:</Css.Label>
          <SocialList
            handleStopAnimation={this.stopAnimation}
            handleRunTiker={this.runTiker}
            handleClickSocial={this.handleClickSocial}
            tiker={this.state.tiker}
          />
        </Css.Fieldset>
        <Css.Fieldset disable={sended}>
          <Css.CheckboxWrapper active={sended}>
            <Checkbox />
          </Css.CheckboxWrapper>
          <Css.Label>Оставь почту:</Css.Label>
          <Css.Input onChange={this.handleChangeEmail} disabled={sended} />
        </Css.Fieldset>
        <Css.SendButton type="submit" disabled={!this.state.valid}>
          {' '}
          Отправить
        </Css.SendButton>
      </Css.FormWrapper>
    );
  }
}

export default Form;
