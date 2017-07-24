import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import CounterR from './components/CounterR/CounterR.jsx'
import CounterRR from './components/CounterReactR/CounterRR.jsx'
import counter from './reducers/CounterR'

const store = createStore(counter)

const count = () => render(
    <div>
        <CounterR
            value={store.getState()}
            onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
            onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
        />
        <CounterRR />
    </div>, document.getElementById('app')
)

count()
store.subscribe(count)