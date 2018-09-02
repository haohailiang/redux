const todos = (state = [], action) => {
	console.log( 'action, state', action, state );
	switch (action.type) {
		case 'ADD_TODO':
			// 合并以前的状态
			return [
				...state,
				{
					id        : action.id,
					text      : action.text,
					completed : false
				}
			]
        // state 默认为 [], 触发 ADD_TODO action
        // state 添加进去
		case 'TOGGLE_TODO':
			return state.map(todo =>
				(todo.id === action.id)
				? {...todo, completed: !todo.completed} // 属性合并,后边的属性会覆盖原来的属性
				: todo
      )
    default:
      return state
  }
}

// state贡献一个[]

export default todos

// 初始化值为 []
