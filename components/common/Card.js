import React from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

function Card({children, style}) {
    return (
        <View style={[styles.container, style]}>
          {children}
        </View>
    );
}
const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    width: '100%',
  },
});
export default Card