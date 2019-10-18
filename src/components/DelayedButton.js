// Code DelayedButton Component Here
import React , {Component} from 'react'
export default class DelayedButton extends Component{
    handelOnClick = (event)=>{
        event.persist()
        setTimeout(() =>  {
            this.props.onDelayedClick(event) // => "click"
          }, this.props.delay);
        
    }
    render(){

        return(
            <div>
                    <button id="delay" onClick = {this.handelOnClick}>
                        DelayedButton
                    </button>
            </div>
        )
    }
}
