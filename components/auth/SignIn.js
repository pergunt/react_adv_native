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
        navigation.navigate('eventList');
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
        value={userStore.email}
        onChangeText={handleInputChange('email')}
        keyboardType='email-address'
      />
      <Text>
        Password:
      </Text>
      <TextInput
        style={styles.input}
        value={userStore.password}
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