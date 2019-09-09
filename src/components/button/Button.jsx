import React, {Component} from 'react';

class Button extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <button type={this.props.type}
                className={`btn ${this.props.className}`}
                key={this.props.index}
                onClick={ () =>{
                   
                }
                }> {this.props.text}
                </button>
        )
    }
}

export default Button;