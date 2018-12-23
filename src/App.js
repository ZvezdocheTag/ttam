import React, { Component } from 'react';
import logo from './logo.svg';
import styled from 'styled-components';
import pinkBackground from './back.png';
import Form from './Form/index';
import 'sanitize.css';

const PageWrapper = styled.div`
  background: #cd718e url(${pinkBackground}) no-repeat;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  position: relative;
`;
const LogoWrapper = styled.div`
  position: absolute;
  top: 30px;
  left: 30px;
`;

class App extends Component {
  sendRequest = () => {
    fetch('/ping').then(res => {
      console.log(res);
    });
  };
  render() {
    return (
      <div className="App">
        <PageWrapper>
          <LogoWrapper>
            <img src={logo} className="App-logo" alt="logo" />
          </LogoWrapper>
          <Form />
        </PageWrapper>
      </div>
    );
  }
}

export default App;
