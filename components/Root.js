import React from 'react';

import {View, Image, StyleSheet} from 'react-native';

import EventLit from './event/EventLit';

function Root() {
    return (
        <View style={styles.container}>
          <EventLit />
        </View>
    );
}
const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 40,
    marginTop: 15
  },
  container: {
    padding: 5
  }
});
export default Root