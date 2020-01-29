import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import EventListScreen from './screens/events/EventListSreen';
import EventScreen from './screens/events/EventScreen';
import AuthScreen from './screens/AuthScreen';

const MainNavigator = createStackNavigator({
  eventList: {screen: EventListScreen},
  auth: {screen: AuthScreen},
  event: {screen: EventScreen},
});

const App = createAppContainer(MainNavigator);

export default App;