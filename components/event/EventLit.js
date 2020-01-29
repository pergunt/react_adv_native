import React from 'react';

import {
  Text,
  TouchableOpacity,
  StyleSheet,
  SectionList
} from 'react-native';
import EventCard from './EventCard';

import _ from 'lodash';

function EventList({onEventPress, events}) {
  const grouped = _.groupBy(events, event => event.title.charAt(0));
  const sections = Object.entries(grouped).map( ([letter, data]) => ({
    title: `${letter} ${data.length} events`,
    data
  }));
  return (
    <SectionList
      sections={sections}
      renderItem={({item}) =>
        <TouchableOpacity onPress={onEventPress(item.uid)}>
          <EventCard event={item} />
        </TouchableOpacity>
      }
      renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
      keyExtractor={(item) => item.uid}
    />
  )
}
const styles = StyleSheet.create({
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    marginBottom: 10,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(207,227,147,1.0)',
    elevation: 5
  }
});

export default EventList