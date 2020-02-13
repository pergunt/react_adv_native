import React from 'react';

import {Text, View, StyleSheet} from 'react-native';
import Event from '../../components/event/Event';

import {inject, observer} from 'mobx-react';

function EventScreen({route, entities}) {
  const event = entities[route.params.uid];

  return (
    <View style={styles.container}>
      <Text>Month {event.month}</Text>
      <Event event={event} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    height: '100%',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
})
export default inject(({event}) => event)(observer(EventScreen));

