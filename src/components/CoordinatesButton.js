// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton  extends Component {
    mouseCoordinates=(event)=>{
        let Arr=[event.clientX,event.clientY]
        this.props.onReceiveCoordinates(Arr)
    }
   
    render() {
        return(
  
        <button onClick={this.mouseCoordinates}>click Me</button>)
      }
}
