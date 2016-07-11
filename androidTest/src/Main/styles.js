import React from 'react';
import {
  StyleSheet
} from 'react-native';

import { topBarColor } from '../App/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchable: {
    padding: 20
  },
  text: {
    color: topBarColor
  }
});

export default styles;
