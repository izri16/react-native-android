import React from 'react';
import {
  StyleSheet
} from 'react-native';

import { topBarColor } from '../App/styles';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: topBarColor,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    fontSize: 26
  }
});

export default styles;
