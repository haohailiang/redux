import React                            from 'react'
import { render }                       from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider }                     from 'react-redux'
import { createLogger }                 from 'redux-logger'
import thunk                            from 'redux-thunk'
import reducer                          from './reducers'
import { getAllProducts }               from './actions'
import App                              from './containers/App'

const middleware = [ thunk ];
// 异步操作

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
  // 测试环境添加 日志
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

store.dispatch(getAllProducts())

// 中间件加在 action 和 reducer 之间
// 所以放在 store.dispatch 中

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// 主要讲 中间件 和 异步操作
