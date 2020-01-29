import React, {
  useState,
} from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
} from 'react-native';

import Card from '../common/Card'
import ConfirmModal from '../common/ConfirmModal'

function EventCard({event}) {
  const [modalIsVisible, setModalVisible] = useState(false);
  return (
    <Card style={styles.container}>
      <Image style={styles.image} source={{uri: 'http://lorempixel.com/400/200/'}} />
      <View style={styles.description}>
        <Text>{event.month}</Text>
        <Text>{event.url}</Text>
        <Button
          title='Delete'
          onPress={() => setModalVisible(!modalIsVisible)}
        />
      </View>
      <ConfirmModal
        visible={modalIsVisible}
        onConfirm={() => setModalVisible(!modalIsVisible)}
        onCancel={() => setModalVisible(!modalIsVisible)}
      >
        Are you sure you want to delete this item?
      </ConfirmModal>
    </Card>
  );
}
const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 50
  },
  container: {
    flexDirection: 'row'
  },
  description: {
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  modal: {
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1
  }
});

export default EventCard