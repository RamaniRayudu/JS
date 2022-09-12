import React, {Component} from "react";

class Button2 extends Component{
    constructor(props){
        super(props);
        this.state={
            title: "Click here from state"
        }
    }
    componentDidMount(){
        this.setState({title:"Updated"})
    }
    render(){
        return(
            <button>{this.state.title}</button>
        )
    }
}
export default Button2;