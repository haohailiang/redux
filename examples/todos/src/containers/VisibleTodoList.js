import { connect }           from 'react-redux'
import { toggleTodo }        from '../actions'
import TodoList              from '../components/TodoList'
import { VisibilityFilters } from '../actions'

// 工具方法
const getVisibleTodos = (todos, filter) => {
	var ret;
	switch (filter) {
		case VisibilityFilters.SHOW_ALL:
			ret = todos; break;
        // 默认显示所有的 todo 项
		case VisibilityFilters.SHOW_COMPLETED:
			ret = todos.filter(t => t.completed); break;
		case VisibilityFilters.SHOW_ACTIVE:
			ret = todos.filter(t => !t.completed); break;
		default:
			throw new Error('Unknown filter: ' + filter)
	}
	// {id: 1, text: "2", completed: false}
	// console.log(ret);
	return ret;
}
const mapStateToProps = state => ({
	// redux state 初始化值为
	// {todos: Array(0), visibilityFilter: "SHOW_ALL"}
	todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

// todos 绑定到该组件的属性上
// 通过 getVisibleTodos 转化 redux state 中的属性到组件上

const mapDispatchToProps = dispatch => ({
	toggleTodo: id => dispatch(toggleTodo(id))
})

// toggleTodo 绑定到该组件的属性上
// 派发具体的 action toggleTodo
// { type: 'TOGGLE_TODO', id }
// 参数 id 是前边的 toggleTodo 传递过来的
// reducer 规则触发

// 把属性和方法都安装到TodoList中
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoList)
