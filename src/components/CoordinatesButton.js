// Code CoordinatesButton Component Here
import React , {Component } from 'react';
export default class CoordinatesButton extends Component{
    handleOnClick = (event)=>{
        let coordinates  = [event.clientX,event.clientY ];
        this.props.onReceiveCoordinates(coordinates);
    }
    render(){
        return(
            <div>
                <button onClick={this.handleOnClick}>
                CoordinatesButton
                </button>
            </div>
        )
    }
}
