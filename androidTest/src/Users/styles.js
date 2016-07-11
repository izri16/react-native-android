import React from 'react';
import {
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  },
  textInputWrapper: {
    width: 240
  },
  feedback: {
    marginTop: 10
  },
  toUser: {
    marginTop: 10
  },
  available: {
    marginTop: 20,
    paddingBottom: 20,
    fontWeight: 'bold'
  }
});

export default styles;
