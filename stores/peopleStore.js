import {observable, computed, action} from 'mobx';

import EntitiesStore, {loadAllHelper} from './EntitiesStore'

import _ from 'lodash';

class People extends EntitiesStore {
  @action loadAll = loadAllHelper('people');

  @computed get sections() {
    const grouped = _.groupBy(this.list, person => person.firstName.charAt(0));

    return Object.entries(grouped).map(([letter, list]) => ({
      title: `${letter}, ${list.length} people`,
      data: list.map(person => ({key: person.uid, person}))
    }))
  }
}
export default People;