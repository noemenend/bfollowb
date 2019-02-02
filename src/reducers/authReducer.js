import { SET_CURRENT_USER } from '../actions/types';
import {isEmpty} from '../helpers/helper';

const initialState = {
  isAuthenticated: false,
  uuid: '',
  sampledata: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.uuid),
        uuid: action.uuid,
        sampledata: action.sampledata
      }
    default:
      return state;
  }
};