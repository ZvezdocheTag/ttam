import React, { Component } from 'react';
import 'sanitize.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './modules/reducer';
import Home from './Home';

const middleware = [thunk];
const store = createStore(reducer, applyMiddleware(...middleware));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}

export default App;
