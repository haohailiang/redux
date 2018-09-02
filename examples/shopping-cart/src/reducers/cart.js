import {
  ADD_TO_CART,
  CHECKOUT_REQUEST,
  CHECKOUT_FAILURE
} from '../constants/ActionTypes'

const initialState = {
  addedIds: [],
  // 已经购买商品的 ID
  quantityById: {}
  // key 为购买的商品的 ID, value 为购买的商品的数量
}

const addedIds = (state = initialState.addedIds, action) => {
  switch (action.type) {
    case ADD_TO_CART:
    // 没有这个产品,就添加这个产品, 有这个产品返回原先产品里诶包
      if (state.indexOf(action.productId) !== -1) {
        return state
      }
      return [ ...state, action.productId ]
    default:
      return state
  }
}

const quantityById = (state = initialState.quantityById, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { productId } = action
      return { ...state,
        [productId]: (state[productId] || 0) + 1
        // 若果有这个产品在原来的产品数上 +1, 没有为 1
      }
    default:
      return state
  }
}

// 获得任何单个产品和产品的数量
export const getQuantity = (state, productId) => state.quantityById[productId] || 0

// 获得购物车当中产品的所有种类
export const getAddedIds = state => state.addedIds

const cart = (state = initialState, action) => {
  switch (action.type) {
    //结账请求
    case CHECKOUT_REQUEST:
      return initialState
 	// 结账失败
    case CHECKOUT_FAILURE:
      return action.cart
    default:
      return {
        addedIds: addedIds(state.addedIds, action),
        quantityById: quantityById(state.quantityById, action)
      }
  }
}

export default cart
