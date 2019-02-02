import {combineReducers} from 'redux';
import userReducer from './userReducer';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import requestReducer from './requestsReducer';

export default  combineReducers({
    users: userReducer,
    errors: errorReducer,
    auth: authReducer,
    requests: requestReducer
});