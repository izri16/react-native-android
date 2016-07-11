import React from 'react';
import {
  StyleSheet
} from 'react-native';

import { backgroundColor } from '../App/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  touchable: {
    backgroundColor: '#1F8412',
    padding: 20
  },
  text: {
    backgroundColor: '#1F8412',
    color: backgroundColor
  }
});

export default styles;
