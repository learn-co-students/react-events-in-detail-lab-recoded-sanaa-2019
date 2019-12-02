// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class CoordinatesButton extends Component {
    coordinates = (event) => {
        let arr = []
        // let x = event.clientX;
        // let y = event.clientY;
        arr.push(event.clientX, event.clientY)
        this.props.onReceiveCoordinates(arr);
    }
    render() {
        return (
            <div>
                <button onClick={this.coordinates} >BUTTON</button>
            </div>
        )
    }
}