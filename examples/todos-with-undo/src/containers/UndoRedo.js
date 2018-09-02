import React                                    from 'react'
import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { connect }                              from 'react-redux'

let UndoRedo = ({ canUndo, canRedo, onUndo, onRedo }) => (
	<p>
		<button onClick={onUndo} disabled={!canUndo}> Undo </button>
		<button onClick={onRedo} disabled={!canRedo}> Redo </button>
	</p>
)

const mapStateToProps = (state) => ({
	canUndo: state.todos.past.length > 0,
	canRedo: state.todos.future.length > 0
})

// canUndo 过去是否可以撤销
// canRedo 是否有可以重做的

const mapDispatchToProps = ({
	onUndo: UndoActionCreators.undo,
	onRedo: UndoActionCreators.redo
})

UndoRedo = connect(
	mapStateToProps,
	mapDispatchToProps
)(UndoRedo)

export default UndoRedo
