import React, { useState, useEffect, useRef } from 'react';

import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import { Camera } from 'expo-camera';

const cameraDefaultState = {
  zoom: 0,
  autoFocus: 'on'
};

const EventPhoto = ({route: {params}}) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [cameraState, setCameraState] = useState(cameraDefaultState);
  const camera = useRef();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);
  if (hasPermission === null) {
    return <Text>No permissions yet</Text>;
  }
  if (hasPermission === false) {
    return <Text>Permission denied</Text>;
  }
  const takePicture = () => {
    camera.current.takePictureAsync()
      .then(result => {
        console.log(result);
      })
  };

  const {Type} = Camera.Constants;
  return (
    <View style={styles.container}>
      <Camera
        ref={camera}
        style={styles.container}
        type={type}
        {...cameraState}
      />
      <View style={styles.cameraView}>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            onPress={takePicture}
            style={styles.takePicture}
          />
          <TouchableOpacity
            onPress={() => {
              setType(
                type === Type.back
                  ? Type.front
                  : Type.back
              );
            }}>
            <Text style={styles.flipText}>Flip</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cameraView: {
    flex: 0.3,
    justifyContent: 'flex-end',
    backgroundColor: '#000',
  },
  buttonsContainer: {
    flex: 0.5,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'red'
  },
  flipText: {
    fontSize: 18,
    color: 'white',
  },
  takePicture: {
    borderRadius: 50,
    height: 50,
    width: 50,
    backgroundColor: 'white',
    marginRight: 20
  }
});
export default EventPhoto;
