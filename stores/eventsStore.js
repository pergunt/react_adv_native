import {observable, computed, action} from 'mobx';

import EntitiesStore, {loadAllHelper} from './EntitiesStore'

class Events extends EntitiesStore {
  @action loadAll = loadAllHelper('events')
}
export default Events;