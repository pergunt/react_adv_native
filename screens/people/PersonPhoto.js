import React, { Component } from 'react'
import {View, StyleSheet} from 'react-native'
import PersonPhoto from '../../components/people/PersonPhoto'

function PersonPhotoScreen({navigation, route: {params}}) {
  return <PersonPhoto uid = {params.uid} navigation={navigation} />;
}
const styles = StyleSheet.create({
});

export default PersonPhotoScreen