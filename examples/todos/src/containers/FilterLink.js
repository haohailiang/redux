import { connect }             from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link                    from '../components/Link'

// const mapStateToProps = (state, ownProps) => ({
//   active: ownProps.filter === state.visibilityFilter
// })

// ownProps的属性从哪里获得的呢?
// 从父组件中获取的 {filter: "SHOW_ALL", children: "All"}
// childern 为包含的子节点
const mapStateToProps = (state, ownProps) => {
	return {
		active: ownProps.filter === state.visibilityFilter
	}

    // 当 redux state 中的值和自己的属性值一样的情况下 标记为 active
}

const mapDispatchToProps = (dispatch, ownProps) => ({
	onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

// 派发 action { type: 'SET_VISIBILITY_FILTER', filter }
// reducer 监听变化, 修改 state.visibilityFilter 为 filter 各自的filter

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Link)


// FilterLink 正在做这里
