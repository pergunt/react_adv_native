import React from 'react';
import { StyleSheet, View } from 'react-native';

import Root from './components/Root'

import 'react-native-gesture-handler';

import AppNavigator from './AppNavigator'

export default function App() {
  return <AppNavigator />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
