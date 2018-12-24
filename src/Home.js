import React, { Component } from 'react';
import logo from './logo.svg';
import styled from 'styled-components';
import pinkBackground from './back.png';
import Form from './Form/index';
import { connect } from 'react-redux';
import { createNewUser, fetchUser } from './modules/user';

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

var generateID = function() {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return (
    '_' +
    Math.random()
      .toString(36)
      .substr(2, 9)
  );
};

class Home extends Component {
  componentDidMount() {
    const user_id = generateID();

    if (localStorage.getItem('user') === null) {
      localStorage.setItem('user', user_id);
      this.props.createNewUser(user_id);
    } else {
      this.props.fetchUser(localStorage.getItem('user'));
    }
  }

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

export default connect(
  null,
  { createNewUser, fetchUser }
)(Home);
