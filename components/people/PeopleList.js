import React, { Component } from 'react'
import {inject, observer, Observer} from 'mobx-react'
import {TouchableOpacity, Text, SectionList, ActivityIndicator, StyleSheet} from 'react-native'
import PersonCard from './PersonCard'

@inject('people')
@observer
class PeopleList extends Component {
  static defaultProps = {
    onPersonPress: () => {}
  };

  componentDidMount() {
    const {people} = this.props;
    if (!people.loaded) people.loadAll();
  }

  render() {
    const {onPersonPress, onLongPress, people} = this.props;
    if (people.loading) return <ActivityIndicator size='large'/>;

    return <SectionList
      sections = {people.sections}
      renderSectionHeader = {({section}) => <Text style={styles.header}>{section.title}</Text>}
      keyExtractor={(item) => item.uid}
      renderItem = {({item}) => (
        <TouchableOpacity onPress = {onPersonPress.bind(null, item.key)} onLongPress = {onLongPress.bind(null, item.key)}>
          <PersonCard person = {item.person} />
        </TouchableOpacity>
      )}
    />
  }
}
const styles = StyleSheet.create({
  header: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    marginBottom: 10,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(207,227,147,1.0)',
    elevation: 5
  }
});

export default PeopleList