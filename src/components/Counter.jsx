import React, { Component, Fragment } from "react";

export class Counter extends Component {
    state = {
        counter: 1,
    };
    // constructor (props){
    //     super(props);
    //     this.handleClick=this.handleClick.bind(this);
    // }
    handleClick = () => {
        this.setState((state)=>({counter:++state.counter}))
    }
    render(){
        return(
            <p>
                {this.state.counter}
                <button onClick={this.handleClick}>+1</button>
            </p>
        )
    }
}