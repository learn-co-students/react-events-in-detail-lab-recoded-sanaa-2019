// Code DelayedButton Component Here
import React, { Component } from 'react'
export default class DelayedButton extends Component {

    Delay=(e)=>{
      
        e.persist() 
        // event pooling // keep event in pool
        //this.props.onDelayedClick(e) 

        setTimeout(()=>{this.props.onDelayedClick(e)},this.props.delay);
    }
    render() {
        return (
            <button onClick={this.Delay}>get delay time</button>
        )
    }
}