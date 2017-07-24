import React, { Component } from 'react';
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import counter from '../../reducers/CounterR'


class CounterRR extends Component {
    render() {
        const { count, onIncreaseClick,onDecreaseClick } = this.props
        return (
            <div>
                <span>当前数值:{count}</span>
                <button onClick={onIncreaseClick}>Increase</button>
                <button onClick={onDecreaseClick}>Increase</button>
            </div>
        )
    }
}

const increaseAction = { type: 'INCREMENT' }

const decreaseAction = { type: 'DECREMENT' }

// Store
const store = createStore(counter)

// Map Redux state to component props
function mapStateToProps(state) {
    return {
        count: state.count
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