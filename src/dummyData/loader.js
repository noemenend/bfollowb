import dummyRequest from './requests';
import dummyArticles from './articles';
import {isEmpty} from '../helpers/helper';

export const loadStorage = () => {
  try {
    const state = localStorage.getItem('bfollowb:state');
    if (state === null) {
      return undefined;
    }
    return JSON.parse(state);
  }
  catch (err) {
    return undefined;
  }
}

export const saveStorage = (state) => {
  try {
    localStorage.setItem('bfollowb:state', JSON.stringify(state));
  }
  catch (err) {
    console.log(err);
  }
}

export const load = async (key, sampledata = false) => {
 
  let state =  {};

  if (!sampledata) {
    state = loadStorage();
  }
  
  let defaultValue = [];

  if (key === 'requests') {
    defaultValue = sampledata? dummyRequest : {};
  }
  else if (key === 'articles') {
    defaultValue = sampledata? dummyArticles : {};
  }
  else if (key === 'users') {
    const response = await fetch('https://randomuser.me/api?results=10&seed=abc')
    const {results} = await response.json();
    state[key] = results || [];
    
  }

  if (!state || isEmpty(state[key])) {
    state[key] = defaultValue;
    saveStorage(state);
    return defaultValue;
  }


  return state[key];
}