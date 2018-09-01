import { connect }             from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link                    from '../components/Link'

// const mapStateToProps = (state, ownProps) => ({
//   active: ownProps.filter === state.visibilityFilter
// })

// ownProps的属性从哪里获得的呢?
// 从父组件中获取的 {filter: "SHOW_ALL", children: "All"}
const mapStateToProps = (state, ownProps) => {
	// console.log( state, ownProps );
	return {
		active: ownProps.filter === state.visibilityFilter
	}
}

const mapDispatchToProps = (dispatch, ownProps) => ({
	onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Link)
