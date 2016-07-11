'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity
} from 'react-native';

import { Platform } from 'react-native';
import { applyMiddleware, createStore, compose } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import devTools from 'remote-redux-devtools';

import rootReducer from './src/App/reducers';
import App from './src/App';

// logger logs the state transition to chrome’s console so you can see 
// the transition from state to state
const logger = createLogger();

function configureStore(initialState) {
    const enhancer = compose(
      applyMiddleware(thunkMiddleware),
      devTools({
        name: Platform.OS,
        hostname: 'localhost',
        port: 5678
      })
    );
    return createStore(rootReducer, initialState, enhancer);
}

const store = configureStore({});

// {() => <App />}
const wrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

class HelloWorldApp extends Component {
  render() {
    return (
      <Text>Hello world!</Text>
    );
  }
}

AppRegistry.registerComponent('androidTest', () => wrapper);
