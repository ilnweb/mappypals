import { combineReducers } from 'redux';

import userReducer from './user';
import apiStatusReducer from './apiStatus';
import modalsReducer from './modals';
const rootReducer = combineReducers({
    user: userReducer,
    apiCallsInProgress: apiStatusReducer,
    modals: modalsReducer
});

export default rootReducer;
