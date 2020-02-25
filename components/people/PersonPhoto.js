import React from 'react'
import {View, StyleSheet, Modal, ActivityIndicator, Image} from 'react-native'
import Photo from '../common/Photo'
import firebase from 'firebase'
import {decode} from 'base64-arraybuffer'

import {observer, inject} from 'mobx-react'

function PersonPhoto({uid, people, navigation}) {

  const getPreview = () => {
    return <View style={styles.container}>
      <Image style={styles.preview} source={{uri: this.uri}}/>
      <Modal transparent key='loader'>
        <View style={styles.modal}>
          <ActivityIndicator size='large'/>
        </View>
      </Modal>
    </View>
  };

  const getPhoto = async ({base64, uri}) => {

    const buf = decode(base64);
    const ref = firebase.storage().ref(`/avatars/${uid}.jpg`);

    try {
      await ref.put(buf);
      const avatar = await ref.getDownloadURL();

      people.updatePerson(uid, {avatar});
      navigation.goBack();
    } catch (e) {
      console.log(e.message)
    }

  };

  return <Photo base64 getPhoto={getPhoto} />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  preview: {
    width: '100%',
    height: '100%'
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.2)'
  }
})

export default inject(stores => ({people: stores.people}))(observer(PersonPhoto))