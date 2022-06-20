import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, compose } from 'redux';
import {
    ReactReduxFirebaseProvider,
    firebaseReducer
  } from 'react-redux-firebase'
