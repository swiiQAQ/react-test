import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Test from './test'



ReactDOM.render(
  <Test pollInterval={2000}/>,
  document.getElementById('root')
);