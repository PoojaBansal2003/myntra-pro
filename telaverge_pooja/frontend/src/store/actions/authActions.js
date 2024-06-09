// src/store/actions/authActions.js

import axios from 'axios';

export const login = (credentials) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('/api/auth/login', credentials);
      dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'LOGIN_ERROR', error });
    }
  };
};

export const register = (userData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('/api/auth/register', userData);
      dispatch({ type: 'REGISTER_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'REGISTER_ERROR', error });
    }
  };
};
