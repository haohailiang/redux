import undoable, { includeAction } from 'redux-undo'

const todo = (state, action) => {
	// console.log( "action发生了变化: ", action, state );

	switch (action.type) {
		case 'ADD_TODO':
			return {
				id        : action.id,
				text      : action.text,
				completed : false
			}
		case 'TOGGLE_TODO':
			if (state.id !== action.id) {
				return state
			}

			return {
				...state,
				completed: !state.completed
			}
		default:
			return state
	}
}

const todos = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return [
				...state,
				todo(undefined, action)
			]
		case 'TOGGLE_TODO':
			return state.map(t =>
				todo(t, action)
			)
		default:
			return state
		}
}

// ADD_TODO, TOGGLE_TODO 这2个动作可以加入到撤销当中
const undoableTodos = undoable(todos, { filter: includeAction(['ADD_TODO', 'TOGGLE_TODO']) })

export default undoableTodos

// 只有这个 reducer 可以重做
