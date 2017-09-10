import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import reducer from '../reducers/Index';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

export default function Index(state) {
    const store = createStoreWithMiddleware(reducer, state);

    return store;
}