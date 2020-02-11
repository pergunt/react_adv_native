import React, {useEffect} from 'react';
import { StyleSheet } from 'react-native';

import './initFB';

import 'react-native-gesture-handler';

import AppNavigator from './AppNavigator';

import {Provider} from 'mobx-react';
import stores from './stores';

export default function App() {
  useEffect(() => {
    console.ignoredYellowBox = [
      'Setting a timer'
    ];
  }, []);
  return (
    <Provider {...stores}>
      <AppNavigator />
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
