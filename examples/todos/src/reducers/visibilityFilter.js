import { VisibilityFilters } from '../actions'

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
	// console.log( "进入 reducer visibilityFilter" );
	switch (action.type) {
		case 'SET_VISIBILITY_FILTER':
			return action.filter
		default:
			return state
	}
}

// state贡献一个'SHOW_ALL'

export default visibilityFilter

// 初始化值为 "SHOW_ALL"
