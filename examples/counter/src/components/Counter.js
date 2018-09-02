import React, { Component } from 'react'
import PropTypes            from 'prop-types'

// 这是一个木偶组件
class Counter extends Component {
	constructor(props) {
		super(props);
		// 重新绑定this指针
		this.incrementAsync = this.incrementAsync.bind(this);
		this.incrementIfOdd = this.incrementIfOdd.bind(this);
	}

	incrementIfOdd() {
		if (this.props.value % 2 !== 0) {
			// 回调父组件的方法
			this.props.onIncrement()
		}
	}

	incrementAsync() {
        // 回调父组件的方法
		setTimeout(this.props.onIncrement, 3000)
	}

	render() {
		// 对应它的3个属性
		const { value, onIncrement, onDecrement } = this.props
		return (
			<p>
				Clicked: {value} times
				{' '}
				<button onClick={onIncrement}> + </button>{/* 回调父组件的方法 */}
				{' '}
				<button onClick={onDecrement}> - </button>{/* 回调父组件的方法 */}
				{' '}
				<button onClick={this.incrementIfOdd}> Increment if odd </button>{/* 调用自身的方法 */}
				{' '}
				<button onClick={this.incrementAsync}> Increment async </button>{/* 调用自身的方法 */}
			</p>
		)
	}
}

// 属性限制
Counter.propTypes = {
	value       : PropTypes.number.isRequired,
	onIncrement : PropTypes.func.isRequired,
	onDecrement : PropTypes.func.isRequired
}

export default Counter
