import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import firebase from 'firebase/app';
import 'firebase/firestore';

firebase.initializeApp({
  apiKey: 'AIzaSyCmgY17Cz2uzX5QTaj5ivRXkPSweolhU4Y',
  authDomain: 'travelconnector-45683.firebaseapp.com',
  databaseURL: 'https://travelconnector-45683-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'travelconnector-45683',
  storageBucket: 'travelconnector-45683.appspot.com',
  messagingSenderId: '1025782609486',
  appId: '1:1025782609486:web:95d41ba482f1ac23dcb51f',
  measurementId: 'G-4MMXV9S1L8',
});

export const firestore = firebase.firestore();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
