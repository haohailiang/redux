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
// mapStateToProps 调用 getVisibleTodos 去计算 todos
// 这个函数设计的是相当好的,但是有个缺点：
// todos在每一次组件更新的时候都会重新计算
// 如果state树的结构比较大
// 或者计算比较昂贵,每一次组件更新的时候都进行计算的话,将会导致性能问题.Reselect能够帮助redux来避免不必要的重新计算过程.
// 具体查看 todomvc

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
