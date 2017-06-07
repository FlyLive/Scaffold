import React, { Component } from 'react';
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'


class CounterRR extends Component {
    render() {
        const { value, onIncreaseClick,onDecreaseClick } = this.props
        return (
            <div>
                <span>当前数值:{value}</span>
                <button onClick={onIncreaseClick}>Increase</button>
                <button onClick={onDecreaseClick}>Increase</button>
            </div>
        )
    }
}

const increaseAction = { type: 'increase' }

const decreaseAction = { type: 'decrease' }

// Reducer
function counter(state = { count: 0 }, action) {
    const count = state.count
    switch (action.type) {
        case 'increase':
            return { count: count + 1 }
        case 'decrease':
            return { count: count - 1 }
        default:
            return state
    }
}

// Store
const store = createStore(counter)

// Map Redux state to component props
function mapStateToProps(state) {
    return {
        value: state.count
    }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: () => dispatch(increaseAction),
        onDecreaseClick:()=> dispatch(decreaseAction)
    }
}

// Connected Component
const App = connect(mapStateToProps, mapDispatchToProps)(CounterRR)

export default class indexRR extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}