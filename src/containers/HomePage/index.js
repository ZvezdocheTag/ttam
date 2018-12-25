import React, { Component } from 'react';
// import logo from './logo.svg';
import Form from '../Form/';
import { connect } from 'react-redux';
import { createNewUser, fetchUser } from '../../modules/user';
import { generateID } from '../../utils/generateID';
import * as Css from './styles';
import Logo from './Logo';

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
          <Css.LogoWrapper finalPageFlag={this.props.formIsSubmitted}>
            <Logo />
            {/* <img src={logo} alt="logo" /> */}
          </Css.LogoWrapper>
          <Form />
        </Css.PageWrapper>
      </div>
    );
  }
}

const mapStateToProps = ({ form }) => ({
  formIsSubmitted: form.social.shared && form.submitted
});
export default connect(
  mapStateToProps,
  { createNewUser, fetchUser }
)(Home);
