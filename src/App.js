// 这是根组件

import React from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import { Button, Radio, Icon } from 'antd';
import logo from './logo.svg';
import './App.css';
import Index from "./views/Index/Index"
import Home from "./views/Home/Home"
class App extends React.Component {
	constructor(props,context) {
	        super(props,context);
			this.state={
			}
	    }
	render() {
	    return (
		<div  style={{border:"1px solid red",height:"50%",margin:"0 auto",display:"flex"}}>
				<div style={{width:"150px"}}>
					<ul style={{listStyle:"none"}}>
						 <li><Link to="/" style={{textDecoration:"none"}}>首页</Link></li>
						  <li><Link to="/Home" style={{textDecoration:"none",listStyleType:"none"}}>列表</Link></li>
					</ul>
				</div>
				<div style={{border:"1px solid black",marginBottom:"20px",flex:"1"}}>
					<div style={{color:"blue"}}>黑线区域内这是路由跳转要显示的地方,相当于一级路由,在vue中相当于router-view</div>
					   
					<Route path="/" exact component={Index}/> 
					<Route path="/Home" exact component={Home}/>  
				</div>
		  </div>
	    )
	}
}

export default App;
