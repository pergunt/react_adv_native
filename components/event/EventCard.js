import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
} from 'react-native';

import Card from '../common/Card'

function EventCard({event}) {
  return (
    <Card style={styles.container}>
      <Image style={styles.image} source={{uri: 'http://lorempixel.com/400/200/'}} />
      <View style={styles.description}>
        <Text>{event.month}</Text>
        <Text>{event.url}</Text>
      </View>
    </Card>
  );
}
const styles = StyleSheet.create({
  image: {
    width: 100,
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
