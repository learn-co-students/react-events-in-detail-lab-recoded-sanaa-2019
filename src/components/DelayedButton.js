// Code DelayedButton Component Here
import React, {Component} from 'react';

 class DelayedButton extends Component{
  handleDelay = (e) =>{
   
    setTimeout(()=>this.props.onDelayedClick(e),this.props.delay);
     e.persist();
  }
  render(){
    return(
      <button onClick={this.handleDelay}>OMG</button>
    );
  }
}
export default DelayedButton;