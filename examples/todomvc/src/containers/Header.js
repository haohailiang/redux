import React         from 'react'
import { connect }   from 'react-redux'
import PropTypes     from 'prop-types'
import TodoTextInput from '../components/TodoTextInput'
import { addTodo }   from '../actions'

export const Header = ({ addTodo }) => (
	<header className="header">
		<h1>todos</h1>
		{/* newTodo哪里来的 */}
		{/* 新的未定义的属性默认都是 true , 可以用作标记 */}
		{/* 随便写也是 true */}
		<TodoTextInput
			newTodo
			suibianxie
			onSave={(text) => {
				if (text.length !== 0) {
					// 派发 action 中的 addTodo action
					addTodo(text)
				}
			}}
			placeholder="What needs to be done?"
		/>
	</header>
)

Header.propTypes = {
	addTodo: PropTypes.func.isRequired
}

export default connect(null, { addTodo })(Header)
// addTodo 绑定到本组件的方法属性
// addTodo 派发到 redux action 中
// 具体 action 为 { type : types.ADD_TODO, text }
// { type : "ADD_TODO", text }
