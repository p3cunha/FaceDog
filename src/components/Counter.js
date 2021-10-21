import React from 'react'
import { CounterContext } from '../Contexts/CountContext'

function Counter() {
    const counterContext = React.useContext(CounterContext)
    return (
        <div>
            <button onClick={counterContext.addTwo}>{counterContext.count}</button>
        </div>
    )
}

export default Counter
