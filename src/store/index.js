import { createStore, applyMiddleware, compose } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension'

import thunk from 'redux-thunk'
import { middleware } from 'redux-pack'

import rootReducer from '../reducers';

const enhancer = composeWithDevTools(
    // Middleware you want to use in development:
    applyMiddleware(thunk, middleware),
);

export default function configureStore(initialState = {}) {
	return createStore(rootReducer, enhancer)
}
