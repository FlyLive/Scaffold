import React, { Component } from 'react'
import { render } from 'react-dom'

class Counter extends Component {
    incrementIfOdd() {
        if (this.props.value % 2 !== 0) {
            this.props.onIncrement()
        }
    }

    incrementAsync() {
        setTimeout(this.props.onIncrement, 1000)
    }

    render() {
        const { value, onIncrement, onDecrement } = this.props
        return (
            <p>
                Clicked: {value.count} times
                <button onClick={onIncrement}>+</button>
                <button onClick={onDecrement}>-</button>
                <button onClick={this.incrementIfOdd.bind(this)}>Increment if odd</button>
                <button onClick={this.incrementAsync.bind(this)}>Increment async</button>
            </p>
        )
    }
}

export default Counter