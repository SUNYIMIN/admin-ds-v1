/*
 * @Author: sunyimin 
 * @Date: 2018-11-25 19:39:17 
 * @Last Modified by: sunyimin
 * @Last Modified time: 2019-03-05 19:21:45
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory} from 'react-router';
import route from './router';
import 'font-awesome/css/font-awesome.min.css';

class App extends React.Component{
  render () {
      return (
        <Router history={hashHistory}>
        {route}
        </Router>
      )
  }
}

let render = Component  => {
  ReactDOM.render(
    <div>
       <Component />
    </div>,
    document.getElementById('app')
  );
}

render(App);
