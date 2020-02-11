import React from 'react';

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Platform,
  TouchableOpacity
} from 'react-native';

import firebase from 'firebase';
import {observer, inject} from 'mobx-react'

import { StackActions, CommonActions  } from '@react-navigation/native';

function SignIn({navigation, user}) {
  const handleInputChange = (field) => (value) => {
    user[field] = value;
  };
  const handleOnPress = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then((user) => {
        user.user = user;
        const action = CommonActions.reset({
          index: 0,
          routes: [{
            name: 'lists'
          }]
        });
        navigation.dispatch(action);
      })
  };
  return (
    <View>
      <Text style={styles.header}>
        Please sign in
      </Text>
      <Text>
        Email:
      </Text>
      <TextInput
        style={styles.input}
        value={user.email}
        onChangeText={handleInputChange('email')}
        keyboardType='email-address'
      />
      <Text>
        Password:
      </Text>
      <TextInput
        style={styles.input}
        value={user.password}
        onChangeText={handleInputChange('password')}
        secureTextEntry
      />
      <TouchableOpacity onPress={handleOnPress}>
        <Text>
          Sign In
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default inject( stores => ({user: stores.user}))(observer(SignIn));

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  input: {
    ...Platform.select({
      android: {
        borderBottomWidth: 1,
        borderBottomColor: 'lightgreen'
      }
    })
  }
});