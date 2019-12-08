// Code CoordinatesButton Component Here
import React, { Component } from 'react'
export default class CoordinatesButton extends Component {

    mouseCoordinates=(e)=>{
        let mousePosition=[e.clientX,e.clientY];
        this.props.onReceiveCoordinates(mousePosition);
    }
    onReceiveCoordinates=mouseCoordinates=>console.log(mouseCoordinates)
    render() {
        return (
            <button onClick={this.mouseCoordinates}>mouseCoordinates</button>
        )
    }
}