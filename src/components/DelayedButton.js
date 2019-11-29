// Code DelayedButton Component Here

import React, {Component} from 'react';

export default class DelayedButton extends Component{

    Delay = (e)=>{
       
        e.persist()// event pooling // keep event in pool
         //this.props.onDelayedClick(e)  
         //console.log(this.props.delay);

         setTimeout(() =>{this.props.onDelayedClick(e)}, this.props.delay);
    }


    render(){
        return(<button onClick={this.Delay}>Get Delay Time</button>)
    }
}