// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export class CoordinatesButton extends Component {
    evendHandler=(event)=>{
        let arr=[...[event.clientX,event.clientY]]
        return this.props.onReceiveCoordinates(arr);
    }
    render() {
        return (
            <div>
                <button onClick={this.evendHandler}>Select</button>
            </div>
        )
    }
}

export default CoordinatesButton
