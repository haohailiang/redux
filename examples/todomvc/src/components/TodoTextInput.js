import React, { Component } from 'react'
import PropTypes            from 'prop-types'
import classnames           from 'classnames'

export default class TodoTextInput extends Component {
	static propTypes = {
		onSave      : PropTypes.func.isRequired,
		text        : PropTypes.string,
		placeholder : PropTypes.string,
		editing     : PropTypes.bool,
		newTodo     : PropTypes.bool
	}

	state = {
		text: this.props.text || ''
	}

	handleSubmit = e => {
		const text = e.target.value.trim()
		if (e.which === 13) {
			this.props.onSave(text)
			// newTodo哪里来的 - 随便一个值 - 初始值为 true
			console.log( this.props.newTodo );
			if (this.props.newTodo) {
                // 为了置空输入框
				this.setState({ text: '' })
			}
		}
	}

	handleChange = e => {
		this.setState({ text: e.target.value })
	}

    // 不是新添加的输入框则 直接保存
    // 新值这没有 blur 效果
	handleBlur = e => {
		if (!this.props.newTodo) {
			this.props.onSave(e.target.value)
		}
	}

	render() {
        // 检验默认的 props newTodo 的值
		// console.log( this.props.newTodo );
		return (
			<input className={
				classnames({
					edit       : this.props.editing,
					'new-todo' : this.props.newTodo
				})}
				type        = "text"
				placeholder = {this.props.placeholder}
				autoFocus   = "true"
				value       = {this.state.text}
				onBlur      = {this.handleBlur}
				onChange    = {this.handleChange}
				onKeyDown   = {this.handleSubmit} />
		)
	}
}
