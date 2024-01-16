import { Component } from "react";


export default class User extends Component{
    constructor(props){
        super(props)
        this.state = {eded: 1}
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.setState((prev) => ({...prev, eded: prev.eded + 1}))
        console.log(this.state.eded)
    }

    render(){
        return (
          <>
            <div>{this.state.eded}</div>
            <button onClick={this.handleClick}>X</button>
          </>
        )
    }
}