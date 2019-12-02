// Code CoordinatesButton Component Here


import React, { Component } from 'react';
export default class CoordinatesButton  extends Component {
    mouseCoordinates=(event)=>{
       
        let myarr=[event.clientX,event.clientY]
        this.props.onReceiveCoordinates(myarr)
    }
   
    render() {
        return(
  
        <button onClick={this.mouseCoordinates}>click me</button>)
      }
    }
    