import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => {
	// returning fetch_user action
	// return action until ajax request is completed
  return function(dispatch) {
    axios
    .get('/api/current_user')
    .then(res => dispatch({ type: FETCH_USER, payload: res }));
  }
};
