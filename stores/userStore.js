import {observable} from 'mobx'
import BaseStore from './BaseStore'

class User extends BaseStore {
  @observable
  email = '';
  @observable
  password = '';

  user = null
}

export default User;