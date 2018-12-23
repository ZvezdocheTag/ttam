import React, { Component } from 'react';
import SocialList from '../SocialList';
import * as Css from './styles';

class Form extends Component {
  state = {
    tiker: 0,
    email: '',
    valid: false
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
  render() {
    console.log(this.state.valid);
    return (
      <Css.FormWrapper>
        <Css.Title>Чтобы выиграть путешествие</Css.Title>
        <Css.Fieldset>
          <Css.Label>Поделись с друзьями:</Css.Label>
          <SocialList
            handleStopAnimation={this.stopAnimation}
            handleRunTiker={this.runTiker}
            tiker={this.state.tiker}
          />
        </Css.Fieldset>
        <Css.Fieldset>
          <Css.Label>Оставь почту:</Css.Label>
          <Css.Input onChange={this.handleChangeEmail} />
        </Css.Fieldset>
        <Css.SendButton disabled={!this.state.valid}> Отправить</Css.SendButton>
      </Css.FormWrapper>
    );
  }
}

export default Form;
