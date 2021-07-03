import { createStore } from 'redux';
import reducer from './reducers/defaultReducer';

const store = createStore(reducer);

export default store;