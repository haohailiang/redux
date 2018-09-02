import React           from 'react'
import { render }      from 'react-dom'
import { createStore } from 'redux'
import { Provider }    from 'react-redux'
import App             from './components/App'
import reducer         from './reducers'
// 专门一个库保存CSS
import 'todomvc-app-css/index.css'

const store = createStore(reducer)

store.subscribe( () => {
	console.log( "store 变化了: ", store.getState() );
})

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
