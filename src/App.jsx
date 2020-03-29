// 这是根组件

import React from 'react';
import {BrowserRouter as Router,Route,Link,Switch,Redirect} from 'react-router-dom'
import { Button, Radio, Icon } from 'antd';

import './App.css';
import home from './views/home'
import about from './views/about'

class App extends React.Component {
	constructor(props,context) {
	        super(props,context);
			this.state={
			}
	    }
	render() {
	    return (
			<div>
				 <p className="ps">你好欢迎来到路由世界</p>
				 <div className="box">
					 <p className="p1">
						 <Link to="/about">adout</Link> <br/>
						 <Link to="/home">home</Link>
					 </p>
					 <p className="p2">
						 <Switch>
							 <Route path="/about" component={about}></Route>
							 <Route path="/home" component={home}></Route>
							 <Redirect to="/about"></Redirect>
						 </Switch>
					 </p>
				 </div>
			</div>

	    )
	}
}

export default App;
