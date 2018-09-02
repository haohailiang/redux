import { createSelector } from 'reselect'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters'

const getVisibilityFilter = state => state.visibilityFilter
const getTodos = state => state.todos

export const getVisibleTodos = createSelector(
  [getVisibilityFilter, getTodos],
  // 参数 input-selectors
  (visibilityFilter, todos) => {
    switch (visibilityFilter) {
      case SHOW_ALL:
        return todos
      case SHOW_COMPLETED:
        return todos.filter(t => t.completed)
      case SHOW_ACTIVE:
        return todos.filter(t => !t.completed)
      default:
        throw new Error('Unknown filter: ' + visibilityFilter)
    }
  }
)

export const getCompletedTodoCount = createSelector(
  [getTodos],
  todos => (
    todos.reduce((count, todo) =>
      todo.completed ? count + 1 : count,
      0
    )
  )
)

// reselect 是一个中间件 Reselect这个中间件要解决的问题是:
// 在组件交互操作的时候,state发生变化的时候如何减少渲染的压力

// Selector可以计算衍生的数据,可以让Redux做到存储尽可能少的state。
// Selector比较高效,只有在某个参数发生变化的时候才发生计算过程.
// Selector是可以组合的,他们可以作为输入,传递到其他的selector.

// createSelector 来创建一个记忆 selectors
