import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as TodoActions from '../actions'
import TodoList from '../components/TodoList'
import { getVisibleTodos } from '../selectors'

// 需要根据 state 动态计算的属性时,就需要用到 selector

const mapStateToProps = state => ({
  filteredTodos: getVisibleTodos(state)
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch)
})


const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
