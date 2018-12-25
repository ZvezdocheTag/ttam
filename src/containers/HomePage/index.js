import React, { Component } from 'react';
import logo from './logo.svg';
import Form from '../Form/';
import { connect } from 'react-redux';
import { createNewUser, fetchUser } from '../../modules/user';
import { generateID } from '../../utils/generateID';
import * as Css from './styles';

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
      <div>
        <Css.PageWrapper>
          <Css.LogoWrapper>
            <img src={logo} alt="logo" />
          </Css.LogoWrapper>
          <Form />
        </Css.PageWrapper>
      </div>
    );
  }
}

export default connect(
  null,
  { createNewUser, fetchUser }
)(Home);
