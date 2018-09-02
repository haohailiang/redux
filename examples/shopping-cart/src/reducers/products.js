import { combineReducers } from 'redux'
import { RECEIVE_PRODUCTS, ADD_TO_CART } from '../constants/ActionTypes'

const products = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        inventory: state.inventory - 1
      }
    default:
      return state
  }
}
// 单个指定商品的库存

const byId = (state = {}, action) => {
  switch (action.type) {
    // 弄啥嘞, 暂时没有看懂
    case RECEIVE_PRODUCTS:
      return {
        ...state,
        ...action.products.reduce((obj, product) => {
          obj[product.id] = product
          return obj
        }, {})
      }
    default:
      const { productId } = action
      if (productId) {
        return {
          ...state,
          [productId]: products(state[productId], action)
        }
      }
      return state
  }
}
// 产品库存信息
// {id: 1, title: "苹果", price: 10, inventory: 2}
// {id: 2, title: "黄瓜", price: 20, inventory: 10}
// {id: 3, title: "桔子", price: 30, inventory: 5}

const visibleIds = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return action.products.map(product => product.id)
    default:
      return state
  }
}
// 没什么鸟用

export default combineReducers({
  byId,
  visibleIds
})

// 获取库存产品的ID
export const getProduct = (state, id) => {
	console.log( state, id, state.byId[id] );
	return state.byId[id]
}

// 没有什么鸟用
export const getVisibleProducts = state => state.visibleIds.map(id => getProduct(state, id))
