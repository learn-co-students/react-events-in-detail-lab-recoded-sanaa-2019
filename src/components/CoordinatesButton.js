// Code CoordinatesButton Component Here
import React, {Component} from 'react';

 class CoordinatesButton extends Component{
 
 
  findMouseCoordinates = (data) =>{
    let coord = [data.clientX,data.clientY];
    this.props.onReceiveCoordinates(coord);
  }

  render(){
    return(
      <button onClick={this.findMouseCoordinates}>Find Coord.</button>
    );
  }
}
export default CoordinatesButton;