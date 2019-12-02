// Code DelayedButton Component Here
import React, { Component } from 'react'

export default class DelayedButton extends Component {

    delayed = (event) => {
        event.persist() // this sould be found to keep event
        setTimeout(() => {
            this.props.onDelayedClick(event)
        }, this.props.delay);

    }


    render() {
        return (
            <div>
                <button onClick={this.delayed}>DELAY</button>
            </div>
        )
    }
}
