import React, {useState, Fragment} from 'react';

import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native'

import {observer} from 'mobx-react';

import {web} from 'react-native-communications';

import ConfirmModal from '../common/ConfirmModal'

function Event({event}) {
  const [modalIsVisible, setModalVisible] = useState(false);
  const confirmDelete = () => {
    event.month = 'LaaaLLLLooo';
    // setModalVisible(!modalIsVisible);

  };
  const cancelDelete = () => {
    setModalVisible(!modalIsVisible);
  };
  const goToURL = () => {
    web(event.url);
  };
  console.log('Event');
  const {title, when, where, url} = event;
  return (
    <Fragment>
      <Text style={{...styles.text, ...styles.header}}>
        {title}
      </Text>
      <View>
        <Image style={styles.image} source={{uri: 'http://lorempixel.com/400/200/'}} />
        <Text style={styles.text}>
          {when}
        </Text>
        <Text style={styles.text}>
          {where}
        </Text>
        <TouchableOpacity onPress={goToURL}>
          <Text style={styles.text}>
            {url}
          </Text>
        </TouchableOpacity>
      </View>
      <Button
        title='Delete'
        onPress={confirmDelete}
      />
      <ConfirmModal
        visible={modalIsVisible}
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
      >
        Are you sure you want to delete this item?
      </ConfirmModal>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  text: {
    height: 100,
    width: '100%',
    textAlign: 'center',
    marginBottom: 20
  },
  header: {
    backgroundColor: 'lightblue',
    elevation: 5
  },
  image: {
    width: 200,
    height: 100
  }
});

export default observer(Event)
