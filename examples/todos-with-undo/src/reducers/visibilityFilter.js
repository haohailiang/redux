const visibilityFilter = (state = 'SHOW_ALL', action) => {
    // 普通 reducer 可以监听所有的action
	console.log( "action发生了变化: ", action, state );

	switch (action.type) {
		case 'SET_VISIBILITY_FILTER':
			return action.filter
		default:
			return state
		}
}

export default visibilityFilter

// 这个 reducer 是不可以撤销操作的
