import {GET_USERS, GET_ERRORS, SET_CURRENT_USER,  ADD_PENDING_FOLLOWER, ADD_APPROVED_FOLLOWER,
  REMOVE_APPROVED_FOLLOWER, GET_REQUESTS , GET_MESSAGES, ADD_MESSAGE, REMOVE_MESSAGE, LOG_OUT_CLEAN} from './types';

import axios from 'axios';
import {load} from '../dummyData/loader';
import {mapUsers} from '../helpers/helper';


export const login = (user, sampledata) => async dispatch => {
    const respuesta = await axios.get('https://randomuser.me/api?results=10&seed=abc')
    .catch(err => {
        dispatch({
            type: GET_ERRORS,
            payload: err
        });
      });
      
    const results = respuesta.data.results;
    const foundUser = results.filter(({login}) => login.username === user.username && login.password === user.password)
    
    if (foundUser.length > 0) {
      const { uuid } = foundUser[0].login;
      dispatch(setCurrentUser(uuid, sampledata));
    }
    else {
      dispatch({
        type: GET_ERRORS,
        payload: {msg:'Incorrect details'}
      });
    }
}

export const setCurrentUser = (uuid, sampledata)  => {
    return {
      type: SET_CURRENT_USER,
      uuid,
      sampledata
    }
  };
  



export const getUsers = () => dispatch => {
    load('users')
    .then(data => {
      dispatch({
        type: GET_USERS,
        payload: mapUsers(data)
      });
    })
    .catch(err => {
      dispatch({
          type: GET_ERRORS,
          payload: err
      });
    });
  };

  export const logoutUser = (history) => dispatch => {
    dispatch(setCurrentUser('', false, false));
    history.push('/');
  };
  

  export const followRequest = (following, follower) => dispatch => {
    dispatch({
      type: ADD_PENDING_FOLLOWER,
      following,
      follower
    });
  };
  
  export const approveRequest = (following, follower) => dispatch => {
    dispatch({
      type: ADD_APPROVED_FOLLOWER,
      following,
      follower
    });
  };
  
  export const denyRequest = (following, follower) => dispatch => {
    dispatch({
      type: REMOVE_APPROVED_FOLLOWER,
      following,
      follower
    });
  };

  export const getRequests = dummydata => dispatch => {
    load('requests', dummydata)
    .then(data => {
      dispatch({
        type: GET_REQUESTS,
        payload: data
      });
    }).catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err
      });
    })
  };

  export const getMessages = dummydata => dispatch => {
    load('messages', dummydata)
    .then(data => {
      dispatch({
        type: GET_MESSAGES,
        payload: data
      });
    }).catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err
      });
    })
  };
  
  export const addMessage = (uuid, message) => dispatch => {
    dispatch({
      type: ADD_MESSAGE,
      uuid,
      message
    });
  };
  
  export const removeMessage = (uuid, index) => dispatch => {
    dispatch({
      type: REMOVE_MESSAGE,
      uuid,
      index
    });
  };

  export const logoutClean = () => dispatch => {
    dispatch({
      type: LOG_OUT_CLEAN
    });
  };
  

