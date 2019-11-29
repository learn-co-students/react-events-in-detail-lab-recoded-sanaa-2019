// Code CoordinatesButton Component Here

import React, {Component} from 'react';

export default class CoordinatesButton extends Component{
   
    MousePosition = (e)=>{
        //console.log([e.clientX, e.clientY] );
         let Mposition = [e.clientX, e.clientY]; 
         this.props.onReceiveCoordinates(Mposition)  
    }

    onReceiveCoordinates = mouseCoordinates => console.log(mouseCoordinates) 
    
    render(){
        return(<button onClick={this.MousePosition}>Get Coordinates</button>)
    }
}

// let MousePosition = (e)=>{
//     console.log([e.clientX, e.clientY] );
//      console.log(this.onReceiveCoordinates);
//      return [e.clientX, e.clientY]    
// }

// console.log(MousePosition);

