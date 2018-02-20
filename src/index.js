import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import firebase from 'firebase';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';

firebase.initializeApp({
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""		
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
