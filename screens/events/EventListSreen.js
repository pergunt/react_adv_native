import React from 'react';

import EventList from '../../components/event/EventLit'

function EventListScreen({navigation}) {
    const handleEventPress = (uid) => () => {
        navigation.navigate('event', {uid});
    };
    return <EventList onEventPress={handleEventPress} />;
}
EventListScreen.navigationOptions = () => ({
  title: 'Event List'
});
export default EventListScreen