import React from 'react';

import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';
import EventCard from './EventCard';
import {eventList} from '../fixtures'

function EventList() {
  return (
    <ScrollView>
      {eventList.map( event => <EventCard key={event.uid} event={event} />)}
    </ScrollView>
  )
}
const styles = StyleSheet.create({

});

export default EventList