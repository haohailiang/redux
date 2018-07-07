import { connect }           from 'react-redux'
import { toggleTodo }        from '../actions'
import TodoList              from '../components/TodoList'
import { VisibilityFilters } from '../actions'

// 工具方法
const getVisibleTodos = (todos, filter) => {
	// console.log( todos );
	// console.log( filter );
	var ret;
	switch (filter) {
		case VisibilityFilters.SHOW_ALL:
			ret = todos; break;
		case VisibilityFilters.SHOW_COMPLETED:
			ret = todos.filter(t => t.completed); break;
		case VisibilityFilters.SHOW_ACTIVE:
			ret = todos.filter(t => !t.completed); break;
		default:
			throw new Error('Unknown filter: ' + filter)
	}
	// {id: 1, text: "2", completed: false}
	console.log(ret);
	return ret;
}
// ?state里边装的什么,怎么查看[都在store里边]
// 取值 reducer-index.js 合并后的state中
const mapStateToProps = state => ({
	todos: getVisibleTodos(state.todos, state.visibilityFilter)
	// todos: getVisibleTodos(state)
})

const mapDispatchToProps = dispatch => ({
	toggleTodo: id => dispatch(toggleTodo(id))
})

// 把属性和方法都安装到TodoList中
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoList)
