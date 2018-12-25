import React, { Component } from 'react';
import 'sanitize.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './modules/reducer';
import HomePage from './containers/HomePage';
import { ThemeProvider } from 'styled-components';
import { mediaQueryRules } from './utils/mediaQueryRules';

const middleware = [thunk];
const store = createStore(reducer, applyMiddleware(...middleware));

const theme = {
  media: mediaQueryRules
};

class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <HomePage />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
