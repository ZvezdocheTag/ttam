import React, { Component } from 'react';
import './App.css';
import styled, { css } from 'styled-components';
import SocialList from './SocialList';

const FormWrapper = styled.form`
  width: 516px;
  padding: 40px 60px;
  text-align: left;

  background-image: linear-gradient(
      to right,
      #bfc2e4 60%,
      rgba(255, 255, 255, 0) 20%
    ),
    linear-gradient(to bottom, #bfc2e4 60%, rgba(255, 255, 255, 0) 20%),
    linear-gradient(to left, #bfc2e4 60%, rgba(255, 255, 255, 0) 20%),
    linear-gradient(to top, #bfc2e4 60%, rgba(255, 255, 255, 0) 20%);
  background-position: top, left, bottom, right;
  background-size: 20px 1px, 1px 20px, 20px 1px, 1px 20px;
  background-repeat: repeat-x, repeat-y, repeat-x, repeat-y;

  counter-reset: fieldset;
`;

const Title = styled.h3`
  text-align: center;
  font-family: Shnobel, Helvetica Neue, Arial, sans-serif;
  font-size: 50px;
  margin: 0;
`;

const Fieldset = styled.fieldset`
  border: none;
  outline: none;
  position: relative;
  padding-left: 40px;
  margin-bottom: 20px;
  padding-bottom: 0;
  &:last-child {
    margin-bottom: 38px;
  }
  &:before {
    position: absolute;
    top: 10px;
    left: 0;
    font-family: Shnobel, Helvetica Neue, Arial, sans-serif;
    font-size: 44px;
    counter-increment: fieldset;
    content: counter(fieldset) '. ';
  }
`;

const Label = styled.label`
  font-size: 1.32vw;
  margin-bottom: 10px;
  display: block;
`;

const SendButton = styled.button`
  border: none;
  outline: none;
  margin: 0 auto;
  display: block;

  line-height: 5.15vw;
  max-height: 5.15vw;
  min-width: 15.44vw;
  min-height: 5.15vw;
  font-size: 2.87vw;
  padding: 0.51vw 2.94vw 0;
  border-radius: 5.15vw;

  color: #fff;
  position: relative;
  padding: 0;
  line-height: 1.36;
  font-family: Shnobel, Helvetica Neue, Arial, sans-serif;
  color: #7f4156;
  border: none;
  /* background: transparent; */
  background: #fff;
  outline: none;
  -webkit-transition: background 0.3s;
  -o-transition: 0.3s background;
  transition: background 0.3s;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  cursor: pointer;

  &:hover {
    background-color: #622a3d;
    color: #fff;
  }

  &:disabled {
    color: #fff;
    background: transparent;
    border: 2px solid #fff;
    cursor: default;
  }
`;

const Input = styled.input`
  min-height: 4.04vw;
  padding: 0.88vw 1.47vw;
  margin-bottom: 1.47vw;
  border: 0.15vw solid transparent;
  border-radius: 3.68vw;
  font-size: 1.32vw;
  text-align: left;
`;

class Form extends Component {
  state = {
    tiker: 0
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
  render() {
    return (
      <FormWrapper>
        <Title>Чтобы выиграть путешествие</Title>
        <Fieldset>
          <Label>Поделись с друзьями:</Label>
          <SocialList
            handleStopAnimation={this.stopAnimation}
            handleRunTiker={this.runTiker}
            tiker={this.state.tiker}
          />
        </Fieldset>
        <Fieldset>
          <Label>Оставь почту:</Label>
          <Input />
        </Fieldset>
        <SendButton disabled={false}> Отправить</SendButton>
      </FormWrapper>
    );
  }
}

export default Form;
