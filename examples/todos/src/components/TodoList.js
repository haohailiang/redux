import React     from 'react'
import PropTypes from 'prop-types'
import Todo      from './Todo'

// 属性todos和方法toggleTodo都从container/VisibleTodoList中获取过来
// 这个todos是过滤之后的todos
// toggleTodo是切换方法
// todo: {id: 1, text: "2", completed: false}
// 属性作为组件的参数传递过来
const TodoList = ({ todos, toggleTodo }) => (
	<ul>
		{todos.map(todo =>
			<Todo
				key={todo.id}
				{...todo}
				onClick={() => toggleTodo(todo.id)}
			/>
		)}
	</ul>
)

TodoList.propTypes = {
	todos: PropTypes.arrayOf(
		PropTypes.shape({
			id        : PropTypes.number.isRequired,
			completed : PropTypes.bool.isRequired,
			text      : PropTypes.string.isRequired
		}
	).isRequired).isRequired,
	toggleTodo: PropTypes.func.isRequired
}

export default TodoList
