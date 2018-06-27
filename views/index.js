import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'
import RouteBox from './RouteBox'


// ReactDOM.render(
//   <Test pollInterval={2000}/>,
//   document.getElementById('root')
// );

let div = document.createElement('div');
div.setAttribute('id', 'app');
document.body.appendChild(div);

const mountNode = document.getElementById('app');
// const store = configureStore();

ReactDOM.render(
  <RouteBox pollInterval={2000}/>,
    mountNode
);