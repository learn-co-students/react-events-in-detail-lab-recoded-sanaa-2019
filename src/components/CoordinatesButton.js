import React, { Component } from 'react'

export default class CoordinatesButton extends Component {
    coordinates = (event) => {
        let a = []
        a.push(event.clientX, event.clientY)
        this.props.onReceiveCoordinates(a);
    }
    render() {
        return (
            <div>
                <button onClick={this.coordinates} >Btn</button>
            </div>
        )
    }
} 