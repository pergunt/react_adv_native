import React from 'react';
import {
  Alert,
  Modal,
  View,
  Button,
  StyleSheet,
  Text
} from "react-native";

function ConfirmModal(
  {
    visible,
    onConfirm,
    onCancel,
    children
  }
) {
  return (
    <Modal
      visible={visible}
      animationType='fade'
      transparent
      onRequestClose={() => {
        Alert.alert('Modal has benn closed')
      }}
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <Text>{children}</Text>
          <View style={styles.buttons}>
            <Button
              title='Ok'
              onPress={onConfirm}
            />
            <Button
              title='Cancel'
              onPress={onCancel}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    maxWidth: '80%',
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 5
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})
export default ConfirmModal