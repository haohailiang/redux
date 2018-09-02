import { combineReducers } from 'redux'
import todos               from './todos'
import visibilityFilter    from './visibilityFilter'

// 所有的reducer合并到一块儿
/* state贡献合并到一起就是
{
	todos:[]
	visibilityFilter:'SHOW_ALL'
}
*/

export default combineReducers({
	todos,
	visibilityFilter
})


// ES6 语法
// 为 redux state 中提供的属性为 todos 和 visibilityFilter
// 初始化值为 [] 和 "SHOW_ALL"
// {todos: Array(0), visibilityFilter: "SHOW_ALL"}
// 每个 reducer 都会被遍历一遍

// 怎么查看触发的action
