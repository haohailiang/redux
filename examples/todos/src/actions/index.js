let nextTodoId = 0

export const addTodo = text => ({
	type : 'ADD_TODO',
	id   : nextTodoId++,
	text
})

export const setVisibilityFilter = filter => ({
	type: 'SET_VISIBILITY_FILTER',
	filter
})

export const toggleTodo = id => ({
	type: 'TOGGLE_TODO',
	id
})

// 通过调用方法产生的 action

export const VisibilityFilters = {
	SHOW_ALL       : 'SHOW_ALL',
	SHOW_COMPLETED : 'SHOW_COMPLETED',
	SHOW_ACTIVE    : 'SHOW_ACTIVE'
}

// 直接产生的 action 集合
