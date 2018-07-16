import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'; //bootstrap (bundled)
import './App.css';
import App from './App';

import { Provider } from 'react-redux';

import { createStore } from 'redux';

import * as Action from './store';

const SAMPLE_TASKS = [
  {id:1, description:'Make a task list', complete:true},
  {id:2, description:'Make another one', complete:true},
  {id:3, description:'Make a task list with Redux', complete:false}, 
];

//store goes here
const store = createStore(Action.appReducer, { 
  tasks: SAMPLE_TASKS,
  showCompleted: true
});

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
