import Event from './eventsStore'
import User from './userStore'
import Navigation from './navigation'
import People from './peopleStore'

const store = {};

store.user = new User(store);
store.event = new Event(store);
store.navigation = new Navigation(store);
store.people = new People(store);

export default store