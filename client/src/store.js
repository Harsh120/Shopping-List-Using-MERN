import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initalState = {};

const middleware = [thunk];

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(...middleware)
));
// const store = createStore(rootReducer, initalState, compose(
//     applyMiddleware(...middleware),
//     window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()
// ));

export default store;