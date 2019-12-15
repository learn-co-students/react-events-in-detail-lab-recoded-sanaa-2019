import React, { Component } from 'react'

export default class DelayedButton extends Component {

    delayed = (e) => {
        e.persist() 
        setTimeout(() => {
            this.props.onDelayedClick(e)
        }, this.props.delay);

    }


    render() {
        return (
            <div>
                <button onClick={this.delayed}>Delay</button>
            </div>
        )
    }
}