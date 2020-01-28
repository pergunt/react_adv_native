import React, {useState} from 'react';

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Platform,
  TouchableOpacity
} from 'react-native'

function SignIn() {
  const [auth, onInputChange] = useState({email: '', password: ''});
  const handleInputChange = (field) => (value) => {
    onInputChange({
      ...auth,
      [field]: value
    })
  };
  const handleOnPress = () => {

  }
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
        value={auth.email}
        onChangeText={handleInputChange('email')}
        keyboardType='email-address'
      />
      <Text>
        Password:
      </Text>
      <TextInput
        style={styles.input}
        value={auth.password}
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
export default SignIn;

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