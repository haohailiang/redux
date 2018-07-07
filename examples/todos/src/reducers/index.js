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
