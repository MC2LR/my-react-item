import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom'

import Child from '../views/child'
export default class Home extends Component {
    render() {
        return (
            <div> 
                {/* 这里用到了二级路由 */}
                 <Router>
                 <p style={{height:'50px',width:'100%',textAlign:'center',lineHeight:'50px'}}>
                     <Link to="/child">我是home,点击我换出我儿子</Link>
                 </p>
                 <div>
                   <Route path="/child" component={Child}></Route>
                 </div>
                 </Router>
            </div>
        )
    }
}
