import React           from 'react'
import ReactDOM        from 'react-dom'
import { createStore } from 'redux'
import Counter         from './components/Counter'
import counter         from './reducers'

const store  = createStore(counter)
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
	<Counter
		value={store.getState()}
		onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
		onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
	/>,
	rootEl
)

render()
// 初次渲染

store.subscribe(render)
// 监听变化 - 重新渲染
