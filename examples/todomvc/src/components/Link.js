import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Link = ({ active, children, setFilter }) =>
  (
    <a

      className={ active?'selected':''  }
	  className={classnames({ selected: active })}

      style={{ cursor: 'pointer' }}
      onClick={() => setFilter()}
    >
      {children}
    </a>
  )

// classnames 可以动态的设置多个变化的类名

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  setFilter: PropTypes.func.isRequired
}

export default Link
