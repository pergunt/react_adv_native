import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import EventListScreen from './screens/events/EventListSreen';
import EventScreen from './screens/events/EventScreen';
import EventMap from './screens/events/EventMap';
import AuthScreen from './screens/AuthScreen';
import People from './screens/people/People';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="eventList" component={EventListScreen} />
      <Tab.Screen name="people" component={People} />
    </Tab.Navigator>
  );
}
function MainNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="lists" component={Tabs} />
      <Stack.Screen name="eventList" component={EventListScreen} />
      <Stack.Screen name="auth" component={AuthScreen} />
      <Stack.Screen name="eventMap" component={EventMap} />
      <Stack.Screen
        name="event"
        component={EventScreen}
        options={({ route }) => ({title: `Event ${route.params.uid}`})}
      />
    </Stack.Navigator>
  )
}
const App = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  )
};

export default App;
