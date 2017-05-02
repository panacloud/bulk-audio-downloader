import { combineReducers, applyMiddleware, createStore } from 'redux'
import {combineEpics, createEpicMiddleware } from 'redux-observable'
import logger from 'redux-logger';
import userEpic from './reducers/epicReducer'

import AuthReducer from './reducers/authReducer';
import UserReducer from './reducers/userReducer';

import AuthMiddleware from './middleware/authMiddleware'
import UserMiddleware from './middleware/userMiddleware'

// combining Epics
const rootEpic = combineEpics(
//   userEpic. userList

);

export {
    AuthMiddleware,
    UserMiddleware
    // other Middlewares here
}

// creating epic MiddleWare
const epicMiddleware = createEpicMiddleware(rootEpic);

export const rootReducer = combineReducers({
    AuthReducer,
    UserReducer
// more reducers go here
})

// applying Middleware
const createStoreWithMiddleware = applyMiddleware(epicMiddleware)(createStore);

export let store = createStoreWithMiddleware(
    rootReducer
   
);