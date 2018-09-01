import React       from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

// dispatch 是高级函数 connect() 传递进来的, 因为 connect() 参数为空, 所以没有 绑定 action 参数, 但是这里可以手动派发
const AddTodo = ({ dispatch }) => {
	let input

	// 这一部分是渲染的内容
	return (
		<div>
			<form onSubmit={e => {
				e.preventDefault()
				if (!input.value.trim()) {
					return
				}
				dispatch(addTodo(input.value))
                // 派发 action
                // action 带参数, 具体 action 为 { type : 'ADD_TODO', id   : nextTodoId++, text}
                // redux 中的 state todos 增加 { id : action.id, text : action.text, completed : false }
				input.value = ''
			}}>
				<input ref={node => input = node} />
				{/* 高效的获取 ref 的方法 */}
				<button type="submit"> Add Todo </button>
			</form>
		</div>
	)
}

export default connect()(AddTodo)
