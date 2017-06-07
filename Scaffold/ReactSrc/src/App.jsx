import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import CounterR from './components/CounterR.jsx'
import CounterRR from './components/CounterRR.jsx'
import counter from './reducers/index.js'

const store = createStore(counter)

const render = () => {
    ReactDOM.render(
        <div>
            <CounterR
                value={store.getState()}
                onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
                onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
            />
            <CounterRR />
        </div>, document.getElementById('app'))
}
store.subscribe(render)
render()