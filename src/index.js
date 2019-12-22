// 这是入口文件
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import App from './App.js'
import './index.css';
import 'antd/dist/antd.css'

ReactDOM.render(
	  <Router>
		<App/>
  	  </Router>,
  document.getElementById('root')
);
