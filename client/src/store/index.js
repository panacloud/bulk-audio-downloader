import { combineReducers, applyMiddleware, createStore, compose } from 'redux'
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import AuthReducer from './reducers/authReducer';
import UserReducer from './reducers/userReducer';

import AuthMiddleware from './middleware/authMiddleware'
import UserMiddleware from './middleware/userMiddleware'

export {
    AuthMiddleware,
    UserMiddleware
    // other Middlewares here
}

const middleware = compose(
      applyMiddleware(thunk,logger()),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
export const rootReducer = combineReducers({
    AuthReducer,
    UserReducer
// more reducers go here
})

export let store = createStore(
    rootReducer,
    middleware
);