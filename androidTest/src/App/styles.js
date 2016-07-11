import React from 'react';
import {
  StyleSheet
} from 'react-native';

export const topBarColor = '#0F574B';
export const backgroundColor = '#62EED5';

const styles = StyleSheet.create({
  topBar: {
    backgroundColor: topBarColor,
    alignItems: 'center',
    opacity: 0.7
  },
  topBarTitleText: {
    color: 'white',
    margin: 10,
    fontSize: 16
  },
  topBarTitleTouchable: {
    flex: 1,
    justifyContent: 'center'
  },
  leftButtonTouchable: {
    flex: 1,
    justifyContent: 'center'
  },
  leftButtonText: {
    color: 'white',
    margin: 10
  },
  rightButtonTouchable: {
    flex: 1,
    justifyContent: 'center'
  },
  rightButtonText: {
    color: 'white',
    margin: 10
  }
});

export default styles;
