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
  const cords = state.location && state.location.coords;
  cords && getRegionForCoordinates(cords);
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
export function getRegionForCoordinates(points) {
  // points should be an array of { latitude: X, longitude: Y }
  let minX, maxX, minY, maxY;

  // init first point
  minX = points.latitude;
  maxX = points.latitude;
  minY = points.longitude;
  maxY = points.longitude;

  // calculate rect
  minX = Math.min(minX, points.latitude);
  maxX = Math.max(maxX, points.latitude);
  minY = Math.min(minY, points.longitude);
  maxY = Math.max(maxY, points.longitude);

  const midX = (minX + maxX) / 2;
  const midY = (minY + maxY) / 2;
  const deltaX = (maxX - minX);
  const deltaY = (maxY - minY);

  return {
    latitude: midX,
    longitude: midY,
    latitudeDelta: deltaX,
    longitudeDelta: deltaY
  };
}
export default EventMap;
