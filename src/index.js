import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCAayIgzKP8-Q8f4DZU9ZPdvzyS4x2FJ24",
  authDomain: "cart-fc995.firebaseapp.com",
  databaseURL: "https://cart-fc995.firebaseio.com",
  projectId: "cart-fc995",
  storageBucket: "cart-fc995.appspot.com",
  messagingSenderId: "791147243631",
  appId: "1:791147243631:web:78c9f46c730da9ad84459a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
