import AppNavigator from '../AppNavigator';
import {observable, action, computed} from 'mobx'

import BaseStore from './BaseStore'

export default class Navigation extends BaseStore{
  @observable state = AppNavigator.router.getStateForAction(
    AppNavigator.router.getActionForPathAndParams('auth')
  );
  @action dispatch = action => {
    this.state = AppNavigator.router.getStateForAction(action, this.state);
  };
  @computed get config() {
    return {
      dispatch: this.dispatch,
      state: this.state
    };
  };
}