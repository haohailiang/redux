import {
	ADD_TODO,
	DELETE_TODO,
	EDIT_TODO,
	COMPLETE_TODO,
	COMPLETE_ALL_TODOS,
	CLEAR_COMPLETED
} from '../constants/ActionTypes'

const initialState = [
	{
		text      : 'Use Redux',
		completed : false,
		id        : 0
	}
]

// 属性顺序不一样, 在数组存的时候也是这么现实, 不做优化

export default function todos(state = initialState, action) {
	console.log( "action 变化了: ", action );

	switch (action.type) {
		case ADD_TODO:
			return [
				...state,
				{
					// 遍历找最大的值
					id: state.reduce((maxId, todo) => {
						return Math.max(todo.id, maxId)
					}, -1) + 1,
					completed: false,
					text: action.text
				}
				// 属性顺序不一样, 在数组存的时候也是这么现实, 不做优化
			]
		case DELETE_TODO:
        	// 伪删除
			return state.filter(todo => todo.id !== action.id )
		case EDIT_TODO:
			return state.map(todo =>
				todo.id === action.id ?
				{ ...todo, text: action.text } :
				todo
			)
		case COMPLETE_TODO:
			return state.map(todo =>
				todo.id === action.id ?
				{ ...todo, completed: !todo.completed } :
				todo
			)
		// 每一个都完成了才算完成
		case COMPLETE_ALL_TODOS:
			const areAllMarked = state.every(todo => todo.completed)
			return state.map(todo => ({
				...todo,
				completed: !areAllMarked
			}))
		// 清除所有完成的状态
		case CLEAR_COMPLETED:
			return state.filter(todo => todo.completed === false)
		default:
			return state
  }
}
