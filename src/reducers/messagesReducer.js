import { GET_MESSAGES, ADD_MESSAGE, REMOVE_MESSAGE } from '../actions/types';

export default function (state = {}, action) {
  const messages = {...state};

  switch (action.type) {
    case GET_MESSAGES:
      return action.payload;

    case ADD_MESSAGE:
      messages[action.uuid] = messages[action.uuid] || [];
      messages[action.uuid] = messages[action.uuid].concat(action.message);
      return messages;

    case REMOVE_MESSAGE:
      messages[action.uuid] = messages[action.uuid] || [];
      messages[action.uuid] = [
        ...messages[action.uuid].slice(0, action.index),
        ...messages[action.uuid].slice(action.index + 1)
      ];
      return messages;

    default:
      return state;
  }
};