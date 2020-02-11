import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import EventListScreen from './screens/events/EventListSreen';
import EventScreen from './screens/events/EventScreen';
import AuthScreen from './screens/AuthScreen';
import People from './screens/People';

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
      <Stack.Screen name="event" component={EventScreen} />
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