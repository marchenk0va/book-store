import { combineReducers, createStore } from 'redux';
import { itemActions, quantityById } from './reducers';

const reducersContainer = combineReducers({
    cart: itemActions,
    quantityById: quantityById
});

const store = createStore(reducersContainer);

export default store;
