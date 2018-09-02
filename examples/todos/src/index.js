import React           from 'react'
import { render }      from 'react-dom'
import { createStore } from 'redux'
import { Provider }    from 'react-redux'
import App             from './components/App'
import rootReducer     from './reducers'

// const store = createStore(rootReducer)
// 比较直观的 redux-dev-tool
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// console.log( "store 中所有的 state: " );
console.log( store );
store.subscribe(() => {
	console.log( store.getState() );
});
// 里边的 state 在 rootReducer reducer 中都可以找到

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)
