import React, { Component } from 'react';
import { AppRegistry, StyleSheet } from 'react-native';

import Main from './src/Main';

export default class headlines extends Component {
  render() {
    return (
      <Main style={styles.welcome}></Main>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('headlines', () => headlines);
