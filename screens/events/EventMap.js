import React from 'react';

import {StyleSheet} from 'react-native';
import MapView from 'react-native-maps'

const EventMap = () => {
  return (
    <MapView style={styles.map} />
  );
};
const styles = StyleSheet.create({
  map: {
    flex: 1
  }
});
export default EventMap;
