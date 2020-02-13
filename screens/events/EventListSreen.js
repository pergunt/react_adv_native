import React, {useEffect} from 'react';

import EventList from '../../components/event/EventLit';

import {observer, inject} from 'mobx-react';

import {ActivityIndicator} from 'react-native'

function EventListScreen({navigation, event}) {
  useEffect(() => {
    event.loadAll();
  }, []);
  const handleEventPress = (uid) => () => {
    console.log(uid);
    navigation.navigate('event', {uid});
  };
  if (event.loading) {
    return <ActivityIndicator size='large' />
  }
  return <EventList onEventPress={handleEventPress} events={event.list} />;
}
EventListScreen.navigationOptions = () => ({
  title: 'Event List'
});
export default inject(stores => ({event: stores.event}))(observer(EventListScreen))
