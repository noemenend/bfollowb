import {combineReducers} from 'redux';
import userReducer from './userReducer';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import requestReducer from './requestsReducer';
import messagesReducer from './messagesReducer';

const applicationreducer =  combineReducers({
    users: userReducer,
    errors: errorReducer,
    auth: authReducer,
    requests: requestReducer,
    messages: messagesReducer
});

const rootReducer = (state, action) => {
    if (action.type === 'LOG_OUT_CLEAN') {
      state = undefined
    }
  
    return applicationreducer(state, action)
  }

  export default rootReducer;
