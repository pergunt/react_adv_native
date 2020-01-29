import React from 'react';

import Event from '../../components/event/Event';

function EventScreen() {
  return <Event />;
}
EventScreen.navigationOptions = ({navigation}) => ({
  title: `Event ${navigation.state.params.uid}`
});
export default EventScreen