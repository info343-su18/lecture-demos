import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'; //bootstrap (bundled)
import App from './App';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAbyfe4qUuAqwO1uWr-o521dHvLTYt53k8",
    authDomain: "info343-su18-demo.firebaseapp.com",
    databaseURL: "https://info343-su18-demo.firebaseio.com",
    projectId: "info343-su18-demo",
    storageBucket: "info343-su18-demo.appspot.com",
    messagingSenderId: "501839406284"
  };
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
