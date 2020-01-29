import React, {useState} from 'react';

import {
  View,
  Text,
  Button,
  StyleSheet,
  Platform,
  Image
} from 'react-native'

import {eventList} from '../fixtures';

import ConfirmModal from '../common/ConfirmModal'

function Event() {
  const [modalIsVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={{...styles.text, ...styles.header}}>
        {eventList[0].title}
      </Text>
      <View>
        <Image style={styles.image} source={{uri: 'http://lorempixel.com/400/200/'}} />
        <Text style={styles.text}>
          {eventList[0].when}
        </Text>
        <Text style={styles.text}>
          {eventList[0].where}
        </Text>
        <Text style={styles.text}>
          {eventList[0].url}
        </Text>
      </View>
      <Button
        title='Delete'
        onPress={() => setModalVisible(!modalIsVisible)}
      />
      <ConfirmModal
        visible={modalIsVisible}
        onConfirm={() => setModalVisible(!modalIsVisible)}
        onCancel={() => setModalVisible(!modalIsVisible)}
      >
        Are you sure you want to delete this item?
      </ConfirmModal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    height: '100%',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  text: {
    height: 100,
    width: '100%',
    textAlign: 'center',
    marginBottom: 20
  },
  header: {
    backgroundColor: 'lightblue',
    elevation: 5
  },
  image: {
    width: 200,
    height: 100
  }
});

export default Event