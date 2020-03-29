import React, { Component } from 'react';

class Child extends Component {
    render() {
        return (
            <div>
                我是home的儿子
                <button onClick={() => this.props.history.push('/home')}>about</button>
            </div>
        );
    }
}

export default Child;
