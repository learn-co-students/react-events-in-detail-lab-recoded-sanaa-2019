// Code DelayedButton Component Here
import React, { Component } from 'react'

export class DelayedButton extends Component {
    timeout=(event)=>{
        event.persist();
        const a=event
        return  setTimeout(()=>this.props.onDelayedClick(a),this.props.delay)
    }
    render() {
        return (
            <div>
                <button onClick={this.timeout}>Click To delay</button>
            </div>
        )
    }
}

export default DelayedButton
