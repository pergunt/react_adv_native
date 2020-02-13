import React, {useState, useEffect} from 'react';

import {StyleSheet, Text} from 'react-native';
import MapView, {Marker} from 'react-native-maps'

import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location'

const EventMap = () => {
  const [state, setState] = useState({
    errorMessage: '',
    permissionAsked: false,
    location: null
  });
  useEffect(() => {
    Permissions.askAsync(Permissions.LOCATION)
      .then(({status}) => {
        setState({
          ...state,
          permissionAsked: true
        });
        if (status !== 'granted') {
          setState({
            ...state,
            errorMessage: 'Permission denied'
          });
        }
        Location.getCurrentPositionAsync()
          .then(location => {
            setState({
              ...state,
              location
            })
          })
      })
  }, []);

  if (state.errorMessage) {
    return (
      <Text>
        {state.errorMessage}
      </Text>
    )
  }
  return (
    <MapView
      style={styles.map}
      initialRegion={state.location && {...state.location.coords,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,}
      }
    >
      {state.location && <Marker coordinate={state.location.coords} title='EventPlace' />}
    </MapView>
  );
};
const styles = StyleSheet.create({
  map: {
    flex: 1
  }
});
export default EventMap;
