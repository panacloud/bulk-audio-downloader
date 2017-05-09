import { combineReducers, applyMiddleware, createStore } from 'redux'
import {combineEpics, createEpicMiddleware } from 'redux-observable'
import logger from 'redux-logger';
import AudioListEpic from './middleware/epicMiddleware'
import epicReducer from './reducers/epicReducer';

// import AuthMiddleware from './middleware/authMiddleware'
// import UserMiddleware from './middleware/userMiddleware'

// combining Epics
 export const rootEpic = combineEpics(
  AudioListEpic.getAudioData
);

export {

    // AuthMiddleware,
    // UserMiddleware,
    AudioListEpic
    // other Middlewares here
}

// creating epic MiddleWare
const epicMiddleware = createEpicMiddleware(rootEpic);

export const rootReducer = combineReducers({
    // AuthReducer,
    // UserReducer,
    epicReducer
// more reducers go here
})

// applying Middleware
const createStoreWithMiddleware = applyMiddleware(epicMiddleware)(createStore);

export let store = createStoreWithMiddleware(
    rootReducer
   
);