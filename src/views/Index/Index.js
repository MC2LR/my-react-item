import React from 'react';

export default class Index extends React.Component {
	   constructor(props) {
	        super(props);
			this.state={
			}
	    }
	link=()=>{
		console.log(this.props);
	}
    render() {
        return (
            <div style={{border:"1px solid red"}}>
			    <div style={{color:"red"}}>这是index首页</div>
                <div onClick={this.link}>回到home</div>
				<button onClick={() => this.props.history.push('Home')}>通过函数跳转回home</button>
            </div>
        )
    }
}