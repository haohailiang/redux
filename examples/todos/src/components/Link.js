import React     from 'react'
import PropTypes from 'prop-types'

// 属性作为组件的参数传递过来
// active, children, onClick 是从父组件传递过来的
// 已经被 redux 绑定到组件属性当中了
// children为默认的属性, 就是包含的子节点
const Link = ({ active, children, onClick }) => (
	<button
		onClick={onClick}
		disabled={active}
		style={{
			marginLeft: '4px',
		}}
	>
		{children}
	</button>
)

Link.propTypes = {
	active   : PropTypes.bool.isRequired,
	children : PropTypes.node.isRequired,
	onClick  : PropTypes.func.isRequired
}

export default Link
