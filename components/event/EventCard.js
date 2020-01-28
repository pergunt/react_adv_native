import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

import Card from '../../common/Card'

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
    width: 200,
    height: 50
  },
  container: {
    flexDirection: 'row'
  },
  description: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  }
});

export default EventCard