import React from 'react';
import {withRouter,BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Index from "../Index/Index"
 class Lods extends React.Component {
	constructor(props) {
	     super(props);
				this.state={
				}
				
	 }
	 sss=()=>{
		 console.log(this.props);
	 }
    render() {
        return (
            <div>
               	<button onClick={() => this.props.history.push({pathname:"/",query:{name:"sunny"}})}>home子组件通过函数式调回index并且传参</button>
               	<button onClick={this.sss}>{this.props.name},这是父组件通过props属性传过来的值</button>
				<Router>
			      <div>
					<Route path="/" exact component={Index}/> 
					<Link to="/">通过home的子组件调回index首页</Link>
				 </div>
				</Router>
            </div>
        )
    }
}

 export default withRouter(Lods);